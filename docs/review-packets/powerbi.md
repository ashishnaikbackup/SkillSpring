# Review packet: Microsoft Power BI: Beginner to Professional Business Intelligence

- Course key: `powerbi`  ·  Lessons: 9  ·  Review interval: 30 days
- Current status: `initial-review-required`  ·  Last reviewed: never
- Content files: `essential-courses.js`, `powerbi-project.html`, `docs/POWER_BI_RETAIL_PROJECT.md`, `data/powerbi-sales.csv`, `data/powerbi-products.csv`, `data/powerbi-regions.csv`
- Official sources to check against:
  - https://learn.microsoft.com/en-us/power-bi/
  - https://learn.microsoft.com/en-us/power-bi/fundamentals/power-bi-learning-path-directory

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

Learn data analysis and reporting from zero: connect data, clean it, model relationships, write DAX measures and publish decision-ready reports.

## Lessons

### 1. BI concepts & Power BI Desktop

**Concept.** Business intelligence turns data into useful information for decisions. Learn report, dashboard, semantic model, Power BI Desktop, Power BI Service and the typical flow from source to report.

**Example**

```
Install Power BI Desktop if available. Open a sample CSV, inspect fields and create a simple table visual. Save the PBIX project.
```

**Task.** Deliverable: a first report page showing a few sample records.

**Quiz.** What is the main purpose of business intelligence?
- Correct: Turn data into information that supports decisions
- Wrong: Store passwords
- Wrong: Replace every operational database

**Findings:** _none yet_

### 2. Connect, import & inspect data

**Concept.** Power BI can connect to files, databases and online services. Understand import versus DirectQuery at a high level, data types, column quality and source reliability. Keep credentials secure.

**Example**

```
Import a CSV of fictional sales. Check column names, data types, blank values and duplicate IDs. Record the source and refresh assumptions.
```

**Task.** Create a source inventory and a clean initial data preview.

**Quiz.** Why should you inspect data types early?
- Correct: Wrong types can break calculations, relationships and visuals
- Wrong: They only change colours
- Wrong: They remove the need for validation

**Findings:** _none yet_

### 3. Power Query & data transformation

**Concept.** Power Query records repeatable transformation steps. Learn remove columns/rows, rename, split, replace, trim, change type, merge and append. Preserve source data and make refresh repeatable.

**Example**

```
Clean a sample orders table: trim text, set date/currency types, remove blank rows and merge a product lookup. Review applied steps.
```

**Task.** Deliver a refreshable cleaned dataset with documented transformations.

**Quiz.** What does append do in Power Query?
- Correct: Stacks rows from compatible tables
- Wrong: Joins columns using a key
- Wrong: Creates a chart

**Findings:** _none yet_

### 4. Data modelling & relationships

**Concept.** A model connects fact tables to dimension tables. Learn primary/foreign keys, one-to-many relationships, filter direction, star schema and why duplicated data can create confusing results.

**Example**

```
Create Sales fact, Date dimension, Product dimension and Region dimension. Connect keys and test totals before building visuals.
```

**Task.** Draw a model diagram and verify one-to-many relationships.

**Quiz.** What is a common recommended analytical model?
- Correct: A star schema with fact and dimension tables
- Wrong: One giant unstructured text column
- Wrong: A separate workbook for every chart

**Findings:** _none yet_

### 5. DAX measures & calculations

**Concept.** DAX is the formula language for measures and calculated columns. Learn SUM, COUNTROWS, DISTINCTCOUNT, DIVIDE, CALCULATE, filter context and row context. Prefer measures for aggregations that respond to report filters.

**Example**

```
Create measures such as Total Sales = SUM(Sales[Amount]), Orders = COUNTROWS(Sales), and Average Order = DIVIDE([Total Sales],[Orders]). Compare with a calculated column.
```

**Task.** Build KPI measures and validate each against a hand-calculated sample.

**Quiz.** What does DIVIDE help with?
- Correct: Safe division with optional handling for zero denominators
- Wrong: Sorting text
- Wrong: Importing images

**Findings:** _none yet_

### 6. Visuals, filters & report design

**Concept.** Choose visuals based on the question. Use cards for KPIs, bars for comparisons, lines for trends and tables for detail. Learn slicers, visual/page/report filters, drill-through, tooltips and accessibility.

**Example**

```
Build a report with KPI cards, monthly trend, sales by region and product comparison. Add a date slicer and descriptive titles.
```

**Task.** Create a two-page report with overview and detail views.

**Quiz.** Which visual is generally suitable for a time trend?
- Correct: Line chart
- Wrong: Pie chart with dozens of slices
- Wrong: Decorative word cloud

**Findings:** _none yet_

### 7. Publish, refresh, security & performance

**Concept.** Power BI Service supports publishing, sharing, refresh and workspaces subject to licence and tenant settings. Learn row-level security concepts, gateway basics, refresh failures and performance checks. Never publish confidential data publicly.

**Example**

```
Publish only a safe sample report if you have access. Configure a refresh plan conceptually, test permissions and document who should see each page.
```

**Task.** Write a deployment checklist covering data access, refresh, permissions and ownership.

**Quiz.** What does row-level security control?
- Correct: Which rows a user is allowed to see
- Wrong: Which font is used
- Wrong: Whether a chart animates

**Findings:** _none yet_

### 8. Time intelligence & date tables in DAX

**Concept.** Business reports compare periods: year to date, same period last year and growth. Time intelligence functions need a proper date table with one row per day, no gaps and a relationship to your fact table, and the table should be marked as a date table. Create base measures first, then build time measures from them. Use CALCULATE to change the filter context, and test every measure with a table visual against known values. Name measures clearly and format them with the right units. Check results at different filters, such as a single month and a full year.

**Example**

```
Total Sales = SUM(Sales[Amount])

Sales YTD = TOTALYTD([Total Sales], 'Date'[Date])

Sales Last Year = CALCULATE([Total Sales], SAMEPERIODLASTYEAR('Date'[Date]))

YoY Growth % = DIVIDE([Total Sales] - [Sales Last Year], [Sales Last Year])
```

**Explanation / note.** A date table with no gaps lets year to date and same-period calculations behave correctly.

**Task.** Create a date table for three fictional years, relate it to a sales table, and build the four measures. Compare them with a hand calculation for one month and explain what happens when the date table has a missing day.

**Quiz.** Why do time intelligence functions need a complete date table?
- Correct: They rely on continuous dates to compare periods correctly
- Wrong: They only work with text columns
- Wrong: They replace the need for relationships

**Findings:** _none yet_

### 9. Professional BI capstone & interview readiness

**Concept.** A professional BI project starts with stakeholder questions and metric definitions. Document grain, source, transformations, model, measures, validation and limitations. Prepare to explain why you chose each visual and measure.

**Example**

```
Use a fictional retail dataset. Define KPIs, build a star schema, clean data, create DAX measures, design report pages, validate totals and prepare a 5-minute walkthrough.
```

**Task.** Capstone: submit PBIX, PDF screenshots, model diagram, data dictionary, DAX notes, validation checklist and a short business recommendation.

**Quiz.** What should you explain in a BI interview?
- Correct: Business question, data model, transformations, measures, validation and insight
- Wrong: Only the colour palette
- Wrong: Only how to open the file

**Findings:** _none yet_

## Capstone project brief

**.** 

Build:

Evidence to submit:

Stretch goal: 

**Brief findings (is it realistic, clear and fairly assessable?):** _none yet_
