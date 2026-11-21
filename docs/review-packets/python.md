# Review packet: Python: Zero to Professional Foundations

- Course key: `python`  ·  Lessons: 17  ·  Review interval: 90 days
- Current status: `initial-review-required`  ·  Last reviewed: never
- Content files: `course.js`, `python-practice.js`
- Official sources to check against:
  - https://docs.python.org/3/tutorial/
  - https://docs.python.org/3/library/

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


## Lessons

### 1. Welcome to programming

**Concept.** **What is programming?.** Programming is giving a computer precise instructions to perform a task. A program is a set of instructions; a programming language is the notation we use to write them. Computers follow instructions literally, so clarity and order matter. Think of a recipe: ingredients are data, steps are instructions, and the finished meal is the output. A program works in the same broad way.

**What happens when code runs?.** Your source code is read by an interpreter or translated by a compiler. Python is commonly used through an interpreter. The Python runtime executes statements and reports errors when it cannot understand or complete them. Python source files usually end in .py. A text editor helps you write code; the Python interpreter runs it.

**Your learning setup.** You can practise in RunCode's browser playground. For longer projects, install Python 3 from python.org, install a code editor such as VS Code, and learn to run a file from a terminal. Use the official Python documentation as a reference. Use Python 3.12 or a newer supported Python 3 release for new learning. Version details can change, so check python.org when installing.

**Example**

```
print("Hello, World!")
print("I am learning Python.")
```

**Explanation / note.** print() displays information. Text inside quotes is a string. Each print statement produces a line of output.

**Why the answer is correct.** Programming means writing instructions a computer can execute.

**Task.** Change the program to print your name, your reason for learning Python, and one thing you want to build.

**Quiz.** Python is mainly used to…
- Correct: Give precise instructions to a computer
- Wrong: Design only images
- Wrong: Replace the operating system

**Findings:** _none yet_

### 2. Syntax, comments & Hello World

**Concept.** **What is syntax?.** Syntax is the set of writing rules of a language. Python uses indentation to group code blocks. Spelling, brackets, colons and indentation matter. A syntax error means Python cannot parse the code. Python is case-sensitive: print and Print are different names.

**Your first program.** The print() function writes a value to the output. Put text in single or double quotes. Use parentheses around the value. print('Hello, World!') is a complete first program.

**Comments and readable code.** A comment begins with # and is ignored by Python. Comments explain why something is done; good variable names explain what data represents. Keep code readable and consistent. Use four spaces for each indentation level. Do not mix tabs and spaces.

**Example**

```
# My first Python program
print('Hello, World!')
print("Learning Python step by step")
```

**Explanation / note.** The # line is a comment. The two print calls display two separate lines.

**Why the answer is correct.** Python single-line comments begin with #.

**Task.** Write a three-line introduction. Add one comment explaining what your program does.

**Quiz.** Which character starts a single-line Python comment?
- Correct: #
- Wrong: //
- Wrong: <!--

**Findings:** _none yet_

### 3. Variables & naming

**Concept.** **What is a variable?.** A variable is a name that refers to a value. Assignment uses =. Python creates the name when you assign it; you do not declare a fixed type first. age = 21 assigns the integer 21 to age. Reassignment changes the value the name refers to.

**Naming rules.** Names can contain letters, digits and underscores, but cannot start with a digit. Names are case-sensitive. Avoid Python keywords such as if, for and class. Prefer descriptive snake_case names. Use total_price rather than tp. Good names make programs easier to understand.

**Assignment is not equality.** The = symbol assigns a value. The == operator compares two values; you will use it in conditions. Example: score = 10 then score == 10 evaluates to True.

**Example**

```
name = 'Asha'
age = 20
city = 'Goa'
print(name)
print(age)
print(city)
```

**Explanation / note.** name and city refer to strings; age refers to an integer. Python infers the type from the assigned value.

**Why the answer is correct.** Names cannot start with a digit, and class is a reserved keyword.

**Task.** Create variables for a book title, its price, number of pages and whether you have finished it. Print each variable.

**Quiz.** Which is a valid Python variable name?
- Correct: total_price
- Wrong: 2total
- Wrong: class

**Findings:** _none yet_

### 4. Data types & type conversion

**Concept.** **Core built-in types.** int stores whole numbers; float stores decimal numbers; str stores text; bool stores True or False. None represents the absence of a value. Use type(value) to inspect a value's type. Examples: 8, 3.14, 'Python', True, None.

**Collections preview.** Python also has list, tuple, set and dict types. You will study these in detail later. Choose a type based on how you need to organise and access data. A list is ordered and changeable; a dictionary stores key-value pairs.

**Convert types safely.** int('42') converts numeric text to an integer; float('3.5') converts to a decimal; str(42) converts a number to text. Invalid conversions raise ValueError. input() always returns text. Convert it before doing arithmetic.

**Example**

```
age_text = input('Your age: ')
age = int(age_text)
next_year = age + 1
print('Next year you will be', next_year)
```

**Explanation / note.** The input is text, int() converts it to a number, and then addition is numeric rather than text concatenation.

**Why the answer is correct.** input() returns a string. Convert it when numeric operations are required.

**Task.** Ask for two numbers, convert both to float, and print their sum and average. What happens if the user types a word?

**Quiz.** What type does input() return?
- Correct: str
- Wrong: int
- Wrong: float

**Findings:** _none yet_

### 5. Input, output & operators

**Concept.** **Input and formatted output.** input('Prompt: ') pauses for user text. print() can display multiple values. f-strings make readable output: f'Hello {name}'. Use f-strings for clear messages and numeric formatting, such as f'{price:.2f}'.

**Arithmetic operators.** + adds, - subtracts, * multiplies, / divides, // floor-divides, % gives remainder, and ** raises to a power. Parentheses make the intended order clear. 10 // 3 is 3; 10 % 3 is 1; 2 ** 3 is 8.

**Comparison and logical operators.** ==, !=, <, <=, >, >= compare values. and, or and not combine or invert boolean expressions. These are essential for decisions. Check boundaries carefully: age >= 18 includes 18.

**Example**

```
price = float(input('Price: '))
quantity = int(input('Quantity: '))
total = price * quantity
print(f'Total: ₹{total:.2f}')
```

**Explanation / note.** The program converts inputs to numeric types, multiplies them and formats the result to two decimal places.

**Why the answer is correct.** The modulo operator % returns the remainder after division.

**Task.** Build a simple bill calculator that asks for item price and quantity, then prints subtotal and a 5% tax amount.

**Quiz.** Which operator gives the remainder?
- Correct: %
- Wrong: //
- Wrong: **

**Findings:** _none yet_

### 6. Conditions & decision making

**Concept.** **if, elif and else.** Use if to run a block when a condition is true. elif checks another condition; else handles the remaining case. A colon begins each block and indentation defines it. Only the first matching branch in an if/elif/else chain runs.

**Combining conditions.** Use and when all conditions must be true, or when at least one must be true, and not to invert a condition. Use parentheses for complex expressions. Example: age >= 18 and has_id.

**Common mistakes.** Use == to compare, not =. Remember the colon. Indent every statement inside a block consistently. Test edge cases such as exactly the minimum value. Write the condition in plain language before translating it into Python.

**Example**

```
marks = float(input('Enter marks: '))
if marks >= 75:
    print('Distinction')
elif marks >= 40:
    print('Pass')
else:
    print('Needs more practice')
```

**Explanation / note.** Python checks from top to bottom. The first true condition selects the output.

**Why the answer is correct.** Python uses a colon and indentation to define a compound statement's block.

**Task.** Write a program that asks for a number and reports whether it is positive, negative or zero. Then extend it to check even or odd.

**Quiz.** What marks the start of an if block?
- Correct: A colon followed by an indented block
- Wrong: Curly braces
- Wrong: A semicolon

**Findings:** _none yet_

### 7. Loops: for & while

**Concept.** **for loops.** A for loop visits each item in an iterable. range(5) produces 0,1,2,3,4. range(start, stop, step) controls the sequence; stop is excluded. Use for when you know the collection or sequence you want to visit.

**while loops.** A while loop repeats while its condition is true. Update the state so the loop can eventually stop. An infinite loop can freeze a program until interrupted. Use while for sentinel input, retries and situations where the number of repetitions is not known.

**break, continue and nested loops.** break exits the nearest loop. continue skips to the next iteration. Nested loops place one loop inside another; track each loop's variable carefully. Avoid unnecessary nested loops when a clearer approach exists.

**Example**

```
for number in range(1, 6):
    print(number, number * number)

count = 3
while count > 0:
    print('Countdown:', count)
    count -= 1
```

**Explanation / note.** The for loop prints numbers and their squares. The while loop decreases count until the condition becomes false.

**Why the answer is correct.** The stop value is excluded, so range(1, 5) ends at 4.

**Task.** Create a multiplication table for a number entered by the user. Then use a while loop to keep asking until the user enters 0.

**Quiz.** What does range(1, 5) include?
- Correct: 1, 2, 3, 4
- Wrong: 1, 2, 3, 4, 5
- Wrong: 0, 1, 2, 3, 4

**Findings:** _none yet_

### 8. Functions & scope

**Concept.** **Define and call a function.** def creates a function. The indented body runs when you call it. Functions package reusable behaviour and make programs easier to test. A function should ideally have one clear responsibility.

**Parameters, arguments and return.** Parameters are names in a function definition; arguments are values supplied in a call. return sends a result back. print displays; return makes a value available to other code. Use return when another part of the program needs the computed result.

**Default, keyword arguments and scope.** Parameters can have defaults. Keyword arguments name the parameter in a call. Local variables belong to a function call; avoid changing global state unnecessarily. Prefer passing required data into functions and returning results.

**Example**

```
def calculate_total(price, quantity=1):
    return price * quantity

first = calculate_total(50, 3)
second = calculate_total(price=80)
print(first, second)
```

**Explanation / note.** The function returns a calculation. The second call uses the default quantity of one.

**Why the answer is correct.** return sends a value to the caller; print only displays output.

**Task.** Write functions for add, subtract, multiply and divide. Return results; handle division by zero in a safe way.

**Quiz.** Which keyword sends a result back from a function?
- Correct: return
- Wrong: print
- Wrong: yield

**Findings:** _none yet_

### 9. Strings & text processing

**Concept.** **Strings and indexing.** Strings are sequences of characters. Indexing starts at 0; negative indices count from the end. Slicing uses text[start:stop] and excludes stop. Strings are immutable: methods return new strings rather than changing the original.

**Useful string methods.** lower(), upper(), strip(), replace(), split() and join() are common tools. Use in to test whether a substring occurs. Clean user input with strip() and normalise case when comparisons should ignore capitalisation.

**Formatting and validation.** f-strings insert values into text. Validate length, allowed characters and expected format before trusting user input. Validation rules depend on the task. Do not assume input is valid just because it looks correct in one example.

**Example**

```
full_name = input('Full name: ').strip()
parts = full_name.split()
print('Hello,', full_name.title())
print('Name parts:', len(parts))
```

**Explanation / note.** strip removes surrounding whitespace, split separates words, and title formats the displayed name.

**Why the answer is correct.** Python sequence indexing begins at zero.

**Task.** Ask for an email-like string, remove surrounding spaces, convert to lowercase and check whether it contains @. Explain why this is only a basic check, not full email validation.

**Quiz.** What is the first index in a Python string?
- Correct: 0
- Wrong: 1
- Wrong: -1

**Findings:** _none yet_

### 10. Lists, tuples, sets & dictionaries

**Concept.** **Lists.** Lists are ordered, mutable collections. Create with []; access by index; append adds an item; remove deletes a matching item; len gives the number of items. Loop through a list to process each value. List indices start at zero. Accessing an invalid index raises IndexError.

**Tuples and sets.** Tuples are ordered and immutable. Sets store unique elements and are useful for membership tests and removing duplicates; sets do not promise positional indexing. Choose tuple for a fixed record-like sequence and set for uniqueness/membership.

**Dictionaries.** A dictionary maps unique keys to values. Use person['name'] to access a key, get() for a safe lookup, and items() to loop over key-value pairs. A list of dictionaries is a useful structure for records such as expenses or students.

**Example**

```
student = {'name': 'Mira', 'marks': [78, 82, 91]}
student['average'] = sum(student['marks']) / len(student['marks'])
print(student.get('name'))
print(f"Average: {student['average']:.1f}")
```

**Explanation / note.** The dictionary stores a student's name and list of marks. The average is calculated and stored as another value.

**Why the answer is correct.** Dictionaries map keys to values.

**Task.** Create a list of five expenses as dictionaries with category and amount. Print each expense and calculate the total.

**Quiz.** Which collection stores key-value pairs?
- Correct: Dictionary
- Wrong: List
- Wrong: Tuple

**Findings:** _none yet_

### 11. Modules, packages & virtual environments

**Concept.** **Import modules.** A module is a Python file. import math makes its functions available through math; from math import sqrt imports a selected name. The standard library includes many useful modules. Avoid naming your own file random.py, json.py or math.py because it can shadow the standard module.

**Packages and pip.** A package groups reusable modules. pip installs third-party packages from package indexes. Read documentation and check package trustworthiness before installing dependencies. Never install unknown packages blindly, especially in work or production environments.

**Virtual environments.** A virtual environment isolates project dependencies. Create one with python -m venv .venv, activate it for your operating system, then use python -m pip install package-name. Record dependencies in requirements.txt for repeatable setup.

**Example**

```
import math

radius = 4
area = math.pi * radius ** 2
print(f'Area: {area:.2f}')
```

**Explanation / note.** The math module provides pi. Importing standard-library modules does not require a separate pip installation.

**Why the answer is correct.** Virtual environments keep each project's installed packages separate.

**Task.** Use math to calculate the area and circumference of a circle. Write down the steps to create a virtual environment for a new project.

**Quiz.** What is a common purpose of a virtual environment?
- Correct: Isolate project dependencies
- Wrong: Make code run without a computer
- Wrong: Automatically fix bugs

**Findings:** _none yet_

### 12. Files, CSV & JSON

**Concept.** **Read and write text files.** Use open() with a context manager: with open(path, encoding='utf-8') as file. Modes include r for read, w for overwrite and a for append. The with block closes the file automatically. Be careful with w: it replaces existing file contents.

**CSV data.** CSV stores rows and columns as text. The csv module reads and writes CSV safely, including quoted values and delimiters. Use newline='' when opening CSV files for writing, as recommended by Python documentation.

**JSON data.** JSON represents objects, arrays, strings, numbers, booleans and null. Python's json module converts between JSON text and Python data using dump/load and dumps/loads. Do not load untrusted pickle files. JSON is a safer interchange format for ordinary data.

**Example**

```
import json

profile = {'name': 'Mira', 'skills': ['Python', 'SQL']}
with open('profile.json', 'w', encoding='utf-8') as file:
    json.dump(profile, file, indent=2)

with open('profile.json', encoding='utf-8') as file:
    loaded = json.load(file)
print(loaded['skills'])
```

**Explanation / note.** The program writes a dictionary as JSON, reads it back and accesses its skills list.

**Why the answer is correct.** The built-in json module serialises and parses JSON.

**Task.** Extend your expense list program to save records to expenses.json and load them when the program starts. Handle a missing file gracefully.

**Quiz.** Which Python module handles JSON?
- Correct: json
- Wrong: csv
- Wrong: pathlib

**Findings:** _none yet_

### 13. Errors, exceptions & debugging

**Concept.** **Understand errors.** Syntax errors prevent parsing. Runtime exceptions happen while code executes. Logic errors produce the wrong result even though the program runs. Read the traceback from the bottom for the exception type and message. A traceback also shows the call path and line where the error occurred.

**Handle exceptions.** Use try for risky operations and except for expected failures. Catch specific exceptions such as ValueError or FileNotFoundError. Use else for success-only work and finally for cleanup. Do not use a bare except to hide every problem.

**Debug systematically.** Reproduce the issue, reduce it to a small example, inspect assumptions, use print or a debugger, fix the cause and test again. Add tests for the failure you found. Do not randomly change several lines at once; isolate one cause at a time.

**Example**

```
try:
    age = int(input('Age: '))
except ValueError:
    print('Please enter a whole number.')
else:
    print('Next year:', age + 1)
```

**Explanation / note.** If conversion fails, ValueError is handled. If it succeeds, the else block runs.

**Why the answer is correct.** Specific exception handling avoids hiding unrelated bugs.

**Task.** Make a safe division program that handles non-numeric input and division by zero without crashing.

**Quiz.** Which is best practice when handling exceptions?
- Correct: Catch only expected, specific exceptions
- Wrong: Ignore every exception
- Wrong: Use except around the whole program

**Findings:** _none yet_

### 14. Object-oriented programming

**Concept.** **Classes and objects.** A class defines a kind of object; an object is an instance. Attributes store state and methods define behaviour. __init__ initialises a new instance; self refers to that instance. Use classes when related state and behaviour belong together. Simple scripts do not need a class for everything.

**Encapsulation and composition.** Keep an object's internal details behind a clear interface. Composition means one object contains or uses another. Prefer simple designs over unnecessary inheritance trees. A BankAccount class might own a balance and methods for deposit and withdrawal; it should validate operations.

**Inheritance and polymorphism.** Inheritance allows a subclass to specialise a base class. Polymorphism lets different objects respond to the same method interface. Use inheritance when there is a genuine 'is-a' relationship. Composition is often easier to change than deep inheritance.

**Example**

```
class Expense:
    def __init__(self, category, amount):
        if amount <= 0:
            raise ValueError('Amount must be positive')
        self.category = category
        self.amount = amount

    def describe(self):
        return f'{self.category}: ₹{self.amount:.2f}'

item = Expense('Food', 120)
print(item.describe())
```

**Explanation / note.** Expense groups related data and behaviour. The constructor validates the amount before storing it.

**Why the answer is correct.** self refers to the current instance receiving the method call.

**Task.** Create a BankAccount class with deposit and withdraw methods. Prevent negative deposits and withdrawals larger than the balance.

**Quiz.** What does self refer to in an instance method?
- Correct: The current object
- Wrong: The parent class only
- Wrong: The Python interpreter

**Findings:** _none yet_

### 15. Testing, quality & Git

**Concept.** **Write tests.** Tests check whether code behaves as expected. Start with normal cases, boundary cases and invalid input. Python's unittest is built in; pytest is a popular third-party framework. A good test has a clear arrange, act and assert structure.

**Readable, maintainable code.** Use descriptive names, small functions, consistent formatting and helpful docstrings. Follow PEP 8 as a style guide. Refactor when duplication or complexity makes change difficult. Code is read more often than it is written. Optimise for clarity first.

**Version control with Git.** Git records changes over time. Learn init, status, add, commit, log, branch, merge, pull and push. A repository stores project history; GitHub hosts repositories and collaboration tools. Commit small, meaningful changes. Never commit passwords, API keys or private data.

**Example**

```
def add_tax(amount, rate):
    if amount < 0 or rate < 0:
        raise ValueError('Values cannot be negative')
    return amount * (1 + rate)

assert add_tax(100, 0.05) == 105
print('Basic check passed')
```

**Explanation / note.** assert checks an expected result. In a real project, place tests in a separate test file and use a test framework.

**Why the answer is correct.** A commit records a set of repository changes in history.

**Task.** Create a Git repository for one exercise. Make commits as you add a feature, fix a bug and update the README. Add at least three tests.

**Quiz.** What does a Git commit represent?
- Correct: A recorded snapshot of project changes
- Wrong: A Python variable
- Wrong: A web hosting service

**Findings:** _none yet_

### 16. APIs, databases & professional Python

**Concept.** **Work with APIs.** An API defines how software systems communicate. HTTP APIs commonly use GET to read and POST to submit data. JSON is a common response format. Check status codes, timeouts and errors. Use environment variables for API keys. Never publish secrets in source code or screenshots.

**SQL and databases.** A relational database stores structured data in tables. SQL creates, reads, updates and deletes records. Learn SELECT, INSERT, UPDATE, DELETE, WHERE, JOIN, GROUP BY and transactions. Use parameterised queries rather than building SQL by concatenating user input.

**Professional workflow.** Use a virtual environment, dependency files, tests, logging, documentation, code review and version control. Separate configuration from code. Understand licensing, privacy and security before deployment. Professional readiness means being able to explain design choices, test failures, trade-offs and how another person can run your work.

**Example**

```
# Example of a safe parameterised SQLite query
import sqlite3

with sqlite3.connect('expenses.db') as db:
    db.execute('CREATE TABLE IF NOT EXISTS expenses (category TEXT, amount REAL)')
    db.execute('INSERT INTO expenses VALUES (?, ?)', ('Food', 120.0))
    rows = db.execute('SELECT category, amount FROM expenses').fetchall()
    print(rows)
```

**Explanation / note.** The ? placeholders keep values separate from SQL syntax. SQLite is included with Python.

**Why the answer is correct.** Parameters keep user values separate from the SQL command structure.

**Task.** Add SQLite storage to your expense tracker. Implement create, list and category summary operations using parameterised SQL.

**Quiz.** Why use parameterised SQL queries?
- Correct: To reduce SQL injection risk
- Wrong: To make the database public
- Wrong: To avoid writing tests

**Findings:** _none yet_

### 17. Advanced foundations & portfolio capstone

**Concept.** **Think in algorithms.** An algorithm is a sequence of steps that solves a problem. Learn to break tasks into smaller parts, choose suitable data structures and consider time and space complexity. Big-O describes how resource use grows with input size. Start with a correct, readable solution. Optimise after measuring and identifying a real bottleneck.

**Choose a specialisation.** Python can support automation, backend web development, data analysis, machine learning, testing and scripting. Each path needs additional domain knowledge and tools. Choose based on the problems you want to solve. For data: learn NumPy, pandas, visualisation and statistics. For backend: learn HTTP, a web framework, databases and deployment. For automation: learn files, APIs, scheduling and safe operations.

**Finish and present a project.** A portfolio project should solve a clear problem, have understandable setup instructions, demonstrate tests and include screenshots or a short demo. Explain what you built, why you chose the design and what you would improve. Use the expense tracker capstone below. Keep sample data fictional and never upload private records.

**Example**

```
# A small, testable summary function
def total_by_category(expenses):
    totals = {}
    for item in expenses:
        category = item['category']
        totals[category] = totals.get(category, 0) + item['amount']
    return totals

sample = [
    {'category': 'Food', 'amount': 100},
    {'category': 'Travel', 'amount': 50},
    {'category': 'Food', 'amount': 25},
]
print(total_by_category(sample))
```

**Explanation / note.** The function aggregates amounts by category using a dictionary. It is small enough to test independently.

**Why the answer is correct.** A strong project proves you can build, explain, test and maintain a solution.

**Task.** Complete the Personal Expense Tracker capstone. Publish the source code, README, sample data, tests and a short explanation of design decisions in a GitHub repository.

**Quiz.** What makes a portfolio project stronger?
- Correct: Working code, documentation, tests and a clear explanation
- Wrong: A large number of files only
- Wrong: A screenshot without source code

**Findings:** _none yet_
