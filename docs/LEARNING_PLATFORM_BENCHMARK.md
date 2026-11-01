# Learning-platform benchmark and SkillSpring design decisions

Last reviewed: 1 November 2026

This is a product-learning benchmark, not a request to copy another platform's lessons, visual identity, source code or proprietary exercises. Use the public product descriptions below to identify teaching patterns and translate them into original SkillSpring experiences.

## Platforms reviewed

| Platform | Useful teaching pattern | What SkillSpring should adapt |
|---|---|---|
| [Mimo](https://mimo.org/) | Short guided coding lessons, targeted practice, real projects and AI-assisted explanations/feedback. | Break concepts into small lessons, then require the learner to write and run code before moving on. Keep hints and explanations focused on the exact mistake. |
| [Brilliant](https://brilliant.org/faq/) | First-principles learning through visual and interactive problems; guided hints aim to help learners reason rather than simply reveal answers. | Add prediction questions, visual traces, step-by-step problem decomposition and graduated hints. Ask the learner to explain why an answer works. |
| [freeCodeCamp](https://www.freecodecamp.org/) | A structured curriculum with interactive challenges, projects, tests and verifiable project-based certification paths. | Build longer sequences where skills accumulate into practical projects. Use acceptance tests and clear project rubrics rather than treating a quiz score as mastery. |
| [Microsoft Learn](https://learn.microsoft.com/en-us/training/) | Role- and scenario-based learning paths, modular units, product documentation and practical applied-skill assessments. | Organise courses around real roles and workflows. For Power BI, teach data preparation, modelling, DAX, reporting, publishing and governance in that order. |
| [Microsoft Applied Skills](https://learn.microsoft.com/en-us/credentials/applied-skills) | Interactive lab-based assessments aligned to real-world tasks. | Add end-of-course practical tasks where learners produce a working artifact, not just select multiple-choice answers. |
| [Google Skillshop](https://skillshop.withgoogle.com/) | Product-expert training, self-paced learning paths, realistic business case studies and product-specific credentials. | For tools such as Analytics, Ads and Workspace, combine tool operation with the business objective and the metric the learner is trying to improve. |
| [Exercism](https://exercism.org/) | Focused programming exercises, feedback and opportunities to improve code quality and idiomatic style. | Give feedback on correctness and readability; include alternate solutions and explain trade-offs, not only whether tests pass. |

## Cross-platform principles to implement

1. **Explain before testing.** Introduce one idea in plain language, define its vocabulary and show why it matters.
2. **Demonstrate the reasoning.** Show a worked example and explain each important step, not only the final output.
3. **Make the learner predict.** Ask what code, a formula, a chart or a process will do before revealing the result.
4. **Practise immediately.** After a short explanation, require a small task using the new concept.
5. **Give specific feedback.** Distinguish syntax errors, logic errors, incorrect assumptions and incomplete requirements. Tell the learner what to inspect next.
6. **Use graduated hints.** First offer a conceptual hint, then a more concrete hint, and only then a worked solution.
7. **Require independent transfer.** Follow guided examples with a new problem whose surface details differ.
8. **Build something meaningful.** Each course should culminate in an artifact that resembles real work.
9. **Assess performance, not attendance.** Course completion should require evidence such as passing tests, a validated workbook, a report, a dashboard, a design case study or an explained engineering prototype.
10. **Teach reflection and revision.** Record common mistakes, revisit weak concepts and ask learners to improve earlier work.
11. **Design for mobile and accessibility.** Keep controls keyboard accessible, readable on small screens and respectful of reduced-motion settings.
12. **Keep claims honest.** A completed course is not an accredited qualification or a job guarantee. State prerequisites, tool/licence requirements and known limitations.

## Course-specific teaching patterns

### Programming and computer science

- Start with computer literacy, input/process/output and problem decomposition before language syntax.
- Teach one concept at a time: explanation → worked code → line-by-line walkthrough → execution trace → editable exercise → tests → debugging → independent exercise.
- Use runnable code for syntax and behaviour lessons. Do not mark a reading-only activity as a coding exercise.
- Include normal, boundary, invalid and empty-input tests.
- Build a sequence of small programs before a capstone.
- Teach AI coding as supervised assistance: plan, inspect diffs, understand generated code, test, secure and explain it.

### Data, Excel and Power BI

- Start from a business question and a small, well-labelled sample dataset.
- Teach data types, data quality, cleaning and transformation before chart design.
- Explain the grain of a table, dimensions, facts, relationships and star-schema modelling.
- Teach DAX measures, filter context and validation against independently calculated totals.
- Require a dashboard with clear KPI definitions, useful filters, accessible visuals and a short written recommendation.
- Include refresh, permissions, row-level security, licensing and data privacy limitations.

### Office and workplace productivity

- Teach workflows rather than button tours: prepare a report, manage a calendar, run a meeting, build a spreadsheet tracker, present a recommendation and automate a repeatable process.
- Provide realistic fictional briefs, templates and sample data.
- Require editable deliverables plus a quality checklist: accuracy, consistency, accessibility, file naming, versioning and handover.
- Note when a feature depends on Microsoft 365 plan, desktop/web version or organisation policy.

### Engineering, electronics and VLSI

- Teach the theory with diagrams, derivations, timing diagrams, waveforms and worked calculations.
- Pair each topic with a simulation, testbench, measurement interpretation or documented lab procedure where a safe and appropriate tool exists.
- Make learners predict expected behaviour before simulation, compare expected and observed results, and diagnose discrepancies.
- Do not imply a browser lesson replaces licensed EDA tools, physical lab equipment or supervised hardware testing.

### Finance, business and economics

- Use fictional, clearly labelled data and transparent assumptions.
- Require calculations, scenario comparisons, risk identification, source evaluation and concise decision memos.
- Explain uncertainty, liquidity, costs, taxes and jurisdiction-specific rules; separate education from personalised financial advice.
- Do not reward unsupported return forecasts or present a historical result as a guarantee.

### Design, media and communication

- Use a clear brief, target audience, constraints, examples and evaluation rubric.
- Teach iteration: first draft → critique → revision → accessibility/copyright check → portfolio case study.
- Assess the reasoning behind choices, not only visual polish.

### Career and professional skills

- Use realistic job descriptions and workplace scenarios.
- Require truthful CVs, project walkthroughs, role-specific skill matrices, mock interviews and feedback.
- Ask learners to explain their contribution and evidence; do not imply that a certificate alone proves competence.

## Current SkillSpring implementation

- A first dedicated [Python coding practice path](../python-practice.html) now includes ten browser-run challenges with automated assertions, hints, solutions and local progress.
- The 16-module [Python course](../python-course.html) provides the longer conceptual path and a personal-expense-tracker capstone.
- The [Power BI course](../essential-course.html?course=powerbi) now links to a hands-on [retail dashboard capstone](../powerbi-project.html) with fictional Sales, Products and Regions CSV data, model relationships, DAX measures, report tasks and validation checks. It still needs a full browser-level Power BI assessment; learners must use Power BI Desktop to produce the PBIX artifact.
- The [Start Here guide](../start-here.html) explains the beginner learning order. DSA is intentionally positioned after Python fundamentals.

## Gaps to close next

1. Expand Python practice beyond ten introductory challenges into progressive, testable problems and project checkpoints.
2. Add interactive JavaScript and SQL challenge tracks with test cases.
3. Upgrade the generic essential-course player from a single multiple-choice question to richer quizzes, multiple attempts, hints and explanatory feedback.
4. Add sample datasets and a validated Power BI project with a data dictionary, model diagram and DAX checks.
5. Add task-based Word, Excel, PowerPoint, Outlook/Teams and Power Automate assessments.
6. Build safe simulation/trace activities for logic, networking, digital logic and VLSI.
7. Add course review metadata and a source-check process. Do not automatically overwrite teaching content from unreviewed web pages.
8. Add a sourced Field Radar feed separately from evergreen lessons, with publication dates and source links.

## References

- Mimo: https://mimo.org/
- Brilliant FAQ: https://brilliant.org/faq/
- Brilliant coding: https://brilliant.org/topics/coding/
- freeCodeCamp: https://www.freecodecamp.org/
- Microsoft Learn training: https://learn.microsoft.com/en-us/training/
- Microsoft Power BI learning paths: https://learn.microsoft.com/en-us/power-bi/fundamentals/power-bi-learning-path-directory
- Microsoft Applied Skills: https://learn.microsoft.com/en-us/credentials/applied-skills
- Google Skillshop: https://skillshop.withgoogle.com/
- Exercism: https://exercism.org/
