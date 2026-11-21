# Review packet: Data Structures & Algorithms: Zero to Interview Ready

- Course key: `dsa`  ·  Lessons: 12  ·  Review interval: 180 days
- Current status: `initial-review-required`  ·  Last reviewed: never
- Content files: `essential-courses.js`
- Official sources to check against:
  - https://algs4.cs.princeton.edu/home/
  - https://cp-algorithms.com/

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

Learn how data is stored and how problems are solved efficiently. Start with complexity and arrays, then build the structures, algorithms, patterns and interview habits used in software roles.

## Lessons

### 1. What are data structures and algorithms?

**Concept.** A data structure organises information; an algorithm transforms or searches it. The right choice affects speed, memory and clarity. Learn the difference between an abstract idea and a language-specific implementation.

**Example**

```
A contact list may use an array for ordered display, a hash map for fast lookup and a tree for sorted navigation. Each choice optimises a different operation.
```

**Task.** For a student directory, list operations (search, insert, delete, sort) and choose a simple structure for each.

**Quiz.** What does a data structure decide?
- Correct: How data is organised and accessed
- Wrong: The programming language colour
- Wrong: The monitor resolution

**Findings:** _none yet_

### 2. Time and space complexity

**Concept.** Complexity describes how resource use grows with input size n. Big-O focuses on growth, not exact seconds. Common classes: O(1), O(log n), O(n), O(n log n), O(n²), O(2ⁿ). Space complexity tracks extra memory.

**Example**

```
A loop over n items is O(n). Two nested loops over n items are usually O(n²). Binary search halves a sorted search space: O(log n).
```

**Task.** Classify five snippets by counting operations. Explain why 2n+10 is O(n) and n²+3n is O(n²).

**Quiz.** What does O(n) mean?
- Correct: Work grows roughly in proportion to input size
- Wrong: It always takes one second
- Wrong: It means no memory is used

**Findings:** _none yet_

### 3. Arrays and strings

**Concept.** Arrays store indexed elements, often contiguously. Access by index is O(1); searching is O(n); inserting in the middle may require shifting O(n) items. Strings are sequences of characters with language-specific immutability rules.

**Example**

```
Trace two pointers from both ends to test a palindrome. For [4,7,2], index 1 returns 7 in constant time.
```

**Task.** Solve: find maximum, reverse an array, count vowels, check palindrome and remove duplicates. State time and space complexity.

**Quiz.** What is typical array index access complexity?
- Correct: O(1)
- Wrong: O(n²)
- Wrong: O(2ⁿ)

**Findings:** _none yet_

### 4. Linked lists, stacks and queues

**Concept.** Linked lists connect nodes with references; access by position is O(n), while insertion after a known node can be O(1). A stack is last-in-first-out; a queue is first-in-first-out.

**Example**

```
Browser back history can be modelled as a stack. A printer queue processes jobs in arrival order. Draw node links and trace push/pop/enqueue/dequeue.
```

**Task.** Implement stack operations, queue operations and reverse a linked list conceptually. Test empty and one-element cases.

**Quiz.** Which structure follows FIFO?
- Correct: Queue
- Wrong: Stack
- Wrong: Binary search tree

**Findings:** _none yet_

### 5. Hash maps and sets

**Concept.** A hash map stores key-value pairs and uses a hash function to locate buckets. Average lookup/insert is often O(1), but collisions and poor hashing matter. A set stores unique values.

**Example**

```
Count word frequencies using a map: for each word, increment count[word]. Use a set to detect duplicates while scanning.
```

**Task.** Solve two-sum, first non-repeating character and duplicate detection. Explain average-case assumptions.

**Quiz.** What is a set especially useful for?
- Correct: Tracking unique values and membership
- Wrong: Keeping values always sorted
- Wrong: Representing a call stack

**Findings:** _none yet_

### 6. Recursion and backtracking

**Concept.** Recursion solves a problem by calling itself on smaller inputs. Every recursive function needs a base case and progress toward it. Backtracking explores choices and reverses a choice when a path fails.

**Example**

```
Factorial: fact(n)=1 when n<=1, otherwise n*fact(n-1). Trace fact(4). Draw the call stack and return values.
```

**Task.** Solve factorial, sum of digits and generate subsets. Identify base case, recursive step and stack depth.

**Quiz.** Why is a base case essential?
- Correct: It stops recursion from continuing indefinitely
- Wrong: It sorts the input
- Wrong: It allocates a database

**Findings:** _none yet_

### 7. Searching and sorting

**Concept.** Linear search scans items; binary search requires sorted data and halves the search interval. Sorting orders data. Learn selection, insertion, merge and quick sort, their trade-offs and stability.

**Example**

```
Binary search in [2,5,8,12,16,23,38] for 16: inspect middle, discard half, repeat. Merge sort divides, sorts and merges.
```

**Task.** Implement linear and binary search; trace insertion sort and merge sort on a small list. Compare complexity.

**Quiz.** What precondition does binary search require?
- Correct: The search range must be sorted
- Wrong: All values must be positive
- Wrong: The list must contain exactly ten values

**Findings:** _none yet_

### 8. Trees, binary search trees and heaps

**Concept.** Trees model hierarchy. A binary tree has up to two children per node. A BST orders left and right subtrees under a defined duplicate policy. Heaps support efficient min/max retrieval; a priority queue uses this idea.

**Example**

```
Draw a BST by inserting 8,3,10,1,6. Trace inorder traversal (sorted output) and preorder traversal.
```

**Task.** Implement traversals, search in a BST and use a heap to find the k largest values.

**Quiz.** Which traversal of a valid BST returns sorted keys?
- Correct: Inorder
- Wrong: Preorder
- Wrong: Level order

**Findings:** _none yet_

### 9. Graphs and traversal

**Concept.** Graphs contain vertices and edges, directed or undirected, weighted or unweighted. Represent them with adjacency lists or matrices. BFS explores layers using a queue; DFS explores deeply using recursion or a stack.

**Example**

```
Model cities as vertices and roads as edges. BFS from one city finds minimum edge-count distance in an unweighted graph.
```

**Task.** Build an adjacency list and trace BFS and DFS. Solve connected components and shortest path in an unweighted graph.

**Quiz.** Which structure is commonly used by BFS?
- Correct: Queue
- Wrong: Stack only
- Wrong: Hash function

**Findings:** _none yet_

### 10. Greedy, dynamic programming and patterns

**Concept.** Greedy algorithms make locally optimal choices and need a correctness argument. Dynamic programming stores overlapping subproblem results using memoisation or tabulation. Learn two pointers, sliding window, prefix sums and binary search on answer.

**Example**

```
Fibonacci recursion repeats work; memoisation caches results. A sliding window tracks a moving contiguous range without recomputing every element.
```

**Task.** Solve maximum subarray, longest substring without repeats, coin change and climbing stairs. Explain why the chosen pattern fits.

**Quiz.** What makes dynamic programming useful?
- Correct: Overlapping subproblems and reusable optimal substructure
- Wrong: Every problem has sorted input
- Wrong: It avoids all loops

**Findings:** _none yet_

### 11. Complexity trade-offs and interview problem solving

**Concept.** Interview work includes clarifying requirements, examples, brute force, optimisation, correctness reasoning, complexity, clean implementation and tests. Communicate while solving. Do not jump straight to code.

**Example**

```
For two-sum, begin with nested loops O(n²), then use a hash map for average O(n). Explain the memory trade-off and duplicate handling.
```

**Task.** Solve a problem aloud using: clarify, examples, brute force, pattern, implementation, tests, complexity and improvement.

**Quiz.** What should you do before coding an interview problem?
- Correct: Clarify inputs, outputs, constraints and examples
- Wrong: Guess the intended solution
- Wrong: Start typing without a plan

**Findings:** _none yet_

### 12. DSA capstone and revision plan

**Concept.** Combine structures and patterns in a small searchable task manager or route planner. Document operations, complexity, edge cases and tests. Revisit weak patterns using spaced practice rather than memorising solutions.

**Example**

```
A task manager may use a hash map by ID, a heap for priorities and a graph for dependencies. Explain why each structure fits.
```

**Task.** Build a command-line contact/task manager and solve 20 progressively harder problems. Record mistakes and explain each solution without looking.

**Quiz.** What is strong evidence of DSA learning?
- Correct: Solving unfamiliar problems and explaining correctness and trade-offs
- Wrong: Memorising code only
- Wrong: Watching videos without practice

**Findings:** _none yet_
