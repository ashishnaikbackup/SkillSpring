# Review packet: Microsoft Power Automate: Workflow Automation Foundations

- Course key: `powerautomate`  ·  Lessons: 8  ·  Review interval: 30 days
- Current status: `initial-review-required`  ·  Last reviewed: never
- Content files: `essential-courses.js`
- Official sources to check against:
  - https://learn.microsoft.com/en-us/power-automate/

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

Automate repetitive work with triggers, actions, conditions, approvals and safe error handling. Features vary by licence and organisation.

## Lessons

### 1. Automation mindset & flow types

**Concept.** Automation connects events to actions. Learn cloud flows, desktop flows, triggers, actions, connectors and when a simple checklist is safer than automation.

**Example**

```
Map a repetitive low-risk task into trigger, conditions, actions and expected result.
```

**Task.** Deliverable: a workflow diagram before building anything.

**Quiz.** What starts an automated flow?
- Correct: A trigger
- Wrong: A dashboard colour
- Wrong: A file extension

**Findings:** _none yet_

### 2. Build your first cloud flow

**Concept.** Learn templates, manual/automated/scheduled triggers, connectors and dynamic content. Start with sample data and least-privilege access.

**Example**

```
Create a simple flow that sends a notification when a sample form response arrives, if your environment permits.
```

**Task.** Document trigger, input fields, action and expected notification.

**Quiz.** What is dynamic content?
- Correct: Data from earlier trigger/action steps that can be used later
- Wrong: A random password
- Wrong: A slide animation

**Findings:** _none yet_

### 3. Conditions, variables & loops

**Concept.** Use conditions for branching, variables for values, apply-to-each for collections and expressions for transformations. Keep flows readable and avoid unnecessary nested logic.

**Example**

```
Build a flow that routes a sample request based on amount or category and records the decision.
```

**Task.** Create a flow diagram with normal and exception paths.

**Quiz.** What does a condition do?
- Correct: Chooses a path based on whether an expression is true or false
- Wrong: Deletes the trigger
- Wrong: Changes a user's licence

**Findings:** _none yet_

### 4. Approvals & business workflows

**Concept.** Approvals support review and decision processes. Define approvers, timeouts, escalation, rejection paths and audit trail. Never automate high-impact decisions without appropriate human oversight.

**Example**

```
Design a leave or purchase request approval with submitter, approver, decision, comments and notification.
```

**Task.** Deliverable: approval process map and test cases.

**Quiz.** Why should approval flows include rejection handling?
- Correct: So declined requests have a clear outcome and communication
- Wrong: To hide decisions
- Wrong: To bypass reviewers

**Findings:** _none yet_

### 5. Errors, monitoring & security

**Concept.** Use run history, scopes, configure-run-after, retries and notifications. Protect credentials, review connector permissions and avoid exposing personal or confidential data in logs.

**Example**

```
Simulate a failed action and document how to diagnose it. Add a failure notification and safe retry policy.
```

**Task.** Create a support runbook for the flow.

**Quiz.** What should you avoid putting in flow logs?
- Correct: Passwords, secrets and unnecessary sensitive data
- Wrong: A generic flow name
- Wrong: A non-sensitive status

**Findings:** _none yet_

### 6. Expressions, dynamic content & testing

**Concept.** Flows pass data between steps as dynamic content, such as the sender or a file name from a trigger. Expressions transform that data: formatDateTime changes a date format, concat joins text, coalesce supplies a fallback when a value is empty and if chooses between two values. Avoid hard-coded values that will change. Test with sample data, including empty and unexpected values, and read the run history, which shows each step's inputs, outputs and any error. Keep flow names and step names meaningful so a colleague can maintain them.

**Example**

```
Examples of expressions (fictional flow):
  formatDateTime(utcNow(), 'yyyy-MM-dd')
  concat('Invoice-', triggerOutputs()?['body/id'])
  coalesce(triggerOutputs()?['body/subject'], 'No subject')
  if(equals(variables('amount'), 0), 'Review', 'Approved')
```

**Explanation / note.** Run history is the first place to look because it shows exactly which step failed and why.

**Task.** Build a practice flow that triggers manually, creates a text value with today's date and a fallback for an empty field, and sends a notification. Run it with normal and empty input and use the run history to confirm each step.

**Quiz.** Where can you see why a particular flow run failed?
- Correct: In the flow's run history, which shows each step's inputs, outputs and errors
- Wrong: Only in your email inbox
- Wrong: In the Windows Start menu

**Findings:** _none yet_

### 7. Connectors, data operations & reusable patterns

**Concept.** Connectors link a flow to services such as email, SharePoint, Teams and Excel online. Some connectors are premium and need suitable licences, so check licensing before designing a solution. Data operations such as Select, Filter array and Compose reshape lists without writing many steps, and they are usually clearer than a loop that processes items one at a time. Use Apply to each only when each item needs an action. Give every action a clear name, keep secrets out of flow text, and package related flows in a solution so they can be moved, versioned and reused.

**Example**

```
Pattern: new rows to a weekly summary (fictional)
  Trigger: Recurrence every Monday 09:00
  Get rows from the Tasks table
  Filter array: status is not Done
  Select: keep Title and Owner
  Create HTML table, then send by email

Naming: Get open tasks, Keep title and owner, Email weekly summary
```

**Explanation / note.** Built-in data operations reduce steps and make flows easier to read and maintain.

**Task.** Build a practice flow that reads a small fictional table, filters it, shapes the output and emails a summary. Compare it with a version using Apply to each and note which is clearer, and check which connectors need premium licences.

**Quiz.** Why use Filter array instead of a loop for selecting matching items?
- Correct: It is usually simpler and clearer than processing each item in a loop
- Wrong: It deletes the original data
- Wrong: It works only for text values

**Findings:** _none yet_

### 8. Professional automation capstone

**Concept.** Choose a repeatable low-risk workflow, document current effort, design triggers and actions, test edge cases, assign an owner and define a manual fallback.

**Example**

```
Build or prototype a request tracker that captures input, validates it, routes approval, records status and notifies stakeholders.
```

**Task.** Capstone: flow export or screenshots, architecture, permissions, tests, failure handling and maintenance owner.

**Quiz.** What makes automation production-ready?
- Correct: Testing, security, monitoring, ownership and fallback procedures
- Wrong: It runs once successfully
- Wrong: No documentation

**Findings:** _none yet_

## Capstone project brief

**.** 

Build:

Evidence to submit:

Stretch goal: 

**Brief findings (is it realistic, clear and fairly assessable?):** _none yet_
