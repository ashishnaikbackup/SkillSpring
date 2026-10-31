# RunCode — Learn. Build. Practise. Master.

RunCode is evolving from a browser-based Python playground into a beginner-to-professional learning and personal productivity platform.

The vision: one modular place to learn programming, technology, engineering, AI, design, office tools, finance, business, management and professional skills — starting from absolute zero and progressing through practical work and projects.

## What RunCode will cover

1. Programming & Software Development — Python, C, C++, Java, JavaScript, TypeScript and more.
2. Web, App & UI/UX Design — frontend, backend, full-stack, responsive design, UX research and prototyping.
3. AI, Data Science & Automation — AI fundamentals, machine learning, LLMs, agents, data analysis and automation.
4. Electronics, VLSI & Engineering — digital/analog electronics, embedded systems, Arduino, ESP32, FPGA, Verilog and SystemVerilog.
5. Office & Productivity — Excel, Google Sheets, Word, Docs, PowerPoint, Slides, reports and dashboards.
6. Personal Finance & Economics — budgeting, saving, banking, credit, taxes, insurance, investing concepts and economics.
7. Business & Management — accounting, marketing, operations, project management, entrepreneurship and leadership.
8. IT, Networking, Cloud & Cybersecurity — Linux, operating systems, networking, cloud, DevOps and safe security labs.
9. Career & Professional Skills — communication, writing, CVs, interviews, teamwork and portfolio development.
10. Creative & Digital Media — graphic design, branding, video, audio, animation and digital marketing.
11. Personal Productivity — goals, tasks, calendars, notes, habits and project organisation.
12. Mathematics, Science & Research — maths, statistics, physics, chemistry, logic and research skills.

## How learning works

Every course should provide a clear path:
- Level 0: Absolute beginner
- Level 1: Foundations
- Level 2: Beginner practice
- Level 3: Intermediate
- Level 4: Advanced
- Level 5: Professional practice
- Level 6: Mastery

Lessons will combine plain-language explanations, examples, guided exercises, quizzes, revision notes, assignments and practical projects. Professional competence is demonstrated through work and assessments — not just course completion.

## Personal workspace

Alongside courses, RunCode will offer separate areas for personal finance tracking, office templates, projects, career planning, notes, goals and productivity. Personal data will be private by default.

## Current implementation

The current repository is the starting prototype:
- Browser-based Python 3 playground powered by Pyodide.
- Code editor with indentation support.
- Input panel for Python `input()`.
- Output and error display.
- Keyboard shortcut: Ctrl+Enter / Cmd+Enter.
- Copy output and responsive layout.

The existing Python playground should be preserved while the wider platform is developed.

## Product roadmap

- [ ] Build the responsive learning-platform dashboard and navigation.
- [ ] Add school catalogue, search, course pages and learning paths.
- [ ] Build one complete beginner-to-project Python course.
- [ ] Add reusable lesson, quiz, notes and progress components.
- [ ] Add SQL/SQLite practice lab.
- [ ] Add spreadsheet practice modules and sample datasets.
- [ ] Add project workspace, goals and notes.
- [ ] Add private personal finance tools and educational simulators.
- [ ] Expand into UI/UX, AI/data, engineering, IT, business and career courses.
- [ ] Add optional AI tutor and personalised recommendations.
- [ ] Add secure isolated execution for additional programming languages.

See **[docs/PRODUCT_VISION.md](docs/PRODUCT_VISION.md)** for the full product definition, learning structure, technical direction, safety principles and phased roadmap.

## Technology direction

Start with the current HTML, CSS and JavaScript prototype and Pyodide. Introduce React/TypeScript, Supabase, secure backend services and optional AI integrations as the product requires them.

Security matters: untrusted code must run in isolated sandboxes, not on the main application server. AI must remain optional, and provider secrets must never be exposed in frontend code. Finance tools are educational and organisational, not guarantees of investment returns or automated financial advice.

## Local development

Open `index.html` through a local web server such as VS Code Live Server. An internet connection is required to load Pyodide from its CDN.

## Project status

**Current status:** Python playground prototype; broader learning platform is in planning and phased development. Features listed in the vision are not necessarily implemented yet.
