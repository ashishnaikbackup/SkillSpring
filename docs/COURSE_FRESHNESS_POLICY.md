# Course freshness and review policy

SkillSpring covers both evergreen concepts and fast-changing tools. A static lesson cannot reliably update itself just because a vendor changes a feature or a new industry trend appears.

## What is automated

- The course-review-manifest.json file lists published course families, official reference sources, last-reviewed dates and review intervals.
- The checker runs on a weekly GitHub Actions schedule and can also be started manually.
- It flags courses whose review interval has elapsed and official source URLs that could not be reached by both a HEAD and a small-range GET request.
- GitHub Actions creates or refreshes one open review issue with affected courses, source links and a human reviewer checklist.

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

## Current limitations

- This is a freshness and reference-link monitor, not a live news feed.
- It checks reachability, not semantic changes or correctness.
- The first source list is a curated starting point and should be expanded and reviewed over time.
- A failed source check can be caused by bot blocking, rate limiting or temporary outages; verify it manually before changing lesson content.
