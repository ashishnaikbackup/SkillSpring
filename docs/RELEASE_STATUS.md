# SkillSpring — Version 1 release status

Last verified: 1 November 2026

## Public links

- UI/UX audit: https://github.com/ashishnaikbackup/SkillSpring/blob/main/docs/UI_UX_AUDIT.md

- Live website: https://ashishnaikbackup.github.io/SkillSpring/
- GitHub repository: https://github.com/ashishnaikbackup/SkillSpring
- Course library: https://ashishnaikbackup.github.io/SkillSpring/courses.html
- Beginner route: https://ashishnaikbackup.github.io/SkillSpring/start-here.html
- Python coding practice: https://ashishnaikbackup.github.io/SkillSpring/python-practice.html
- Multi-language lab: https://ashishnaikbackup.github.io/SkillSpring/polyglot.html
- Power BI capstone: https://ashishnaikbackup.github.io/SkillSpring/powerbi-project.html
- Field Radar: https://ashishnaikbackup.github.io/SkillSpring/field-radar.html

## Release checklist

| Area | Version 1 delivery | Verification / scope |
|---|---|---|
| Public website | Static SkillSpring site deployed on GitHub Pages | Deployment workflow succeeded and its HTTP smoke tests passed. |
| Learning library | 24 course catalogue entries across 12 learning schools | Catalogue routes, required course data and local links are checked by the static validator. Not every school has a full course yet. |
| Beginner path | Start Here guide, programming logic, 16-module Python course and DSA progression | Dependency order is documented; DSA follows programming fundamentals. |
| Coding practice | Ten progressive Python coding challenges | Runs in the browser with Pyodide; includes automated assertions, hints, revealable example solutions and local saved code/progress. |
| Multi-language lab | 26 language/tool choices | Python, JavaScript, HTML/CSS preview and SQLite run in the browser. Twenty-two additional languages have starter files, download and local run instructions; they are not remotely compiled by SkillSpring. |
| Microsoft / workplace tools | Word, PowerPoint, Excel, Power BI, Outlook & Teams, Access and Power Automate courses | Lesson-based introductions and workplace tasks. Power BI also has a separate hands-on retail dashboard project. |
| Power BI project | Three fictional CSV datasets, 36 transactions, modelling and DAX/report brief | Dataset keys and arithmetic are checked by the site validator; project totals are documented for reconciliation. Learners create the PBIX in Power BI Desktop. |
| Learning design research | Benchmark notes from Mimo, Brilliant, freeCodeCamp, Microsoft Learn, Microsoft Applied Skills, Google Skillshop and Exercism | Original teaching patterns are documented; no proprietary lesson text, assets or branding are copied. |
| Field Radar | Daily RSS/Atom headline collection from 14 allowlisted publisher/regulator feeds | At the last verified refresh, 14/14 feeds returned successfully and 14 attributed headlines were published. The collector keeps last-known-good items when a source is unavailable. |
| Course freshness | Push-based course-file change detection plus weekly review-date and official-reference checks | Creates or updates a human review issue naming affected courses/files. The initial review issue currently lists all 24 courses awaiting their first editorial content review. It does not silently rewrite lessons or guarantee semantic correctness. |
| UI / accessibility | Shared cross-page responsive polish layer on all 21 HTML pages, skip links/main landmarks, keyboard focus, reduced-motion support, responsive headers and accessible mobile sidebar controls | Latest quality workflow passed; validator now enforces shared stylesheet, skip links and main landmarks on every page. Manual Android/desktop/screen-reader QA remains outstanding; see [UI/UX audit](UI_UX_AUDIT.md). |
| Documentation | Product vision, master curriculum, Start Here, benchmark, Power BI project, Field Radar policy and course freshness policy | Linked from the repository README and relevant pages. |

## Automation schedules

- **Field Radar refresh:** daily at 02:20 UTC (07:50 India Standard Time), plus refreshes after changes to the source list or collector. Only headline, publisher, date and original HTTPS link are collected.
- **Course freshness review:** weekly on Monday at 03:00 UTC (08:30 India Standard Time), plus checks on pushes to the main branch. Review reminders are human-reviewed before course changes.
- **SkillSpring completion check:** a separate ChatGPT scheduled check is active to notify when its defined acceptance checks are genuinely met. It is not the mechanism that updates course lessons or the Field Radar feed.

## Quality verification

The GitHub Actions quality workflow checks JavaScript syntax, inline scripts, local HTML/Markdown links, course catalogue routes, essential lesson structures, required language/runtime configuration, Python challenge data, Power BI CSV integrity and Field Radar feed integrity.

The Pages deployment workflow separately checks the availability of the home page, Start Here, course library, coding lab, logic course route, Python practice page and assets, Power BI capstone and sample data, Field Radar page and feed JSON. The successful deployment log records the published URL above.

These automated checks are not a substitute for a full manual browser test of every exercise, external runtime, responsive state or third-party product workflow.

## UI/UX polish update — 1 November 2026

A shared `ux-polish.css` layer is now applied exactly once across all 21 public HTML pages. Every page has a skip link and main-content landmark; the dashboard has accessible search/filter labels and mobile sidebar dismissal via backdrop or Escape with `aria-expanded` state. The quality validator enforces these baseline requirements. The full manual QA matrix is documented in [UI_UX_AUDIT.md](UI_UX_AUDIT.md). This is a source-level polish pass, not a claim that every browser/device combination has been manually verified.

## Known limits — do not overstate the release

1. **Curriculum depth:** 24 catalogue entries are published, but the long-term curriculum across all 12 schools is not fully authored to textbook or professional certification depth. Some courses are six-to-eight lesson foundations. The README roadmap identifies the remaining course families and assessment work.
2. **Practice coverage:** the dedicated automatic coding autograder currently exists for the ten Python challenges. JavaScript and SQLite are available in the lab, but do not yet have equivalent graded challenge tracks.
3. **IDE scope:** the multi-language lab is a lightweight practice editor. It is not a full IDE with language-server autocomplete, breakpoints, step debugging or guaranteed online compilation for all languages.
4. **Progress:** course and practice progress are stored in browser local storage on the current device. There are no learner accounts or cross-device synchronisation.
5. **Power BI:** SkillSpring supplies fictional data and a detailed project brief; the learner needs Power BI Desktop to create and save the PBIX.
6. **Field Radar:** the news section is a discovery aid, not a comprehensive news service. RSS availability, publisher dates and feed coverage can change. Read original sources before relying on a headline.
7. **Course freshness:** the monitor checks review dates and source URL reachability, not whether a lesson is factually correct or has become semantically outdated. Human review is required.
8. **Outcomes:** SkillSpring is a learning resource, not an accredited qualification or a job guarantee. Learners must independently practise, build projects and demonstrate their skills.

## Recommended first use

1. Open **Start Here** and follow the sequence from digital basics to programming logic.
2. Complete the logic course before rushing into Python syntax or DSA.
3. Work through the Python course and type the examples yourself.
4. Complete the ten Python practice challenges without copying the solutions.
5. Learn Git/GitHub and publish small, explained projects.
6. Choose a role pathway; for data/business analysis, complete Excel and the Power BI retail capstone.
7. Use Field Radar to discover changes, but verify important claims at the original source.

**Release decision:** the current Version 1 website and its listed core deliverables are deployed and pass the repository's automated quality and deployment checks. The broader multi-school curriculum, more graded practice tracks, learner accounts and cross-device sync remain future development rather than hidden claims of completion.


## Curriculum expansion — 1 November 2026

- Added [interactive 12-school curriculum map](../curriculum-map.html): eight progressive stages per school, course families, role directions, worked-example expectations, practice outcomes, assessment standards and capstone portfolio projects.
- Added [graded JavaScript and SQL practice](../advanced-practice.html): eight challenges per track, browser-based test checking, starter tasks, hints, example solutions and local progress. JavaScript uses a sandboxed iframe; SQL uses SQLite in the browser with fictional sample data.
- Added validator requirements for both pages, dashboard navigation, all 12 school definitions and at least eight challenges per new track.
- These additions improve curriculum visibility and practical practice but do not close the course-authoring backlog. The 24 existing course entries still need an initial human editorial audit; the remaining course families still need complete lessons, worked solutions, exercises, assessments and projects. See [master curriculum](MASTER_CURRICULUM.md) and [product vision](PRODUCT_VISION.md).


**Assessment behaviour update:** The 12 essential lesson-player courses now require the learner to pass that lesson's knowledge check before marking it complete. Correct answers unlock completion and provide feedback; incorrect answers show the correct answer and prompt a review. This is a per-lesson gate, not yet a multi-question cumulative final exam or a substitute for the course-level assessments still required.


**Open completion tracker:** [Issue #3 — Complete the full 12-school curriculum and practice labs](https://github.com/ashishnaikbackup/SkillSpring/issues/3) tracks the remaining authoring, additional graded labs and release gates. The initial editorial audit of the 24 existing course entries remains separately tracked in [issue #2](https://github.com/ashishnaikbackup/SkillSpring/issues/2).
