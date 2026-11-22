# Review packet: Java: Programming & Object-Oriented Foundations

- Course key: `java`  ·  Lessons: 10  ·  Review interval: 90 days
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
- [ ] The capstone brief is realistic, clear and fairly assessable with the rubric

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

### 7. Generics, collections & streams

**Concept.** Generics let a collection state the type of its elements, so the compiler rejects the wrong type before the program runs. The main collections are List for ordered items, Set for unique items and Map for key and value pairs. Streams describe a pipeline over a collection: filter keeps matching items, map transforms each item, sorted orders them and collect gathers the result. Streams make intent clear for transformations, but a plain loop is still better when the logic is complex or needs to change state. Avoid modifying a collection while looping over it.

**Example**

```
import java.util.*;
import java.util.stream.*;

public class Main {
    public static void main(String[] args) {
        List<String> names = List.of("Asha", "Ravi", "Anika", "Dev");
        List<String> aNames = names.stream()
            .filter(n -> n.startsWith("A"))
            .map(String::toUpperCase)
            .sorted()
            .collect(Collectors.toList());
        System.out.println(aNames);

        Map<Integer, Long> byLength = names.stream()
            .collect(Collectors.groupingBy(String::length, Collectors.counting()));
        System.out.println(byLength);
    }
}
```

**Explanation / note.** The first pipeline keeps names starting with A, converts them to upper case and sorts them, printing [ANIKA, ASHA]. The second groups names by length and counts each group, printing {3=1, 4=2, 5=1}.

**Task.** Create a list of ten fictional student records. Use a stream to find students above a mark threshold, sort them by name and count how many fall in each grade band. Then rewrite one pipeline as a loop and compare readability.

**Quiz.** What does the filter step in a stream pipeline do?
- Correct: Keeps only the items that match a condition
- Wrong: Sorts the items alphabetically
- Wrong: Removes the collection from memory

**Findings:** _none yet_

### 8. Records, enums & clear modelling

**Concept.** A record is a short way to declare an immutable data carrier: the compiler creates the constructor, accessors, equals, hashCode and toString for you. An enum defines a fixed set of named values, which prevents invalid strings such as typos. A switch expression with an enum returns a value and the compiler can warn when a case is missing. Choose records and enums to make illegal states hard to represent. Records and switch expressions need a recent Java version, so check which version your course or employer uses.

**Example**

```
public class Main {
    record Point(int x, int y) {
        double distanceFromOrigin() { return Math.sqrt(x * x + y * y); }
    }
    enum Level { LOW, MEDIUM, HIGH }

    static String label(Level level) {
        return switch (level) {
            case LOW -> "Relax";
            case MEDIUM -> "Plan";
            case HIGH -> "Act now";
        };
    }

    public static void main(String[] args) {
        Point p = new Point(3, 4);
        System.out.println(p + " " + p.distanceFromOrigin());
        System.out.println(label(Level.HIGH));
    }
}
```

**Explanation / note.** The record prints as Point[x=3, y=4] and the distance method returns 5.0. The enum switch returns Act now, and adding a new enum value without a case would make the switch fail to compile.

**Task.** Model a fictional order with a record and a status enum (NEW, PAID, SHIPPED). Write a method that returns the next allowed status using a switch expression, and explain how the design prevents invalid statuses.

**Quiz.** What is the main benefit of using an enum instead of text for a status?
- Correct: Only the defined values are possible, so typos are caught early
- Wrong: It makes the program run on any Java version
- Wrong: It stores the value in the database automatically

**Findings:** _none yet_

### 9. Optional, null safety & clear absence

**Concept.** A null reference that is used by mistake throws a NullPointerException, one of the most common Java bugs. Optional is a small container that says clearly that a value may be absent. A method that might find nothing can return Optional instead of null, and the caller must decide what to do: map transforms a present value, filter keeps it only if a condition holds, and orElse supplies a default. Use Optional for return values, not for fields or parameters, and do not call get without checking. Records give short immutable data carriers that pair well with it.

**Example**

```
import java.util.*;

public class Opt {
    record User(String name, String email) {}

    static Optional<User> find(Map<Integer, User> db, int id) {
        return Optional.ofNullable(db.get(id));
    }

    public static void main(String[] args) {
        Map<Integer, User> db = Map.of(1, new User("Asha", "asha@example.test"));
        System.out.println(find(db, 1).map(User::email).orElse("no email"));
        System.out.println(find(db, 2).map(User::email).orElse("no email"));
        System.out.println(find(db, 2).isPresent());
        System.out.println(find(db, 1).filter(u -> u.name().startsWith("A")).isPresent());
    }
}
// Prints: asha@example.test / no email / false / true
```

**Explanation / note.** find returns Optional.ofNullable of the map lookup, so a missing id gives an empty Optional rather than null. map extracts the email only when the user is present and orElse supplies the default. filter keeps the user only if the name starts with A, so isPresent reports true for Asha. Compiled and run with a current JDK.

**Task.** Write a method that looks up a book by title in a list and returns Optional. Print its author with a default when it is missing, and add three tests for found, missing and empty-list cases.

**Quiz.** Why return Optional instead of null?
- Correct: It makes possible absence explicit to the caller
- Wrong: It makes the method run faster
- Wrong: It removes the need for classes

**Findings:** _none yet_

### 10. Exceptions, files & project

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

## Capstone project brief

**.** 

Build:

Evidence to submit:

Stretch goal: 

**Brief findings (is it realistic, clear and fairly assessable?):** _none yet_
