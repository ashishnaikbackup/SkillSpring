# Review packet: Computational Thinking & Programming Logic: Absolute Zero

- Course key: `logic`  ·  Lessons: 13  ·  Review interval: 180 days
- Current status: `initial-review-required`  ·  Last reviewed: never
- Content files: `essential-courses.js`
- Official sources to check against:
  - https://cs50.harvard.edu/x/
  - https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/

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

Start without assuming you know what code is. Learn how to think through a problem, express steps clearly, trace decisions and turn everyday reasoning into algorithms.

## Lessons

### 1. What is a computer and what is code?

**Concept.** A computer follows instructions. A program is a precise set of instructions that transforms input into output. A programmer describes the steps and checks whether the result is correct. Learn hardware, software, operating systems, applications, files and the role of a programming language.

**Example**

```
Example: making tea can be described as inputs (water, tea, milk), steps (boil, steep, mix) and output (a cup of tea). Computers need instructions that are much more exact than human instructions.
```

**Task.** Write steps for brushing teeth and making a cup of tea. Identify input, process, output and one possible failure.

**Quiz.** What is a program?
- Correct: A set of precise instructions a computer can execute
- Wrong: A computer screen
- Wrong: A type of keyboard

**Findings:** _none yet_

### 2. Problem solving: input, process, output

**Concept.** Before writing code, restate the problem. Identify what information is given, what result is required, rules and constraints. Split a large task into small steps. This is decomposition.

**Example**

```
Problem: calculate total price. Input: item price and quantity. Process: multiply them. Output: total. Check whether quantity can be zero or negative.
```

**Task.** For a student result calculator, list inputs, processing steps, outputs and at least three validation rules.

**Quiz.** Why identify inputs and outputs first?
- Correct: It makes the required transformation and expected result clear
- Wrong: It chooses a font
- Wrong: It removes the need to test

**Findings:** _none yet_

### 3. Algorithms and precision

**Concept.** An algorithm is a finite, ordered set of unambiguous steps that solves a problem. A good algorithm has clear inputs, outputs, termination and correctness. The same problem can have multiple algorithms.

**Example**

```
Algorithm to find the larger of two numbers: read A and B; if A is greater, display A; otherwise display B. Decide how equal values should be handled.
```

**Task.** Write an algorithm to find the largest of three numbers. Include the equal-number case.

**Quiz.** What makes an algorithm unambiguous?
- Correct: Each step has one clear interpretation
- Wrong: It uses difficult words
- Wrong: It must be written in Python

**Findings:** _none yet_

### 4. Flowcharts and pseudocode

**Concept.** Pseudocode describes logic in readable structured language without strict programming syntax. Flowcharts show control flow visually: oval for start/end, parallelogram for input/output, rectangle for process and diamond for decisions.

**Example**

```
Pseudocode: INPUT age; IF age >= 18 THEN PRINT Adult ELSE PRINT Minor. A flowchart uses a decision diamond with Yes and No branches.
```

**Task.** Write pseudocode and draw a flowchart for checking whether a number is even or odd.

**Quiz.** What is pseudocode useful for?
- Correct: Planning and checking logic before choosing a language
- Wrong: Replacing all testing
- Wrong: Executing directly on a CPU

**Findings:** _none yet_

### 5. Variables, values and data types

**Concept.** A variable is a named place to refer to a value. Common types include integers, decimal numbers, text, true/false values and collections. Choose types that match the meaning of the data. Assignment stores or updates a value.

**Example**

```
age = 21; price = 49.5; name = "Asha"; is_student = True. Predict each value and type. Distinguish assignment from mathematical equality.
```

**Task.** Create a variable list for a shopping bill: item name, quantity, price, discount and final total.

**Quiz.** Which type best represents a yes/no condition?
- Correct: Boolean
- Wrong: String
- Wrong: Floating-point number

**Findings:** _none yet_

### 6. Operators and expressions

**Concept.** Arithmetic operators calculate values; comparison operators produce true/false results; logical operators combine conditions. Precedence determines evaluation order, so use parentheses when they improve clarity.

**Example**

```
For price=100 and quantity=3, total=price*quantity. A discount applies when total>=250 AND member is true. Trace each part.
```

**Task.** Evaluate five expressions by hand. Include brackets, division, comparison and AND/OR/NOT.

**Quiz.** What does a comparison such as x >= 10 produce?
- Correct: A Boolean true/false result
- Wrong: A text string
- Wrong: A loop

**Findings:** _none yet_

### 7. Decisions and branching

**Concept.** A conditional chooses which path runs based on a Boolean condition. IF handles a condition; ELSE handles the alternative; ELSE IF handles multiple cases. Conditions should cover all intended cases without accidental gaps.

**Example**

```
Grade logic: if score>=90 A; else if score>=75 B; else if score>=40 C; else fail. Test scores 39, 40, 74, 75, 89, 90 and 100.
```

**Task.** Design an eligibility checker with at least three conditions. Test boundary values and explain the chosen order.

**Quiz.** Why test boundary values?
- Correct: Errors often occur where a condition changes from true to false
- Wrong: They make code run faster
- Wrong: They replace normal test cases

**Findings:** _none yet_

### 8. Loops and repetition

**Concept.** Loops repeat instructions. A counted loop is useful when the number of repetitions is known. A condition-controlled loop continues while a condition holds. Every loop needs progress toward termination to avoid an infinite loop.

**Example**

```
Repeat adding 1 through 5 to a sum. Trace the changing counter and sum in a table. Compare this with repeating until the user enters a valid value.
```

**Task.** Write pseudocode to print 1 to 10, calculate their sum and validate a positive input. Trace each iteration.

**Quiz.** What can cause an infinite loop?
- Correct: The loop condition never becomes false
- Wrong: A variable has a name
- Wrong: A program has comments

**Findings:** _none yet_

### 9. Functions and modular thinking

**Concept.** A function is a named reusable block that performs a focused task. Parameters provide inputs; a return value gives a result. Small functions make programs easier to test, understand and maintain.

**Example**

```
function area(width,height) returns width*height. Calling area(4,3) returns 12. Separate calculation from input and display.
```

**Task.** Design three functions for a bill calculator: calculate subtotal, calculate discount and calculate final total.

**Quiz.** Why use functions?
- Correct: To reuse and isolate logic into testable units
- Wrong: To avoid naming variables
- Wrong: To make every program longer

**Findings:** _none yet_

### 10. Arrays, strings and collections

**Concept.** Programs often process groups of related values. Arrays/lists store ordered items; strings store text; dictionaries/maps associate keys with values. Learn indexing, iteration, length and common off-by-one mistakes.

**Example**

```
For marks=[60,75,90], index positions may be 0,1,2 in many languages. Average is sum divided by count. Never assume the index starts at one.
```

**Task.** Find the minimum, maximum and average of a list. Explain what should happen for an empty list.

**Quiz.** What is an off-by-one error?
- Correct: Using an index or loop boundary one step too far or too little
- Wrong: A spelling mistake
- Wrong: A network failure

**Findings:** _none yet_

### 11. Debugging and tracing

**Concept.** Debugging is a disciplined process: reproduce the issue, read the error, isolate the smallest failing case, inspect values, form a hypothesis, change one thing and retest. Trace tables reveal how variables change line by line.

**Example**

```
Trace x=2; repeat 3 times: x=x*2. Record x after each iteration: 4, 8, 16. Compare expected and actual output.
```

**Task.** Fix a deliberately incorrect algorithm for finding the largest list item. Write the failing input before changing it.

**Quiz.** What is the best first step when debugging?
- Correct: Reproduce the problem and understand the observed failure
- Wrong: Rewrite everything
- Wrong: Delete the test

**Findings:** _none yet_

### 12. Testing, edge cases and correctness

**Concept.** A test checks whether behaviour matches requirements. Use normal cases, boundary cases, invalid inputs and edge cases. Expected results should be written before running tests. Passing tests increases confidence but cannot prove every possible case.

**Example**

```
For a divide function test 10/2, 0/5, negative values and division by zero. Define the expected behaviour for zero divisor.
```

**Task.** Create a test table for your eligibility checker with input, expected output, actual output and pass/fail.

**Quiz.** Why include edge cases?
- Correct: They expose failures outside the ordinary happy path
- Wrong: They make the interface colourful
- Wrong: They reduce documentation

**Findings:** _none yet_

### 13. From logic to your first program

**Concept.** Translate pseudocode into a language only after the logic is clear. Learn the edit-run-observe-debug cycle. Read syntax errors carefully; compare output with the expected result. Code is a way to express an algorithm, not a substitute for understanding it.

**Example**

```
Convert the even/odd algorithm into Python: n=int(input()); if n%2==0 print Even else print Odd. Explain modulo and indentation.
```

**Task.** Build a menu-driven calculator with addition, subtraction, multiplication, division, input validation and at least eight test cases.

**Quiz.** What should come before language-specific syntax?
- Correct: Understanding the problem and designing the algorithm
- Wrong: Choosing an IDE theme
- Wrong: Copying a finished solution

**Findings:** _none yet_

## Capstone project brief

**.** 

Build:

Evidence to submit:

Stretch goal: 

**Brief findings (is it realistic, clear and fairly assessable?):** _none yet_
