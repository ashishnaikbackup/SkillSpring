import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const sourceConfig = JSON.parse(fs.readFileSync(path.join(root, "data/field-radar-sources.json"), "utf8"));
const outputPath = path.join(root, "data/field-radar.json");
let previous = { items: [], sources: [] };
try { previous = JSON.parse(fs.readFileSync(outputPath, "utf8")); } catch {}

const now = new Date();
const today = now.toISOString();
const maxAgeDays = 75;
const maxPerSource = 1;
const maxTotal = 30;

function decodeXml(value) {
  const named = { amp: "&", lt: "<", gt: ">", quot: '"', apos: "'", nbsp: " " };
  return String(value || "")
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/&#x([0-9a-f]+);/gi, (_, hex) => String.fromCodePoint(parseInt(hex, 16)))
    .replace(/&#([0-9]+);/g, (_, dec) => String.fromCodePoint(parseInt(dec, 10)))
    .replace(/&([a-z]+);/gi, (all, name) => named[name.toLowerCase()] ?? all);
}

function cleanText(value, limit = 360) {
  const clean = decodeXml(value)
    .replace(/<script\b[\s\S]*?<\/script>/gi, " ")
    .replace(/<style\b[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
  return clean.length > limit ? clean.slice(0, limit - 1).trimEnd() + "…" : clean;
}

function tagValue(block, names) {
  for (const name of names) {
    const match = block.match(new RegExp("<(?:[\\w.-]+:)?" + name + "\\b[^>]*>([\\s\\S]*?)<\\/(?:[\\w.-]+:)?" + name + "\\s*>", "i"));
    if (match?.[1]) return match[1];
  }
  return "";
}

function itemLink(block, baseUrl) {
  const atomLinks = [...block.matchAll(/<link\b([^>]*)\/?>/gi)];
  for (const match of atomLinks) {
    const attrs = match[1] || "";
    const rel = attrs.match(/\brel=["']([^"']+)["']/i)?.[1] || "alternate";
    const href = attrs.match(/\bhref=["']([^"']+)["']/i)?.[1];
    if (href && (rel === "alternate" || rel === "")) {
      try {
        const url = new URL(decodeXml(href), baseUrl);
        if (url.protocol === "https:") return url.href;
      } catch {}
    }
  }
  const raw = tagValue(block, ["link"]) || tagValue(block, ["guid", "id"]);
  try {
    const url = new URL(cleanText(raw, 1200), baseUrl);
    return url.protocol === "https:" ? url.href : "";
  } catch {
    return "";
  }
}

function parseFeed(xml, source) {
  const entries = [...xml.matchAll(/<(item|entry)\b[^>]*>([\s\S]*?)<\/\1\s*>/gi)];
  const items = [];
  for (const entry of entries) {
    const block = entry[2];
    const title = cleanText(tagValue(block, ["title"]), 220);
    const link = itemLink(block, source.url);
    if (!title || !link) continue;
    const rawDate = cleanText(tagValue(block, ["pubDate", "published", "updated", "dc:date", "date"]), 100);
    const parsedDate = rawDate ? new Date(rawDate) : null;
    const publishedAt = parsedDate && Number.isFinite(parsedDate.getTime()) ? parsedDate.toISOString() : null;
    items.push({
      id: link,
      title,
      url: link,
      publishedAt,
      sourceId: source.id,
      sourceName: source.name,
      category: source.category
    });
  }
  return items;
}

async function fetchSource(source) {
  try {
    const response = await fetch(source.url, {
      headers: { "User-Agent": "SkillSpring-Field-Radar/1.0 (+https://github.com/ashishnaikbackup/SkillSpring)", "Accept": "application/rss+xml, application/atom+xml, application/xml, text/xml, */*" },
      redirect: "follow",
      signal: AbortSignal.timeout(15000)
    });
    if (response.status === 401 || response.status === 403 || response.status === 429) {
      return { source, status: "restricted", error: "HTTP " + response.status, items: [] };
    }
    if (!response.ok) return { source, status: "failed", error: "HTTP " + response.status, items: [] };
    const xml = await response.text();
    if (!/<(?:rss|feed|rdf:RDF)\b/i.test(xml)) {
      return { source, status: "failed", error: "Response was not recognised as RSS or Atom XML", items: [] };
    }
    return { source, status: "ok", items: parseFeed(xml, source) };
  } catch (error) {
    return { source, status: "failed", error: error.name === "TimeoutError" ? "Timed out" : error.message, items: [] };
  }
}

const oldItems = Array.isArray(previous.items) ? previous.items : [];
const oldSources = new Map((previous.sources || []).map(item => [item.id, item]));
const results = await Promise.all(sourceConfig.sources.map(fetchSource));
const freshItems = [];
const sourceStatus = [];

for (const result of results) {
  const { source, status, items, error } = result;
  const oldStatus = oldSources.get(source.id) || {};
  const oldSourceItems = oldItems.filter(item => item.sourceId === source.id);
  let selectedItems = items;
  if (status !== "ok") {
    selectedItems = oldItems.filter(item => item.sourceId === source.id).slice(0, maxPerSource).map(item => ({ ...item, summary: "" }));
  } else {
    selectedItems = items
      .filter(item => !item.publishedAt || (now - new Date(item.publishedAt)) / 86400000 <= maxAgeDays)
      .sort((a, b) => (b.publishedAt || "").localeCompare(a.publishedAt || ""))
      .slice(0, maxPerSource);
  }
  freshItems.push(...selectedItems);
  const statusChanged = oldStatus.status !== status;
  const contentChanged = JSON.stringify(selectedItems) !== JSON.stringify(oldSourceItems);
  sourceStatus.push({
    id: source.id,
    name: source.name,
    category: source.category,
    url: source.url,
    status,
    message: statusChanged ? (error || (status === "ok" ? "Feed refreshed" : "Using last successful items where available")) : (oldStatus.message || "Feed checked"),
    lastStatusChange: statusChanged ? today : (oldStatus.lastStatusChange || null),
    lastContentUpdate: contentChanged ? today : (oldStatus.lastContentUpdate || null),
    itemCount: selectedItems.length
  });
}

const unique = new Map();
for (const item of freshItems) {
  if (!unique.has(item.url)) unique.set(item.url, item);
}
const items = [...unique.values()]
  .sort((a, b) => (b.publishedAt || "").localeCompare(a.publishedAt || ""))
  .slice(0, maxTotal);

if (!items.length) {
  throw new Error("No Field Radar items were available. The previous published feed has not been replaced.");
}

const itemsChanged = JSON.stringify(items) !== JSON.stringify(oldItems);
const sourceStatusChanged = JSON.stringify(sourceStatus) !== JSON.stringify(previous.sources || []);
const report = {
  generatedAt: itemsChanged || sourceStatusChanged ? today : (previous.generatedAt || today),
  disclaimer: "Automatically collected publisher headlines with original links. Read the publisher's source for full context. This is not financial, legal or security advice.",
  sources: sourceStatus,
  items
};
fs.writeFileSync(outputPath, JSON.stringify(report, null, 2) + "\n");
console.log(JSON.stringify({
  sourcesChecked: sourceStatus.length,
  sourcesSucceeded: sourceStatus.filter(item => item.status === "ok").length,
  sourcesRestricted: sourceStatus.filter(item => item.status === "restricted").length,
  sourcesFailed: sourceStatus.filter(item => item.status === "failed").length,
  itemsPublished: items.length
}));
