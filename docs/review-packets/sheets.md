# Review packet: Spreadsheets: Excel & Google Sheets Foundations

- Course key: `sheets`  ·  Lessons: 8  ·  Review interval: 90 days
- Current status: `initial-review-required`  ·  Last reviewed: never
- Content files: `course-engine.js`
- Official sources to check against:
  - https://workspace.google.com/products/sheets/
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

Learn spreadsheet structure, formulas, references, analysis, charts and practical workbooks for everyday and professional tasks.

## Lessons

### 1. Cells, rows, columns & clean data

**Concept.** A spreadsheet is a grid of cells. Keep one record per row and one field per column. Use clear headers, consistent units and separate raw data from calculations. Avoid merged cells in data tables.

**Example**

```
A1: Date | B1: Category | C1: Amount
A2: 2026-01-01 | B2: Food | C2: 120
```

**Explanation / note.** Consistent tabular data is easier to filter, validate, analyse and import into other tools.

**Task.** Create a monthly expense table with date, category, description and amount. Use fictional values.

**Quiz.** What is a good basic data-table structure?
- Correct: One record per row and one field per column
- Wrong: A different layout for every row
- Wrong: Merged cells for every value

**Findings:** _none yet_

### 2. Formulas & references

**Concept.** Formulas begin with =. Arithmetic operators and functions calculate results. Relative references change when copied; absolute references use dollar signs, such as $B$2. Mixed references lock one dimension.

**Example**

```
=C2*D2
=SUM(E2:E20)
=$B$2*A2
```

**Explanation / note.** SUM adds a range. Absolute references are useful for constants such as a tax rate or conversion factor used across many rows.

**Task.** Build an invoice calculator with quantity, unit price, subtotal and a fixed tax-rate cell using an absolute reference.

**Quiz.** What does $B$2 do when copied?
- Correct: Keeps both column B and row 2 fixed
- Wrong: Deletes the cell
- Wrong: Converts it to text

**Findings:** _none yet_

### 3. Functions, logic & lookups

**Concept.** Learn SUM, AVERAGE, MIN, MAX, COUNT, IF, COUNTIF, SUMIF and lookup functions such as XLOOKUP where available. Check exact function availability in your spreadsheet application.

**Example**

```
=IF(C2>=40,"Pass","Review")
=SUMIF(B2:B20,"Food",C2:C20)
```

**Explanation / note.** IF chooses a result based on a condition. SUMIF adds values matching a criterion. Lookups connect a key to related information.

**Task.** Create a marks sheet with pass/fail, subject averages and category totals. Test boundary values.

**Quiz.** What does SUMIF do?
- Correct: Sums values that meet a condition
- Wrong: Counts only blank cells
- Wrong: Sorts the worksheet

**Findings:** _none yet_

### 4. Sort, filter, validation & cleaning

**Concept.** Sort changes row order; filters show matching records. Data validation restricts entries and reduces mistakes. Remove duplicates carefully and preserve a raw-data copy. Watch for numbers stored as text and inconsistent date formats.

**Example**

```
Validation idea: allow Category from a controlled list such as Food, Travel, Study, Bills.
```

**Explanation / note.** Validation improves consistency but does not guarantee all data is correct. Always inspect imported data.

**Task.** Clean a fictional transaction list, add category validation and create a filter for one month.

**Quiz.** Why keep a raw-data copy?
- Correct: To preserve the original and make transformations auditable
- Wrong: To avoid formulas
- Wrong: To make files larger

**Findings:** _none yet_

### 5. Pivot tables, charts & dashboards

**Concept.** Pivot tables summarise data by categories and measures. Charts communicate comparisons and trends. Dashboards should define metrics, units, date ranges and filters. Avoid clutter and misleading scales.

**Example**

```
Example KPI: Total expenses = SUM(Amount)
Average transaction = AVERAGE(Amount)
```

**Explanation / note.** A chart should answer a specific question. A dashboard is not useful if users cannot tell what the numbers mean.

**Task.** Build a monthly spending dashboard with category totals, a trend chart and clearly labelled date range.

**Quiz.** What should every dashboard metric make clear?
- Correct: Definition, units and time period
- Wrong: Only its colour
- Wrong: Only its font

**Findings:** _none yet_

### 6. Lookups, dynamic arrays & error handling

**Concept.** XLOOKUP finds a value in one column and returns the matching value from another, with a built-in message for no match; it is more flexible than older VLOOKUP, which depends on column position. Dynamic array functions such as FILTER, SORT and UNIQUE return several results that spill into neighbouring cells. IFERROR replaces an error with a chosen value, but use it carefully because it can hide a real problem; handle expected cases explicitly and investigate unexpected ones. Function availability depends on your spreadsheet product and version, so check before sharing a file.

**Example**

```
=XLOOKUP(E2, Products[ID], Products[Price], "Not found")
=IFERROR(B2/C2, "Check quantity")
=SORT(UNIQUE(Sales[Region]))
=FILTER(Sales, Sales[Amount] > 1000, "No rows")
```

**Explanation / note.** The first formula looks up a product price and shows a clear message if the ID is missing. The last two build a sorted list of regions and a list of large sales that update when the data changes.

**Task.** Using a fictional product and sales table, build a price lookup with a not-found message, a unique sorted region list and a filter for sales above a threshold. Add a test row with a missing ID and explain how each formula behaves.

**Quiz.** Why should IFERROR be used carefully?
- Correct: It can hide real errors that should be investigated
- Wrong: It makes every formula calculate faster
- Wrong: It only works on text values

**Findings:** _none yet_

### 7. Charts, pivot summaries & dashboards

**Concept.** A pivot table summarises a dataset by grouping rows and totalling values without changing the source data. Charts turn the summary into a picture: use a line for change over time, bars to compare categories and avoid decoration that hides the message. Choose clear titles that state the finding, label axes and units, and keep the source data in a separate sheet. Slicers or filters let a reader explore a dashboard. Check totals against the raw data, and keep one cell block for assumptions and the date of the last update.

**Example**

```
Source sheet: Sales (Date, Region, Product, Amount)
Pivot: Rows = Region, Columns = Month, Values = Sum of Amount
Chart: clustered columns by Region with title "West led sales in October"
Filter: slicer on Product
Check: pivot grand total = SUM of Amount column in the source sheet
```

**Explanation / note.** The final check compares the pivot total with a simple SUM, which catches missing rows or wrong ranges before the chart is shared.

**Task.** Create a fictional sales sheet with at least 50 rows, build a pivot summary and two charts, add a filter and write a one-line finding as each chart title. Verify the pivot total against the source.

**Quiz.** Why should a pivot table total be checked against the source data?
- Correct: To catch missing rows, wrong ranges or duplicated records
- Wrong: Pivot tables never need checking
- Wrong: Because totals change when you add a chart

**Findings:** _none yet_

### 8. Modelling, audit & capstone

**Concept.** Separate inputs, calculations and outputs. Document assumptions, protect formula cells where appropriate and test scenarios. Avoid hard-coded values hidden inside formulas. Review errors and access permissions before sharing.

**Example**

```
Scenario design: Base case · Lower-income case · Higher-cost case. Show assumptions in visible cells.
```

**Explanation / note.** A spreadsheet model is a set of assumptions, not a prediction. Validate formulas with small test cases and independent checks.

**Task.** Capstone: create a personal budget workbook with income, expenses, savings goals, category summaries, charts and scenario assumptions using sample data only.

**Quiz.** What should a responsible financial spreadsheet show?
- Correct: Inputs, assumptions, formulas and limitations
- Wrong: A guaranteed outcome
- Wrong: Only the final total

**Findings:** _none yet_
