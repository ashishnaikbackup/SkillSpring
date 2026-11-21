# Review packet: Microsoft Access: Relational Database Foundations

- Course key: `access`  ·  Lessons: 6  ·  Review interval: 90 days
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

### 6. Security, maintenance & capstone

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
