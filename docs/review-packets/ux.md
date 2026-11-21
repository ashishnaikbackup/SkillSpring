# Review packet: UI/UX Design Foundations

- Course key: `ux`  ·  Lessons: 7  ·  Review interval: 180 days
- Current status: `initial-review-required`  ·  Last reviewed: never
- Content files: `course-engine.js`
- Official sources to check against:
  - https://www.w3.org/WAI/
  - https://www.nngroup.com/articles/

## Reviewer checklist (tick after reading all lessons)

- [ ] Facts, definitions and terminology are correct
- [ ] Tool names, versions, menus and commands match current official documentation
- [ ] Every code example runs and produces the stated output
- [ ] Each knowledge-check answer is correct and the wrong options are clearly wrong
- [ ] Tasks are achievable by a beginner and prerequisites are taught first
- [ ] No unsafe, legal, tax or medical advice presented as professional advice
- [ ] India-specific statements (laws, exams, tools, salaries) are accurate or removed
- [ ] Nothing important for a job-ready beginner is missing (list gaps below)

Reviewer name: ________   Date: ________   Outcome: approve / approve with fixes / rewrite

## Course introduction

Learn user-centred design, research, information architecture, wireframes, visual systems, prototyping and usability evaluation.

## Lessons

### 1. What is UX and UI?

**Concept.** User experience concerns the whole experience of using a product; user interface concerns the controls and visual surfaces people interact with. Start with user needs and the task, not decoration.

**Example**

```
Problem statement template: [user] needs a way to [goal] because [insight].
Success measure: [observable outcome].
```

**Explanation / note.** A clear problem statement avoids jumping to a favourite feature. UX work involves research, design, testing and iteration.

**Task.** Choose a familiar app and identify one user group, one task and one friction point.

**Quiz.** What should guide product design decisions?
- Correct: User needs and evidence about their tasks
- Wrong: Only visual trends
- Wrong: The designer's favourite colour

**Findings:** _none yet_

### 2. Research & problem framing

**Concept.** Research methods include interviews, observation, surveys and analysis of existing feedback. Ask neutral questions about behaviour and context. Avoid leading questions and do not collect unnecessary personal information.

**Example**

```
Interview prompt: 'Tell me about the last time you tried to complete this task. What happened next?'
```

**Explanation / note.** Past behaviour is often more informative than asking people to predict what they might do. Record themes, not unsupported assumptions.

**Task.** Write five neutral interview questions for a student planning a weekly study schedule.

**Quiz.** Why avoid leading interview questions?
- Correct: They can bias the answers
- Wrong: They take too much screen space
- Wrong: They improve sample size

**Findings:** _none yet_

### 3. Information architecture & wireframes

**Concept.** Information architecture organises content and navigation. A wireframe shows hierarchy and layout before detailed styling. Use labels that match users' language and make important actions easy to find.

**Example**

```
Page outline: Header → Primary navigation → Main task area → Supporting details → Footer.
```

**Explanation / note.** A low-fidelity wireframe helps test structure cheaply before investing in polished visuals.

**Task.** Sketch a dashboard with navigation, overview, one primary task and clear empty/loading/error states.

**Quiz.** What is a wireframe mainly used for?
- Correct: To explore structure and hierarchy early
- Wrong: To prove backend security
- Wrong: To replace user testing

**Findings:** _none yet_

### 4. Visual design & design systems

**Concept.** Visual hierarchy uses size, contrast, spacing and alignment to guide attention. A design system records reusable components, colour tokens, typography and interaction states. Consistency improves learnability.

**Example**

```
Token example: --space-2: 8px; --radius-card: 12px; --text-primary: #172033;
```

**Explanation / note.** Tokens make design changes consistent. Check contrast, legibility and responsive behaviour instead of relying on colour alone.

**Task.** Create a small style guide with type scale, spacing, colour roles, buttons, cards and form states.

**Quiz.** What is a design token?
- Correct: A reusable named design decision such as a colour or spacing value
- Wrong: A marketing slogan
- Wrong: A user password

**Findings:** _none yet_

### 5. Prototyping & usability testing

**Concept.** A prototype simulates enough of an experience to test a question. Usability testing asks representative participants to attempt realistic tasks while you observe. Look for task completion, confusion and errors.

**Example**

```
Test task: 'Find the due date for your next assignment.' Observe without telling the participant where to click.
```

**Explanation / note.** Do not ask only 'Do you like it?' Watch what people actually do. Get consent and avoid collecting sensitive data.

**Task.** Create a clickable prototype and test three tasks with a small set of participants. Record findings and prioritise fixes.

**Quiz.** What is a useful usability test outcome?
- Correct: Observed task success and points of friction
- Wrong: Only whether users liked the colour
- Wrong: The number of prototype screens

**Findings:** _none yet_

### 6. Content design, microcopy & error states

**Concept.** Words are part of the interface. Use plain language, one term for one idea, and labels that describe the action (Save draft, not Submit). Good error messages say what happened, why if known, and how to fix it, without blaming the person. Design every state: empty, loading, error, success and offline. An empty state should explain what belongs here and offer the next step. Test copy with real users, check it reads well with a screen reader, and keep room for longer text in other languages.

**Example**

```
Weak error:   Invalid input.
Better error: Enter your phone number with 10 digits, for example 9876543210.

Weak empty state:   No data.
Better empty state: You have no saved courses yet. Browse the library and select Save to add one.

Weak button:   OK
Better button: Delete account
```

**Explanation / note.** The better versions tell the user what to do next and use specific button labels. The result is fewer mistakes and less need for support.

**Task.** Take one form or screen from a fictional app. Rewrite its labels, three error messages and the empty state. Test the new copy with two people and note which wording they misunderstood.

**Quiz.** What should a helpful error message include?
- Correct: What went wrong and how to fix it, in plain language
- Wrong: A technical error code only
- Wrong: A statement that the user made a mistake

**Findings:** _none yet_

### 7. Accessibility, iteration & case study

**Concept.** Accessible design considers keyboard use, contrast, text size, labels, focus, motion and assistive technologies. Iterate based on evidence. A case study explains the problem, role, process, decisions, outcome and limitations.

**Example**

```
Case study structure: Context → Problem → Research → Options → Prototype → Test findings → Iteration → Reflection.
```

**Explanation / note.** Never invent user research or claim business impact you did not measure. Explain what you learned and what remains uncertain.

**Task.** Capstone: design a student assignment planner. Publish research notes, user flows, wireframes, prototype, accessibility checks and a concise case study.

**Quiz.** What makes a credible design case study?
- Correct: Transparent process, evidence and honest outcomes
- Wrong: Only polished mockups
- Wrong: Unverified impact claims

**Findings:** _none yet_
