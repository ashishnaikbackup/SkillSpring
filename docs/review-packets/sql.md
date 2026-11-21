# Review packet: SQL: Databases from Zero

- Course key: `sql`  ·  Lessons: 7  ·  Review interval: 90 days
- Current status: `initial-review-required`  ·  Last reviewed: never
- Content files: `course-engine.js`
- Official sources to check against:
  - https://www.postgresql.org/docs/current/tutorial.html

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

Understand relational data and write queries safely, from your first SELECT to joins, aggregation and a small database project.

## Lessons

### 1. What is a database?

**Concept.** A database stores organised information. A relational database stores data in tables made of rows and columns. SQL is a language for defining, querying and changing relational data. SQLite is a convenient local learning database.

**Example**

```
CREATE TABLE students (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  year INTEGER
);
```

**Explanation / note.** A primary key uniquely identifies a row. NOT NULL requires a value. Column types and constraints help keep data consistent.

**Task.** Design a table for books with an ID, title, author and publication year. Identify which columns should be required.

**Quiz.** What uniquely identifies a row in a relational table?
- Correct: A primary key
- Wrong: A colour
- Wrong: A file name

**Findings:** _none yet_

### 2. SELECT, WHERE & ORDER BY

**Concept.** SELECT chooses columns. FROM names the table. WHERE filters rows. ORDER BY sorts results. LIMIT restricts how many rows are returned. Use explicit columns rather than SELECT * in stable application queries.

**Example**

```
SELECT name, year
FROM students
WHERE year >= 2
ORDER BY name ASC
LIMIT 10;
```

**Explanation / note.** SQL clauses have a logical processing order; write readable queries with clear filters. Text values use single quotes.

**Task.** Create a sample products table and query items above a chosen price, sorted from highest to lowest.

**Quiz.** Which clause filters rows?
- Correct: WHERE
- Wrong: ORDER BY
- Wrong: CREATE

**Findings:** _none yet_

### 3. INSERT, UPDATE, DELETE & transactions

**Concept.** INSERT adds rows, UPDATE changes existing rows and DELETE removes rows. Always preview the target rows with SELECT before a destructive change. Transactions group changes so they can commit or roll back together.

**Example**

```
BEGIN;
UPDATE students SET year = 3 WHERE id = 7;
COMMIT;
```

**Explanation / note.** A missing or incorrect WHERE clause can change every row. Use transactions and backups for important data.

**Task.** Insert sample records, update one selected record and delete one selected record. Explain why a WHERE clause matters.

**Quiz.** What can happen if UPDATE has no WHERE clause?
- Correct: Every row may be updated
- Wrong: Only the first row changes
- Wrong: The database closes

**Findings:** _none yet_

### 4. Functions, NULL & aggregation

**Concept.** SQL includes COUNT, SUM, AVG, MIN and MAX. GROUP BY forms groups; HAVING filters groups after aggregation. NULL means unknown or missing and should be tested with IS NULL, not = NULL.

**Example**

```
SELECT year, COUNT(*) AS students
FROM students
GROUP BY year
HAVING COUNT(*) > 2;
```

**Explanation / note.** WHERE filters rows before grouping; HAVING filters groups. Aggregate functions summarise sets of rows.

**Task.** Calculate total orders per customer and average order value by month using a sample dataset.

**Quiz.** Which clause filters aggregated groups?
- Correct: HAVING
- Wrong: WHERE only
- Wrong: LIMIT

**Findings:** _none yet_

### 5. JOINs, keys & relational design

**Concept.** JOIN combines related rows. INNER JOIN returns matching pairs; LEFT JOIN keeps all rows from the left table and matches where available. Foreign keys express relationships. Normalisation reduces avoidable duplication.

**Example**

```
SELECT orders.id, customers.name
FROM orders
JOIN customers ON orders.customer_id = customers.id;
```

**Explanation / note.** The join condition connects a foreign key to the referenced primary key. Incorrect join conditions can multiply rows unexpectedly.

**Task.** Create customers and orders tables. Query each order with the customer's name, then find customers with no orders using LEFT JOIN.

**Quiz.** What does LEFT JOIN preserve?
- Correct: All rows from the left table
- Wrong: Only rows with a match
- Wrong: Only the newest row

**Findings:** _none yet_

### 6. Subqueries, CTEs & window functions

**Concept.** A subquery is a query inside another query, useful for filtering by a computed value. A common table expression (CTE), written with WITH, gives a name to an intermediate result so a long query reads top to bottom. A window function calculates across related rows without collapsing them into one row the way GROUP BY does: RANK, ROW_NUMBER and running SUM use OVER with an optional PARTITION BY and ORDER BY. SQLite supports CTEs and window functions in current versions, and most SQL databases do too, with small syntax differences.

**Example**

```
WITH totals AS (
  SELECT customer_id, SUM(amount) AS total
  FROM orders
  GROUP BY customer_id
)
SELECT customer_id,
       total,
       RANK() OVER (ORDER BY total DESC) AS spend_rank
FROM totals;
```

**Explanation / note.** The CTE first computes one total per customer. The final query keeps every customer row and adds a rank by total spend. With GROUP BY alone you could not keep both the total and the rank in the same step.

**Task.** Using a fictional orders table, write a CTE that totals sales per month, then use LAG or a running SUM with OVER to compare each month with the previous one. Explain what each part of the OVER clause does.

**Quiz.** How does a window function differ from GROUP BY?
- Correct: It adds a calculation across related rows while keeping each row
- Wrong: It deletes duplicate rows permanently
- Wrong: It can only be used on text columns

**Findings:** _none yet_

### 7. Safe SQL, indexes & project

**Concept.** Use parameterised queries in applications; never concatenate untrusted input into SQL. Indexes can speed up reads but add storage and write costs. Use EXPLAIN to inspect query plans. Back up important data and apply least privilege.

**Example**

```
-- Parameter placeholder style varies by database driver
SELECT id, name FROM students WHERE id = ?;
```

**Explanation / note.** The placeholder keeps user-supplied values separate from SQL syntax. Driver APIs bind the value safely.

**Task.** Capstone: build a small course enrolment database with students, courses and enrolments. Include schema, sample data, joins, summary queries and a README.

**Quiz.** Why use parameterised queries?
- Correct: To prevent input from being treated as SQL syntax
- Wrong: To automatically encrypt all data
- Wrong: To avoid database design

**Findings:** _none yet_
