# SkillSpring — Learn. Build. Practise. Master.

SkillSpring is a modular beginner-to-professional learning and personal productivity platform. Its goal is to help people start from absolute zero, develop practical skills across many disciplines, and demonstrate what they can do through exercises and projects.

## Current platform build

The repository now includes a responsive learning-platform dashboard, a complete Python course, six additional foundational courses and a field-trend learning section. It includes:
- 12 learning schools and a searchable subject catalogue.
- Programming language coverage including Python, C, C++, Java, JavaScript, TypeScript, C#, Go, Rust, PHP, Ruby, Kotlin, Swift, HTML, CSS, SQL and Bash.
- Paths across programming, web development, AI/data, electronics/VLSI, finance, office skills and business.
- Seven-stage learning progression from absolute beginner to mastery.
- School detail pages and locally saved learning interests.
- Navigation for practice labs, project studio, personal finance, office/productivity and career centre.
- A browser-based Python playground powered by Pyodide.

Learning progress and saved schools currently use browser local storage on the current device. They are not yet synchronised across devices or user accounts.

## Published self-paced coursess\n\n- [Python: Zero to Professional Foundations](python-course.html) — 16 modules from programming basics through APIs, SQLite and a portfolio capstone.
- [Course library](courses.html) — published foundations courses for C, C++, JavaScript, HTML/CSS, SQL and personal finance. Each has six guided modules, examples, explanations, practice tasks and knowledge checks.\n- [Field Radar](field-radar.html) — concise educational trend notes and suggested next skills across the learning schools. It is a curated learning resource, not a live news feed.\n\nCourse completion is currently saved in browser local storage on the learner's device.\n\n## Learning schools

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

Each school is intended to grow into structured courses with beginner-friendly explanations, worked examples, exercises, quizzes, notes, projects, assessments and professional practice. The current catalogue is a roadmap and navigation foundation; it does not mean every listed topic already has a complete course.

## Roadmap

- [x] Establish product vision and learning-school structure.
- [x] Create the responsive platform dashboard and catalogue.
- [x] Preserve the browser Python playground.
- [x] Publish the first complete self-paced Python course with 16 modules, explanations, examples, practice tasks, knowledge checks and a capstone project.
- [x] Add browser-local course progress and module navigation.
- [x] Add Field Radar notes covering AI, software, data, UX, cybersecurity, cloud, engineering, finance and management.
- [ ] Add an interactive SQL/SQLite practice lab.
- [ ] Add spreadsheet practice with sample datasets.
- [ ] Build real personal workspace tools and privacy controls.
- [ ] Add additional programming language execution through secure isolated sandboxes.
- [ ] Expand all schools into full courses and practical professional pathways.
- [ ] Add optional AI tutoring and personalised revision.

## Technical direction

The prototype uses HTML, CSS and JavaScript, with Pyodide for browser-based Python. React/TypeScript, Supabase, secure backend services and optional AI integrations can be introduced as the application grows.

Never execute untrusted code on the main application server. Multi-language execution requires isolated sandboxes with resource limits. Never expose AI provider secrets in frontend code. Finance tools should be educational and organisational, not guarantees of investment returns or automated financial advice.

## Development

Open `index.html` through a local web server such as VS Code Live Server. An internet connection is needed for the Pyodide runtime and Google Fonts.

## Product blueprint

See [docs/PRODUCT_VISION.md](docs/PRODUCT_VISION.md) for the complete product definition, course structure, safety principles, architecture and phased roadmap.

## Project status

**Status:** Rebranded as SkillSpring. The platform has one expanded 16-module Python course, six additional six-module foundations courses, a course library and Field Radar. These are meaningful first curricula, not a claim that every discipline or professional specialisation is complete. More depth, hands-on execution labs, spreadsheet tools, additional subject courses, accessibility testing, automated tests and cross-device accounts remain in development.