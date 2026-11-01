# SkillSpring Master Curriculum Blueprint

## Product promise
SkillSpring is designed for a learner who starts with no prior knowledge and wants to build practical competence, create credible portfolio evidence and prepare for role-specific interviews. A course title is not a qualification. A learner must practise, build, receive feedback and demonstrate their work.

## Standard required for every complete course
Every full course must contain:
1. Who it is for, prerequisites, outcomes, glossary and setup instructions.
2. A plain-language first-principles introduction. Define every new term.
3. Concept-by-concept lessons in a dependency-aware order.
4. Worked examples with every important step explained.
5. Guided exercises, independent exercises and answer explanations.
6. Knowledge checks, cumulative assessments and a final practical assessment.
7. Beginner, intermediate and advanced projects with rubrics.
8. Real-world workflow, common errors, debugging, quality checks and safety/privacy.
9. Professional tools, documentation, standards and collaboration habits.
10. Portfolio deliverables, interview questions, model answer guidance and a role-readiness checklist.
11. References to official documentation and a date/review note for changing products.
12. Accessibility, mobile usability and a clear path to ask for help.

## Learning schools and course families

### 1. Programming & software development
Core sequence: computer fundamentals → computational thinking → one beginner language → debugging → data structures and algorithms → OOP and design → Git → testing → APIs → databases → security basics → deployment → software architecture.
Course families to build: Python, C, C++, Java, JavaScript, TypeScript, C#, Go, Rust, PHP, Ruby, Kotlin, Swift, Dart, R, MATLAB, Bash/PowerShell, HTML/CSS, SQL, data structures, algorithms, testing, APIs and architecture.
Portfolio: CLI tools, automation, web applications, database-backed application, tested API and documented capstone.
Interview readiness: language fundamentals, problem solving, complexity, OOP, SQL, debugging, project walkthrough and behavioural questions.

### 2. Web, app and UI/UX
Sequence: web fundamentals → semantic HTML/CSS → responsive design → JavaScript → browser APIs → accessibility → Git → frontend framework → backend/API → database → authentication/security → testing/deployment.
Design sequence: user research → problem framing → information architecture → wireframes → visual design → design systems → prototypes → usability/accessibility testing → handoff.
Portfolio: responsive site, app prototype, end-to-end product case study.

### 3. AI, data science and automation
Sequence: Python → data literacy → statistics/probability → SQL → data cleaning → visualisation → machine learning → evaluation → generative AI and LLM foundations → retrieval and tool use → responsible AI → deployment/monitoring.
Portfolio: analysis report, baseline ML model, evaluated AI workflow with test set and documented limitations.
Interview readiness: statistics, leakage, metrics, model selection, data quality, system design and responsible AI.

### 4. Electronics, VLSI and engineering
Sequence: maths/physics → electrical fundamentals → circuit analysis → digital logic → semiconductor/device fundamentals → analog/digital electronics → embedded C → microcontrollers and sensors → Verilog/SystemVerilog → simulation/verification → FPGA → CMOS/VLSI concepts → timing/power/area → design verification and documentation.
Portfolio: circuit simulation, embedded sensor system, HDL modules/testbenches, FPGA demonstrator and technical report.
Interview readiness: fundamentals, derivations, timing/waveforms, debugging, trade-offs and project defence.

### 5. Office, documents and productivity
Essential tools: Word, Excel, PowerPoint, Outlook, Teams, OneNote, PDF workflows, Google Docs/Sheets/Slides/Drive and professional file management.
Advanced work: Excel formulas, lookups, PivotTables, Power Query, data validation, dashboards, Power BI, Access/database concepts and Power Automate.
Portfolio: professional report, presentation, refreshable spreadsheet model, Power BI dashboard and documented workflow automation.

### 6. Personal finance and economics
Sequence: money and cash flow → budgeting → banking/payment systems → interest/inflation → credit/debt → tax basics with local jurisdiction context → insurance → emergency planning → asset classes → diversification/risk → funds/stocks/bonds/gold/real estate → financial statements → macroeconomics/global markets → research and fraud awareness.
Practice must use clearly labelled fictional examples. Avoid personalised investment recommendations and teach risk, fees, liquidity, tax/legal limits and source quality.

### 7. Business, accounting and management
Sequence: business models → accounting equation → bookkeeping → financial statements → budgeting/forecasting → unit economics → market research → marketing/sales → operations → project management → people/leadership → strategy → governance and controls.
Portfolio: business case, financial model, dashboard, process map and operating review.

### 8. IT, networking, cloud and cybersecurity
Sequence: computer fundamentals → operating systems → Linux/CLI → networking/IP/subnetting/DNS/HTTP → databases → virtualisation → cloud fundamentals → identity/access → security principles → defensive labs → scripting → containers/CI/CD → monitoring/incident response.
Security practice must stay authorised, defensive and isolated. Portfolio: documented lab, network design, secure deployment, incident runbook.

### 9. Career and professional skills
Sequence: role research → communication → CV/resume → portfolio → LinkedIn/professional presence → behavioural interviews (STAR) → technical interview practice → group discussion/presentation → workplace collaboration → negotiation and job search.
Every learner should graduate with a truthful CV, project case studies, role-specific question bank, mock interview feedback and a development plan. Do not guarantee a job offer.

### 10. Creative and digital media
Sequence: visual communication → design principles → tools → image editing → branding → video/audio editing → motion → storytelling → content strategy → publishing/analytics → copyright/licensing/accessibility.
Portfolio: brand kit, edited media project, content campaign and case study.

### 11. Personal productivity and knowledge
Sequence: capture → task/project organisation → calendars → prioritisation → focus → note-taking → active recall/spaced practice → decision systems → lightweight automation → sustainable review.
Portfolio: a documented personal operating system and learning plan.

### 12. Mathematics, science and research
Sequence: arithmetic → algebra → geometry/trigonometry → functions → calculus → probability/statistics → logic → physics/chemistry foundations → scientific reasoning → data literacy → research methods and technical writing.
Lessons must show derivations and worked solutions, not only final answers.

## Role-based learning paths
- Junior software developer: programming foundations, Git, DSA, SQL, APIs, testing, projects and interviews.
- Data analyst: Excel, SQL, statistics, Power BI, data storytelling and portfolio.
- Business/finance analyst: Excel, accounting, financial statements, Power BI, economics and communication.
- IT support/network technician: computer fundamentals, OS, Linux, networking, troubleshooting, security and documentation.
- Junior web developer: HTML/CSS, JavaScript, Git, responsive design, APIs, accessibility and deployed projects.
- VLSI/embedded candidate: circuits, digital logic, C, microcontrollers, HDL, simulation, verification and technical defence.
- Office administrator/operations: Word, Excel, PowerPoint, Outlook/Teams, records, reporting and workflow automation.
- Entry-level business role: communication, Excel, accounting basics, presentations, project management and interview preparation.

## Quality gates before calling a course complete
- All navigation links open the intended lesson.
- No placeholder topic is presented as a complete course.
- Every lesson includes concept, example, task and assessment.
- Exercises have expected outcomes or solution explanations.
- Capstone has a rubric and evidence checklist.
- Mobile layout, keyboard access and progress persistence are tested.
- Product-version-dependent features are clearly labelled.
- References and changing facts are reviewed.
- A learner with no prior knowledge can follow prerequisites without unexplained jumps.

## Current implementation note

The public site is deployed at [ashishnaikbackup.github.io/SkillSpring](https://ashishnaikbackup.github.io/SkillSpring/). On 1 November 2026, the GitHub Actions quality workflow, weekly freshness workflow and Pages deployment all completed successfully. The Pages workflow smoke-tested the homepage, Start Here, course catalogue, multi-language lab, logic course route, Python practice, Power BI project, Field Radar, feed JSON, sample CSVs and core assets. Static validation and HTTP smoke tests do not replace hands-on browser testing of every interaction or external application workflow.
The public catalogue contains 24 course entries: 12 original language, web, data, design and finance foundations plus 12 essential lesson-based courses (Word, PowerPoint, Excel, Power BI, Interview/Career Readiness, Outlook/Teams, Access, Power Automate, Git/GitHub, absolute-beginner programming logic, DSA and AI-assisted/vibe coding). The essential lesson-player data contains 12 detailed courses and 98 lessons. The topic catalogue routes matching subjects to these course pages. A multi-language practice page provides browser execution for Python, JavaScript, HTML/CSS preview and SQLite, plus downloadable source and local-run commands for additional languages. This is a meaningful expansion, not completion of every course family above; compiled-language execution occurs on the learner's own computer and the lightweight editor is not a full IDE. The remaining course families must be authored to the same standard before SkillSpring can claim comprehensive coverage.

## Absolute-beginner programming sequence

For a learner with no coding or logic background, use this exact dependency order before advanced topics:
1. Digital literacy: computer parts, operating systems, files/folders, browser, terminal basics and safe downloads.
2. What programs do: input → processing → output; instructions, algorithms and precise steps.
3. Computational thinking: decomposition, patterns, abstraction, pseudocode and flowcharts.
4. First language (Python recommended): values, variables, types, expressions, input/output, decisions, loops, functions and collections.
5. Debugging and correctness: trace tables, error categories, test cases, boundary conditions and readable code.
6. Small programs: calculator, number guessing, unit converter, quiz, file organiser and simple data report.
7. Git/GitHub: repository, commits, branches, pull requests, README and safe secret handling.
8. DSA prerequisites: arrays/strings, maps/sets, linked lists, stacks/queues, recursion and Big-O.
9. DSA core: searching, sorting, trees, heaps, graphs, greedy methods, backtracking and dynamic programming.
10. Professional practice: testing, SQL, APIs, code review, documentation, deployment, security and maintainability.
11. Portfolio and hiring: 3–5 well-explained projects, role-specific skills matrix, CV, interview practice and honest skill evidence.

## AI-assisted development pathway

Teach learners to use AI coding tools as a supervised accelerator, not as a substitute for understanding:
- Define requirements and acceptance criteria before prompting.
- Ask for architecture and a small implementation plan.
- Work in small, reviewable diffs and keep Git checkpoints.
- Understand every important generated file and data flow.
- Debug with reproducible errors and evidence.
- Write and independently verify tests.
- Review security, privacy, dependency and licensing risks.
- Deploy to a preview, test it and maintain rollback capability.
- Be able to explain and modify the delivered code without the assistant.

## Power BI practical capstone status

The Power BI course now links to a hands-on [retail sales dashboard project](../powerbi-project.html) with three fictional CSV datasets (Sales, Products and Regions), a star-schema relationship task, a date table, DAX measures, visual/report requirements, validation steps and portfolio deliverables. The PBIX must be created in Power BI Desktop; SkillSpring supplies the data and guided brief but does not run the Power BI engine in the browser.

## Interactive Python practice status

A dedicated [Python coding practice path](../python-practice.html) has been added with ten progressive challenges: output, variables, arithmetic, conditions, loops, functions, lists, dictionaries, debugging and a mini expense-total capstone. It executes Python in-browser through Pyodide, checks learner code with automated assertions, provides hints and revealable example solutions, and stores code/progress in local storage. It is a first practical coding loop, not yet a full autograder, debugger or account-synchronised assessment system. The learner must still read feedback, understand the code and practise independently.

## Multi-language practice lab status

The current standalone lab offers Python through Pyodide, JavaScript execution in a sandboxed browser frame, HTML/CSS/JS preview and SQLite via sql.js. For additional languages it provides downloadable starter files and local compiler/runtime instructions. It does not claim online execution for those languages. The current editor is a lightweight textarea, not a full language-server IDE. Do not advertise debugger, autocomplete or guaranteed execution where not implemented.


## Curriculum expansion delivered — 1 November 2026

The interactive [12-school curriculum map](../curriculum-map.html) now publishes an eight-stage sequence for each school, with the course families in scope, a school-specific worked-example standard, assessment expectations and portfolio capstone. It is a syllabus and scope-control tool. It does not claim that all listed course families have fully authored lessons.

The [graded practice studio](../advanced-practice.html) adds eight JavaScript challenges and eight SQL/SQLite challenges. Each includes a task, starter code/query, test criteria, hint and example solution. JavaScript runs in a sandboxed iframe; SQL runs in a browser-local SQLite database seeded with fictional learner/customer/order records. Passing state is stored locally in the browser. These are learning exercises, not secure production execution environments.

### Remaining completion standard

For every course family listed above, author and review the full course before marking it complete: prerequisites, glossary, sequenced concept lessons, worked examples with reasoning, guided and independent exercises, answer explanations, multiple knowledge checks, cumulative and final practical assessments, beginner/intermediate/advanced projects, rubrics, professional workflow, safety/accessibility, official references, portfolio evidence and role-specific interview preparation. The 24 existing catalogue courses still require their initial editorial audit; do not invent review dates or close issue #2 without a real lesson-by-lesson check.

Practice coverage still to add includes spreadsheet modelling, data analysis/statistics, electronics/circuit/HDL verification, networking/subnetting and design critique/prototype evaluation. Cross-device accounts/sync and a full language-server IDE remain separate product/platform projects, not prerequisites for publishing the static learning content.


**Assessment behaviour update:** The 12 essential lesson-player courses now require the learner to pass that lesson's knowledge check before marking it complete. Correct answers unlock completion and provide feedback; incorrect answers show the correct answer and prompt a review. This is a per-lesson gate, not yet a multi-question cumulative final exam or a substitute for the course-level assessments still required.
