# Review packet: Java: Programming & Object-Oriented Foundations

- Course key: `java`  ·  Lessons: 7  ·  Review interval: 90 days
- Current status: `initial-review-required`  ·  Last reviewed: never
- Content files: `course-engine.js`
- Official sources to check against:
  - https://dev.java/learn/
  - https://docs.oracle.com/en/java/

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

Learn Java from your first class through types, control flow, collections, OOP, exceptions and a practical application.

## Lessons

### 1. First Java program

**Concept.** Java is a statically typed, object-oriented language. Source files are compiled to bytecode and run on the Java Virtual Machine (JVM). A JDK includes tools to compile and run Java programs.

**Example**

```
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
```

**Explanation / note.** The public class name must match the file name in the usual file-based workflow. main is the entry point; println prints a line.

**Task.** Create Main.java that prints a short introduction and compile and run it using the JDK.

**Quiz.** What executes Java bytecode?
- Correct: The Java Virtual Machine
- Wrong: A CSS browser rule
- Wrong: A SQL table

**Findings:** _none yet_

### 2. Types, variables & control flow

**Concept.** Java has primitive types such as int, double, boolean and char, plus reference types such as String. Use if/else, switch, for and while to control program flow.

**Example**

```
int age = 21;
String name = "Mira";
if (age >= 18) {
    System.out.println(name + " is an adult");
}
```

**Explanation / note.** Java checks types at compile time. String is a class, not a primitive type. Use == carefully: for String content comparison, use equals().

**Task.** Build a grade calculator using numeric marks, conditions and input validation.

**Quiz.** How should you compare String contents?
- Correct: equals()
- Wrong: == always
- Wrong: compare using +

**Findings:** _none yet_

### 3. Methods, arrays & collections

**Concept.** Methods organise behaviour and can accept parameters and return values. Arrays have a fixed length. ArrayList grows dynamically; choose a collection based on the problem.

**Example**

```
static int sum(int[] values) {
    int total = 0;
    for (int value : values) total += value;
    return total;
}
```

**Explanation / note.** The enhanced for loop visits each array element. A method's signature includes its name and parameter types.

**Task.** Create methods for max, min and average, then store a list of names in an ArrayList.

**Quiz.** What is a key difference between an array and ArrayList?
- Correct: ArrayList can grow or shrink dynamically
- Wrong: ArrayList cannot store objects
- Wrong: Arrays have no indexes

**Findings:** _none yet_

### 4. Classes, objects & encapsulation

**Concept.** A class defines fields and methods. Constructors initialise objects. Access modifiers such as private and public define the interface. Encapsulation protects valid object state.

**Example**

```
class BankAccount {
    private double balance;
    public void deposit(double amount) {
        if (amount > 0) balance += amount;
    }
}
```

**Explanation / note.** Keep fields private and expose methods that validate changes. For real financial software, use decimal-safe representations rather than double for currency.

**Task.** Create a Student class with private fields, constructor, getters and a method to calculate an average.

**Quiz.** Why make fields private?
- Correct: To control access and protect object invariants
- Wrong: To make them static
- Wrong: To prevent constructors

**Findings:** _none yet_

### 5. Inheritance, interfaces & polymorphism

**Concept.** Inheritance lets a subclass reuse and specialise a parent class with extends; super refers to the parent. An interface defines a contract of methods that classes promise to implement. Polymorphism means code written against a parent class or interface works with any implementation, and the object's real class decides which method runs. Use @Override so the compiler checks you really are overriding. Prefer composition when the relationship is not a genuine 'is-a'.

**Example**

```
interface Shape { double area(); }

class Circle implements Shape {
    private final double r;
    Circle(double r) { this.r = r; }
    public double area() { return Math.PI * r * r; }
}

class Rectangle implements Shape {
    private final double w, h;
    Rectangle(double w, double h) { this.w = w; this.h = h; }
    public double area() { return w * h; }
}

public class Main {
    public static void main(String[] args) {
        Shape[] shapes = { new Circle(1), new Rectangle(2, 3) };
        for (Shape s : shapes) System.out.printf("%.2f%n", s.area());
    }
}
```

**Explanation / note.** The array holds Shape references. Each call to area() runs the method of the real object, so the program prints 3.14 and then 6.00. Adding a Triangle class later would not require changing the loop.

**Task.** Add a Triangle class that implements Shape. Add a method that returns the shape with the largest area from an array. Explain why that method needs no change when new shapes are added.

**Quiz.** What does polymorphism allow when you call area() on a Shape variable?
- Correct: Each object runs its own implementation of the method
- Wrong: The interface itself can be created with new
- Wrong: Classes no longer need to implement the method

**Findings:** _none yet_

### 6. Testing with JUnit & debugging

**Concept.** A unit test checks one small behaviour automatically. JUnit 5 is the standard Java test framework: mark a method with @Test and use assertions such as assertEquals to compare expected and actual values. Structure each test as arrange, act, assert, and cover normal, boundary and invalid input. Maven or Gradle can run all tests with one command. When something fails, read the stack trace from the top, reproduce the problem in a small test, then use a debugger breakpoint to inspect values before changing code.

**Example**

```
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

class PriceCalculatorTest {
    @Test
    void addsTaxToPrice() {
        assertEquals(105.0, PriceCalculator.withTax(100.0, 0.05), 0.0001);
    }

    @Test
    void rejectsNegativePrice() {
        assertThrows(IllegalArgumentException.class,
            () -> PriceCalculator.withTax(-1.0, 0.05));
    }
}
```

**Explanation / note.** The first test checks a normal case; the delta 0.0001 allows for floating-point rounding. The second checks that invalid input is rejected with the expected exception.

**Task.** Write a PriceCalculator.withTax method, then write three tests: a normal case, a zero price and a negative price. Run them with your build tool and fix any failure by changing the code, not the expected value.

**Quiz.** What happens when assertEquals finds that the expected and actual values differ?
- Correct: The test fails and reports both values
- Wrong: The test is skipped silently
- Wrong: The program is compiled again

**Findings:** _none yet_

### 7. Exceptions, files & project

**Concept.** Exceptions represent exceptional conditions. Use try/catch for expected failures and close resources with try-with-resources. Split code into classes with clear responsibilities and write tests.

**Example**

```
try (var reader = new java.io.BufferedReader(new java.io.FileReader("notes.txt"))) {
    System.out.println(reader.readLine());
} catch (java.io.IOException e) {
    System.out.println("Could not read file");
}
```

**Explanation / note.** Try-with-resources closes the reader automatically. Catch specific exceptions and avoid silently ignoring errors.

**Task.** Capstone: build a library catalogue with classes, ArrayList, search, file persistence, validation and tests. Document how to compile and run.

**Quiz.** What does try-with-resources provide?
- Correct: Automatic closing of supported resources
- Wrong: Automatic database design
- Wrong: Automatic bug-free code

**Findings:** _none yet_
