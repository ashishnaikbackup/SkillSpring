import fs from "node:fs";
import path from "node:path";

const manifest = JSON.parse(fs.readFileSync(path.join(process.cwd(), "course-review-manifest.json"), "utf8"));
const outputPath = path.join(process.cwd(), "data", "course-review-status.json");
const today = new Date();
today.setUTCHours(0, 0, 0, 0);

function dayDifference(a, b) {
  return Math.floor((b.getTime() - a.getTime()) / 86400000);
}

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
  const sourceChecks = await Promise.all(course.sources.map(checkSource));
  return {
    slug: course.slug,
    title: course.title,
    lastReviewed: course.lastReviewed,
    reviewIntervalDays: course.reviewIntervalDays,
    ageDays,
    reviewDue: ageDays >= course.reviewIntervalDays,
    sourceChecks
  };
}));

const report = {
  generatedAt: new Date().toISOString(),
  coursesChecked: courses.length,
  reviewDueCount: courses.filter((course) => course.reviewDue).length,
  sourceCheckFailureCount: courses.reduce((count, course) => count + course.sourceChecks.filter((source) => source.status === "check_failed").length, 0),
  restrictedSourceCount: courses.reduce((count, course) => count + course.sourceChecks.filter((source) => source.status === "restricted").length, 0),
  courses
};
fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, JSON.stringify(report, null, 2) + "\n");
console.log(JSON.stringify({ coursesChecked: report.coursesChecked, reviewDueCount: report.reviewDueCount, sourceCheckFailureCount: report.sourceCheckFailureCount }));
