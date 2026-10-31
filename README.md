# SkillSpring — Learn. Practise. Build.

**SkillSpring** is a beginner-first self-learning platform designed to take learners from first principles to practical, portfolio-ready work across technology, design, data, business and personal skills.

The public-facing product is branded SkillSpring. The repository is currently still named `RunCode`; the repository slug can be renamed separately in GitHub Settings.

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

The Python course currently has 16 modules. The other 11 courses have six guided modules each. They are substantial beginner foundations, not claims of complete professional mastery or exhaustive coverage of every tool in each field.

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
- Multi-language code execution is not yet provided. Do not run untrusted code on an application server; future execution environments must use isolated sandboxes with resource limits.
- Never put API keys, passwords, banking credentials or private learner data in frontend code or public repositories.
- Finance material is educational and does not guarantee returns or replace qualified financial advice.

## Roadmap

- [x] Establish SkillSpring's product direction and 12 learning schools.
- [x] Build the responsive learning dashboard and catalogue.
- [x] Publish the 16-module Python course and 11 additional six-module foundation courses.
- [x] Add the Field Radar learning section.
- [ ] Deepen every course with more lessons, worked solutions, graded practice and larger projects.
- [ ] Add interactive SQL, spreadsheet, data and electronics practice labs.
- [ ] Add full courses for the remaining programming languages and learning schools.
- [ ] Add accessible assessments, automated site tests and improved course search.
- [ ] Add optional accounts and secure cross-device progress sync.
- [ ] Add a maintained, sourced technology-news feed alongside the curated Field Radar notes.

## Development

Open `index.html` through a local web server such as VS Code Live Server. The Python runtime and web fonts require an internet connection.

See [docs/PRODUCT_VISION.md](docs/PRODUCT_VISION.md) for the product principles, architecture direction, safety rules and long-term roadmap.

**Project status:** SkillSpring's public-facing rebrand, course library, 12 course pages and Field Radar are committed to the public GitHub repository. GitHub Pages deployment has not yet been verified, and the broader curriculum is still being built in stages.
