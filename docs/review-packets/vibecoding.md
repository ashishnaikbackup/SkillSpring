# Review packet: AI-Assisted & Vibe Coding: From Prompt to Reliable Software

- Course key: `vibecoding`  ·  Lessons: 11  ·  Review interval: 30 days
- Current status: `initial-review-required`  ·  Last reviewed: never
- Content files: `essential-courses.js`
- Official sources to check against:
  - https://docs.github.com/en/copilot
  - https://platform.openai.com/docs/

## Reviewer checklist (tick after reading all lessons)

- [ ] Facts, definitions and terminology are correct
- [ ] Tool names, versions, menus and commands match current official documentation
- [ ] Every code example runs and produces the stated output
- [ ] Each knowledge-check answer is correct and the wrong options are clearly wrong
- [ ] Tasks are achievable by a beginner and prerequisites are taught first
- [ ] No unsafe, legal, tax or medical advice presented as professional advice
- [ ] India-specific statements (laws, exams, tools, salaries) are accurate or removed
- [ ] Nothing important for a job-ready beginner is missing (list gaps below)
- [ ] The capstone brief is realistic, clear and fairly assessable with the rubric

Reviewer name: ________   Date: ________   Outcome: approve / approve with fixes / rewrite

## Course introduction

Use AI coding assistants to plan, generate, understand, test and improve software. Learn prompt design, repository context, debugging and security. AI output must be reviewed; never trust generated code blindly.

## Lessons

### 1. What vibe coding is — and is not

**Concept.** Vibe coding is an informal approach where natural-language prompts guide AI tools to generate code. It can speed up prototypes, but it does not remove the need to understand requirements, review code, test behaviour or protect data.

**Example**

```
Ask an assistant to create a simple to-do page. Compare a vague prompt with a prompt specifying users, features, constraints and acceptance criteria.
```

**Task.** Write a one-page product brief before asking AI to code. Define the user, problem, features and non-goals.

**Quiz.** What is the biggest risk of blind AI-generated code?
- Correct: It may be incorrect, insecure or unsuitable while appearing convincing
- Wrong: It always runs too slowly
- Wrong: It cannot contain syntax

**Findings:** _none yet_

### 2. Choose the right tool and workflow

**Concept.** Understand editor-based assistants, chat-based coding, browser builders and agentic tools. Compare repository access, terminal access, model usage, privacy, pricing, exportability and review controls. Features change over time.

**Example**

```
A chat assistant can explain a function; an IDE assistant can edit files with context; an agent may run tests. Keep a human approval step for consequential changes.
```

**Task.** Compare two available tools using a checklist: cost, privacy, language support, repository integration and ability to inspect diffs.

**Quiz.** Why inspect an AI tool's permissions?
- Correct: To understand what code, files and commands it can access
- Wrong: To change syntax highlighting
- Wrong: To increase monitor brightness

**Findings:** _none yet_

### 3. Prompting with requirements

**Concept.** A strong coding prompt states role, context, goal, existing stack, constraints, desired output, acceptance tests and what not to change. Ask for a plan before implementation on larger tasks.

**Example**

```
Prompt pattern: Context; Goal; Current behaviour; Expected behaviour; Constraints; Files allowed; Acceptance criteria; Test commands; Report changes and limitations.
```

**Task.** Turn a vague request ('make a website') into a precise specification with user stories and measurable acceptance criteria.

**Quiz.** What makes an acceptance criterion useful?
- Correct: It describes an observable condition that can be tested
- Wrong: It says 'make it beautiful' only
- Wrong: It hides the expected behaviour

**Findings:** _none yet_

### 4. Plan before generating code

**Concept.** Break work into small tasks. Ask AI to inspect existing files and summarise architecture before edits. Agree on a plan, identify dependencies and create a minimal first milestone. Avoid giant prompts that change everything at once.

**Example**

```
For a login bug, first request diagnosis and evidence, then a minimal patch, then tests. Review the diff after each step.
```

**Task.** Create a task list for a small expense tracker. Mark dependencies and define the first vertical slice.

**Quiz.** Why make small changes?
- Correct: They are easier to review, test and roll back
- Wrong: They guarantee no bugs
- Wrong: They eliminate the need for Git

**Findings:** _none yet_

### 5. Understand generated code

**Concept.** Read the diff, identify entry points, data flow, dependencies, error paths and assumptions. Ask the assistant to explain unfamiliar code line by line, then verify explanations against documentation and execution.

**Example**

```
Ask: 'Trace what happens from button click to database write. Identify validation, error handling and data permissions.'
```

**Task.** Pick a generated function and write its input/output contract, edge cases and plain-language explanation.

**Quiz.** Should you commit code you cannot explain?
- Correct: Not until you understand and review its behaviour
- Wrong: Yes, if AI wrote it
- Wrong: Only if the file is short

**Findings:** _none yet_

### 6. Debug with evidence

**Concept.** Provide the exact error, reproduction steps, expected/actual behaviour, relevant code and environment. Ask for hypotheses and tests before accepting a fix. Avoid pasting secrets or private data.

**Example**

```
Good bug report: steps, expected result, actual result, console error, recent change and minimal reproduction. Test the fix against the original failure.
```

**Task.** Create a minimal reproduction for a bug and ask AI for three hypotheses with evidence needed to distinguish them.

**Quiz.** What helps AI debug accurately?
- Correct: A reproducible case and exact error/context
- Wrong: A vague 'it is broken'
- Wrong: A screenshot with passwords

**Findings:** _none yet_

### 7. Testing and code review

**Concept.** Require unit, integration and end-to-end tests appropriate to the risk. Review edge cases, accessibility, performance and regression. AI-generated tests can share the same mistaken assumptions as generated code.

**Example**

```
For a calculator, test normal values, zero, negative values, invalid input and division by zero. Review whether tests assert meaningful outcomes.
```

**Task.** Ask AI to propose tests, then independently verify the expected results and add a regression test.

**Quiz.** Why are AI-generated tests not enough by themselves?
- Correct: They can repeat the same misunderstanding as the generated implementation
- Wrong: They cannot run in a browser
- Wrong: They always use too much memory

**Findings:** _none yet_

### 8. Security, privacy and licensing

**Concept.** Never expose API keys, passwords, tokens, private student data or customer records in prompts or public repos. Review dependencies, permissions, injection risks, data handling and licence obligations. Use environment variables and least privilege.

**Example**

```
A generated app that puts a secret key in frontend JavaScript exposes it to visitors. Move secrets to a trusted backend and rotate any exposed key.
```

**Task.** Perform a security review of a sample app: secrets, input validation, authentication, authorisation, dependency risk and data minimisation.

**Quiz.** Where should a private API secret live?
- Correct: In a protected server-side secret store or environment configuration
- Wrong: In public frontend JavaScript
- Wrong: In a public GitHub README

**Findings:** _none yet_

### 9. Git, checkpoints and safe agent work

**Concept.** Use branches and commits before risky changes. Ask agents to work on a branch, inspect every diff, run tests and report changed files. Keep backups and know how to revert. Limit tool permissions.

**Example**

```
Workflow: create branch; record baseline; ask for one change; inspect diff; run tests; commit; merge after review.
```

**Task.** Practise a branch-based AI task and write a change summary with tests, risks and rollback instructions.

**Quiz.** What is a checkpoint useful for?
- Correct: Restoring a known-good state after a bad change
- Wrong: Replacing all tests
- Wrong: Publishing credentials

**Findings:** _none yet_

### 10. Deploy, monitor and maintain

**Concept.** A prototype is not production-ready. Learn environment configuration, build steps, deployment previews, logs, error monitoring, accessibility, backups and rollback. Monitor real behaviour and fix regressions.

**Example**

```
Deploy a static demo to a preview environment, check mobile layout, inspect console/network errors and document rollback.
```

**Task.** Create a deployment checklist and a post-release test plan for your project.

**Quiz.** What should happen after deployment?
- Correct: Verify behaviour, monitor issues and retain a rollback path
- Wrong: Assume the preview guarantees production
- Wrong: Delete the source repository

**Findings:** _none yet_

### 11. Build a complete AI-assisted project

**Concept.** Choose a small real problem. Write requirements, design a simple architecture, implement one slice at a time, review code, test edge cases, document setup and deploy. Record which parts AI assisted and what you verified.

**Example**

```
Example capstone: a personal study planner with local persistence, input validation, filters, accessible controls and an export feature. Avoid storing sensitive data.
```

**Task.** Deliver a repository with README, requirements, screenshots, tests, known limitations, setup instructions and a short explanation of every major component.

**Quiz.** What proves responsible AI-assisted development?
- Correct: A tested, reviewed project you can explain and maintain
- Wrong: The number of prompts used
- Wrong: A large amount of generated code

**Findings:** _none yet_

## Capstone project brief

**.** 

Build:

Evidence to submit:

Stretch goal: 

**Brief findings (is it realistic, clear and fairly assessable?):** _none yet_
