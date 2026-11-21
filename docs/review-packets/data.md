# Review packet: Data Science Foundations: Python, Statistics & Insight

- Course key: `data`  ·  Lessons: 7  ·  Review interval: 90 days
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

### 7. Responsible analysis & capstone

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
