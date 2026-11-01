import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";

const root = process.cwd();
const manifest = JSON.parse(fs.readFileSync(path.join(root, "course-review-manifest.json"), "utf8"));
const outputPath = path.join(root, "data", "course-review-status.json");
const today = new Date();
today.setUTCHours(0, 0, 0, 0);

function dayDifference(a, b) {
  return Math.floor((b.getTime() - a.getTime()) / 86400000);
}

// On push events, identify lesson/course data files changed between the event's
// before and after commits. Scheduled runs still perform age and source checks.
let changedFiles = [];
let changeDetectionError = null;
if (process.env.GITHUB_EVENT_NAME === "push") {
  try {
    const eventPath = process.env.GITHUB_EVENT_PATH;
    if (!eventPath) throw new Error("GITHUB_EVENT_PATH is unavailable.");
    const event = JSON.parse(fs.readFileSync(eventPath, "utf8"));
    if (event.before && event.after && !/^0+$/.test(event.before)) {
      const diff = execFileSync("git", ["diff", "--name-only", event.before, event.after], {
        cwd: root,
        encoding: "utf8",
        stdio: ["ignore", "pipe", "pipe"]
      });
      changedFiles = [...new Set(diff.split(/\r?\n/).map((item) => item.trim()).filter(Boolean))];
    }
  } catch (error) {
    changeDetectionError = error.message;
  }
}
const changedFileSet = new Set(changedFiles);

async function checkSource(url) {
  const headers = { "User-Agent": "SkillSpring-Course-Freshness-Check/1.0", "Range": "bytes=0-0" };
  let lastError = "";
  for (const method of ["HEAD", "GET"]) {
    try {
      const response = await fetch(url, { method, headers, redirect: "follow", signal: AbortSignal.timeout(12000) });
      if (response.body && method === "GET") await response.body.cancel().catch(() => {});
      if (response.status >= 200 && response.status < 400) {
        return { url, status: "reachable", httpStatus: response.status, checkedAt: today.toISOString().slice(0, 10) };
      }
      if ([401, 403, 416, 429].includes(response.status)) {
        return { url, status: "restricted", httpStatus: response.status, checkedAt: today.toISOString().slice(0, 10) };
      }
      lastError = "HTTP " + response.status;
      if (![400, 403, 405, 429, 500, 501, 502, 503, 504].includes(response.status)) break;
    } catch (error) {
      lastError = error.name === "TimeoutError" ? "request timed out" : error.message;
    }
  }
  return { url, status: "check_failed", error: lastError, checkedAt: today.toISOString().slice(0, 10) };
}

const courses = await Promise.all(manifest.courses.map(async (course) => {
  const lastReviewed = new Date(course.lastReviewed + "T00:00:00Z");
  const ageDays = dayDifference(lastReviewed, today);
  const courseChangedFiles = (course.contentFiles || []).filter((file) => changedFileSet.has(file));
  const sourceChecks = await Promise.all(course.sources.map(checkSource));
  return {
    slug: course.slug,
    title: course.title,
    lastReviewed: course.lastReviewed,
    reviewIntervalDays: course.reviewIntervalDays,
    ageDays,
    reviewDue: ageDays >= course.reviewIntervalDays,
    contentChanged: courseChangedFiles.length > 0,
    changedFiles: courseChangedFiles,
    contentFiles: course.contentFiles || [],
    sourceChecks
  };
}));

const report = {
  generatedAt: new Date().toISOString(),
  trigger: process.env.GITHUB_EVENT_NAME || "manual",
  changedFiles,
  changeDetectionError,
  coursesChecked: courses.length,
  reviewDueCount: courses.filter((course) => course.reviewDue).length,
  contentChangedCourseCount: courses.filter((course) => course.contentChanged).length,
  sourceCheckFailureCount: courses.reduce((count, course) => count + course.sourceChecks.filter((source) => source.status === "check_failed").length, 0),
  restrictedSourceCount: courses.reduce((count, course) => count + course.sourceChecks.filter((source) => source.status === "restricted").length, 0),
  courses
};
fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, JSON.stringify(report, null, 2) + "\n");
console.log(JSON.stringify({
  coursesChecked: report.coursesChecked,
  reviewDueCount: report.reviewDueCount,
  contentChangedCourseCount: report.contentChangedCourseCount,
  sourceCheckFailureCount: report.sourceCheckFailureCount,
  restrictedSourceCount: report.restrictedSourceCount,
  changeDetectionError: report.changeDetectionError
}));
