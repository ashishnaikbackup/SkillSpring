# Review packet: Microsoft Excel: Beginner to Advanced Workplace Skills

- Course key: `excel`  ·  Lessons: 8  ·  Review interval: 60 days
- Current status: `initial-review-required`  ·  Last reviewed: never
- Content files: `essential-courses.js`
- Official sources to check against:
  - https://support.microsoft.com/excel

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

Start with cells and formulas, then clean data, analyse it, build models and create reliable reports used in real workplaces.

## Lessons

### 1. Workbook, worksheets & cell basics

**Concept.** A workbook contains worksheets; a cell is identified by column and row such as B3. Learn ribbon, formula bar, ranges, selecting, entering data, fill handle, save and common formats.

**Example**

```
Enter a small expense table with Date, Category, Description and Amount. Format the date and amount columns and rename the worksheet.
```

**Task.** Create a clean monthly expense log with at least 10 fictional rows.

**Quiz.** What does cell C5 identify?
- Correct: Column C, row 5
- Wrong: Column 5, row C
- Wrong: The fifth worksheet

**Findings:** _none yet_

### 2. Formulas, operators & references

**Concept.** Formulas begin with =. Use arithmetic operators and functions such as SUM, AVERAGE, MIN and MAX. Relative references adjust when copied; absolute references such as $B$2 stay fixed.

**Example**

```
Enter =SUM(D2:D11), =AVERAGE(D2:D11), and use =$B$1*D2 to apply a fixed tax or rate cell. Copy the formula down and inspect references.
```

**Task.** Build a bill calculator with quantity, unit price, subtotal, tax rate and total.

**Quiz.** What does $B$2 mean in a formula?
- Correct: An absolute reference that keeps column B and row 2 fixed
- Wrong: A deleted cell
- Wrong: A text-only cell

**Findings:** _none yet_

### 3. Logic, text, dates & error handling

**Concept.** Use IF, AND, OR, IFERROR, COUNTIF, SUMIF, LEFT, RIGHT, TRIM, TEXT and date functions. Validate inputs and understand errors such as #N/A, #VALUE! and #DIV/0!.

**Example**

```
Use =IF(D2>=1000,"High","Normal"), =SUMIF(B:B,"Food",D:D), and TRIM to clean extra spaces. Test blank and invalid inputs.
```

**Task.** Create a category summary and flag transactions above a threshold.

**Quiz.** What does SUMIF do?
- Correct: Adds values that meet a specified condition
- Wrong: Sorts every worksheet
- Wrong: Deletes duplicate rows

**Findings:** _none yet_

### 4. Lookups & data cleaning

**Concept.** Use XLOOKUP where available, or INDEX/MATCH for compatibility. Clean data with TRIM, remove duplicates carefully, standardise dates and categories, and split columns when necessary. Never overwrite raw data without a backup.

**Example**

```
Create a product table and use XLOOKUP to return a price by product ID. Keep a raw-data sheet and create a cleaned copy.
```

**Task.** Clean a messy fictional customer/order list and map product codes to names.

**Quiz.** Why preserve raw data?
- Correct: So cleaning steps are reversible and original records remain available
- Wrong: To make the workbook larger
- Wrong: Because formulas cannot use clean data

**Findings:** _none yet_

### 5. Sort, filter, tables & validation

**Concept.** Excel Tables expand with data and structured references. Sort and filter to inspect records. Data Validation restricts entries and dropdowns reduce inconsistent categories.

**Example**

```
Convert a range to a table, filter by month and category, add a dropdown list for status and highlight overdue records.
```

**Task.** Build a task or sales tracker with validation and conditional formatting.

**Quiz.** What is a benefit of an Excel Table?
- Correct: Structured references and automatic expansion as rows are added
- Wrong: It prevents all data errors
- Wrong: It replaces backups

**Findings:** _none yet_

### 6. PivotTables, charts & dashboards

**Concept.** PivotTables summarise data by dimensions and measures. Choose suitable charts and create a dashboard with a few useful KPIs, filters and clear labels. Verify totals against source data.

**Example**

```
Create a PivotTable showing sales by region and month. Add a bar chart and slicer if available. Reconcile grand totals with the source table.
```

**Task.** Build a one-page sales dashboard with revenue, order count, regional comparison and trend.

**Quiz.** What is a PivotTable mainly used for?
- Correct: Summarising and exploring data across categories
- Wrong: Writing long documents
- Wrong: Editing photographs

**Findings:** _none yet_

### 7. Power Query, modelling & professional controls

**Concept.** Power Query imports and transforms repeatable data. Learn data types, append/merge, refresh and query steps. Use named ranges, formula auditing, protection and documentation. Avoid fragile hard-coded assumptions.

**Example**

```
Import a CSV with Power Query, change data types, remove blank rows and refresh after replacing the source file. Document assumptions and checks.
```

**Task.** Create a refreshable monthly reporting workbook with separate raw, transform and report layers.

**Quiz.** What is Power Query useful for?
- Correct: Repeatable data import and transformation
- Wrong: Animating charts
- Wrong: Replacing every formula

**Findings:** _none yet_

### 8. Excel professional capstone

**Concept.** Build a decision-ready model: clearly labelled inputs, calculations, outputs, checks, assumptions, scenario controls and a dashboard. Separate inputs from formulas and test edge cases.

**Example**

```
Create a fictional small-business performance workbook with monthly revenue, costs, profit, budget variance, forecast assumptions, PivotTables and a dashboard.
```

**Task.** Capstone: deliver the workbook, a one-page interpretation and a QA checklist. Explain limitations and how to refresh it.

**Quiz.** What makes a spreadsheet model safer to use?
- Correct: Clear inputs, documented assumptions, validation and independent checks
- Wrong: Hidden formulas with no labels
- Wrong: Hard-coded numbers scattered everywhere

**Findings:** _none yet_
