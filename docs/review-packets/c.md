# Review packet: C Programming: Zero to Systems Foundations

- Course key: `c`  ·  Lessons: 7  ·  Review interval: 180 days
- Current status: `initial-review-required`  ·  Last reviewed: never
- Content files: `course-engine.js`
- Official sources to check against:
  - https://learn.microsoft.com/en-us/cpp/c-language/
  - https://www.gnu.org/software/gnu-c-manual/gnu-c-manual.html

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

Learn how a C program is compiled and executed, then master procedural programming, memory and structured data.

## Lessons

### 1. Your first C program

**Concept.** C is a compiled, general-purpose language used in systems, embedded software and performance-sensitive applications. A C source file is compiled into a program. A typical toolchain uses a compiler such as GCC or Clang.

**Example**

```
#include <stdio.h>

int main(void) {
    printf("Hello, World!\n");
    return 0;
}
```

**Explanation / note.** stdio.h declares standard input/output functions. main is the program entry point. printf prints text; return 0 signals successful completion.

**Task.** Write a program that prints your name, course and three learning goals on separate lines.

**Quiz.** What is the usual role of a C compiler?
- Correct: Translate source code into an executable program
- Wrong: Display web pages
- Wrong: Store files only

**Findings:** _none yet_

### 2. Types, variables & operators

**Concept.** C is statically typed: declare a variable with a type before using it. Common types include int, char, float and double. Use meaningful names and initialise variables. sizeof reports storage size in bytes.

**Example**

```
int age = 21;
double price = 49.50;
char grade = 'A';
printf("%d %.2f %c\n", age, price, grade);
```

**Explanation / note.** Format specifiers must match the argument types: %d for int, %f for floating-point output (printf promotes float to double), and %c for char. Use %zu for sizeof results.

**Task.** Build a small bill calculator with item price, quantity and total. Use double for money-like example values and explain why production finance software needs decimal-safe representations.

**Quiz.** Which type is commonly used for a single character?
- Correct: char
- Wrong: int
- Wrong: double

**Findings:** _none yet_

### 3. Input, decisions & loops

**Concept.** scanf can read formatted input, but always check its return value. if/else makes decisions. for, while and do-while repeat work. C uses braces to define blocks and semicolons to end statements.

**Example**

```
int n;
printf("Enter a number: ");
if (scanf("%d", &n) == 1) {
    if (n % 2 == 0) puts("Even");
    else puts("Odd");
} else {
    puts("Invalid input");
}
```

**Explanation / note.** &n passes the address where scanf should store the integer. Checking scanf's result avoids using an uninitialised value after invalid input.

**Task.** Create a menu-driven calculator using a loop. Handle invalid choices and division by zero.

**Quiz.** Which operator gives the remainder in C?
- Correct: %
- Wrong: /
- Wrong: *

**Findings:** _none yet_

### 4. Functions, arrays & strings

**Concept.** A function has a return type, name, parameters and body. Arrays store same-typed elements contiguously; their valid indices run from 0 to length-1. A C string is a char array ending with the null character \0.

**Example**

```
int sum(const int values[], int count) {
    int total = 0;
    for (int i = 0; i < count; i++) total += values[i];
    return total;
}
```

**Explanation / note.** The array parameter is accompanied by count because C does not automatically pass an array's length. const says the function will not modify the elements through this parameter.

**Task.** Write functions for maximum, minimum and average of an integer array. Check what happens with an empty array.

**Quiz.** What marks the end of a C string?
- Correct: The null character \0
- Wrong: A newline
- Wrong: A space

**Findings:** _none yet_

### 5. Pointers, memory & structures

**Concept.** A pointer stores an address. & obtains an object's address and * dereferences a pointer. Every pointer must be valid before dereferencing. malloc allocates dynamic memory and free releases it. A struct groups related fields.

**Example**

```
int value = 42;
int *ptr = &value;
printf("%d\n", *ptr);

struct Student { int id; char grade; };
```

**Explanation / note.** ptr points to value; *ptr accesses the value. Uninitialised, dangling or out-of-bounds pointers cause undefined behaviour. Check allocation results and free owned memory exactly once.

**Task.** Create a struct for a student and an array of students. Add a function to find a student by ID. Draw a memory diagram for one pointer.

**Quiz.** What does *ptr do in an expression?
- Correct: Accesses the object pointed to by ptr
- Wrong: Gets the size of ptr
- Wrong: Frees memory

**Findings:** _none yet_

### 6. Multiple files, headers & building

**Concept.** Real C programs are split into several source files. A header file (.h) declares functions and types; a source file (.c) defines them. Include guards stop a header being processed twice. Each .c file is compiled into an object file, and the linker joins the object files into one program. A Makefile or build tool recompiles only what changed. Compiler warnings are valuable: build with options such as -Wall -Wextra and fix them. Use a debugger such as gdb, or tools such as Valgrind or AddressSanitizer, to find memory errors.

**Example**

```
/* mathutil.h */
#ifndef MATHUTIL_H
#define MATHUTIL_H
int square(int x);
#endif

/* mathutil.c */
#include "mathutil.h"
int square(int x) { return x * x; }

/* main.c */
#include <stdio.h>
#include "mathutil.h"
int main(void) {
    printf("%d\n", square(7));
    return 0;
}

/* build and run */
/* gcc -Wall -Wextra -o app main.c mathutil.c && ./app */
```

**Explanation / note.** The header declares square so main.c can call it, and the definition lives in mathutil.c. Compiling both files and linking them produces the program, which prints 49. The include guard prevents duplicate declarations.

**Task.** Split a small program into main.c and a module with its own header. Compile with -Wall -Wextra, fix every warning, then deliberately introduce an out-of-bounds array access and find it with AddressSanitizer (-fsanitize=address).

**Quiz.** What does a header file normally contain?
- Correct: Declarations of functions and types shared between source files
- Wrong: The compiled machine code of the program
- Wrong: The operating system's memory map

**Findings:** _none yet_

### 7. Files, debugging & final project

**Concept.** Use fopen, fgets/fprintf and fclose for file work; check errors. Compile with warnings enabled, for example gcc -Wall -Wextra -Wpedantic. Use a debugger and sanitizers where available. Keep functions small and document assumptions.

**Example**

```
FILE *file = fopen("notes.txt", "w");
if (file != NULL) {
    fprintf(file, "C practice\n");
    fclose(file);
}
```

**Explanation / note.** File operations can fail because of permissions, missing directories or storage issues. Always check return values and close files you successfully opened.

**Task.** Capstone: build a contact manager that stores names and phone labels in a file. Include add, list, search, validation, error handling and a README. Never store real private contact data in a public demo.

**Quiz.** Why compile with warnings enabled?
- Correct: To detect suspicious code and mistakes early
- Wrong: To make all programs secure automatically
- Wrong: To replace testing

**Findings:** _none yet_
