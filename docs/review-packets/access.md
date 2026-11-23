# Review packet: Microsoft Access: Relational Database Foundations

- Course key: `access`  ·  Lessons: 9  ·  Review interval: 90 days
- Current status: `initial-review-required`  ·  Last reviewed: never
- Content files: `essential-courses.js`
- Official sources to check against:
  - https://support.microsoft.com/access
  - https://learn.microsoft.com/en-us/office/client-developer/access/desktop-database-reference/

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

Learn tables, keys, relationships, queries, forms and reports by building a small structured database.

## Lessons

### 1. Database thinking & Access interface

**Concept.** A database stores structured records. Learn tables, fields, records, data types, primary keys, queries, forms and reports. Distinguish a database from a spreadsheet.

**Example**

```
Create a blank practice database and identify where tables, queries, forms and reports appear.
```

**Task.** Deliverable: a database plan for a small library or inventory system.

**Quiz.** What uniquely identifies a row in a table?
- Correct: A primary key
- Wrong: A report title
- Wrong: A cell colour

**Findings:** _none yet_

### 2. Tables, fields & data types

**Concept.** Design tables around entities. Choose appropriate data types, required fields, validation rules and unique identifiers. Avoid storing multiple values in one field.

**Example**

```
Create Customers and Orders tables with IDs, dates, amounts and text fields. Add required-field and validation rules.
```

**Task.** Create a data dictionary explaining each field and its type.

**Quiz.** Why use appropriate data types?
- Correct: To validate values and support correct sorting and calculations
- Wrong: To change the logo
- Wrong: To remove all relationships

**Findings:** _none yet_

### 3. Relationships & normalisation

**Concept.** Relational databases link tables using primary and foreign keys. Learn one-to-many relationships, referential integrity and basic normalisation to reduce duplicated facts.

**Example**

```
Connect Customers.CustomerID to Orders.CustomerID. Enable referential integrity and test an invalid orphan record.
```

**Task.** Draw a simple ER diagram and explain the relationship cardinality.

**Quiz.** What does referential integrity help prevent?
- Correct: Invalid references to records that do not exist
- Wrong: All duplicate report titles
- Wrong: Slow typing

**Findings:** _none yet_

### 4. Queries & criteria

**Concept.** Queries retrieve and combine records. Learn filters, criteria, sorting, calculated fields, joins, totals and parameter prompts. Make changes carefully when using update/delete queries.

**Example**

```
Build a query for orders above a threshold and a totals query grouped by customer. Preview records before changing data.
```

**Task.** Create three saved queries for common business questions.

**Quiz.** What should you do before running a delete query?
- Correct: Back up data and verify the selection criteria
- Wrong: Run it on the only copy
- Wrong: Hide the table

**Findings:** _none yet_

### 5. Forms, reports & usability

**Concept.** Forms provide controlled data entry; reports format output for review or printing. Use labels, validation, clear navigation and meaningful grouping.

**Example**

```
Build a customer entry form and a grouped order report with totals. Test invalid and missing input.
```

**Task.** Create a small front end with a form and printable report.

**Quiz.** What is the main purpose of a form?
- Correct: To make data entry and editing easier and more controlled
- Wrong: To replace database backups
- Wrong: To run operating system updates

**Findings:** _none yet_

### 6. Query design: joins, totals & parameters

**Concept.** Queries answer questions from related tables. A join combines rows that match on a key field: an inner join keeps only matching rows, while a left join keeps every row from the first table even without a match. A totals query groups rows and calculates values such as Sum, Count or Average. A parameter query asks the user for a value each time it runs, written in square brackets in the criteria row. Test queries on a small known dataset, check row counts against expectations and save useful queries with clear names. The query joins customers to their orders, asks for a start date, totals spending per customer and lists the highest first. Customers without orders are not shown because it is an inner join.

**Example**

```
SELECT Customers.CustomerName, Sum(Orders.Amount) AS TotalSpent
FROM Customers INNER JOIN Orders
  ON Customers.CustomerID = Orders.CustomerID
WHERE Orders.OrderDate >= [Enter start date]
GROUP BY Customers.CustomerName
ORDER BY Sum(Orders.Amount) DESC;
```

**Explanation / note.** A left join is useful for finding records, such as customers, that have no related rows.

**Task.** In a fictional database with Customers and Orders tables, build an inner-join query, change it to a left join to find customers with no orders, and create a parameter query for a date range. Compare the row counts and explain each difference.

**Quiz.** How does a left join differ from an inner join?
- Correct: It keeps every row from the first table, even without a match
- Wrong: It keeps only rows that match in both tables
- Wrong: It deletes unmatched rows from the database

**Findings:** _none yet_

### 7. Importing, linking & data quality

**Concept.** Data often starts in Excel or CSV files. Import copies the data into an Access table; linking keeps the data in the original file and reads it live, which suits a shared source but depends on that file staying in place. Before importing, clean the source: one header row, one type of value per column, no merged cells. After importing, check data types, row counts and key fields. Use validation rules, required fields and lookup lists to stop bad data entering, and run a find-duplicates query. Keep a backup before large imports so you can restore the database.

**Example**

```
Import checklist (fictional students.csv)
  1. Source: one header row, no blank rows, dates in one format
  2. Import into a new table; choose a primary key
  3. Compare row count: file 1,250 rows = table 1,250 records
  4. Check data types: dates are Date/Time, marks are Number
  5. Add rules: Mark between 0 and 100; Email required
  6. Run Find Duplicates on StudentID and fix matches
  7. Compact and back up the database
```

**Explanation / note.** A linked source is convenient but fragile if the file moves or its columns change.

**Task.** Import a fictional CSV with a few deliberate errors. Compare row counts, find the wrong data types and duplicate keys, add validation rules and write down what you fixed.

**Quiz.** What is a risk of linking to an external Excel file instead of importing it?
- Correct: The data depends on the file staying available and unchanged in structure
- Wrong: Access cannot read the data at all
- Wrong: The data is copied twice

**Findings:** _none yet_

### 8. Unmatched records, outer joins & summary queries

**Concept.** Access queries answer questions across related tables. An inner join returns only rows that match in both tables, so customers with no orders disappear. A left outer join keeps every row from the first table and shows empty values where there is no match, which is how you list customers with no orders: join, then filter for a missing value on the order side. A totals query groups rows and adds Count or Sum, and an empty total should be shown as zero with Nz so reports do not display blanks. Relationships with referential integrity stop an order from pointing at a customer that does not exist. In the query designer, double-click a join line and choose the option that includes all records from the table you want to keep.

**Example**

```
SQL view of the same ideas (Access SQL is very similar):
SELECT c.Name, COUNT(o.OrderID) AS Orders, Nz(SUM(o.Total), 0) AS Spend
FROM Customers AS c LEFT JOIN Orders AS o ON o.CustomerID = c.CustomerID
GROUP BY c.CustomerID, c.Name;

-- Sample result: Asha 2 orders 325; Dev 1 order 120; Mira 0 orders 0
-- Customers with no orders: Mira
```

**Explanation / note.** The same logic was run in SQLite on the sample data (Nz is Access's name for COALESCE) and gave 2 orders and 325 for Asha, 1 and 120 for Dev, and 0 for Mira. Not opened in Microsoft Access itself; a reviewer should confirm.

**Task.** Create Customers and Orders tables with a relationship and referential integrity, and add six fictional customers with four orders. Build a totals query with all customers, then a query that lists only customers with no orders. Try to add an order for a customer that does not exist and record the error message.

**Quiz.** Which join keeps customers that have no orders?
- Correct: A left outer join from Customers to Orders
- Wrong: An inner join between the two tables
- Wrong: A union of two forms

**Findings:** _none yet_

### 9. Security, maintenance & capstone

**Concept.** Understand file protection limits, backups, compact/repair, split database concepts and multi-user limitations. Access is useful for small desktop database scenarios, not every enterprise workload.

**Example**

```
Create a small inventory database with Products, Suppliers and Purchases. Add relationships, queries, form, report and backup copy.
```

**Task.** Capstone: submit database, ER diagram, data dictionary, test cases and user instructions.

**Quiz.** What is an essential maintenance practice?
- Correct: Regular verified backups
- Wrong: Keep one copy only
- Wrong: Share the database publicly

**Findings:** _none yet_

## Capstone project brief

**.** 

Build:

Evidence to submit:

Stretch goal: 

**Brief findings (is it realistic, clear and fairly assessable?):** _none yet_
