# Review packet: Microsoft Excel: Beginner to Advanced Workplace Skills

- Course key: `excel`  ·  Lessons: 11  ·  Review interval: 60 days
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
- [ ] The capstone brief is realistic, clear and fairly assessable with the rubric

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

### 8. Dynamic arrays, XLOOKUP & LET

**Concept.** Dynamic array functions return several results that spill into neighbouring cells, so one formula can create a whole list. FILTER keeps rows that meet a condition, SORT orders them, UNIQUE removes duplicates and XLOOKUP finds a match with a clear not-found value. LET gives names to calculations inside a formula so it is easier to read and avoids repeating work. These functions are available in current Microsoft 365 and recent Excel versions, but not older ones, so check before sharing a workbook. Keep a clear area for spill results and avoid typing over it.

**Example**

```
=FILTER(Sales[Amount], Sales[Region]="West")
=SORT(UNIQUE(Sales[Product]))
=XLOOKUP(G2, Products[ID], Products[Price], "Not found")
=LET(total, SUM(Sales[Amount]), target, 100000, IF(total>=target, "On target", "Below target"))
```

**Explanation / note.** The spill range must be clear, otherwise Excel shows a spill error.

**Task.** Create a fictional sales table. Build a filtered list, a sorted unique product list, a price lookup with a not-found message and one LET formula. Test what happens when new rows are added and when the spill area is blocked.

**Quiz.** What happens when a dynamic array formula returns several values?
- Correct: The results spill into the neighbouring cells automatically
- Wrong: Excel deletes the extra values
- Wrong: Only the first value is ever shown

**Findings:** _none yet_

### 9. What-if analysis: Goal Seek, scenarios & sensitivity

**Concept.** What-if analysis tests how results change when assumptions change. Goal Seek changes one input until a formula reaches a target value, for example the sales needed to reach a profit. A one-variable or two-variable data table shows results across a range of inputs, and scenarios compare best, expected and worst cases. Keep assumptions in clearly labelled input cells, not inside formulas, so they can be reviewed. Treat the output as a decision aid: a model is only as good as its assumptions, so record the source of each one.

**Example**

```
Assumptions (inputs):  Price 20   Variable cost 8   Fixed costs 12,000
Profit = (Price - Variable cost) x Units - Fixed costs

Goal Seek:
  Set cell: Profit   To value: 5,000   By changing: Units
  Result: Units = 1,417 (rounded)

Sensitivity table (units across, price down) shows profit for each combination.
```

**Explanation / note.** It works backward from the result you want to the input that produces it.

**Task.** Build a small profit model with separate input cells. Use Goal Seek to find the units needed for a target profit, then build a two-variable data table for price and units. Write three lines on which assumption changes the result most.

**Quiz.** What does Goal Seek do?
- Correct: Changes one input until a formula reaches a chosen target value
- Wrong: Sorts a table by a chosen column
- Wrong: Removes duplicates from a list

**Findings:** _none yet_

### 10. Conditional totals, SUMPRODUCT & INDEX/MATCH

**Concept.** SUMIFS adds values that meet one or more conditions and COUNTIFS counts rows that meet them, so a summary updates when the data changes instead of being typed in by hand. SUMPRODUCT multiplies matching ranges and adds the results, which gives revenue from units and prices without a helper column. INDEX returns the value at a position in a range and MATCH finds that position; together they look up values in any column and work in every Excel version. Wrap a lookup in IFERROR to show a clear message instead of a raw error, and use MATCH with 0 for an exact match. Keep ranges the same size and prefer tables or named ranges so formulas do not break when rows are added.

**Example**

```
Units in C2:C6, prices in D2:D6, regions in A2:A6, products in B2:B6
North units      =SUMIFS(C2:C6,A2:A6,"North")                 -> 13
Revenue          =SUMPRODUCT(C2:C6,D2:D6)                    -> 790
Book price       =INDEX(D2:D6,MATCH("Book",B2:B6,0))         -> 40
Missing product  =IFERROR(INDEX(D2:D6,MATCH("Lamp",B2:B6,0)),"not found")  -> not found
Rows with 0 units =COUNTIFS(C2:C6,0)                         -> 1
```

**Explanation / note.** The formulas in the example were calculated in LibreOffice on the sample table and matched a Python check: 13 North units, revenue 790, book price 40 and a not-found message for a missing product.

**Task.** Build a fictional sales table of at least 15 rows. Add formulas for units by region, revenue by product using SUMPRODUCT, a lookup of one product price with a friendly message when missing, and a count of rows with zero units. Change one input and confirm every dependent result updates.

**Quiz.** Why use IFERROR around a lookup?
- Correct: To show a clear message instead of an error when the item is not found
- Wrong: To make the lookup faster
- Wrong: To change the data in the source table

**Findings:** _none yet_

### 11. Excel professional capstone

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

## Capstone project brief

**.** 

Build:

Evidence to submit:

Stretch goal: 

**Brief findings (is it realistic, clear and fairly assessable?):** _none yet_
