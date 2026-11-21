# Reviewer guide

SkillSpring marks a course as reviewed only after a person has read it. Automated checks (validator, browser tests, link and freshness scans) do not count as review.

## How to review a course

1. Open the course's packet in [`docs/review-packets/`](review-packets/README.md). It contains every lesson, example, task and quiz answer, the official sources to check against, and a checklist.
2. Read each lesson against the official sources. Run every code example.
3. Record problems under **Findings** in the packet, or open a GitHub issue per problem with the course key and lesson number.
4. When all findings are fixed and the checklist is complete, update that course in `course-review-manifest.json`: set `lastReviewed` to the review date (`YYYY-MM-DD`) and change `reviewStatus` from `initial-review-required`. Then run `node scripts/validate-site.mjs`.
5. Add a line to `docs/RELEASE_STATUS.md` naming the reviewer and the date.

## Suggested order

Python, SQL, C, JavaScript, Data Science and Git first (most used for placements), then the Office and career courses, then the engineering course, which needs an electronics specialist.

## Regenerating packets

After any content change run `node scripts/export-review-packets.mjs` and commit the result. Packets are generated copies; edit the course data files, not the packets.
