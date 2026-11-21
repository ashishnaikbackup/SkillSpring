# Review packet: JavaScript: Beginner to Browser Applications

- Course key: `javascript`  ·  Lessons: 7  ·  Review interval: 90 days
- Current status: `initial-review-required`  ·  Last reviewed: never
- Content files: `course-engine.js`
- Official sources to check against:
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide

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

Learn the language, then use it to make interactive web pages, work with APIs and build a complete browser project.

## Lessons

### 1. Hello JavaScript & the browser

**Concept.** JavaScript is a programming language used in browsers and server environments. In a web page, a script can run after the document is parsed. Open browser developer tools to inspect output and errors.

**Example**

```
console.log('Hello, World!');
console.log('I am learning JavaScript.');
```

**Explanation / note.** console.log writes a message to the developer console. JavaScript statements can be placed in a script element or a separate .js file.

**Task.** Create an HTML page that loads app.js. Print a welcome message and inspect it in the browser console.

**Quiz.** Where can JavaScript run?
- Correct: In browsers and server-side runtimes
- Wrong: Only inside spreadsheets
- Wrong: Only on mobile phones

**Findings:** _none yet_

### 2. Variables, types & operators

**Concept.** Use const for bindings you do not reassign and let for bindings that change. JavaScript has number, string, boolean, bigint, symbol, undefined and object values. Use === for strict equality.

**Example**

```
const learner = 'Sam';
let lessonsDone = 0;
lessonsDone += 1;
console.log(learner, lessonsDone);
```

**Explanation / note.** const prevents reassignment of the binding, not mutation of an object. Prefer strict equality to avoid surprising type coercion.

**Task.** Build a tip calculator. Convert input strings to numbers, validate them and format the result.

**Quiz.** Which equality operator avoids type coercion?
- Correct: ===
- Wrong: =
- Wrong: ==

**Findings:** _none yet_

### 3. Conditions, loops & functions

**Concept.** if/else handles decisions. for and while repeat tasks. Functions can be declared or assigned to variables; arrow functions provide concise syntax. Scope determines where a binding is accessible.

**Example**

```
const square = n => n * n;
for (let n = 1; n <= 4; n++) {
  console.log(square(n));
}
```

**Explanation / note.** The arrow function receives n and returns n*n. The loop runs four times; let keeps the counter scoped to the loop.

**Task.** Write a quiz score calculator using functions, loops and clear input validation.

**Quiz.** What does return do in a function?
- Correct: Sends a value back to the caller
- Wrong: Prints automatically
- Wrong: Stops the browser

**Findings:** _none yet_

### 4. Arrays, objects & modern syntax

**Concept.** Arrays store ordered values; objects store named properties. Learn map, filter, find, reduce, destructuring, spread syntax and template literals. Choose immutable transformations when they make data flow clearer.

**Example**

```
const expenses = [{category:'Food',amount:120},{category:'Travel',amount:50}];
const total = expenses.reduce((sum, item) => sum + item.amount, 0);
console.log(total);
```

**Explanation / note.** reduce combines array elements into one result. Here the accumulator is the running total.

**Task.** Create an array of task objects. Add functions to add, complete, filter and summarise tasks.

**Quiz.** Which method creates a new array by transforming each element?
- Correct: map()
- Wrong: push()
- Wrong: findIndex()

**Findings:** _none yet_

### 5. DOM, events & forms

**Concept.** The DOM represents a web page as objects. querySelector finds elements; textContent changes text safely; addEventListener responds to events. Validate form data and provide accessible labels and feedback.

**Example**

```
const button = document.querySelector('#hello');
button.addEventListener('click', () => {
  document.querySelector('#output').textContent = 'Hello!';
});
```

**Explanation / note.** The event listener runs only after the user clicks the button. textContent treats content as text rather than parsing HTML.

**Task.** Build a to-do list with add, complete and delete actions. Use labels, keyboard access and helpful empty-state messages.

**Quiz.** Which method registers an event handler?
- Correct: addEventListener()
- Wrong: querySelectorAll()
- Wrong: innerHTML()

**Findings:** _none yet_

### 6. Testing & debugging JavaScript

**Concept.** Debugging starts with reproducing the problem, then narrowing it down. Use console.log for quick checks, but learn the browser DevTools: set breakpoints, step through code, watch variables and read the call stack and the Network tab. Automated tests protect behaviour when code changes. Node.js includes a built-in test runner (node --test) and an assert module, so you can write small tests without extra tools; larger projects often use frameworks such as Vitest or Jest. Test normal input, edge cases such as empty values, and invalid input.

**Example**

```
// sum.js
export function sum(numbers) {
  return numbers.reduce((total, n) => total + n, 0);
}

// sum.test.js  (run with: node --test)
import test from 'node:test';
import assert from 'node:assert/strict';
import { sum } from './sum.js';

test('adds numbers', () => assert.equal(sum([1, 2, 3]), 6));
test('empty list is zero', () => assert.equal(sum([]), 0));
```

**Explanation / note.** Each test states one expected result. The empty-list case checks an edge condition. Running the tests after every change shows quickly whether something broke.

**Task.** Write a function that finds the average of an array. Write tests for a normal list, an empty list and a list with one value. Decide what the function should do for an empty list, document it, and make the tests match.

**Quiz.** What is the main purpose of an automated test?
- Correct: To check behaviour repeatedly so changes that break it are noticed
- Wrong: To make the code run faster
- Wrong: To replace the need to understand the code

**Findings:** _none yet_

### 7. Async JavaScript, APIs & modules

**Concept.** Promises represent work that may finish later. async/await makes promise-based code easier to read. fetch requests resources; check response.ok and handle network errors. Modules split code using export and import.

**Example**

```
async function loadUsers() {
  try {
    const response = await fetch('/users.json');
    if (!response.ok) throw new Error('Request failed');
    const users = await response.json();
    console.log(users);
  } catch (error) { console.error(error); }
}
```

**Explanation / note.** await pauses the async function until the promise settles. Production code should also consider loading states, retries and safe handling of external data.

**Task.** Capstone: build a responsive expense tracker with DOM forms, filtering, local storage, validation and a clear README. Use fictional data only.

**Quiz.** Why check response.ok after fetch?
- Correct: HTTP error statuses do not automatically reject the fetch promise
- Wrong: To turn JSON into HTML
- Wrong: To enable JavaScript

**Findings:** _none yet_
