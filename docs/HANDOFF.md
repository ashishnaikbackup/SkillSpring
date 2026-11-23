# SkillSpring v1 hand-off

**Status:** the site is complete for v1 and deployed. All remaining work needs people. Every lesson, quiz, brief and example is AI-drafted and marked pending expert review; the site says so.

## What exists
- 30 courses (about 307 lessons), each with a cumulative final assessment, a capstone brief and a self-assessment rubric.
- 41 graded practice challenges: 15 Python, 13 JavaScript, 13 SQL.
- Worked reference examples for 16 of 30 capstone briefs (code run before publishing).
- Light and dark themes, a static validator, browser and accessibility QA, a freshness-review workflow and a Pages deploy workflow.

## What only people can do
1. **Expert review of all 30 courses.** Use `docs/review-packets/` (one packet per course) and `docs/REVIEWER_GUIDE.md`. Suggested first three: Python, SQL, C. Only the reviewer sets `lastReviewed` and `reviewStatus` in `course-review-manifest.json`.
2. **Manual QA:** real phones and a screen reader across the course pages and practice labs.
3. **Mentor feedback** on real learner capstone projects, then revise briefs and rubrics.
4. After sign-off, close issues #2 and #3.

## Known notes
- Deploy occasionally fails on a transient Pages artifact error. Re-run the whole workflow run (not only failed jobs).
- New practice challenges were verified locally (Node, SQLite, CPython) but not clicked through in a browser against the CDN-hosted runtimes.
- Not built (optional later): more lessons toward 14 per course, examples for the other 14 briefs, new course families (frontend frameworks, ML basics, cloud security).
