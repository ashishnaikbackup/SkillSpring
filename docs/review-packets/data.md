# Review packet: Data Science Foundations: Python, Statistics & Insight

- Course key: `data`  ·  Lessons: 9  ·  Review interval: 90 days
- Current status: `initial-review-required`  ·  Last reviewed: never
- Content files: `course-engine.js`
- Official sources to check against:
  - https://pandas.pydata.org/docs/
  - https://scikit-learn.org/stable/user_guide.html

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

Learn how to ask data questions, inspect datasets, use Python tools, understand statistics and communicate findings responsibly.

## Lessons

### 1. Questions, data & workflow

**Concept.** Data science combines domain questions, data collection, cleaning, analysis and communication. Start with a question and define what a useful answer would look like. Understand where data came from and what it omits.

**Example**

```
import csv
with open('sample.csv', encoding='utf-8') as f:
    rows = list(csv.DictReader(f))
print('Rows:', len(rows))
```

**Explanation / note.** A dataset is not automatically representative or accurate. Inspect column meanings, units, missing values and collection methods before drawing conclusions.

**Task.** Choose a public or fictional dataset. Write three answerable questions and describe possible bias or missing data.

**Quiz.** What should guide a data analysis?
- Correct: A clear question and understanding of data limitations
- Wrong: A chart colour
- Wrong: The largest spreadsheet

**Findings:** _none yet_

### 2. Python for data work

**Concept.** Use Python variables, functions, lists and dictionaries to clean and inspect small datasets. Learn notebooks for exploration, but move reusable logic into scripts or modules when a project grows.

**Example**

```
values = [12, 15, 18, 15, 20]
mean = sum(values) / len(values)
print('Mean:', mean)
```

**Explanation / note.** This computes a simple arithmetic mean. For larger datasets, libraries such as pandas and NumPy provide efficient tools; learn their official documentation.

**Task.** Load a CSV, count rows, inspect columns and calculate a simple summary without changing the source file.

**Quiz.** Why keep the original raw dataset unchanged?
- Correct: To preserve provenance and allow reproducible cleaning
- Wrong: To prevent any analysis
- Wrong: To make charts colourful

**Findings:** _none yet_

### 3. Statistics: centre & spread

**Concept.** Mean, median and mode describe centre in different ways. Range, variance and standard deviation describe spread. Outliers can pull the mean; median can be more robust for skewed data.

**Example**

```
data = [10, 11, 12, 13, 100]
ordered = sorted(data)
median = ordered[len(ordered)//2]
print('Median:', median)
```

**Explanation / note.** The extreme value 100 affects the mean much more than the median. Choose summary statistics that suit the distribution and question.

**Task.** Compare mean and median for a skewed sample and explain which better represents a typical observation.

**Quiz.** Which measure is often more robust to extreme outliers?
- Correct: Median
- Wrong: Mean always
- Wrong: Maximum

**Findings:** _none yet_

### 4. Visualisation & communication

**Concept.** Choose charts based on the question: line charts for change over time, bars for category comparison, scatter plots for relationships and histograms for distributions. Label units and show relevant context.

**Example**

```
import matplotlib.pyplot as plt
months = ['Jan', 'Feb', 'Mar']
values = [10, 14, 12]
plt.plot(months, values, marker='o')
plt.ylabel('Units')
plt.show()
```

**Explanation / note.** A chart should clarify rather than exaggerate. Avoid misleading axes, missing denominators and unsupported causal claims.

**Task.** Create two charts from a small dataset and write one sentence about what each chart can and cannot show.

**Quiz.** Does correlation alone prove causation?
- Correct: No
- Wrong: Yes
- Wrong: Only in large datasets

**Findings:** _none yet_

### 5. Data cleaning & reproducibility

**Concept.** Check duplicates, missingness, inconsistent units, invalid values and outliers. Document each transformation. Use a repeatable script, versioned inputs where possible and a clear environment file.

**Example**

```
# A simple transparent cleaning step
clean = [x for x in values if x is not None]
print('Removed missing:', len(values) - len(clean))
```

**Explanation / note.** Filtering missing values is only one possible choice; the right method depends on why data is missing and what the analysis needs.

**Task.** Write a cleaning log for a fictional dataset. Explain how each decision could change the result.

**Quiz.** Why document data-cleaning decisions?
- Correct: So results can be understood and reproduced
- Wrong: To hide missing data
- Wrong: To guarantee perfect predictions

**Findings:** _none yet_

### 6. Correlation, sampling & simple models

**Concept.** Correlation measures how two variables move together; it does not show that one causes the other, because a third factor or chance can explain a pattern. A sample is only useful if it represents the population, so ask how the data was collected and who is missing. A simple model predicts an outcome from inputs. To judge it fairly, keep some data aside as a test set, compare against a simple baseline such as the average, and report errors in plain terms. A model that does well only on the data it was built from may be overfitting.

**Example**

```
import pandas as pd
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_absolute_error

df = pd.DataFrame({'hours': [1, 2, 3, 4, 5, 6, 7, 8],
                   'score': [52, 55, 61, 64, 70, 72, 79, 83]})
X_train, X_test, y_train, y_test = train_test_split(
    df[['hours']], df['score'], test_size=0.25, random_state=0)
model = LinearRegression().fit(X_train, y_train)
print('MAE:', mean_absolute_error(y_test, model.predict(X_test)))
print('Baseline MAE:', mean_absolute_error(y_test, [y_train.mean()] * len(y_test)))
```

**Explanation / note.** The model is trained on one part of the data and measured on rows it has not seen. Comparing with a baseline that always predicts the average shows whether the model adds value. The data is tiny and fictional, so the result illustrates the method rather than a real finding.

**Task.** Choose a small fictional dataset with two numeric columns. Calculate the correlation, split into train and test sets, fit a simple model and compare its error with the average-only baseline. Write three sentences explaining what you can and cannot conclude.

**Quiz.** Why evaluate a model on data it was not trained on?
- Correct: To check whether it works on new data, not just memorised examples
- Wrong: To make the training faster
- Wrong: To remove the need for a baseline

**Findings:** _none yet_

### 7. Combining tables & tidy data

**Concept.** Real analysis usually needs several tables. A merge or join matches rows on a key, and the join type decides what happens to unmatched rows. Check the number of rows before and after a join, because duplicate keys can multiply rows silently. Tidy data has one variable per column, one observation per row and one table per kind of observation; this makes grouping and plotting simple. Use groupby to summarise, and keep the steps in a script so another person can repeat them.

**Example**

```
import pandas as pd

customers = pd.DataFrame({'customer_id': [1, 2, 3], 'city': ['Goa', 'Pune', 'Goa']})
orders = pd.DataFrame({'customer_id': [1, 1, 2, 4], 'amount': [500, 300, 700, 200]})

merged = orders.merge(customers, on='customer_id', how='left', validate='many_to_one')
print(len(orders), len(merged))
print(merged.groupby('city', dropna=False)['amount'].sum())
```

**Explanation / note.** A left join keeps every order, and customer 4 has no city so it appears as missing. The validate option raises an error if the customer table unexpectedly has duplicate keys. Row counts are checked before and after.

**Task.** Create two small fictional tables, join them in three ways, compare row counts and explain what each join keeps. Then group the result and write one sentence on what the summary shows.

**Quiz.** Why check row counts before and after a join?
- Correct: Duplicate keys or unmatched rows can silently change the number of rows
- Wrong: Joins always return the same number of rows
- Wrong: Row counts are only needed for text data

**Findings:** _none yet_

### 8. Experiments, A/B tests & dashboards

**Concept.** An experiment compares groups that differ by one change. Randomly assigning people to groups makes the groups comparable, so a difference is more likely to come from the change. Decide the measure, the group size and the stopping rule before starting, because stopping early when the result looks good inflates false positives. A statistically clear difference can still be too small to matter, so report the size of the effect with its uncertainty. A dashboard should answer a specific question for a specific audience, show the definition of each measure and avoid decoration that hides the message.

**Example**

```
Fictional test of a new sign-up button
  Group A (old): 2,000 visitors, 200 sign-ups = 10.0%
  Group B (new): 2,000 visitors, 240 sign-ups = 12.0%
  Difference: 2.0 percentage points

Questions to ask before acting
  Was assignment random?  Was the sample size planned?
  Is the gain large enough to matter? What is the uncertainty?
  Did anything else change during the test?
```

**Explanation / note.** The new button shows a higher rate in this fictional data, but the decision should consider the uncertainty and whether the difference matters in practice, not only the percentages.

**Task.** Design a fictional experiment on a study app feature. State the question, measure, group sizes and stopping rule in advance, simulate results, and write a short recommendation that includes the uncertainty and limits.

**Quiz.** Why decide the stopping rule before starting an A/B test?
- Correct: Stopping when the result looks good makes false positives more likely
- Wrong: It makes the test finish faster
- Wrong: It removes the need for random assignment

**Findings:** _none yet_

### 9. Responsible analysis & capstone

**Concept.** Check privacy, consent, representativeness, uncertainty and limitations. Separate observation from interpretation. Do not publish sensitive personal data. Communicate uncertainty honestly and avoid claiming a model is fair or accurate without evaluation.

**Example**

```
# Example: report a proportion with context
positive = 42
total = 100
rate = positive / total
print(f'{rate:.0%} of this sample')
```

**Explanation / note.** A percentage needs a denominator and context. A sample result may not generalise to a whole population.

**Task.** Capstone: analyse a public non-sensitive dataset, document cleaning, calculate descriptive statistics, create charts and publish a short report with limitations.

**Quiz.** What belongs in a responsible data report?
- Correct: Methods, assumptions, uncertainty and limitations
- Wrong: Only the best-looking chart
- Wrong: An unsupported prediction

**Findings:** _none yet_

## Capstone project brief

**.** 

Build:

Evidence to submit:

Stretch goal: 

**Brief findings (is it realistic, clear and fairly assessable?):** _none yet_
