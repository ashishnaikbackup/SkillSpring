# Review packet: Git & GitHub: Version Control and Collaboration

- Course key: `git`  ·  Lessons: 6  ·  Review interval: 60 days
- Current status: `initial-review-required`  ·  Last reviewed: never
- Content files: `essential-courses.js`
- Official sources to check against:
  - https://git-scm.com/doc
  - https://docs.github.com/en

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

Learn to save code history, work with branches, collaborate through pull requests and maintain a professional repository.

## Lessons

### 1. Files, repositories & first commit

**Concept.** Git tracks changes over time. A repository contains project files and history. Learn working directory, staging area, commit, remote and the difference between Git and GitHub.

**Example**

```
Install Git or use a guided environment. Configure name/email, initialise a practice repo, add README and make first commit.
```

**Task.** Deliverable: a repository with a clear README and first commit.

**Quiz.** What does a commit represent?
- Correct: A recorded snapshot of staged project changes
- Wrong: A website deployment only
- Wrong: A folder colour

**Findings:** _none yet_

### 2. Status, add, commit & history

**Concept.** Use git status, add, commit, log and diff. Write meaningful commit messages. Stage only intended files and inspect changes before committing.

**Example**

```
Edit README, inspect git diff, stage the change, commit it and review git log.
```

**Task.** Create a small history with focused commits.

**Quiz.** Why run git status before committing?
- Correct: To understand changed, staged and untracked files
- Wrong: To delete branches
- Wrong: To publish a website

**Findings:** _none yet_

### 3. Branches & merging

**Concept.** Branches allow isolated work. Learn checkout/switch, branch, merge and conflict resolution. Keep changes small and integrate frequently.

**Example**

```
Create a feature branch, edit a file, commit, switch back and merge. Resolve a simple conflict in a practice repository.
```

**Task.** Deliverable: a feature branch merged into main.

**Quiz.** What is a branch useful for?
- Correct: Working on a change without immediately altering the main line
- Wrong: Encrypting a repository
- Wrong: Compressing images

**Findings:** _none yet_

### 4. GitHub remotes & pull requests

**Concept.** A remote connects local Git to a hosted repository. Learn clone, fetch, pull, push, forks, pull requests, review comments and merge strategies.

**Example**

```
Push a practice branch to GitHub and open a pull request. Add a clear description, test evidence and checklist.
```

**Task.** Create a pull request with one reviewer-style checklist.

**Quiz.** What is a pull request for?
- Correct: Proposing and reviewing changes before integration
- Wrong: Changing your computer password
- Wrong: Creating a spreadsheet

**Findings:** _none yet_

### 5. Conflicts, ignore files & security

**Concept.** Resolve conflicts by understanding both changes. Use .gitignore for generated files and local secrets. Never commit API keys, passwords, private datasets or personal records. Rotate exposed secrets immediately.

**Example**

```
Create a .gitignore for build outputs and local environment files. Practise a conflict. Scan repository history for accidental secrets in a safe demo.
```

**Task.** Prepare a repository hygiene checklist.

**Quiz.** Should .env files with secrets be committed?
- Correct: No; keep secrets out of version control
- Wrong: Yes, if the repo is private
- Wrong: Only on Fridays

**Findings:** _none yet_

### 6. Professional repository & collaboration

**Concept.** Use issues, milestones, README, licence awareness, releases, tags, actions and contribution guidance. Keep commits reviewable and documentation reproducible.

**Example**

```
Improve a project repo with setup steps, usage, screenshots, issue template, release notes and a basic test workflow.
```

**Task.** Capstone: a polished portfolio repository and pull request workflow.

**Quiz.** What makes a repository easier for others to use?
- Correct: Clear README, reproducible setup, licence clarity and tested instructions
- Wrong: A very long repo name
- Wrong: No documentation

**Findings:** _none yet_
