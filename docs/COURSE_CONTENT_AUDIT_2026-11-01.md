# SkillSpring course content audit — 1 November 2026

## Purpose and review boundary

This is an **AI-assisted source and learning-design audit** of the 30 course entries currently published in SkillSpring. It is not a human subject-matter expert sign-off, a formal accreditation review, a test of every third-party desktop application, or proof of job placement. No course is marked human-reviewed by this report.

The review checks the repository's actual course source structures and lesson patterns: beginner entry, concept explanation, demonstration/worked example, learner task, knowledge check, course progression, role relevance, assessment evidence and obvious safety/privacy gaps. The current lesson players generally provide a knowledge check and task per lesson. They do not yet provide a comprehensive graded final examination or externally assessed professional qualification for every course.

## Catalogue and lesson inventory

The catalogue has 30 entries: 12 foundation course pages, 17 essential-course player entries and one dedicated engineering course. The source files contain approximately 235 authored lesson modules across those entries (Python 17; course-engine family 64; essential-course family 134 including the five new six-lesson foundation courses; engineering 20). The count is derived from source arrays; it is not a measure of teaching quality.

| Course | Current lessons | AI-assisted content review | Main next depth requirement |
|---|---:|---|---|
| Python | 17 | Beginner syntax, data structures, functions, OOP, files, debugging, Git, APIs and SQLite progression is present. | Add more independent graded problems, testing/packaging, API integration, deployment and a deeper capstone rubric. |
| C | 6 | Compilation, types, control flow, functions, arrays, pointers, structures and files are represented. | Add memory debugging, undefined behaviour, bitwise work, embedded/performance exercises and automated C tests. |
| C++ | 6 | Modern types, functions, classes, STL and RAII/resource safety are introduced. | Add templates, move semantics, concurrency basics, testing, build systems and a larger application. |
| Java | 5 | Syntax, object orientation, collections, exceptions and file handling are introduced. | Add generics, streams, testing, build tools, JDBC/API work and deployment. |
| JavaScript | 6 | Language basics, browser interaction, asynchronous work and APIs are represented. | Add robust testing, modules/tooling, state architecture, security, performance and a larger app. |
| TypeScript | 5 | Types, functions, unions, generics/narrowing and typed application foundations are represented. | Add advanced type design, strict project configuration, tests, framework integration and API validation. |
| HTML & CSS | 6 | Semantic structure, forms, layout, responsive design and accessibility are introduced. | Add cross-browser testing, design systems, advanced responsive patterns, performance and multi-page project review. |
| SQL | 6 | Relational tables, queries, joins, aggregation, schema design and safe data changes are introduced. | Add window functions, transactions, indexing, query plans, permissions and larger realistic datasets. |
| Personal Finance | 6 | Budgeting, banking, interest, inflation, debt, insurance, investment principles and risk are covered at foundation level. | Add more India-specific examples, tax/financial-product caveats, scenario work and verified regulatory references. No personal advice. |
| Data Science | 6 | Data questions, cleaning, descriptive statistics, charts and responsible reporting are introduced. | Add probability depth, sampling, inference, SQL/Python projects, ML evaluation, leakage and reproducible notebooks. |
| UI/UX Design | 6 | Research, problem framing, wireframes, prototypes, visual principles and usability/accessibility are represented. | Add moderated research practice, design systems, interaction states, evidence-based iteration and full case-study assessment. |
| Spreadsheets | 6 | Formula logic, references, functions, cleaning, pivots, dashboards and model foundations are represented. | Add Power Query, advanced lookups, scenario models, audit controls, reconciliation and a graded business workbook. |
| Microsoft Word | 7 | Styles, document structure, layout, tables, references, collaboration and accessibility are represented. | Add complex long-document workflows, templates, mail merge, accessible PDF validation and timed practical assessment. |
| Microsoft PowerPoint | 7 | Slide structure, storytelling, visuals, charts, motion and delivery are introduced. | Add executive storytelling, data integrity, speaker rehearsal, accessibility and a scored live presentation. |
| Microsoft Excel | 8 | Formula work, lookups, cleaning, PivotTables, dashboards and business analysis are represented. | Add Power Query, advanced modelling, reconciliation, scenario/sensitivity analysis and a robust graded workbook. |
| Microsoft Power BI | 8 | Import, Power Query, modelling, DAX and report design are supported by a separate fictional retail capstone. | Add incremental refresh, row-level security, performance tuning, deployment governance and more complex DAX assessment. |
| Outlook & Teams | 6 | Email, etiquette, calendars, meetings, collaboration and secure communication are introduced. | Add shared mailbox/delegation scenarios, retention, accessibility, meeting facilitation and practical workplace simulation. |
| Microsoft Access | 6 | Tables, keys, relationships, queries, forms and reports are introduced. | Add validation, normalisation depth, parameter queries, multi-user limitations and a full database capstone. |
| Power Automate | 6 | Triggers, actions, conditions, approvals and workflow concepts are represented. | Add retries, idempotency, environment governance, connector permissions, monitoring and robust failure-path tests. |
| Git & GitHub | 6 | Commits, branches, merges, pull requests and collaboration basics are introduced. | Add conflict-resolution assessment, CI workflows, release management, branch protection and security scanning. |
| Career & Interview Readiness | 14 | Role research, truthful CV/portfolio, communication and interview practice are represented. | Add more role-specific mock assessments, feedback from real reviewers and local-market application practice. |
| Programming Logic | 13 | Absolute-beginner computational thinking, algorithms, flowcharts, variables, decisions, loops, functions and debugging are represented. | Add a larger graded problem bank, transfer exercises across languages and a timed cumulative assessment. |
| Data Structures & Algorithms | 12 | Core structures, algorithmic thinking and interview problem-solving progression are represented. | Add a broader problem set with verified solutions, complexity analysis, spaced practice and timed mock interviews. |
| AI-Assisted Coding | 11 | Prompting, code review, debugging, testing, privacy/security and deployment workflow are represented. | Add model/tool comparison, evaluation of AI output, reproducibility, dependency/licence review and adversarial test cases. |
| Engineering Fundamentals | 20 | Electrical/electronics/VLSI foundations include maths, physics, circuits, devices, analog/digital, embedded, HDL and verification. | Deeper discipline-specific courses, supervised lab projects, standards, instrumentation and professional engineering review. |
| Business & Accounting Foundations | 6 | New foundation course covers business models, bookkeeping, statements, unit economics, research and operations. | Add deeper journal/ledger practice, reconciliations, costing, budgeting, management reporting and supervised professional review. |
| IT Support, Networking & Cloud Foundations | 6 | New foundation course covers troubleshooting, OS concepts, networking, IPv4, cloud identity and defensive security. | Add hands-on isolated labs, Linux/Windows administration, cloud deployment, IAM exercises and authorised incident simulations. |
| Mathematics, Science & Research Foundations | 6 | New foundation course covers units, algebra, ratios, statistics, calculus intuition and scientific method. | Add progressive problem banks, worked derivations, physics/chemistry practice, cumulative tests and discipline-specific applications. |
| Creative Media, Design & Communication | 6 | New foundation course covers visual design, typography, identity, production, storytelling and licensing. | Add software-specific production workflows, critique, audio/video projects, asset provenance and client-style briefs. |
| Personal Productivity & Knowledge Management | 6 | New foundation course covers goals, focus, notes, active recall, digital organisation and automation. | Add longer practical workflows, accessibility, privacy-aware tool practice and a measured personal knowledge project. |

## Cross-course findings

### Strengths observed
- Courses have actual lesson data, not just catalogue titles.
- Most course players show a concept explanation, worked example/demonstration, task and a multiple-choice knowledge check.
- Essential-course completion is gated on passing the lesson knowledge check.
- Course progress is stored locally; no account or backend is required for the current static site.
- The new [Career Launchpad](../career-launchpad.html) provides a course-specific portfolio project for each of the 30 entries, including steps, deliverables, role direction and interview practice.
- Five previously missing school foundations—business/accounting, IT/networking/cloud, maths/science/research, creative media and productivity—now have dedicated six-lesson beginner courses.

### Important gaps that remain
1. A single multiple-choice check per lesson is not a robust graded assessment. Add independent answerable exercises, cumulative exams, project rubrics and solution explanations.
2. Most 5–8 lesson foundation courses are introductions, not full professional training. Course-specific depth work in the table above remains necessary.
3. The Career Launchpad supplies project briefs, not automatic grading or mentor feedback. Learners still need to build and submit the actual files.
4. Power BI Desktop, Office desktop applications, professional engineering tools and some local programming toolchains must be installed or accessed separately. SkillSpring cannot truthfully claim to reproduce every commercial product in the browser.
5. Finance, tax, security, biomedical and engineering work requires current authoritative references, risk boundaries and, where relevant, qualified supervision.
6. A learner should choose one role direction and complete its relevant course bundle deeply. Completing every course is neither required nor realistic for one entry-level role.

## Human review and release sign-off

The initial human editorial review remains **pending for all 30 courses**. A real reviewer should:
- verify technical accuracy against the listed official references;
- run every worked example and check every answer key;
- complete each practical task and capstone;
- verify safety, privacy, licensing and accessibility statements;
- record reviewer name/role, date, findings and corrections;
- re-run automated validation and deployed-page checks after fixes.

Do not change `lastReviewed` or mark `reviewStatus` as human-reviewed until that sign-off is actually completed. Automated and AI-assisted review are useful pre-checks, not substitutes for human expertise.

## Release recommendation

SkillSpring now has a wider 30-course starter library, 12 learning schools, practical labs, the Power BI capstone, engineering field studios and 30 course-specific portfolio briefs. It is a substantial self-learning v1 foundation. It should be described as **beginner-first learning and portfolio preparation**, not a complete accredited professional curriculum or a guarantee of employment. Future course depth and human review should continue as versioned improvements rather than being hidden behind a premature “all courses complete” claim.
