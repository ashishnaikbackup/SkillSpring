// Generates one Markdown review packet per course in docs/review-packets/.
// A packet lets a subject expert read every lesson, example, task and quiz answer offline and record findings.
// This script never sets lastReviewed or reviewStatus: only a person does that after reviewing.
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const out = path.join(root, "docs", "review-packets");
const chain = () => new Proxy(function () {}, { get: (t, k) => (k === Symbol.toPrimitive ? () => "" : chain()), apply: () => chain(), set: () => true });

function load(files, expr) {
  const ctx = vm.createContext({ document: chain(), window: chain(), console, navigator: {}, location: { search: "" }, URLSearchParams, setTimeout() {}, addEventListener() {}, localStorage: { getItem: () => null, setItem() {}, removeItem() {} } });
  for (const f of files) {
    try { vm.runInContext(fs.readFileSync(path.join(root, f), "utf8").replace(/^(const|let) /gm, "var "), ctx, { filename: f }); }
    catch (error) { /* page-rendering code after the data definitions may fail without a DOM; the data is already defined */ }
  }
  return vm.runInContext(expr, ctx);
}

const manifest = JSON.parse(fs.readFileSync(path.join(root, "course-review-manifest.json"), "utf8"));
const engine = load(["course-engine.js"], "C");
const essential = load(["essential-courses.js", "engineering-course-data.js"], "essentialCourses");
const pythonModules = load(["course.js"], "modules");

const fence = (code) => "```\n" + String(code).replace(/```/g, "'''") + "\n```";
const lessons = {}; // slug -> { title, intro, items:[{n,title,concept,example,task,question,correct,wrong,notes}] }

for (const [slug, c] of Object.entries(engine))
  lessons[slug] = { title: c.name, intro: c.intro, items: c.modules.map((m, i) => ({ n: i + 1, title: m[0], concept: m[1], example: m[2], notes: m[3], task: m[4], question: m[5], correct: m[6], wrong: m[7] })) };
for (const [slug, c] of Object.entries(essential))
  lessons[slug] = { title: c.title, intro: c.intro, items: c.modules.map((m, i) => ({ n: i + 1, title: m[0], concept: m[1], example: m[2], task: m[3], question: m[4], correct: m[5], wrong: m[6], notes: m[7] })) };
lessons.python = {
  title: "Python: Zero to Professional Foundations", intro: "",
  items: pythonModules.map((m, i) => {
    const choices = m.quiz.slice(1);
    return { n: i + 1, title: m.title, concept: m.sections.map((s) => `**${s[0]}.** ${s[1]} ${s[2] || ""}`).join("\n\n"), example: m.example, notes: m.explain, task: m.task, question: m.quiz[0], correct: choices[m.answer], wrong: choices.filter((_, k) => k !== m.answer), why: m.why };
  }),
};

fs.mkdirSync(out, { recursive: true });
const rows = [];
for (const entry of manifest.courses) {
  const c = lessons[entry.slug];
  if (!c) { console.error("No lesson data for", entry.slug); process.exitCode = 1; continue; }
  const md = [
    `# Review packet: ${c.title}`,
    "",
    `- Course key: \`${entry.slug}\`  ·  Lessons: ${c.items.length}  ·  Review interval: ${entry.reviewIntervalDays} days`,
    `- Current status: \`${entry.reviewStatus}\`  ·  Last reviewed: ${entry.lastReviewed ?? "never"}`,
    `- Content files: ${entry.contentFiles.map((f) => "`" + f + "`").join(", ")}`,
    "- Official sources to check against:", ...entry.sources.map((s) => `  - ${s}`),
    "",
    "## Reviewer checklist (tick after reading all lessons)",
    "",
    "- [ ] Facts, definitions and terminology are correct",
    "- [ ] Tool names, versions, menus and commands match current official documentation",
    "- [ ] Every code example runs and produces the stated output",
    "- [ ] Each knowledge-check answer is correct and the wrong options are clearly wrong",
    "- [ ] Tasks are achievable by a beginner and prerequisites are taught first",
    "- [ ] No unsafe, legal, tax or medical advice presented as professional advice",
    "- [ ] India-specific statements (laws, exams, tools, salaries) are accurate or removed",
    "- [ ] Nothing important for a job-ready beginner is missing (list gaps below)",
    "",
    "Reviewer name: ________   Date: ________   Outcome: approve / approve with fixes / rewrite",
    "",
    c.intro ? `## Course introduction\n\n${c.intro}\n` : "",
    "## Lessons",
    "",
  ];
  for (const l of c.items) {
    md.push(`### ${l.n}. ${l.title}`, "", `**Concept.** ${l.concept}`, "", "**Example**", "", fence(l.example), "");
    if (l.notes) md.push(`**Explanation / note.** ${l.notes}`, "");
    if (l.why) md.push(`**Why the answer is correct.** ${l.why}`, "");
    md.push(`**Task.** ${l.task}`, "", `**Quiz.** ${l.question}`, `- Correct: ${l.correct}`, ...l.wrong.map((w) => `- Wrong: ${w}`), "", "**Findings:** _none yet_", "");
  }
  fs.writeFileSync(path.join(out, `${entry.slug}.md`), md.join("\n"));
  rows.push(`| [${c.title}](${entry.slug}.md) | ${c.items.length} | ${entry.reviewStatus} | ${entry.lastReviewed ?? "never"} |`);
}
fs.writeFileSync(path.join(out, "README.md"), ["# Course review packets", "", "Generated by `node scripts/export-review-packets.mjs`. Regenerate after content changes. Packets are read-only copies of the lesson data; they do not mark a course as reviewed.", "", "| Course | Lessons | Status | Last reviewed |", "|---|---|---|---|", ...rows, ""].join("\n"));
console.log(`Wrote ${rows.length} packets to ${path.relative(root, out)}`);
