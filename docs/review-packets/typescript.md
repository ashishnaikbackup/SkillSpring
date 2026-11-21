# Review packet: TypeScript: Safer JavaScript Applications

- Course key: `typescript`  ·  Lessons: 9  ·  Review interval: 60 days
- Current status: `initial-review-required`  ·  Last reviewed: never
- Content files: `course-engine.js`
- Official sources to check against:
  - https://www.typescriptlang.org/docs/

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

Learn how TypeScript adds a static type system to JavaScript and how to use it in maintainable web projects.

## Lessons

### 1. Why TypeScript?

**Concept.** TypeScript is a typed superset of JavaScript. The compiler checks types and emits JavaScript; browsers run the emitted JavaScript, not TypeScript directly. Start by understanding JavaScript fundamentals.

**Example**

```
type Learner = { name: string; lessons: number };
const user: Learner = { name: "Asha", lessons: 3 };
console.log(user.name);
```

**Explanation / note.** The type describes the expected object shape. A type error can be caught before runtime, but types do not validate untrusted data received from a network.

**Task.** Install TypeScript in a small project, compile one file and fix an intentional type error.

**Quiz.** What does the TypeScript compiler output?
- Correct: JavaScript
- Wrong: Machine code for every browser
- Wrong: HTML only

**Findings:** _none yet_

### 2. Primitive, union & inferred types

**Concept.** TypeScript can infer many types from initial values. Use string, number, boolean, arrays and union types. A union expresses that a value may be one of several types; narrow it before using type-specific operations.

**Example**

```
let score = 10;
let status: 'new' | 'done' = 'new';
status = 'done';
```

**Explanation / note.** Literal unions constrain a variable to specific values. Prefer inference when it is clear and explicit annotations when they improve interfaces.

**Task.** Model a task status using a union and write a function that handles each status.

**Quiz.** What is a union type?
- Correct: A value that may be one of several declared types
- Wrong: A database join
- Wrong: A CSS selector

**Findings:** _none yet_

### 3. Functions, interfaces & generics

**Concept.** Annotate function parameters and return types when useful. Interfaces and type aliases describe structures. Generics allow reusable functions and containers while preserving type information.

**Example**

```
function first<T>(items: T[]): T | undefined {
  return items[0];
}
const name = first(['Asha', 'Mira']);
```

**Explanation / note.** T is a type parameter inferred from the argument. The return type says the array might be empty.

**Task.** Write a generic function that returns the last item or undefined. Define an interface for a course record.

**Quiz.** Why use a generic type parameter?
- Correct: To reuse code while preserving type information
- Wrong: To skip runtime testing
- Wrong: To change CSS

**Findings:** _none yet_

### 4. Narrowing, modules & async

**Concept.** Use typeof, in, discriminated unions and guards to narrow types. Modules use import/export. Promise and async/await types help represent asynchronous results. Treat external JSON as unknown until validated.

**Example**

```
type Result = { ok: true; value: string } | { ok: false; error: string };
function show(r: Result) {
  if (r.ok) return r.value;
  return r.error;
}
```

**Explanation / note.** The ok property discriminates the union. TypeScript narrows the object inside each branch.

**Task.** Create a typed API response model and a function that handles success and error states.

**Quiz.** What is type narrowing?
- Correct: Refining a broad type to a more specific type using checks
- Wrong: Changing a variable name
- Wrong: Compressing JavaScript

**Findings:** _none yet_

### 5. Classes, enums & utility types

**Concept.** TypeScript classes support readonly properties and access modifiers such as private; these are checked at compile time only and do not exist at runtime. A union of string literals is often simpler than an enum. Utility types transform existing types instead of rewriting them: Partial makes every property optional, Readonly prevents reassignment, Pick keeps chosen properties, Omit removes chosen properties and Record builds an object type from keys and a value type. Reusing a base type keeps models consistent when the base changes.

**Example**

```
interface Task { id: number; title: string; done: boolean }
type Status = "todo" | "doing" | "done";
type TaskUpdate = Partial<Omit<Task, "id">>;

function update(task: Task, changes: TaskUpdate): Task {
  return { ...task, ...changes };
}

const t: Task = { id: 1, title: "Learn TS", done: false };
console.log(update(t, { done: true }));
const counts: Record<Status, number> = { todo: 2, doing: 1, done: 5 };
```

**Explanation / note.** TaskUpdate allows any subset of title and done but forbids changing id. The call prints an object with id 1, title Learn TS and done true. Record requires an entry for every Status, so a missing key is a compile error.

**Task.** Define a User interface, then create a type for creating a user (no id) and a type for updating a user (all fields optional except id is not allowed). Write a function for each and test an invalid call to see the compiler error.

**Quiz.** What does the Partial utility type do?
- Correct: Makes every property of a type optional
- Wrong: Removes every property from a type
- Wrong: Makes every property required at runtime

**Findings:** _none yet_

### 6. Typing APIs & errors safely

**Concept.** Data from a network, a file or user input is not trustworthy just because you gave it a type. Treat parsed JSON as unknown and check it with a type guard before use. Handle failed requests by checking the response status and throwing a clear error. With strict settings, a caught error is unknown, so check it (for example with instanceof Error) before reading its message. Keep these checks at the boundary so the rest of the program can rely on proper types.

**Example**

```
interface User { id: number; name: string }

function isUser(v: unknown): v is User {
  if (typeof v !== "object" || v === null) return false;
  const o = v as Record<string, unknown>;
  return typeof o.id === "number" && typeof o.name === "string";
}

async function loadUser(url: string): Promise<User> {
  const res = await fetch(url);
  if (!res.ok) throw new Error("HTTP " + res.status);
  const data: unknown = await res.json();
  if (!isUser(data)) throw new Error("Unexpected response shape");
  return data;
}
```

**Explanation / note.** The function only returns a User after the shape has been checked at runtime. A bad status or a wrong shape produces a clear error instead of a hidden undefined value later.

**Task.** Write a type guard for a Product with id, name and price. Test it with a correct object, a missing field and a wrong type. Then write loadProduct using the same pattern and handle its errors in a try/catch.

**Quiz.** Why store parsed JSON in an unknown variable before using it?
- Correct: It forces a runtime check before treating it as a specific type
- Wrong: It makes the request faster
- Wrong: It converts the JSON into a class automatically

**Findings:** _none yet_

### 7. Generics in practice & discriminated unions

**Concept.** A generic function or type works with a type that is chosen when it is used, so one definition can stay type safe for many cases. A discriminated union is a union where each member has a shared literal field, such as ok set to true or false. Checking that field narrows the type, so the compiler knows which other fields exist. This is a clear way to return success or failure without throwing for ordinary problems. Keep generic types simple, and name type parameters meaningfully when there is more than one.

**Example**

```
type Result<T> = { ok: true; value: T } | { ok: false; error: string };

function parseAge(input: string): Result<number> {
  const n = Number(input);
  if (!Number.isInteger(n) || n < 0 || n > 120) {
    return { ok: false, error: "Age must be a whole number from 0 to 120" };
  }
  return { ok: true, value: n };
}

function describe(r: Result<number>): string {
  if (r.ok) return "Age " + r.value;
  return "Error: " + r.error;
}

function firstOr<T>(items: T[], fallback: T): T {
  return items[0] ?? fallback;
}

console.log(describe(parseAge("21")));
console.log(describe(parseAge("abc")));
console.log(firstOr<string>([], "none"));
```

**Explanation / note.** Checking r.ok narrows the type, so r.value is only available in the success branch. The program prints Age 21, then the error message, then none.

**Task.** Write a Result type and a function that parses a date or an email address. Return a success or failure value, then write code that handles both cases. Try accessing the value without checking and read the compiler message.

**Quiz.** Why is a shared literal field useful in a discriminated union?
- Correct: Checking it lets the compiler narrow to the correct member type
- Wrong: It makes the union faster at runtime
- Wrong: It converts the union into a class

**Findings:** _none yet_

### 8. Tooling: tsconfig, linting & tests

**Concept.** The tsconfig.json file tells the compiler how strictly to check and where files live. Turn on strict mode for new projects, and consider noUncheckedIndexedAccess so reading an array item may be undefined until you check it. A linter such as ESLint finds suspicious patterns that types alone do not catch, and a formatter keeps style consistent so reviews focus on logic. Add a test runner and run type checking, linting and tests in the same command or pipeline before merging. Settings and versions change, so follow the official documentation for your tools.

**Example**

```
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ESNext",
    "moduleResolution": "Bundler",
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "noImplicitOverride": true,
    "skipLibCheck": true,
    "outDir": "dist"
  },
  "include": ["src"]
}

// package.json scripts (example)
// "check": "tsc --noEmit && eslint . && vitest run"
```

**Explanation / note.** Strict options catch mistakes early, and one check command makes the same quality gate easy to run locally and in automation.

**Task.** Set up a tiny TypeScript project with a strict tsconfig, a linter and one test. Add a script that runs all three, introduce a deliberate type error, and show that the check fails.

**Quiz.** Why run type checking, linting and tests together before merging?
- Correct: Each finds different kinds of problems, so together they catch more
- Wrong: They make the code run faster in production
- Wrong: They remove the need for code review

**Findings:** _none yet_

### 9. Project setup, tests & capstone

**Concept.** Use strict compiler settings, linting, tests and small modules. Types improve developer feedback but do not replace runtime validation, security checks or tests. Avoid any when unknown is more appropriate.

**Example**

```
// Example strict input guard
function isString(value: unknown): value is string {
  return typeof value === 'string';
}
```

**Explanation / note.** unknown forces you to check before use; any disables many type checks. Validate data at application boundaries.

**Task.** Capstone: build a typed task manager with models, filters, local persistence, tests and a README explaining the type design.

**Quiz.** Do TypeScript types automatically validate API JSON at runtime?
- Correct: No; runtime validation is still needed
- Wrong: Yes, always
- Wrong: Only when using interfaces

**Findings:** _none yet_
