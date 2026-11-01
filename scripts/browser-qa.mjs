import { chromium } from "playwright";
import AxeBuilder from "@axe-core/playwright";

const base = (process.env.SKILLSPRING_BASE_URL || "https://ashishnaikbackup.github.io/SkillSpring").replace(/\/$/, "");
const browser = await chromium.launch({ headless: true });
const results = [];
const pageUrl = route => base + route + (route.includes("?") ? "&" : "?") + "qa=" + Date.now();
const check = (name, ok, detail = "") => {
  results.push({ name, ok, detail });
  console.log((ok ? "PASS " : "FAIL ") + name + (detail ? " — " + detail : ""));
};
try {
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();
  for (const route of ["/", "/courses.html", "/career-launchpad.html", "/progress-backup.html", "/engineering-course.html", "/engineering-field-studio.html"]) {
    const response = await page.goto(pageUrl(route), { waitUntil: "networkidle" });
    check("HTTP " + route, !!response && response.ok(), response ? String(response.status()) : "no response");
    check("main landmark " + route, await page.locator("main#main-content").count() === 1);
    check("skip link " + route, await page.locator('a.skip-link[href="#main-content"]').count() === 1);
  }

  await page.goto(pageUrl("/career-launchpad.html"), { waitUntil: "networkidle" });
  check("30 capstone briefs", await page.locator("#capstoneGrid .launch-card").count() === 30);
  await page.locator("#searchCapstone").fill("Power BI");
  check("capstone search", await page.locator("#capstoneGrid .launch-card").count() === 1 && await page.locator("#resultCount").innerText().then(t => t.includes("1 of 30")));
  await page.locator("#searchCapstone").fill("");
  await page.locator("#filterSchool").selectOption("finance");
  check("learning school filter", await page.locator("#capstoneGrid .launch-card").count() >= 2);
  await page.locator("#filterSchool").selectOption("all");

  await page.goto(pageUrl("/professional-labs.html"), { waitUntil: "networkidle" });
  await page.locator('[data-extra-lab="finance"]').click();
  await page.locator("#finCalc").click();
  check("finance cash-flow lab", await page.locator("#finResult").innerText().then(t => t.includes("₹7000.00")));
  await page.locator('[data-extra-lab="business"]').click();
  await page.locator("#bizCalc").click();
  check("business break-even lab", await page.locator("#bizResult").innerText().then(t => t.includes("50 units")));

  await page.goto(pageUrl("/progress-backup.html"), { waitUntil: "networkidle" });
  await page.evaluate(() => localStorage.setItem("skillspring-browser-qa-probe", "ok"));
  const downloadPromise = page.waitForEvent("download");
  await page.locator("#exportBtn").click();
  const download = await downloadPromise;
  check("progress export download", download.suggestedFilename() === "skillspring-progress-backup.json");
  await page.evaluate(() => localStorage.removeItem("skillspring-browser-qa-probe"));
  const importPayload = { format: "skillspring-progress-backup", version: 1, createdAt: new Date().toISOString(), entryCount: 1, entries: [{ key: "skillspring-browser-qa-import-probe", value: "restored" }] };
  await page.locator("#backupFile").setInputFiles({ name: "skillspring-test-backup.json", mimeType: "application/json", buffer: Buffer.from(JSON.stringify(importPayload)) });
  page.once("dialog", dialog => dialog.accept());
  await page.locator("#importBtn").click();
  check("progress import", await page.evaluate(() => localStorage.getItem("skillspring-browser-qa-import-probe")) === "restored");
  await page.evaluate(() => localStorage.removeItem("skillspring-browser-qa-import-probe"));

  const courseRoutes = [
    "/python-course.html", "/c-course.html", "/cpp-course.html", "/java-course.html", "/javascript-course.html", "/typescript-course.html", "/web-course.html", "/sql-course.html", "/finance-course.html", "/data-course.html", "/ux-course.html", "/sheets-course.html", "/engineering-course.html",
    ...["word","powerpoint","excel","powerbi","outlook","access","powerautomate","git","interview","logic","dsa","vibecoding","business","it","maths","creative","productivity"].map(key => "/essential-course.html?course=" + key)
  ];
  for (const route of courseRoutes) {
    await page.goto(pageUrl(route), { waitUntil: "domcontentloaded" });
    const count = await page.locator("#courseNav .lesson-nav, #moduleNav .module-link").count();
    check("course lesson player " + route, count > 0, count + " lesson navigation items");
  }

  for (const key of ["business", "it", "maths", "creative", "productivity", "powerbi", "excel"]) {
    await page.goto(pageUrl("/essential-course.html?course=" + key), { waitUntil: "domcontentloaded" });
    check("course route " + key, await page.locator("#courseTitle").innerText().then(t => !t.toLowerCase().includes("not found")));
    check("course lessons " + key, await page.locator("#courseNav .lesson-nav").count() >= 5);
  }

  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(pageUrl("/"), { waitUntil: "networkidle" });
  const menu = page.locator("#menuBtn");
  if (await menu.count()) {
    await menu.click();
    check("mobile menu opens", await menu.getAttribute("aria-expanded") === "true");
    await page.keyboard.press("Escape");
    check("mobile menu closes with Escape", await menu.getAttribute("aria-expanded") === "false");
  } else check("mobile menu control", false, "missing #menuBtn");

  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(pageUrl("/career-launchpad.html"), { waitUntil: "networkidle" });
  await page.keyboard.press("Tab");
  check("keyboard first focus reaches skip link", await page.evaluate(() => document.activeElement?.classList?.contains("skip-link")));

  for (const route of ["/", "/courses.html", "/career-launchpad.html", "/progress-backup.html", "/engineering-field-studio.html"]) {
    await page.goto(pageUrl(route), { waitUntil: "networkidle" });
    const axe = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"]).analyze();
    const serious = axe.violations.filter(v => v.impact === "critical" || v.impact === "serious");
    check("axe critical/serious scan " + route, serious.length === 0, serious.map(v => v.id + ":" + v.nodes.map(n => n.target.join(" ")).join(" | ")).join(", ") || "none");
  }
} finally {
  await browser.close();
}
const failed = results.filter(r => !r.ok);
console.log("\nBrowser QA: " + (results.length - failed.length) + "/" + results.length + " checks passed.");
if (failed.length) process.exitCode = 1;
