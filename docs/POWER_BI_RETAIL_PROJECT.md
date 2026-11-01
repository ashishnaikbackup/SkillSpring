# Power BI hands-on capstone: Retail sales dashboard

This project uses fictional practice data. It contains no real customers or business records.

## Download the sample data

- [Sales transactions CSV](../data/powerbi-sales.csv) — 36 fictional transactions across 12 months.
- [Products CSV](../data/powerbi-products.csv) — product names, categories, standard prices and costs.
- [Regions CSV](../data/powerbi-regions.csv) — four fictional sales regions.

Keep the downloaded files together in one folder so Power BI can refresh them from the same location.

## Business brief

You are a junior data analyst supporting a small retailer. The manager wants to understand sales, gross profit, product performance and regional performance during 2025.

Your job is to create a report that answers:
1. What were total sales, total cost and gross profit?
2. How did sales change month by month?
3. Which product categories and products contributed most?
4. Which region generated the highest sales and profit?
5. What is the average order value?
6. What limitations or data-quality concerns should the manager know?

## Step 1 — Import and inspect

1. Open Power BI Desktop.
2. Choose **Get data → Text/CSV** and import all three files.
3. In Power Query, confirm data types:
   - OrderDate: Date
   - Quantity: Whole number
   - UnitPrice, UnitCost, SalesAmount, CostAmount, DiscountPct: Decimal number
   - IDs and names: Text
4. Rename queries to Sales, Products and Regions.
5. Inspect nulls, duplicate order IDs, blank product/region IDs and unusual values.
6. Select **Close & Apply**.

Do not silently delete questionable records. Note what you found and justify any cleaning step.

## Data dictionary and dataset grain

Each row in Sales represents one fictional order transaction (36 rows total). `OrderID` is unique in this sample. `CustomerID` is an anonymised fictional identifier; there is no customer dimension in this project. `ProductID` and `RegionID` connect each transaction to the Products and Regions dimension tables. `Quantity` is the number of units; `UnitPrice` and `UnitCost` are per-unit amounts before the discount; `DiscountPct` is stored as a decimal (for example, 0.10 means 10%); `SalesAmount` is the discounted line revenue; `CostAmount` is line cost. The supplied CSVs are fictional training data and should not be treated as real company performance.

## Step 2 — Build the model

Create these relationships in Model view:

- Products[ProductID] **1 → many** Sales[ProductID]
- Regions[RegionID] **1 → many** Sales[RegionID]

Use single-direction filtering from dimensions to Sales. Confirm that every Sales ProductID and RegionID has a matching dimension row.

Create a date table using **Modeling → New table**:

```DAX
Date =
CALENDAR(
    MIN(Sales[OrderDate]),
    MAX(Sales[OrderDate])
)
```

Add calculated columns:

```DAX
Year = YEAR('Date'[Date])
Month Number = MONTH('Date'[Date])
Month = FORMAT('Date'[Date], "MMM")
```

Sort Date[Month] by Date[Month Number], then relate Date[Date] **1 → many** Sales[OrderDate]. Mark the table as a date table if the Power BI version offers that command.

## Step 3 — Create DAX measures

Create these measures in the Sales table or a dedicated Measures table:

```DAX
Total Sales = SUM(Sales[SalesAmount])

Total Cost = SUM(Sales[CostAmount])

Gross Profit = [Total Sales] - [Total Cost]

Profit Margin = DIVIDE([Gross Profit], [Total Sales])

Total Orders = DISTINCTCOUNT(Sales[OrderID])

Units Sold = SUM(Sales[Quantity])

Average Order Value = DIVIDE([Total Sales], [Total Orders])
```

Format Total Sales, Total Cost, Gross Profit and Average Order Value as currency. Format Profit Margin as a percentage.

**Understand the difference:** a measure is evaluated in the current filter context. When a user selects a region or month, the same measure recalculates for that selection.

## Step 4 — Design the report

Create an overview page with:

- KPI cards: Total Sales, Gross Profit, Profit Margin, Total Orders and Average Order Value.
- Line chart: Total Sales by Date[Month].
- Bar chart: Total Sales by Regions[RegionName].
- Bar chart: Gross Profit by Products[Category].
- Table: ProductName, Units Sold, Total Sales and Gross Profit.
- Slicers: Year, RegionName and Category.

Create a second detail page for product/category performance. Use descriptive titles, readable labels, sensible number formats and accessible contrast. Avoid unnecessary 3D charts and decorative visuals that do not answer a business question.

## Step 5 — Validate your results

Before presenting the dashboard:

- Check that the Sales table has 36 rows.
- Reconcile the supplied practice dataset: expected Total Sales = 1,077,005; Total Cost = 854,380; Gross Profit = 222,625; Profit Margin ≈ 20.67%. These are illustrative dataset amounts; choose and document the currency/format used in your report.
- Check that every transaction has a valid product and region.
- Compare Total Sales and Total Cost with independent sums from the CSV.
- Select each region and confirm that the totals change as expected.
- Select a month and verify the line chart and KPI cards respond.
- Confirm that Month is sorted chronologically, not alphabetically.
- Check that Profit Margin is calculated as total gross profit divided by total sales, not as an unweighted average of row percentages.
- Record any assumptions and limitations.

If your totals differ, inspect data types, relationship direction, duplicate rows and the DAX expression before changing the source data.

## Step 6 — Publish safely

Publishing and sharing depend on the current Power BI Service licence, tenant and organisation settings. Do not publish private or confidential data publicly. If you have access, publish to an approved workspace, verify permissions and document the refresh owner and schedule.

For practice, a local PBIX and PDF export are enough to demonstrate the report-building workflow.

## Portfolio submission

Submit:
1. The PBIX project.
2. A PDF export or clear report screenshots.
3. A model diagram.
4. A one-page data dictionary.
5. A list of DAX measures with plain-language explanations.
6. A validation checklist.
7. A short business recommendation supported by the report.
8. A 3–5 minute walkthrough explaining the question, data, model, measures, insight and limitations.

## Suggested interview questions

- Why did you separate Sales, Products and Regions?
- What is the grain of the Sales table?
- Why use a date table?
- What is the difference between a measure and a calculated column?
- What is filter context?
- Why use DIVIDE instead of the division operator?
- How did you validate your totals?
- What would change if the business added more months or products?
- How would you restrict regional managers to their own region?

## Official learning references

- [Microsoft Power BI learning paths](https://learn.microsoft.com/en-us/power-bi/fundamentals/power-bi-learning-path-directory)
- [Microsoft Learn: Power BI training](https://learn.microsoft.com/en-us/training/powerplatform/power-bi/)
- [DAX reference](https://learn.microsoft.com/en-us/dax/)
