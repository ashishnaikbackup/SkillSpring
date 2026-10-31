# SkillSpring — Learn. Practise. Build.

**SkillSpring** is a beginner-first self-learning platform designed to take learners from first principles to practical, portfolio-ready work across technology, design, data, business and personal skills.

The public product and repository are named SkillSpring.

## Start learning

- **[Course library](courses.html)** — browse all published self-paced courses.
- **[Python: Zero to Professional Foundations](python-course.html)** — the most extensive course so far, with 16 modules from Hello World through programming fundamentals, data structures, functions, OOP, files, debugging, Git, APIs, SQLite and a portfolio capstone.
- **[Field Radar](field-radar.html)** — short educational explainers about changing tools, technology and professional skills. This is a curated learning resource, not a live news feed.
- **[Learning dashboard](index.html)** — the main platform experience, subject schools, learning paths and Python playground.

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
- The [multi-language coding lab](polyglot.html) runs Python, JavaScript, HTML/CSS preview and SQLite in the browser. It provides downloadable source files and local-run commands for 22 additional languages; it does not send code to a public third-party runner.
- Never put API keys, passwords, banking credentials or private learner data in frontend code or public repositories.
- Finance material is educational and does not guarantee returns or replace qualified financial advice.

## Roadmap

- [x] Establish SkillSpring's product direction and 12 learning schools.
- [x] Build the responsive learning dashboard and catalogue.
- [x] Publish the 16-module Python course and 11 additional six-module foundation courses.
- [x] Add the Field Radar learning section.
- [ ] Deepen every course with more lessons, worked solutions, graded practice and larger projects.
- [ ] Expand dedicated SQL, spreadsheet, data and electronics practice labs; the current multi-language lab includes SQLite practice.
- [ ] Add full courses for the remaining programming languages and learning schools.
- [x] Add automated static site validation for JavaScript syntax, local links, course catalogue routes and required lesson data.
- [ ] Add more accessible graded assessments and improved course search.
- [ ] Add optional accounts and secure cross-device progress sync.
- [ ] Add a maintained, sourced technology-news feed alongside the curated Field Radar notes.

## Local quality checks

Run the static validation script from the repository root:

```bash
node scripts/validate-site.mjs
```

It checks JavaScript syntax, inline scripts, local HTML/Markdown links, catalogue destinations, required lesson structures and the main zero-to-hero navigation. It does not replace browser-based interaction tests or prove that third-party language execution and the live Pages deployment are working.

## Website deployment

A GitHub Actions workflow is included at `.github/workflows/pages.yml` to publish the static site from the repository root. In GitHub, open **Settings → Pages** and set the build and deployment source to **GitHub Actions** if it is not already selected. The workflow runs on pushes to `main` and can also be started manually from the Actions tab. After a successful deployment, GitHub shows the public Pages URL in Settings → Pages and in the workflow deployment environment.

## Local development

Open `index.html` through a local web server such as VS Code Live Server. The Python runtime and web fonts require an internet connection.

See [docs/PRODUCT_VISION.md](docs/PRODUCT_VISION.md) for the product principles, architecture direction, safety rules and long-term roadmap.

**Project status:** SkillSpring's public-facing rebrand, course library with 24 catalogue entries and Field Radar are committed to the public GitHub repository. A GitHub Pages deployment workflow has been added; its first successful run and public URL still need verification in the repository's Actions/Pages settings. The zero-to-hero logic, DSA and AI-assisted coding courses, Start Here guide and multi-language practice lab are now in the repository. The broader curriculum and live Pages deployment verification are still in progress.

## Interactive topic roadmaps

Every topic listed inside a learning school now opens a dedicated SkillSpring roadmap page. The roadmap view is organised into eight progressive milestones covering orientation, foundations, tools and first examples, guided practice, intermediate work, advanced practice, professional workflow and a capstone. It includes practice prompts, knowledge checks and local milestone tracking.

**Important scope note:** a roadmap is not the same as a fully written course. The roadmap pages provide a structured progression and school-specific learning framework; detailed concept-by-concept lessons, worked examples, exercises, assessments and projects still need to be authored for each individual topic. The 24 catalogue entries are the current detailed-course set, not proof that every catalogue topic is complete. Progress remains stored in the current browser only.

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
- **Microsoft Power BI** — data connections, Power Query, star-schema modelling, DAX measures, visuals, publishing concepts, security and a BI capstone.
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

The [coding lab](polyglot.html) includes in-browser Python (Pyodide), JavaScript, HTML/CSS preview and SQLite practice. For 22 other languages it provides editable starter files, download and local compiler/runtime commands. It is a lightweight editor, not a full IDE with language-server autocomplete, breakpoints or step debugging. An earlier Piston public-API integration was removed because the public API now requires authorization; SkillSpring does not embed third-party API keys. See the [official Piston API policy](https://github.com/engineer-man/piston#public-api).

## Learning order for a complete beginner

Read the [Start Here: Zero to Job-Ready Skills guide](docs/START_HERE_ZERO_TO_JOB.md) for the full staged learning sequence, daily problem-solving routine, role pathways and portfolio guidance.


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
