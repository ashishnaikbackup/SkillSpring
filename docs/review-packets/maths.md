# Review packet: Mathematics, Science & Research Foundations

- Course key: `maths`  ·  Lessons: 7  ·  Review interval: 180 days
- Current status: `initial-review-required`  ·  Last reviewed: never
- Content files: `essential-courses.js`
- Official sources to check against:
  - https://openstax.org/subjects/math
  - https://www.khanacademy.org/

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

Refresh the quantitative foundations used across engineering, data, finance and technology. Start with units and arithmetic, then build algebra, statistics, calculus and evidence-based reasoning.

## Lessons

### 1. Numbers, units and estimation

**Concept.** Numbers describe quantities; units tell us what is being measured. Convert units before combining values. Estimate an answer first to catch mistakes. Significant figures communicate measurement precision.

**Example**

```
2.5 km = 2,500 m because 1 km = 1,000 m. A speed of 60 km/h is 1 km/min; unit cancellation makes the conversion visible.
```

**Explanation / note.** Metric prefixes are powers of ten; milli means one-thousandth.

**Task.** Convert 750 mL to litres and 2.4 hours to minutes. Estimate before calculating and show unit factors.

**Quiz.** How many millilitres are in 1 litre?
- Correct: 1,000
- Wrong: 100
- Wrong: 10

**Findings:** _none yet_

### 2. Algebra, equations and graphs

**Concept.** A variable represents a value. An equation states equality. Solve by applying the same operation to both sides. A graph shows how variables relate; slope measures change in y per unit change in x for a straight line.

**Example**

```
If 3x + 5 = 20, subtract 5 to get 3x = 15, then divide by 3: x = 5. Check by substitution: 3(5)+5=20.
```

**Explanation / note.** Add 7 to both sides, then divide 20 by 4.

**Task.** Solve 4x − 7 = 13. Then plot y = 2x + 1 for x = 0, 1, 2 and describe the slope.

**Quiz.** What is the solution of 4x − 7 = 13?
- Correct: 5
- Wrong: 4
- Wrong: 6

**Findings:** _none yet_

### 3. Ratios, percentages and financial maths

**Concept.** A ratio compares quantities. A percentage is a fraction out of 100. Compound growth applies growth to the updated balance each period; actual financial products may have fees, taxes and changing rates.

**Example**

```
10% of ₹2,000 is ₹200. If a fictional balance grows 10% once, it becomes ₹2,200; a second 10% period applies to ₹2,200, not the original ₹2,000.
```

**Explanation / note.** Compounding includes prior growth in the base for the next period.

**Task.** Calculate a 15% discount on ₹800 and compare simple vs two-period compound growth on a fictional ₹1,000 at 5% per period.

**Quiz.** Why does compound growth differ from simple growth over multiple periods?
- Correct: Each period's growth is applied to the updated balance
- Wrong: It ignores the starting amount
- Wrong: It always uses a lower rate

**Findings:** _none yet_

### 4. Probability and descriptive statistics

**Concept.** Probability quantifies uncertainty from 0 to 1. Mean is the arithmetic average; median is the middle sorted value; mode is the most frequent. Spread measures include range and standard deviation. Choose statistics based on distribution and question.

**Example**

```
For 2, 3, 3, 4, 100, the mean is 22.4 while the median is 3. The outlier pulls the mean upward, so the median better represents a typical value in this small example.
```

**Explanation / note.** The median depends on the ordered middle value, not the magnitude of the outlier.

**Task.** Calculate mean, median and range for 4, 5, 5, 6, 30. Explain which summary is more representative and why.

**Quiz.** Which statistic is more resistant to an extreme outlier?
- Correct: Median
- Wrong: Mean
- Wrong: Range

**Findings:** _none yet_

### 5. Functions, rates and calculus intuition

**Concept.** A function maps an input to an output. A derivative describes instantaneous rate of change; an integral accumulates quantities. Calculus models change, but the result is only as good as the assumptions and data.

**Example**

```
If position is s(t)=3t² metres, velocity is ds/dt=6t m/s. At t=2 s, velocity is 12 m/s. The units confirm distance divided by time.
```

**Explanation / note.** Velocity is the rate at which position changes with time.

**Task.** For s(t)=2t²+1, differentiate to find velocity and calculate it at t=3. State the units if s is metres and t seconds.

**Quiz.** What does a derivative represent in a motion model?
- Correct: Instantaneous rate of change of position (velocity)
- Wrong: Total distance in all time
- Wrong: A constant unrelated to time

**Findings:** _none yet_

### 6. Growth, exponents & logarithms

**Concept.** Many real quantities change by a percentage each period, which is exponential growth or decay: compound interest, inflation, population and signal loss all follow it. After n periods at rate r, a starting value grows by the factor (1 + r) raised to the power n. A logarithm is the inverse of an exponent: it answers how many periods are needed, or what power produces a number. The rule of 72 gives a quick estimate of the doubling time: about 72 divided by the percentage rate per period. Always check units, and remember it is an estimate. Growth compounds, so each year adds more than the last. The logarithm solves for time, and the rule of 72 gives a fast check that the answer is sensible.

**Example**

```
Start with 10,000 at 8% per year:
  after 1 year : 10,000 x 1.08  = 10,800
  after 10 years: 10,000 x 1.08^10 = about 21,589

Rule of 72: 72 / 8 = 9 years to double (exact answer is about 9.01)

How many years to reach 20,000?
  1.08^n = 2  ->  n = log(2) / log(1.08) = about 9.0
```

**Explanation / note.** It divides 72 by the percentage growth rate per period as a quick approximation.

**Task.** Using a fictional loan or savings amount, calculate the value after 5, 10 and 20 years at two different rates. Compare the rule of 72 estimate with the exact logarithm result and explain the difference in one sentence.

**Quiz.** What does the rule of 72 estimate?
- Correct: Approximately how many periods it takes for a value to double
- Wrong: The exact tax owed on an investment
- Wrong: The number of days in a leap year

**Findings:** _none yet_

### 7. Scientific method and evidence

**Concept.** A scientific investigation states a question, hypothesis, method, variables, observations and limitations. Correlation is not proof of causation. Reproducibility requires enough detail to repeat the method. Distinguish measurement, inference and opinion.

**Example**

```
If two variables rise together, a third variable may influence both. A graph alone does not establish that one caused the other.
```

**Explanation / note.** Another learner should be able to repeat the procedure and compare outcomes.

**Task.** Design a safe desk-based investigation with one changed variable, one measured outcome, controls, repeated observations and a short limitations section.

**Quiz.** What makes an experiment reproducible?
- Correct: A sufficiently clear method, materials, conditions and recorded data
- Wrong: A dramatic conclusion
- Wrong: A result with no method

**Findings:** _none yet_
