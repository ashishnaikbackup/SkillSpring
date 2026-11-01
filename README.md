# SkillSpring — Learn. Practise. Build.

**SkillSpring** is a beginner-first self-learning platform designed to take learners from first principles to practical, portfolio-ready work across technology, design, data, business and personal skills.

The public product and repository are named SkillSpring.

## Start learning

- **[Course library](courses.html)** — browse all published self-paced courses.
- **[Full 12-school curriculum map](curriculum-map.html)** — inspect the complete learning-school scope, course families, eight progressive stages, assessment standards and portfolio projects. This is a syllabus map, not a claim that every lesson is fully authored.
- **[Graded JavaScript & SQL practice](advanced-practice.html)** — eight JavaScript and eight SQL challenges with browser-based checks, hints, example solutions and local progress.
- **[Professional practice labs](professional-labs.html)** — interactive spreadsheet modelling, descriptive statistics, Ohm’s law/power, IPv4 subnetting and UI/UX accessibility review.
- **[Version 1 release status](docs/RELEASE_STATUS.md)** — live website, shipped features, automated checks, schedules and known limitations.
- **[UI/UX audit](docs/UI_UX_AUDIT.md)** — cross-page responsive/accessibility polish, verification scope and remaining manual release QA.
- **[Python: Zero to Professional Foundations](python-course.html)** — the most extensive course so far, with 16 modules from Hello World through programming fundamentals, data structures, functions, OOP, files, debugging, Git, APIs, SQLite and a portfolio capstone.
- **[Python Coding Practice](python-practice.html)** — 10 browser-run challenges with automatic tests, feedback, hints, revealable solutions and local code/progress saving. Python runs through Pyodide in the learner’s browser.
- **[Field Radar](field-radar.html)** — evergreen learning notes plus a daily refreshed, source-linked headline feed across programming, AI, Microsoft tools, Indian finance/regulation, cybersecurity, design and engineering.
- **[Learning dashboard](index.html)** — the main platform experience, subject schools, learning paths and Python playground.
- **[Learning-platform benchmark](docs/LEARNING_PLATFORM_BENCHMARK.md)** — research notes and original teaching principles adapted from Mimo, Brilliant, freeCodeCamp, Microsoft Learn, Google Skillshop and Exercism.
- **[Course freshness policy](docs/COURSE_FRESHNESS_POLICY.md)** — push-based course-file change detection plus weekly review-date and official-source checks create a review issue when lessons need human verification; the initial audit issue currently lists all 25 courses; the system does not silently rewrite content.
- **[Field Radar update policy](docs/FIELD_RADAR_UPDATE_POLICY.md)** — a daily allowlisted RSS/Atom collector refreshes headlines across programming, AI, Microsoft tools, India finance/regulation, cybersecurity, design and engineering.

## Published course library

| Course | Learning scope |
|---|---|
| [Python](python-course.html) | 16 modules; beginner to advanced foundations and capstone |
| [C](c-course.html) | Compilation, syntax, control flow, functions, arrays, pointers, memory and files |
| [C++](cpp-course.html) | Fundamentals, functions, OOP, references, STL and resource safety |
| [Java](java-course.html) | Syntax, types, methods, collections, OOP, exceptions and files |
| [JavaScript](javascript-course.html) | Language fundamentals, arrays, DOM, events, async code and APIs |
| [TypeScript](typescript-course.html) | Types, unions, generics, narrowing, modules and validation |
| [HTML & CSS](web-course.html) | Semantic HTML, forms, CSS, layout, responsive design and accessibility |
| [SQL](sql-course.html) | Tables, queries, updates, aggregation, joins, relational design and safe SQL |
| [Personal Finance](finance-course.html) | Budgeting, banking, inflation, debt, insurance, investing principles and risk |
| [Data Science](data-course.html) | Data workflow, Python, statistics, visualisation, cleaning and reporting |
| [UI/UX Design](ux-course.html) | Research, problem framing, wireframes, visual design, prototyping and usability |
| [Spreadsheets](sheets-course.html) | Formulas, functions, validation, analysis, dashboards and models |

The 12 foundational courses listed above include 16 Python modules and six guided modules in each of the other 11 courses. Additional essential professional courses and the zero-to-hero programming courses are listed in the expanded sections below. These are substantial learning foundations, not claims of complete professional mastery or exhaustive coverage of every tool in each field.

## How courses work

Each course is designed around explanations, worked examples, practice tasks and knowledge checks. Learners can move between modules and mark progress. Course progress is stored in browser local storage on the current device; it is not yet synchronised between devices or accounts.

## Learning schools

The wider catalogue includes:
1. Programming & Software Development
2. Web, App & UI/UX Design
3. AI, Data Science & Automation
4. Electronics, VLSI & Engineering
5. Office, Documents & Productivity
6. Personal Finance & Economics
7. Business, Accounting & Management
8. IT, Networking, Cloud & Cybersecurity
9. Career & Professional Skills
10. Creative & Digital Media
11. Personal Productivity & Knowledge
12. Mathematics, Science & Research

These schools are the long-term curriculum scope. A topic appearing in the catalogue does not mean a full course for it has already been published.

## Technical notes

- Static HTML, CSS and JavaScript.
- Python playground uses Pyodide in the browser.
- No user account or cross-device progress sync yet.
- The [Python coding practice path](python-practice.html) adds 10 progressively harder exercises with automatic Python assertions, hints and solutions. The [multi-language coding lab](polyglot.html) runs Python, JavaScript, HTML/CSS preview and SQLite in the browser. It provides downloadable source files and local-run commands for 22 additional languages; it does not send code to a public third-party runner.
- Never put API keys, passwords, banking credentials or private learner data in frontend code or public repositories.
- Finance material is educational and does not guarantee returns or replace qualified financial advice.

## Roadmap

- [x] Establish SkillSpring's product direction and 12 learning schools.
- [x] Build the responsive learning dashboard and catalogue.
- [x] Publish the 16-module Python course and 11 additional six-module foundation courses.
- [x] Add the Field Radar learning section.
- [x] Add an interactive Python practice path with 10 tested challenges, hints, solutions and local progress.
- [x] Add a hands-on Power BI retail dashboard project with three fictional CSV datasets and a step-by-step DAX/model/report guide.
- [x] Publish an explicit 12-school curriculum map with course families, progressive stages, examples, practice outcomes, assessment standards and portfolio capstones. This makes the remaining authoring scope visible; it does not count as authored lessons.
- [x] Add graded JavaScript and SQL tracks with eight challenges each, browser-based checks, hints and solutions.
- [x] Add five interactive professional mini-labs for spreadsheet modelling, data analysis, electronics, networking and UI/UX evaluation.
- [ ] Continue expanding all courses to the full master-curriculum standard: deeper lessons, worked solutions, automated practice, multiple projects, assessments and role-specific portfolio rubrics.
- [ ] Expand the five starter professional labs into full graded practice tracks with multi-stage assignments and detailed rubrics. JavaScript and SQL already have dedicated eight-challenge tracks; the multi-language lab remains a lightweight practice workspace, not a universal compiler.
- [ ] Build out the remaining course families across all 12 schools; the 24-entry catalogue is a starting library, not complete coverage of the full curriculum.
- [x] Add automated static site validation for JavaScript syntax, local links, course catalogue routes and required lesson data.
- [x] Apply a shared responsive UI/UX and accessibility polish layer across public pages; manual device/screen-reader QA is documented separately.
- [ ] Expand graded assessments and progress analytics across every school; current auto-graded coverage includes Python, JavaScript and SQL practice tracks, while most other courses use lesson knowledge checks.
- [ ] Add optional accounts and secure cross-device progress sync.
- [x] Add a weekly course freshness monitor with official reference-link checks and human review reminders. The initial audit issue lists all 25 courses awaiting editorial review; structural checks are not treated as line-by-line content sign-off.
- [x] Add a maintained, sourced headline feed with a daily allowlisted RSS/Atom refresh, publisher links, publication dates and source-status handling.

## Local quality checks

Run the static validation script from the repository root:

```bash
node scripts/validate-site.mjs
```

It checks JavaScript syntax, inline scripts, local HTML/Markdown links, catalogue destinations, required lesson structures and the main zero-to-hero navigation. It does not replace browser-based interaction tests or prove that third-party language execution and the live Pages deployment are working.

## Website deployment

A GitHub Actions workflow is included at `.github/workflows/pages.yml` to publish the static site from the repository root. In GitHub, open **Settings → Pages** and set the build and deployment source to **GitHub Actions** if it is not already selected. The workflow runs on pushes to `main` and can also be started manually from the Actions tab. It validates local links/course data before deployment, then smoke-tests the homepage, Start Here page, course catalogue, multi-language lab and key assets. After a successful deployment, GitHub shows the public Pages URL in Settings → Pages and in the workflow deployment environment.

## Local development

Open `index.html` through a local web server such as VS Code Live Server. The Python and SQLite browser runtimes and web fonts require an internet connection.

See [docs/PRODUCT_VISION.md](docs/PRODUCT_VISION.md) for the product principles, architecture direction, safety rules and long-term roadmap.

**Curriculum expansion (1 November 2026):** The [full curriculum map](curriculum-map.html) now makes all 12 school syllabi explicit, with eight progressive stages per school, course families, practical outcomes, worked-example expectations, assessments and portfolio capstones. The [graded practice studio](advanced-practice.html) adds eight JavaScript and eight SQL challenges with browser-based checking, hints and example solutions. These are substantive additions, but a curriculum map is not a substitute for authored lesson material. The full course-by-course editorial and depth requirements remain open.

**Release status (1 November 2026):** The current SkillSpring v1 site is deployed successfully to GitHub Pages. The latest verified Actions run passed the static validator and post-deployment smoke tests for the homepage, Start Here, course catalogue, multi-language lab, Python practice page, Power BI project, Field Radar and key data/assets. The repository contains 25 catalogue entries, 12 detailed essential-course players (98 guided lessons), 12 foundational course pages (Python has 16 modules; the other 11 have six modules each), a 10-challenge in-browser Python practice path, a 26-selectable-language/toolchain coding workspace (four browser execution/preview modes plus local-run guidance for the remaining languages), a practical Power BI capstone with fictional CSV data, and a daily source-linked Field Radar feed. This is a usable v1 release, not a claim that every topic across all 12 learning schools is already a complete professional textbook. The remaining curriculum gaps are listed below and in the master curriculum.

## Interactive topic roadmaps

Every topic listed inside a learning school now opens a dedicated SkillSpring roadmap page. The roadmap view is organised into eight progressive milestones covering orientation, foundations, tools and first examples, guided practice, intermediate work, advanced practice, professional workflow and a capstone. It includes practice prompts, knowledge checks and local milestone tracking.

**Important scope note:** a roadmap is not the same as a fully written course. The roadmap pages provide a structured progression and school-specific learning framework; detailed concept-by-concept lessons, worked examples, exercises, assessments and projects still need to be authored for each individual topic. The 25 catalogue entries are the current detailed-course set, not proof that every catalogue topic is complete. Progress remains stored in the current browser only.

## Zero-to-hero programming courses

- **Programming Logic: Absolute Zero** — 13 lessons from computer/program fundamentals and problem decomposition through algorithms, pseudocode, variables, decisions, loops, functions, debugging and testing.
- **Data Structures & Algorithms: Zero to Interview Ready** — 12 lessons covering Big-O, core data structures, searching, sorting, trees, graphs, problem patterns and interview communication.
- **AI-Assisted & Vibe Coding** — 11 lessons on requirements-first prompting, AI coding workflows, code review, debugging, testing, privacy, security, Git checkpoints and deployment.

Follow the [Start Here learning path](start-here.html) before jumping into advanced topics.

## Expanded essential professional courses

The catalogue now also links to interactive, lesson-based courses for:

- **Microsoft Word** — document creation, styles, page layout, tables, references, accessibility and a professional report.
- **Microsoft PowerPoint** — storytelling, slide design, charts, diagrams, animation, presenter workflow and a final presentation.
- **Microsoft Excel** — formulas, references, logic, lookups, data cleaning, PivotTables, dashboards, Power Query and a business model.
- **Microsoft Power BI** — data connections, Power Query, star-schema modelling, DAX measures, visuals, publishing concepts and security. The [hands-on retail dashboard capstone](powerbi-project.html) (source brief: [Markdown](docs/POWER_BI_RETAIL_PROJECT.md)) includes fictional Sales, Products and Regions CSV files, DAX measures, model relationships, report tasks and validation checks.
- **Outlook & Teams** — professional email, calendars, meetings, collaboration and security.
- **Microsoft Access** — relational database design, keys, relationships, queries, forms and reports.
- **Power Automate** — triggers, actions, conditions, approvals, error handling and workflow security.
- **Git & GitHub** — commits, branches, merges, pull requests, conflict resolution and professional repository practice.
- **Job Interview & Career Readiness** — role analysis, CV, portfolio, STAR answers, technical interviews, communication, mock interviews and a career plan.

These are now linked from the course catalogue and use a common lesson player with worked examples, hands-on tasks, knowledge checks, lesson navigation and local progress. Some Microsoft features depend on product version, licence and organisation settings; the courses teach concepts and workflows rather than promising access to paid software.

## What "professional-ready" means here

SkillSpring's target is not to make a beginner memorise definitions. Every full course should eventually include:
1. Prerequisites and a zero-assumption introduction.
2. Concepts explained in plain language, with terminology defined before use.
3. Demonstrations and worked examples with reasoning.
4. Guided practice, independent exercises and answer explanations.
5. Beginner, intermediate and advanced projects.
6. Real-world workflows, quality checks, safety, privacy and professional standards.
7. Portfolio evidence, role-specific interview questions and mock assessments where relevant.

The expanded catalogue is a work in progress. Do not interpret a course title or generic topic roadmap as proof that every field or subtopic has a complete textbook-level curriculum. Course content must be expanded and reviewed in depth over time. Completion does not guarantee employment, certification or professional competence.

 
## Multi-language coding lab

The [coding lab](polyglot.html) includes in-browser Python (Pyodide), JavaScript, HTML/CSS preview and SQLite practice. For 22 other languages—C, C++, Java, C#, Go, Rust, PHP, Ruby, TypeScript, Kotlin, Swift, R, Bash, Dart, Scala, Lua, Perl, Haskell, Julia, PowerShell, Fortran and GNU Octave—it provides editable starter files, download and local compiler/runtime commands. It is a lightweight editor, not a full IDE with language-server autocomplete, breakpoints or step debugging. An earlier Piston public-API integration was removed because the public API has required authorization since 15 February 2026; SkillSpring does not embed third-party API keys. See the [official Piston API policy](https://github.com/engineer-man/piston#public-api).

## How SkillSpring teaches from zero to professional

- [Engineering Fundamentals: Electrical, Electronics & VLSI](engineering-course.html) — 20 beginner-first lessons from SI units, algebra, vectors, complex numbers, calculus, signals and physics through circuits, semiconductors, analog/digital systems, embedded systems, Verilog, FPGA and VLSI.
- [Field-specific Fundamentals Map](docs/FIELD_FOUNDATIONS_MAP.md) — prerequisites for all 12 schools.


See the [Field-specific Fundamentals Map](docs/FIELD_FOUNDATIONS_MAP.md) for the prerequisites every school must teach, including the full mathematics, physics, circuits, semiconductors, embedded systems, HDL, FPGA and VLSI foundations for the electrical/electronics engineering pathway.

Read the [Learning Design Standard](docs/LEARNING_DESIGN_STANDARD.md) for the eight-stage progression, lesson pattern, mastery gates, project rubrics and accessible motion principles. The curriculum map is a syllabus; individual course families are only complete after the full lesson, assessment, project and editorial-review standards are met.

## Learning order for a complete beginner

Read the [Start Here: Zero to Job-Ready Skills guide](docs/START_HERE_ZERO_TO_JOB.md) for the full staged learning sequence, daily problem-solving routine, role pathways and portfolio guidance.

Read the [Role-Ready Field Guide](docs/ROLE_READY_FIELD_GUIDE.md) for a school-by-school explanation of foundations, professional skills, tools, portfolio projects, entry roles, hiring evidence and interview preparation. It defines the intended standard; it does not claim every course has already been authored to that depth.


1. Computer and file basics.
2. Programming logic and problem decomposition.
3. One first language (Python is the recommended starting point).
4. Variables, types, operators, conditions, loops, functions and collections.
5. Debugging, testing and small exercises.
6. Git and GitHub.
7. Data structures, algorithms and complexity.
8. SQL, web fundamentals and one project track.
9. Larger projects, code review, deployment and portfolio.
10. Role-specific interview practice and continuous learning.

Do not rush to DSA before understanding loops, functions, arrays/lists and basic problem decomposition. Each learner should solve problems independently and explain their reasoning; watching lessons or copying generated code is not proof of mastery.


**Assessment behaviour update:** The 12 essential lesson-player courses now require the learner to pass that lesson's knowledge check before marking it complete. Correct answers unlock completion and provide feedback; incorrect answers show the correct answer and prompt a review. This is a per-lesson gate, not yet a multi-question cumulative final exam or a substitute for the course-level assessments still required.


**Open completion tracker:** [Issue #3 — Complete the full 12-school curriculum and practice labs](https://github.com/ashishnaikbackup/SkillSpring/issues/3) tracks the remaining authoring, additional graded labs and release gates. The initial editorial audit of the 25 existing course entries remains separately tracked in [issue #2](https://github.com/ashishnaikbackup/SkillSpring/issues/2).
