# Course freshness and review policy

SkillSpring covers both evergreen concepts and fast-changing tools. A static lesson cannot reliably update itself just because a vendor changes a feature or a new industry trend appears.

## Initial review baseline

The initial 1 November 2026 checkpoint verified the 24-course inventory, catalogue routes, lesson-data structure, reference-source mapping and site validation. It was **not** a line-by-line editorial sign-off of every lesson. The `lastReviewed` dates in the initial manifest represent this baseline checkpoint; individual lessons still need deeper subject-matter review as the platform matures.

## What is automated

- The course-review-manifest.json file lists published course families, official reference sources, content files to watch and review intervals. New entries should start with `lastReviewed: null` and `reviewStatus: initial-review-required`; a date is recorded only after a human has checked the course. The initial 2026-11-01 dates in the current manifest are a structural/source baseline, not full editorial sign-off.
- The checker runs on a weekly GitHub Actions schedule, on pushes and manually. On pushes it compares the before/after commits and maps changed lesson/course data files to the affected courses.
- It flags courses with no verified content-review date, courses whose review interval has elapsed and official source URLs that could not be reached by both a HEAD and a small-range GET request.
- GitHub Actions creates or refreshes one open review issue with changed courses/files, courses due by age, restricted/failed source checks and a human reviewer checklist. An issue remains open until a human reviewer closes it after updating the review date.

## What is deliberately not automated

The checker does not rewrite lessons, replace code examples, update screenshots or silently change course claims. A reachable URL does not prove a lesson is current, and an inaccessible URL does not prove its content is outdated. Human review is required before changing educational content.

For rapidly changing tools such as Power BI, Microsoft 365, Power Automate and AI coding tools, use shorter review intervals. Evergreen concepts such as basic algorithms can use longer intervals. Shorten an interval when the field changes faster.

## Review procedure

1. Open the official documentation links in the review issue.
2. Compare live product/version behaviour with the course lesson.
3. Verify changed menu paths, formulas, APIs, licensing, security or privacy claims.
4. Update and test the lesson and its exercises.
5. Update lastReviewed in the manifest only after review and validation.
6. Keep the change in Git history so a learner can see what was revised.
7. Close the automated review issue manually after the reviewed changes and checks are committed.

## Current limitations

- This is a freshness and reference-link monitor, not a live news feed.
- It checks reachability, not semantic changes or correctness.
- The first source list is a curated starting point and should be expanded and reviewed over time.
- A failed source check can be caused by bot blocking, rate limiting or temporary outages; verify it manually before changing lesson content.
