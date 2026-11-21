# Review packet: C++: Fundamentals to Object-Oriented Programming

- Course key: `cpp`  ·  Lessons: 7  ·  Review interval: 90 days
- Current status: `initial-review-required`  ·  Last reviewed: never
- Content files: `course-engine.js`
- Official sources to check against:
  - https://learn.microsoft.com/en-us/cpp/cpp/
  - https://isocpp.org/

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

Learn modern C++ fundamentals, object-oriented design, standard library containers and safer resource management.

## Lessons

### 1. First program & compilation

**Concept.** C++ is a compiled language with a rich standard library. A compiler translates source into an executable. Learn to compile with a modern standard such as C++20 when supported.

**Example**

```
#include <iostream>
int main() {
    std::cout << "Hello, World!\n";
    return 0;
}
```

**Explanation / note.** iostream provides stream input/output. std::cout writes to the console; << sends values to the stream. main is the entry point.

**Task.** Print a short introduction and compile it with warnings enabled.

**Quiz.** What does std::cout do?
- Correct: Writes output to the standard output stream
- Wrong: Reads a file
- Wrong: Allocates memory

**Findings:** _none yet_

### 2. Types, variables & expressions

**Concept.** C++ offers built-in types such as int, double, char and bool. Use const for values that should not change and auto when the type is clear from the initializer. Prefer initialisation with braces where appropriate.

**Example**

```
int count{5};
double rate{2.5};
const int limit{100};
auto next = count + 1;
```

**Explanation / note.** C++ is statically typed. auto deduces a type at compile time; it does not make the variable dynamically typed.

**Task.** Create a unit converter with clearly named variables, constants and formatted output.

**Quiz.** What does const communicate?
- Correct: The value cannot be modified through that name
- Wrong: The variable is global
- Wrong: The type is unknown

**Findings:** _none yet_

### 3. Conditions, loops & functions

**Concept.** if/else and switch select branches. for, range-based for and while repeat work. Functions support reuse; pass small values by value and larger objects by const reference when appropriate.

**Example**

```
int square(int n) { return n * n; }
for (int n : {1, 2, 3, 4}) {
    std::cout << square(n) << '\n';
}
```

**Explanation / note.** A range-based for visits each element in the initializer list. The function receives an int by value and returns its square.

**Task.** Write reusable functions for a calculator and validate the user's menu selection.

**Quiz.** What does a function return type of void mean?
- Correct: It returns no value
- Wrong: It returns zero
- Wrong: It can never be called

**Findings:** _none yet_

### 4. Classes, objects & constructors

**Concept.** A class combines data and functions. public members form the interface; private members protect internal state. A constructor establishes a valid object. Use const member functions when they do not modify the object.

**Example**

```
class Counter {
    int value{0};
public:
    void increment() { ++value; }
    int get() const { return value; }
};
```

**Explanation / note.** The value is private, so callers use the public methods. This helps keep an object's state valid.

**Task.** Create a BankAccount class with a private balance, deposit and withdraw methods, and validation.

**Quiz.** Why make a data member private?
- Correct: To protect invariants and control access
- Wrong: To make it global
- Wrong: To stop the object being created

**Findings:** _none yet_

### 5. References, STL & resource safety

**Concept.** References provide aliases to existing objects. std::vector is a dynamic array; std::string manages text; map and unordered_map store key-value data. Prefer standard containers and RAII to manual new/delete.

**Example**

```
#include <vector>
#include <numeric>
std::vector<int> scores{70, 80, 90};
int total = std::accumulate(scores.begin(), scores.end(), 0);
```

**Explanation / note.** The vector manages its storage automatically. RAII ties resource lifetime to object lifetime, helping avoid leaks and premature releases.

**Task.** Store expenses in a vector of structs. Use algorithms to compute totals and find the largest expense.

**Quiz.** Which is usually safer for a growable sequence?
- Correct: std::vector
- Wrong: A raw pointer with manual allocation
- Wrong: A fixed-size unbounded array

**Findings:** _none yet_

### 6. Templates, lambdas & STL algorithms

**Concept.** A template lets one function or class work with many types: the compiler generates a version for each type you use. A lambda is a small unnamed function written where it is needed, often passed to an STL algorithm such as std::sort or std::find_if. Algorithms work on iterator ranges, so the same algorithm works on different containers. Prefer a standard algorithm to a hand-written loop when it states your intent clearly, and read each algorithm's preconditions, for example that max_element needs a non-empty range.

**Example**

```
#include <algorithm>
#include <iostream>
#include <vector>

template <typename T>
T largest(const std::vector<T>& v) {
    return *std::max_element(v.begin(), v.end());  // v must not be empty
}

int main() {
    std::vector<int> nums{5, 2, 9, 1};
    std::sort(nums.begin(), nums.end(), [](int a, int b) { return a > b; });
    for (int n : nums) std::cout << n << ' ';
    std::cout << '\n' << largest(nums) << '\n';
}
```

**Explanation / note.** The lambda tells sort to order from largest to smallest, so the program prints 9 5 2 1 and then 9. The template function works for any element type that can be compared.

**Task.** Write a template function that counts how many elements satisfy a condition. Use it with a vector of integers and a vector of strings, passing a lambda for each condition. Then guard the empty-vector case.

**Quiz.** What is a lambda expression used for in C++?
- Correct: Writing a small unnamed function where it is needed
- Wrong: Declaring a new class hierarchy
- Wrong: Allocating memory on the heap automatically

**Findings:** _none yet_

### 7. Files, testing & capstone

**Concept.** Use streams such as ifstream and ofstream for files. Separate program logic from input/output so functions can be tested. Compile with warnings, write tests and use version control.

**Example**

```
#include <fstream>
std::ofstream out("report.txt");
if (out) out << "Practice complete\n";
```

**Explanation / note.** Streams manage file interaction through C++ abstractions. Check stream state after opening and after important operations.

**Task.** Capstone: build a command-line library tracker using classes, vectors, file persistence, search, validation and tests. Document compile steps and limitations.

**Quiz.** What does RAII help manage?
- Correct: Resource lifetime such as memory and file handles
- Wrong: Variable names
- Wrong: Only screen colours

**Findings:** _none yet_
