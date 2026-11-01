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

// Shared UI/UX contract: every published page must expose the shared design layer and a working skip target.
for (const file of files.filter((f) => f.endsWith(".html"))) {
  const html = fs.readFileSync(file, "utf8");
  const uxStylesheetCount = (html.match(/href=["\']ux-polish\.css["\']/g) || []).length;
  if (uxStylesheetCount !== 1) fail(`${relative(file)} must load the shared UX stylesheet exactly once (found ${uxStylesheetCount}).`);
  if (!/<a\b[^>]*class=["'][^"']*\bskip-link\b[^"']*["'][^>]*href=["']#main-content["']/i.test(html)) {
    fail(`${relative(file)} is missing an accessible skip link to main content.`);
  }
  if (!/<main\b[^>]*id=["']main-content["']/i.test(html)) fail(`${relative(file)} is missing the main-content landmark target.`);
}
const dashboardHtml = fs.readFileSync(path.join(root, "index.html"), "utf8");
if (!dashboardHtml.includes('id="sidebarBackdrop"') || !dashboardHtml.includes('aria-controls="sidebar"') || !dashboardHtml.includes('aria-expanded="false"')) {
  fail("The dashboard mobile navigation is missing its accessible menu/backdrop controls.");
}

// Engineering fundamentals course release contract.
for (const file of ["engineering-course.html", "engineering-course-data.js"]) {
  if (!fs.existsSync(path.join(root, file))) fail(`Required engineering course asset is missing: ${file}.`);
}
if (fs.existsSync(path.join(root, "engineering-course.html"))) {
  const engineeringPage = fs.readFileSync(path.join(root, "engineering-course.html"), "utf8");
  for (const asset of ["engineering-course-data.js", "essential-courses.js", "essential-course.js"]) {
    if (!engineeringPage.includes(`src="${asset}"`)) fail(`Engineering course page does not load ${asset}.`);
  }
}
if (fs.existsSync(path.join(root, "engineering-course-data.js"))) {
  const engineeringData = fs.readFileSync(path.join(root, "engineering-course-data.js"), "utf8");
  if (!engineeringData.includes("essentialCourses.engineering")) fail("Engineering course data is not registered as essentialCourses.engineering.");
  try {
    const engineeringContext = {};
    const essentialSource = fs.readFileSync(path.join(root, "essential-courses.js"), "utf8");
    vm.runInNewContext(essentialSource + "\n" + engineeringData + "\nglobalThis.__engineering = essentialCourses.engineering;", engineeringContext);
    if (!engineeringContext.__engineering || !Array.isArray(engineeringContext.__engineering.modules) || engineeringContext.__engineering.modules.length < 20) {
      fail("Engineering foundations course must load at least 20 progressive lessons.");
    }
  } catch (error) {
    fail("Could not load engineering course data: " + error.message);
  }
}
if (fs.existsSync(path.join(root, "courses.js"))) {
  const catalogue = fs.readFileSync(path.join(root, "courses.js"), "utf8");
  if (!catalogue.includes('slug:"engineering"') || !catalogue.includes('href:"engineering-course.html"')) {
    fail("Engineering foundations course is missing from the course catalogue.");
  }
}

// Curriculum map and graded practice release contract.
for (const page of ["curriculum-map.html", "advanced-practice.html", "professional-labs.html"]) {
  if (!fs.existsSync(path.join(root, page))) fail(`Required learning expansion page is missing: ${page}.`);
}
const engineeringLabPath = path.join(root, "professional-labs.js");
if (fs.existsSync(engineeringLabPath)) {
  const engineeringLab = fs.readFileSync(engineeringLabPath, "utf8");
  for (const required of ["circuitCalc", "cR1", "cR2", "cVs", "cCap", "RC time constant"]) {
    if (!engineeringLab.includes(required)) fail("Electronics practice lab is missing circuit-analysis feature: " + required + ".");
  }
}
const dashboardForLearning = fs.readFileSync(path.join(root, "index.html"), "utf8");
for (const href of ["curriculum-map.html", "advanced-practice.html", "professional-labs.html"]) {
  if (!dashboardForLearning.includes(`href="${href}"`)) fail(`Dashboard does not link to ${href}.`);
}
const practiceSource = fs.readFileSync(path.join(root, "advanced-practice.js"), "utf8");
const jsBlock = practiceSource.split("const sqlTasks")[0] || "";
const sqlBlock = practiceSource.split("const sqlTasks")[1] || "";
const jsCount = (jsBlock.match(/id:"/g) || []).length;
const sqlCount = (sqlBlock.match(/id:"/g) || []).length;
if (jsCount < 8) fail(`JavaScript practice requires at least 8 challenges (found ${jsCount}).`);
if (sqlCount < 8) fail(`SQL practice requires at least 8 challenges (found ${sqlCount}).`);
const curriculumSource = fs.readFileSync(path.join(root, "curriculum-map.js"), "utf8");
const schoolCount = (curriculumSource.match(/\{ id:"(?:programming|design|ai-data|electronics|office|finance|business|it|career|creative|productivity|maths)"/g) || []).length;
if (schoolCount !== 12) fail(`Curriculum map must define all 12 learning schools (found ${schoolCount}).`);

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
  const essentialSource = fs.readFileSync(path.join(root, "essential-courses.js"), "utf8");
  const engineeringSource = fs.readFileSync(path.join(root, "engineering-course-data.js"), "utf8");
  vm.runInNewContext(essentialSource + "\n" + engineeringSource + "\nglobalThis.__essential = essentialCourses;", context);
  if (!context.__essential?.engineering || context.__essential.engineering.modules.length < 14) fail("Engineering foundations course must load at least 14 progressive lessons.");
  essential = context.__essential || {};
} catch (error) { fail("Could not load essential course data: " + error.message); }

const slugs = courses.map((course) => course.slug);
if (new Set(slugs).size !== slugs.length) fail("The course catalogue contains duplicate slugs.");
for (const required of ["logic", "dsa", "vibecoding", "engineering"]) {
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
const essentialPlayer = fs.readFileSync(path.join(root, "essential-course.js"), "utf8");
if (!essentialPlayer.includes('store+"-passed"') || !essentialPlayer.includes('document.getElementById("done").disabled')) {
  fail("Essential course lessons must track knowledge-check passes before completion.");
}
for (const key of Object.keys(essential)) {
  if (!courses.some((course) => course.href === `essential-course.html?course=${key}` || (key === "engineering" && course.href === "engineering-course.html"))) fail(`Essential course "${key}" is not linked from the course catalogue.`);
}
for (const relativePath of ["data/field-radar.json", "data/field-radar-sources.json"]) {
  try {
    JSON.parse(fs.readFileSync(path.join(root, relativePath), "utf8"));
  } catch (error) {
    fail("Could not parse " + relativePath + ": " + error.message);
  }
}
const radarPagePath = path.join(root, "field-radar.html");
if (fs.existsSync(radarPagePath)) {
  const radarPage = fs.readFileSync(radarPagePath, "utf8");
  if (!radarPage.includes('id="liveNewsGrid"') || !radarPage.includes('data/field-radar.json')) {
    fail("Field Radar page is missing its live headline section.");
  }
}
const freshnessPath = path.join(root, "course-review-manifest.json");
if (!fs.existsSync(freshnessPath)) {
  fail("The course freshness manifest is missing.");
} else {
  try {
    const freshness = JSON.parse(fs.readFileSync(freshnessPath, "utf8"));
    const reviewSlugs = freshness.courses.map((course) => course.slug);
    if (new Set(reviewSlugs).size !== reviewSlugs.length) fail("Course freshness manifest contains duplicate slugs.");
    for (const course of courses) {
      if (!reviewSlugs.includes(course.slug)) fail("Course freshness manifest is missing " + course.slug + ".");
    }
    for (const item of freshness.courses) {
      const hasVerifiedReviewDate = typeof item.lastReviewed === "string" && /^\d{4}-\d{2}-\d{2}$/.test(item.lastReviewed);
      const needsInitialAudit = item.lastReviewed === null && item.reviewStatus === "initial-review-required";
      if ((!hasVerifiedReviewDate && !needsInitialAudit) || !Number.isInteger(item.reviewIntervalDays) || item.reviewIntervalDays < 1 || !Array.isArray(item.sources) || !item.sources.length) {
        fail("Course freshness entry " + item.slug + " must have a verified review date or be explicitly marked initial-review-required, plus a valid interval and HTTPS sources.");
      }
      if (!Array.isArray(item.contentFiles) || !item.contentFiles.length) {
        fail("Course freshness entry " + item.slug + " is missing content-file change detection paths.");
      }
      for (const contentFile of item.contentFiles || []) {
        if (typeof contentFile !== "string" || !fs.existsSync(path.join(root, contentFile))) {
          fail("Course freshness entry " + item.slug + " references a missing content file: " + contentFile);
        }
      }
      for (const source of item.sources || []) {
        if (typeof source !== "string" || !source.startsWith("https://")) fail("Course freshness entry " + item.slug + " has a non-HTTPS source.");
      }
    }
  } catch (error) {
    fail("Could not validate course freshness manifest: " + error.message);
  }
}
for (const [key, course] of Object.entries(essential)) {
  if (!Array.isArray(course.modules) || course.modules.length === 0) {
    fail(`Essential course "${key}" has no lessons.`);
    continue;
  }
  for (const [index, module] of course.modules.entries()) {
    if (!Array.isArray(module) || (module.length !== 7 && module.length !== 8) || !Array.isArray(module[6]) || module[6].length < 2) {
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
  const match = inlineLab.match(new RegExp("const\\s+" + name + "\\s*=\\s*\\{([\\s\\S]*?)\\};"));
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

// Validate the Power BI practice data as a connected, internally consistent dataset.
function readSimpleCsv(relativePath) {
  const filePath = path.join(root, relativePath);
  if (!fs.existsSync(filePath)) {
    fail("Required practice dataset is missing: " + relativePath);
    return [];
  }
  const lines = fs.readFileSync(filePath, "utf8").trim().split(/\r?\n/);
  if (lines.length < 2) {
    fail("Practice dataset has no data rows: " + relativePath);
    return [];
  }
  const headers = lines[0].split(",");
  return lines.slice(1).map((line) => {
    const values = line.split(",");
    return Object.fromEntries(headers.map((header, index) => [header, values[index] ?? ""]));
  });
}
const salesRows = readSimpleCsv("data/powerbi-sales.csv");
const productRows = readSimpleCsv("data/powerbi-products.csv");
const regionRows = readSimpleCsv("data/powerbi-regions.csv");
if (salesRows.length !== 36) fail("Power BI Sales sample must contain exactly 36 transactions.");
if (productRows.length !== 6) fail("Power BI Products sample must contain exactly six products.");
if (regionRows.length !== 4) fail("Power BI Regions sample must contain exactly four regions.");
const productIds = new Set(productRows.map((row) => row.ProductID));
const regionIds = new Set(regionRows.map((row) => row.RegionID));
const orderIds = new Set();
let totalSales = 0;
let totalCost = 0;
for (const row of salesRows) {
  if (orderIds.has(row.OrderID)) fail("Power BI Sales sample contains duplicate OrderID " + row.OrderID + ".");
  orderIds.add(row.OrderID);
  if (!productIds.has(row.ProductID)) fail("Power BI Sales row " + row.OrderID + " references an unknown ProductID.");
  if (!regionIds.has(row.RegionID)) fail("Power BI Sales row " + row.OrderID + " references an unknown RegionID.");
  const quantity = Number(row.Quantity);
  const unitPrice = Number(row.UnitPrice);
  const discount = Number(row.DiscountPct);
  const unitCost = Number(row.UnitCost);
  const salesAmount = Number(row.SalesAmount);
  const costAmount = Number(row.CostAmount);
  if (![quantity, unitPrice, discount, unitCost, salesAmount, costAmount].every(Number.isFinite)) {
    fail("Power BI Sales row " + row.OrderID + " contains a non-numeric measure.");
    continue;
  }
  if (Math.abs(salesAmount - quantity * unitPrice * (1 - discount)) > 0.011) {
    fail("Power BI Sales row " + row.OrderID + " has an incorrect SalesAmount.");
  }
  if (Math.abs(costAmount - quantity * unitCost) > 0.011) {
    fail("Power BI Sales row " + row.OrderID + " has an incorrect CostAmount.");
  }
  totalSales += salesAmount;
  totalCost += costAmount;
}
if (orderIds.size !== salesRows.length) fail("Power BI Sales sample must have unique order IDs.");
if (Math.abs(totalSales - 1077005) > 0.011) fail("Power BI Sales dataset total does not reconcile to 1,077,005.");
if (Math.abs(totalCost - 854380) > 0.011) fail("Power BI Cost dataset total does not reconcile to 854,380.");
const powerBiProjectPath = path.join(root, "powerbi-project.html");
if (fs.existsSync(powerBiProjectPath)) {
  const projectPage = fs.readFileSync(powerBiProjectPath, "utf8");
  for (const asset of ["data/powerbi-sales.csv", "data/powerbi-products.csv", "data/powerbi-regions.csv"]) {
    if (!projectPage.includes(asset)) fail("Power BI capstone page does not link to " + asset + ".");
  }
}

// Validate the live Field Radar payload, not only that its JSON parses.
try {
  const sourceConfig = JSON.parse(fs.readFileSync(path.join(root, "data/field-radar-sources.json"), "utf8"));
  const radarFeed = JSON.parse(fs.readFileSync(path.join(root, "data/field-radar.json"), "utf8"));
  const sourceIds = new Set(sourceConfig.sources.map((source) => source.id));
  if (!sourceConfig.sources.length) fail("Field Radar has no allowlisted sources.");
  if (new Set(sourceConfig.sources.map((source) => source.id)).size !== sourceConfig.sources.length) {
    fail("Field Radar source IDs must be unique.");
  }
  if (!radarFeed.items.length) fail("Field Radar feed has no published headlines.");
  if (radarFeed.items.length > 30) fail("Field Radar feed exceeds its 30-headline limit.");
  for (const item of radarFeed.items) {
    if (!sourceIds.has(item.sourceId)) fail("Field Radar item references an unknown source: " + item.sourceId);
    try {
      const url = new URL(item.url);
      if (url.protocol !== "https:") fail("Field Radar headline URL is not HTTPS: " + item.url);
    } catch {
      fail("Field Radar headline has an invalid URL: " + item.url);
    }
    if (item.publishedAt && !Number.isFinite(new Date(item.publishedAt).getTime())) {
      fail("Field Radar headline has an invalid publication date: " + item.title);
    }
  }
  for (const source of radarFeed.sources) {
    if (!["ok", "restricted", "failed"].includes(source.status)) {
      fail("Field Radar source has an unknown status: " + source.id);
    }
  }
} catch (error) {
  fail("Could not validate live Field Radar data: " + error.message);
}

const readmePath = path.join(root, "README.md");
if (fs.existsSync(readmePath)) {
  const readme = fs.readFileSync(readmePath, "utf8");
  if (readme.includes("\\n")) fail("README.md contains literal backslash-n sequences instead of real line breaks.");
  if (readme.includes("first successful run and public URL still need verification")) {
    fail("README.md still describes the Pages deployment as unverified.");
  }
}

console.log(`Checked ${files.length} files, ${courses.length} catalogue courses, ${Object.keys(essential).length} essential courses, and ${languages.length} lab languages.`);
if (warnings.length) console.warn(warnings.map((item) => "WARN: " + item).join("\n"));
if (errors.length) {
  console.error(errors.map((item) => "ERROR: " + item).join("\n"));
  process.exitCode = 1;
} else {
  console.log("SkillSpring static validation passed.");
}
