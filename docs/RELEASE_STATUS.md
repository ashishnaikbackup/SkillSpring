# SkillSpring — Version 1 release status

Last verified: 1 November 2026

## Public links

- Mastery Hub: https://ashishnaikbackup.github.io/SkillSpring/mastery-hub.html

- UI/UX audit: https://github.com/ashishnaikbackup/SkillSpring/blob/main/docs/UI_UX_AUDIT.md

- Live website: https://ashishnaikbackup.github.io/SkillSpring/
- GitHub repository: https://github.com/ashishnaikbackup/SkillSpring
- Course library: https://ashishnaikbackup.github.io/SkillSpring/courses.html
- Engineering Field Practice Studio: https://ashishnaikbackup.github.io/SkillSpring/engineering-field-studio.html
- Beginner route: https://ashishnaikbackup.github.io/SkillSpring/start-here.html
- Python coding practice: https://ashishnaikbackup.github.io/SkillSpring/python-practice.html
- Multi-language lab: https://ashishnaikbackup.github.io/SkillSpring/polyglot.html
- Power BI capstone: https://ashishnaikbackup.github.io/SkillSpring/powerbi-project.html
- Field Radar: https://ashishnaikbackup.github.io/SkillSpring/field-radar.html

## Engineering foundations update — 1 November 2026

A separate [Engineering Field Practice Studio](https://ashishnaikbackup.github.io/SkillSpring/engineering-field-studio.html) now adds worked examples, editable calculations and automatically checked independent exercises for mechanical statics, civil quantity take-off, chemical mass balance, instrumentation scaling and biomedical dilution mathematics. These are introductory, idealised learning models—not validated designs, medical protocols or a substitute for supervised labs.\n\nA 20-lesson [Engineering Fundamentals course](https://ashishnaikbackup.github.io/SkillSpring/engineering-course.html) is now linked from the course catalogue and electrical/electronics curriculum. It begins with SI units, algebra and physics, then develops circuit laws, components, semiconductor concepts, analog/digital foundations, embedded systems, Verilog/testbenches, FPGA and VLSI verification. The course also adds vector/trigonometry, complex-number phasors, calculus, frequency-domain/Fourier/Laplace intuition, measurement uncertainty and Thevenin/Norton/transient foundations. The electronics practice lab includes series/parallel equivalents, a voltage divider and an RC time-constant calculator. This is a foundation pathway, not full coverage of all engineering disciplines or advanced VLSI specialisations. The new course is included in the 30-course editorial review manifest and remains awaiting human review.

## Mastery Hub update — 1 November 2026

The new [Mastery Hub](https://ashishnaikbackup.github.io/SkillSpring/mastery-hub.html) provides a local learning plan, six-step mastery loop, spaced-revision queue with retry scheduling, deliberate-practice log, weekly checklist and a portfolio evidence gate. Its state is stored in the learner's browser; use Progress Backup to transfer supported local progress between devices.

## Release checklist

| Area | Version 1 delivery | Verification / scope |
|---|---|---|
| Public website | Static SkillSpring site deployed on GitHub Pages | Deployment workflow succeeded and its HTTP smoke tests passed. |
| Learning library | 30 course catalogue entries across 12 learning schools | Catalogue routes, required course data and local links are checked by the static validator. Not every school has a full course yet. |
| Beginner path | Start Here guide, programming logic, 17-module Python course and DSA progression | Dependency order is documented; DSA follows programming fundamentals. |
| Coding practice | 10 Python, 8 JavaScript and 8 SQL/SQLite graded challenges | Python runs through Pyodide; JavaScript runs in a sandboxed browser frame; SQL uses SQLite in the browser. Tracks include checks, hints, example solutions and local progress. |
| Multi-language lab | 26 language/tool choices | Python, JavaScript, HTML/CSS preview and SQLite run in the browser. Twenty-two additional languages have starter files, download and local run instructions; they are not remotely compiled by SkillSpring. |
| Microsoft / workplace tools | Word, PowerPoint, Excel, Power BI, Outlook & Teams, Access and Power Automate courses | Lesson-based introductions and workplace tasks. Power BI also has a separate hands-on retail dashboard project. |
| Power BI project | Three fictional CSV datasets, 36 transactions, modelling and DAX/report brief | Dataset keys and arithmetic are checked by the site validator; project totals are documented for reconciliation. Learners create the PBIX in Power BI Desktop. |
| Learning design research | Benchmark notes from Mimo, Brilliant, freeCodeCamp, Microsoft Learn, Microsoft Applied Skills, Google Skillshop and Exercism | Original teaching patterns are documented; no proprietary lesson text, assets or branding are copied. |
| Field Radar | Daily RSS/Atom headline collection from 14 allowlisted publisher/regulator feeds | At the last verified refresh, 14/14 feeds returned successfully and 14 attributed headlines were published. The collector keeps last-known-good items when a source is unavailable. |
| Course freshness | Push-based course-file change detection plus weekly review-date and official-reference checks | Creates or updates a human review issue naming affected courses/files. The initial review issue currently lists all 30 courses awaiting their first editorial content review. It does not silently rewrite lessons or guarantee semantic correctness. |
| UI / accessibility | Shared cross-page responsive polish layer on all 26 HTML pages, skip links/main landmarks, keyboard focus, reduced-motion support, responsive headers and accessible mobile sidebar controls | Latest quality workflow passed; validator now enforces shared stylesheet, skip links and main landmarks on every page. Manual Android/desktop/screen-reader QA remains outstanding; see [UI/UX audit](UI_UX_AUDIT.md). |
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

A shared `ux-polish.css` layer is now applied exactly once across all 26 public HTML pages. Every page has a skip link and main-content landmark; the dashboard has accessible search/filter labels and mobile sidebar dismissal via backdrop or Escape with `aria-expanded` state. The quality validator enforces these baseline requirements. The full manual QA matrix is documented in [UI_UX_AUDIT.md](UI_UX_AUDIT.md). This is a source-level polish pass, not a claim that every browser/device combination has been manually verified.

## Known limits — do not overstate the release

1. **Curriculum depth:** 30 catalogue entries are published, but the long-term curriculum across all 12 schools is not fully authored to textbook or professional certification depth. Some courses are six-to-eight lesson foundations. The README roadmap identifies the remaining course families and assessment work.
2. **Practice coverage:** Python has 10 graded challenges; JavaScript and SQL/SQLite have eight each. More tasks, broader edge-case coverage and manual browser verification remain worthwhile additions.
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
- These additions improve curriculum visibility and practical practice but do not close the course-authoring backlog. The 30 existing course entries still need an initial human editorial audit; the remaining course families still need complete lessons, worked solutions, exercises, assessments and projects. See [master curriculum](MASTER_CURRICULUM.md) and [product vision](PRODUCT_VISION.md).


**Assessment behaviour update:** The 12 essential lesson-player courses now require the learner to pass that lesson's knowledge check before marking it complete. Correct answers unlock completion and provide feedback; incorrect answers show the correct answer and prompt a review. This is a per-lesson gate, not yet a multi-question cumulative final exam or a substitute for the course-level assessments still required.


**Open completion tracker:** [Issue #3 — Complete the full 12-school curriculum and practice labs](https://github.com/ashishnaikbackup/SkillSpring/issues/3) tracks the remaining authoring, additional graded labs and release gates. The initial editorial audit of the 30 existing course entries remains separately tracked in [issue #2](https://github.com/ashishnaikbackup/SkillSpring/issues/2).


## Professional mini-labs delivered — 1 November 2026

The [Professional Practice Labs](../professional-labs.html) page now includes five browser-based starter labs: (1) spreadsheet invoice modelling with quantity, price, tax and total validation; (2) descriptive statistics for learner-supplied numeric samples; (3) ideal-resistor Ohm's law and power calculations with safety caveats; (4) IPv4 CIDR subnet/network/broadcast/host calculations; and (5) a UI/UX accessibility and usability review checklist with prioritisation guidance. These are entry-level interactive exercises. They do not replace full spreadsheet assignments, statistical investigations, circuit simulation/HDL verification, network troubleshooting labs or moderated usability testing.


## Course-player fixes and cumulative final assessment — 21 November 2026

- **Fixed: 11 course pages did not render.** C, C++, Java, JavaScript, TypeScript, HTML & CSS, SQL, Personal Finance, Data Science, UI/UX and Spreadsheets crashed in the browser (`m[6].map is not a function`) because the lesson data and the lesson player disagreed on the quiz format. The player now reads the data correctly and gates lesson completion on a passed knowledge check, as the other courses already did.
- **Fixed: the correct quiz answer was always option A** in the essential courses. Option order is now shuffled deterministically per lesson (`assessment.js`).
- **Added: cumulative final assessment** for every course (the lesson-engine, essential-course and Python players). It draws one question from every lesson, reshuffles on each attempt, uses a 70% pass mark, lists lessons to review and stores the best result in the browser. It tests recall only; it is not a certificate and does not replace practical projects.
- **Added: validator guard.** `scripts/validate-site.mjs` now checks the lesson-engine data shape and that every course page loads `assessment.js`, so this class of silent breakage fails CI.
- **Removed a dead reference** (`https://www.ti.com/lit/`, HTTP 404) from the engineering course's review sources. Replace it with a verified TI or equivalent source during the human review.
- Verified with a headless-browser pass over all 29 lesson-player pages (no page errors, correct answer position varies, final assessment scores and saves). This is automated checking, not the manual device and screen-reader QA still outstanding.
- **Fixed: Python module 2 never rendered.** A quiz option containing the text `<!--` was inserted as raw HTML and swallowed the rest of the page. Quiz text is now escaped, and the Python course also gets shuffled options and the final assessment.
- **Expanded:** Java and TypeScript each gain two lessons (Java: inheritance/interfaces/polymorphism and JUnit testing/debugging; TypeScript: classes/enums/utility types and typing APIs and errors safely), now 7 lessons each. Like all course content, these still await human subject-expert review.


## Light mode and further course depth — 21 November 2026

- **Light/dark theme** on all 26 pages: a toggle (bottom-right) remembers the choice on the device and follows the system setting until the learner picks one. `theme.js` sets the theme before first paint; the light theme flips page lightness while preserving hue and leaves images, video and canvas unchanged. The validator requires `theme.js` on every page. Checked visually on the dashboard, a lesson-engine course, an essential course and the Python practice page; the full manual contrast and screen-reader pass is still outstanding.
- **New lessons (one each):** SQL (subqueries, CTEs and window functions), JavaScript (testing and debugging), Data Science (correlation, sampling and simple models), C (multiple files, headers and building), HTML & CSS (responsive images, performance and search basics). Java and TypeScript were expanded earlier today. These lessons are AI-drafted and await human subject-expert review before `lastReviewed` is set.


## More lesson depth — 21 November 2026

C++ (templates, lambdas and STL algorithms), UI/UX (content design, microcopy and error states), Spreadsheets (lookups, dynamic arrays and error handling) and Personal Finance (tax basics, records and fraud safety; education only, not tax advice) each gain a lesson. All 11 lesson-engine courses now have 7 lessons; the platform has about 242 lessons across 30 courses. These lessons are AI-drafted and await human subject-expert review; no `lastReviewed` dates were set.


## Reviewer packets — 21 November 2026

Added `scripts/export-review-packets.mjs`, `docs/REVIEWER_GUIDE.md` and 30 generated packets in `docs/review-packets/` (one per course: all lessons, examples, tasks, quiz answers, official sources and a checklist). This removes the setup work for the human review in issue #2. No course has been marked reviewed; the validator requires a packet for every course in the manifest.


## Practical rubric and five more lessons — 21 November 2026

- **Practical project rubric** under every course's final assessment: five criteria (meets the brief, correctness and evidence, quality and clarity, explanation, reflection) rated Not yet to Strong, saved on the device, with advice to have a mentor confirm. It is a self-assessment; it does not replace human judgement of the project. Checked in all three players and in both themes (axe: no serious violations).
- **New lessons:** Git (undoing mistakes: stash, amend, revert, reset), IT Foundations (Linux command line), Foundational Maths (growth, exponents and logarithms), Business (pricing, break-even and forecasting) and Microsoft Access (joins, totals and parameter queries). AI-drafted, pending expert review; review packets regenerated.


## Four more lessons — 21 November 2026

Outlook (rules, search and shared mailboxes), Power Automate (expressions, dynamic content and testing), Productivity (weekly review and habit design) and Creative Skills (accessible and inclusive creative work) each gain a lesson, bringing the platform to about 251 lessons across 30 courses. AI-drafted, pending expert review; review packets regenerated.


## Eight more lessons for placement-critical courses — 21 November 2026

SQL (data modelling and constraints; performance, EXPLAIN and set operations), JavaScript (scope, closures and classes; JSON, storage and a small app), C (dynamic memory and ownership; safe strings, sorting and function pointers) and Data Science (combining tables and tidy data; experiments, A/B tests and dashboards) each gain two lessons, bringing the platform to about 259 lessons. The C, JavaScript, SQLite and pandas examples were executed and their stated outputs confirmed. Still AI-drafted and pending expert review; packets regenerated.


## Seven more lessons — 22 November 2026

Java (generics, collections and streams; records, enums and clear modelling), TypeScript (generics and discriminated unions; tooling: tsconfig, linting and tests), HTML & CSS (maintainable CSS: variables, themes and DevTools) and Excel (dynamic arrays, XLOOKUP and LET; what-if analysis) gain lessons, bringing the platform to about 266 lessons. The Java and TypeScript examples were compiled and run and their stated outputs confirmed; the Goal Seek figure was recalculated. Still AI-drafted and pending expert review; packets regenerated.


## Seven more lessons — 22 November 2026 (second batch)

C++ (classes, RAII and smart pointers; compiled and run under AddressSanitizer), UI/UX (research, usability testing and success measures), Spreadsheets (charts, pivot summaries and dashboards), Personal Finance (investing basics: risk, diversification and costs; education only, not advice; the compounding figures were recalculated), HTML & CSS (layout patterns), Word (templates, styles and mail merge) and PowerPoint (presenting: timing, presenter view and handouts) each gain a lesson, bringing the platform to about 273 lessons. Still AI-drafted and pending expert review; packets regenerated. No human review had been recorded as of this update.


## Nine more lessons — 22 November 2026 (third batch)

Every essential course that had only 7 lessons gains one: Outlook (high-volume email), Access (importing, linking and data quality), Power Automate (connectors, data operations and reusable patterns), Git (branching strategies, reviews and releases; commands run in a sandbox repository), Business (marketing funnels and customer metrics; figures recalculated), IT Foundations (DNS, DHCP and network troubleshooting), Maths (statistics in practice; mean and median recalculated), Creative Skills (video and audio editing workflow) and Productivity (deliberate practice and feedback). The platform now has about 282 lessons and every course has at least 8. Still AI-drafted and pending expert review; packets regenerated.


## Capstone project briefs and an engineering-page fix — 22 November 2026

- **Capstone project briefs for all 30 courses** (`capstone-briefs.js`), shown under each final assessment above the rubric: a fictional scenario, what to build, the evidence to submit and a stretch goal. The validator requires a complete brief for every course in the manifest. Briefs are AI-drafted and pending expert review, like the lessons.
- **Fixed: the Engineering course page opened the Microsoft Word course.** `engineering-course.html` had no course parameter, so the shared player fell back to Word. The page now declares its course, and the validator checks it.
- Browser checks: all 30 course pages show the brief and rubric; axe reports no serious violations in light and dark on sampled pages.
