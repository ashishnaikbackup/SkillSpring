# SkillSpring — Product Vision & Master Roadmap

## Product definition

SkillSpring is a beginner-to-professional learning and personal productivity platform. It is designed to help a learner start with no prior knowledge, develop practical skills across technology and business disciplines, build evidence of competence through projects, and organise useful parts of their personal and professional life.

It is not merely a code editor or a collection of links. It is a modular learning environment with a consistent teaching system, hands-on practice, assessments, projects, progress tracking and optional personal tools.

## Product principles

1. Beginner-first: explain every subject from zero and define unfamiliar terms.
2. Practical-first: every major concept should connect to an exercise, tool or real-world example.
3. Structured progression: foundation → beginner → intermediate → advanced → professional → mastery.
4. Honest outcomes: distinguish course completion from accredited qualifications or guaranteed job readiness.
5. Modular architecture: subjects and tools should be independently addable.
6. Accessible and affordable: core learning should work without paid AI APIs.
7. Privacy-first: personal finance and workspace data must be private and protected.
8. Safe execution: arbitrary code must never run on the main application server.

## Learning schools

### 1. Programming & software development
Computer fundamentals, programming logic, Python, C, C++, Java, JavaScript, TypeScript, C#, Go, Rust, PHP, Ruby, Kotlin, Swift, Bash, HTML, CSS, data structures, algorithms, OOP, Git, testing, debugging, APIs, software architecture and deployment.

### 2. Web, app & UI/UX
Frontend, backend, full-stack development, responsive design, accessibility, UX research, information architecture, wireframing, prototyping, Figma, design systems, mobile apps and deployment.

### 3. AI, data & automation
AI literacy, prompt engineering, Python for data, statistics, data analysis, machine learning, deep learning, generative AI, LLMs, embeddings, RAG, AI agents, APIs, workflow automation, evaluation, privacy and responsible AI.

### 4. Electronics, VLSI & engineering
Electrical and electronics foundations, digital logic, analog electronics, circuit analysis, microcontrollers, embedded C, Arduino, ESP32, sensors, IoT, PCB concepts, Verilog, SystemVerilog, FPGA, VLSI, semiconductor fundamentals, robotics, simulation and hardware debugging.

### 5. Office & productivity software
Spreadsheets, Excel, Google Sheets, formulas, charts, pivot tables, data cleaning, dashboards, Word, Docs, PowerPoint, Slides, professional reports, email, PDF workflows and office automation.

### 6. Personal finance & economics
Money fundamentals, budgeting, saving, banking, credit, loans, taxes (India-focused learning with jurisdiction/date caveats), insurance, inflation, interest, mutual funds, SIPs, stocks, bonds, ETFs, gold, real estate, diversification, risk, portfolio concepts and global economics. Educational simulations only; no guaranteed returns or personalised investment execution.

### 7. Business, accounting & management
Accounting fundamentals, financial statements, business models, marketing, sales, operations, project management, HR, strategy, entrepreneurship, leadership, business analytics and decision-making.

### 8. IT, networking, cloud & cybersecurity
Computer hardware, operating systems, Linux, networking, databases, cloud concepts, DevOps, containers, system administration, security fundamentals, privacy and ethical security labs.

### 9. Career & professional skills
Communication, professional English, writing, presentations, teamwork, negotiation, critical thinking, CV/resume, LinkedIn, interviews, workplace skills, job search and portfolio development.

### 10. Creative & digital media
Graphic design, branding, typography, image editing, video editing, audio, animation, photography, content creation, social media and digital marketing.

### 11. Personal productivity & knowledge management
Goals, planning, calendars, tasks, habits, note-taking, personal knowledge base, decision journals, time management and project organisation.

### 12. Mathematics, science & research
Arithmetic, algebra, geometry, calculus, probability, statistics, physics, chemistry, logic, scientific reasoning, research methods and data literacy.

## Standard course structure

Every course should contain:
- Course overview, prerequisites and measurable outcomes.
- A placement or diagnostic check where useful.
- Modules, lessons and clear learning objectives.
- Plain-language explanations and worked examples.
- Visual aids and real-world use cases where they add value.
- Guided practice and independent exercises.
- Knowledge checks, quizzes and answer explanations.
- Notes, glossary, revision and flashcards.
- Assignments and practical projects.
- Module assessments and a final capstone.
- Progress tracking and recommendations for what to learn next.

Levels: Level 0 absolute beginner; Level 1 foundations; Level 2 beginner practice; Level 3 intermediate; Level 4 advanced; Level 5 professional practice; Level 6 mastery.

Do not label a learner professional solely because they completed lessons. Use practical rubrics and project evidence.

## Practice labs

- Code lab: retain the existing Pyodide-powered Python runner as the first working lab.
- SQL lab: begin with a browser-based SQLite environment and sample databases.
- Spreadsheet lab: guided formula, data-cleaning, pivot-table and dashboard exercises; use safe sample workbooks or browser-native datasets.
- Design lab: briefs, wireframes, design critique checklists and prototype exercises.
- Finance lab: budget, compound-interest, loan and diversified-portfolio simulations using clearly labelled sample data.
- Business lab: case studies, cash-flow exercises, pricing and decision simulations.
- Engineering lab: interactive circuit/logic exercises and supported HDL simulation integrations as feasible.

For languages beyond browser-safe runtimes, use isolated execution infrastructure with time, memory, network and filesystem restrictions. Never execute untrusted code on the main application server.

## Personal workspace

Separate from courses:
- My Finance: income/expense ledger, budgets, savings goals, debt overview and educational investment tracker.
- My Office: document, spreadsheet, presentation and PDF templates/utilities.
- My Projects: tasks, milestones, deadlines, notes and project status.
- My Career: skills inventory, CV drafts, applications and interview practice.
- My Knowledge: notes, saved lessons, glossary and revision cards.
- My Goals: daily, weekly and long-term goals.

Personal records must be private by default. Clearly separate sample/demo data from user-entered data. Do not connect financial accounts or make transactions without explicit consent and a secure supported integration.

## AI tutor

Optional AI features:
- Explain at the learner's current level.
- Give hints before revealing full solutions.
- Review submitted work against transparent rubrics.
- Generate practice questions and revision plans.
- Summarise learner-owned notes.
- Recommend next lessons based on demonstrated gaps.

The platform must remain useful without an AI API key. Do not expose provider secrets in frontend code. Add provider integrations through a secure backend and let users know when AI output may be inaccurate.

## Suggested technical direction

Start with the existing static HTML/CSS/JavaScript project and working Pyodide runtime. Refactor into reusable modules before expanding.

When complexity justifies it:
- Frontend: React + TypeScript.
- Styling: accessible responsive design system with reusable components.
- Backend/data: Supabase Auth, PostgreSQL and Storage, with row-level security.
- SQL practice: SQLite in browser for introductory exercises.
- Charts: a maintained JavaScript chart library.
- AI: provider-independent server-side adapter; optional, not required for core learning.
- Hosting: static hosting for an early prototype; a full-stack host for authenticated and server-backed features.

Security requirements: row-level security, input validation, rate limits, secret management, secure code sandboxes, privacy controls, backups and clear data export/deletion options.

## Delivery phases

### Phase 0 — Product foundation
- Confirm product structure and visual identity.
- Build responsive dashboard and navigation.
- Add school catalogue, search, course detail and learning-path views.
- Create reusable lesson, quiz, progress and project data models.
- Preserve the existing Python playground.

### Phase 1 — First complete learning journey
- Build one end-to-end Python beginner course.
- Include lessons, examples, exercises, quizzes, notes and a capstone.
- Save progress locally initially; introduce accounts and database persistence when ready.
- Test on mobile and desktop.

### Phase 2 — Core practice tools
- Improve Python lab.
- Add SQL/SQLite lab.
- Add spreadsheet practice modules and sample datasets.
- Add project submissions and rubrics.

### Phase 3 — Personal workspace
- Add projects, goals, notes and office templates.
- Add private personal finance tracking and educational calculators.
- Add privacy and export controls before storing sensitive user data.

### Phase 4 — More schools and professional pathways
- Expand language courses and safe execution support.
- Add UI/UX, AI/data, engineering, IT, business and career pathways.
- Add portfolio projects, case studies and advanced assessments.

### Phase 5 — AI and personalisation
- Add optional AI tutor, feedback and recommendations.
- Add adaptive revision and learning analytics.
- Evaluate AI quality, safety, cost and privacy.

## Initial release acceptance criteria

- The homepage clearly explains the platform and its schools.
- Navigation works on mobile and desktop.
- Course cards open meaningful course pages.
- At least one beginner course is genuinely complete, not placeholder content.
- Python lab still executes supported code and displays output/errors.
- Learning progress is visible and persists using the chosen storage approach.
- No buttons falsely imply unavailable functionality.
- No API secrets or unsafe server-side code execution.
- README documents setup, architecture, limitations and roadmap.

## Product success definition

A beginner can choose a path, understand the first lesson, practise a concept, receive useful feedback, complete a project and see their progress. A returning learner can also use the personal workspace independently of courses.
