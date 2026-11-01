import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";

const root = process.cwd();
const errors = [];
const warnings = [];
const fail = (message) => errors.push(message);
const warn = (message) => warnings.push(message);

function walk(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === ".git" || entry.name === "node_modules") continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(full));
    else out.push(full);
  }
  return out;
}
const files = walk(root);
const relative = (file) => path.relative(root, file).split(path.sep).join("/");
const existsTarget = (fromFile, raw) => {
  const clean = raw.split(/[?#]/, 1)[0];
  if (!clean) return true;
  if (/^(?:[a-z]+:|\/\/)/i.test(clean)) return true;
  if (clean.startsWith("/")) {
    fail(`${relative(fromFile)} uses root-absolute URL "${raw}", which can break on a GitHub project Pages path.`);
    return true;
  }
  let decoded;
  try { decoded = decodeURIComponent(clean); }
  catch { fail(`${relative(fromFile)} contains an invalid encoded URL "${raw}".`); return true; }
  const target = path.resolve(path.dirname(fromFile), decoded);
  if (!target.startsWith(root + path.sep) && target !== root) {
    fail(`${relative(fromFile)} links outside the published site: "${raw}".`);
    return true;
  }
  if (fs.existsSync(target)) {
    if (fs.statSync(target).isDirectory() && !fs.existsSync(path.join(target, "index.html"))) {
      fail(`${relative(fromFile)} links to a directory without index.html: "${raw}".`);
    }
    return true;
  }
  fail(`${relative(fromFile)} has a broken local link/asset: "${raw}".`);
  return false;
};

for (const file of files.filter((f) => f.endsWith(".js"))) {
  try { new vm.Script(fs.readFileSync(file, "utf8"), { filename: relative(file) }); }
  catch (error) { fail(`JavaScript syntax error in ${relative(file)}: ${error.message}`); }
}

for (const file of files.filter((f) => f.endsWith(".html"))) {
  const html = fs.readFileSync(file, "utf8");
  const scripts = /<script\b([^>]*)>([\s\S]*?)<\/script\s*>/gi;
  for (const match of html.matchAll(scripts)) {
    const attrs = match[1] || "";
    if (/\bsrc\s*=/.test(attrs) || /application\/(?:ld\+)?json/i.test(attrs)) continue;
    const code = match[2].trim();
    if (!code) continue;
    try { new vm.Script(code, { filename: relative(file) + " (inline script)" }); }
    catch (error) { fail(`Inline JavaScript syntax error in ${relative(file)}: ${error.message}`); }
  }
  for (const match of html.matchAll(/\b(?:href|src)\s*=\s*["']([^"']+)["']/gi)) {
    const raw = match[1].trim();
    if (!raw || raw.startsWith("#") || /^(?:mailto:|tel:|javascript:|data:)/i.test(raw)) continue;
    existsTarget(file, raw);
  }
}

for (const file of files.filter((f) => f.endsWith(".md"))) {
  const markdown = fs.readFileSync(file, "utf8");
  for (const match of markdown.matchAll(/\[[^\]]*\]\(([^)]+)\)/g)) {
    const raw = match[1].trim().split(/\s+["']/)[0];
    if (!raw || raw.startsWith("#") || /^(?:[a-z]+:|\/\/)/i.test(raw)) continue;
    existsTarget(file, raw);
  }
}

let courses = [];
let essential = {};
try {
  const context = { document: { getElementById: () => ({ innerHTML: "" }) } };
  vm.runInNewContext(fs.readFileSync(path.join(root, "courses.js"), "utf8") + "\nglobalThis.__courses = courses;", context);
  courses = context.__courses || [];
} catch (error) { fail("Could not load the course catalogue: " + error.message); }
try {
  const context = {};
  vm.runInNewContext(fs.readFileSync(path.join(root, "essential-courses.js"), "utf8") + "\nglobalThis.__essential = essentialCourses;", context);
  essential = context.__essential || {};
} catch (error) { fail("Could not load essential course data: " + error.message); }

const slugs = courses.map((course) => course.slug);
if (new Set(slugs).size !== slugs.length) fail("The course catalogue contains duplicate slugs.");
for (const required of ["logic", "dsa", "vibecoding"]) {
  if (!slugs.includes(required)) fail(`Required course "${required}" is missing from courses.js.`);
  if (!essential[required]) fail(`Required course data "${required}" is missing from essential-courses.js.`);
}
for (const course of courses) {
  if (!course.href) { fail(`Course ${course.slug} has no destination.`); continue; }
  const [target, query = ""] = course.href.split("?");
  if (!fs.existsSync(path.join(root, target))) fail(`Course ${course.slug} points to missing page ${target}.`);
  const courseKey = new URLSearchParams(query).get("course");
  if (courseKey && !essential[courseKey]) fail(`Course ${course.slug} points to missing essential course key "${courseKey}".`);
}
for (const key of Object.keys(essential)) {
  if (!courses.some((course) => course.href === `essential-course.html?course=${key}`)) fail(`Essential course "${key}" is not linked from the course catalogue.`);
}
for (const [key, course] of Object.entries(essential)) {
  if (!Array.isArray(course.modules) || course.modules.length === 0) {
    fail(`Essential course "${key}" has no lessons.`);
    continue;
  }
  for (const [index, module] of course.modules.entries()) {
    if (!Array.isArray(module) || module.length !== 7 || !Array.isArray(module[6]) || module[6].length < 2) {
      fail(`Essential course "${key}" lesson ${index + 1} has an incomplete lesson/quiz structure.`);
    }
  }
}
if (!fs.existsSync(path.join(root, "docs/START_HERE_ZERO_TO_JOB.md"))) fail("The zero-to-job learning guide is missing.");
const practicePagePath = path.join(root, "python-practice.html");
const practiceScriptPath = path.join(root, "python-practice.js");
if (!fs.existsSync(practicePagePath) || !fs.existsSync(practiceScriptPath)) {
  fail("The interactive Python practice page or its script is missing.");
} else {
  const practicePage = fs.readFileSync(practicePagePath, "utf8");
  const practiceScript = fs.readFileSync(practiceScriptPath, "utf8");
  if (!practicePage.includes('id="codeEditor"') || !practicePage.includes("pyodide.js")) {
    fail("The Python practice page is missing its editor or browser Python runtime.");
  }
  const challengeMatch = practiceScript.match(/const challenges = ([\s\S]*?\n\]);/);
  if (!challengeMatch) {
    fail("Could not read the Python practice challenge data.");
  } else {
    try {
      const challenges = vm.runInNewContext("(" + challengeMatch[1] + ")");
      const ids = challenges.map((item) => item.id);
      if (challenges.length < 10) fail("The Python practice path must contain at least 10 challenges.");
      if (new Set(ids).size !== ids.length) fail("Python practice challenge IDs must be unique.");
      for (const item of challenges) {
        for (const field of ["title", "task", "starter", "hint", "solution", "tests"]) {
          if (!item[field]) fail("Python practice challenge " + item.id + " is missing " + field + ".");
        }
      }
    } catch (error) {
      fail("Could not validate Python practice challenge data: " + error.message);
    }
  }
  const startHere = fs.readFileSync(path.join(root, "start-here.html"), "utf8");
  if (!startHere.includes('href="python-practice.html"')) {
    fail("The Start Here path does not link to interactive Python practice.");
  }
}
const index = fs.readFileSync(path.join(root, "index.html"), "utf8");
const app = fs.readFileSync(path.join(root, "app.js"), "utf8");
const topic = fs.readFileSync(path.join(root, "topic.js"), "utf8");
const poly = fs.readFileSync(path.join(root, "polyglot.html"), "utf8");
if (!index.includes('href="polyglot.html"')) fail("The main navigation does not link to the multi-language lab.");
if (!index.includes('href="start-here.html"')) fail("The main page does not expose the Start Here learning path.");
if (!app.includes("Zero-to-hero software developer")) fail("The zero-to-hero software developer path is missing from the learning paths.");
for (const [label, route] of [
  ["Programming Logic", "essential-course.html?course=logic"],
  ["Data Structures & Algorithms", "essential-course.html?course=dsa"],
  ["AI-Assisted Coding", "essential-course.html?course=vibecoding"]
]) {
  if (!topic.includes(route)) fail(`Topic navigation for ${label} is missing.`);
}
const languages = [...poly.matchAll(/<option value="([^"]+)"/g)].map((match) => match[1]);
for (const language of ["python","javascript","html","sql","c","cpp","java","csharp","go","rust","php","ruby","typescript","kotlin","swift","r","bash","dart","scala","lua","perl","haskell","julia","powershell","fortran","octave"]) {
  if (!languages.includes(language)) fail("Multi-language lab is missing " + language + ".");
}
const inlineLab = poly.match(/<script>([\s\S]*?)<\/script>/)?.[1] || "";
const objectKeys = (name) => {
  const match = inlineLab.match(new RegExp("const " + name + "=\\{([\s\S]*?)\\};"));
  return match ? [...match[1].matchAll(/(?:^|,)\s*([a-z][a-z0-9]*):/g)].map((item) => item[1]) : [];
};
const defaultKeys = objectKeys("defaults");
const metaKeys = objectKeys("meta");
const localKeys = objectKeys("localCommands");
for (const language of languages) {
  if (!defaultKeys.includes(language)) fail("Multi-language lab has no starter code for " + language + ".");
  if (!metaKeys.includes(language)) fail("Multi-language lab has no file/runtime metadata for " + language + ".");
  if (!["python","javascript","html","sql"].includes(language) && !localKeys.includes(language)) {
    fail("Multi-language lab has no local run command for " + language + ".");
  }
}
if (!poly.includes('id="download"')) fail("Source download is missing.");
if (poly.includes("emkc.org/api/v2/piston/execute")) fail("Do not use the public Piston endpoint without authorization.");
if (!poly.includes("loadPyodide") || !poly.includes("sql.js")) fail("A browser runtime for Python or SQL is missing.");

console.log(`Checked ${files.length} files, ${courses.length} catalogue courses, ${Object.keys(essential).length} essential courses, and ${languages.length} lab languages.`);
if (warnings.length) console.warn(warnings.map((item) => "WARN: " + item).join("\n"));
if (errors.length) {
  console.error(errors.map((item) => "ERROR: " + item).join("\n"));
  process.exitCode = 1;
} else {
  console.log("SkillSpring static validation passed.");
}
