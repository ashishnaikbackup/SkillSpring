# SkillSpring learning design standard

## Promise and boundary

Every completed learning path should be usable by someone starting with no prior knowledge and should progress toward demonstrable professional competence. "Professional" means the learner can complete realistic tasks to a defined quality standard, explain decisions, test their work, document it and recognise when they need help. It does not mean a guaranteed job, licence or expert status.

The 12-school curriculum map is the scope blueprint. A school or course is not complete merely because it appears in the map. Each course family needs authored lessons, practice, assessment and editorial review.

## The eight-stage journey

Use these stages in dependency order. Do not assume learners know terminology from a later stage.

1. **Orientation and prerequisites** — explain what the field is, where it is used, required tools, safety, setup and the vocabulary needed for the first lesson.
2. **First principles** — define terms in plain language, explain why the concept exists and connect it to a familiar example.
3. **Guided foundations** — teach one small idea at a time; show worked examples with every important step and common misconception.
4. **Supported practice** — provide a worked task, hints, scaffolding and immediate explanatory feedback.
5. **Independent practice** — remove scaffolding gradually; include normal, boundary, invalid and unfamiliar cases with answer explanations.
6. **Integrated application** — combine earlier skills in a realistic mini-project, workflow or case study.
7. **Professional practice** — introduce tools, standards, quality checks, collaboration, documentation, security, accessibility, ethics and trade-offs appropriate to the field.
8. **Capstone and evidence** — require a portfolio-quality deliverable, a rubric, a reflection, an explanation/defence and role-specific next steps.

## Required lesson pattern

Each lesson should contain:

- Learning outcomes and prerequisite links.
- A short plain-language explanation and glossary for new terms.
- A worked example or demonstration, annotated step by step.
- A guided task, then an independent task.
- A knowledge check with explanatory feedback for correct and incorrect answers.
- Common errors, debugging or verification guidance.
- A real-world or professional connection.
- A clear mastery check and a link to what comes next.

For mathematical and engineering subjects, show derivations, units, assumptions, diagrams/waveforms where useful and intermediate steps. For software, show runnable code, expected output, tests and safe handling of data/secrets. For design, show research, rationale, prototypes, accessibility and usability evidence. For finance/business, use clearly labelled fictional examples and distinguish assumptions from verified facts.

## Mastery gates

Learners should not be encouraged to move forward simply because they opened a page or watched a video. Before progressing, they should be able to:

1. Explain the concept in their own words.
2. Reproduce or trace the worked example.
3. Solve a small variation without copying.
4. Test a boundary or failure case.
5. Explain one mistake, limitation or trade-off.

A multiple-choice check is useful feedback, but it is not sufficient evidence of professional skill. Each course also needs cumulative assessment and practical capstones.

## Progressively reduce support

- Beginner: definitions, visual explanation, worked solution, hints and small tasks.
- Developing: partially worked examples, guided choices and mixed exercises.
- Independent: unfamiliar problems, fewer hints, debugging and self-checking.
- Advanced: ambiguous requirements, trade-offs, constraints, critique and optimisation.
- Professional: real tools, standards, collaboration, documentation, review and delivery.

Do not jump from a definition to an advanced project without the practice steps in between.

## Assessment and project rubric

Every course family should eventually include a beginner project, an intermediate project and an advanced capstone. Rubrics should score correctness, reasoning, completeness, reliability, safety/ethics, accessibility/usability where relevant, documentation and communication. Publish acceptance criteria and sample evidence. Do not mark a course complete until a learner can demonstrate the outcomes, not merely finish the content.

## Motion and interaction principles

Motion should explain hierarchy, progression and feedback rather than distract:

- Use short entrance transitions and subtle card feedback.
- Animate progress only when progress changes.
- Use restrained looping motion for decorative hero elements.
- Never hide essential content behind an animation.
- Honour `prefers-reduced-motion` and preserve keyboard and screen-reader access.
- Keep interactions usable on low-power phones and avoid heavy animation libraries for simple effects.

## Current implementation versus remaining work

Implemented: the 12-school/eight-stage syllabus map, a four-step learning loop in the essential lesson player, per-lesson knowledge-check completion gating, graded JavaScript and SQL challenges, five starter practice labs, and a shared motion layer with reduced-motion handling.

Still required before a full mastery claim: complete authored textbook-quality lessons for every listed course family, richer guided and independent practice, multiple knowledge checks, cumulative/final practical assessments, three project levels and rubrics, real editorial review of the existing 24 courses, manual accessibility/device testing and course-by-course evidence that all mastery gates work. A syllabus, one quiz or a starter calculator is not a substitute for those requirements.
