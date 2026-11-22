# Review packet: Microsoft Word: Beginner to Professional Documents

- Course key: `word`  ·  Lessons: 9  ·  Review interval: 90 days
- Current status: `initial-review-required`  ·  Last reviewed: never
- Content files: `essential-courses.js`
- Official sources to check against:
  - https://support.microsoft.com/word

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

Learn to create clear, accessible, well-structured documents for study, work and business.

## Lessons

### 1. Getting started with Word

**Concept.** A word processor creates and formats text documents. Learn the ribbon, tabs, document canvas, status bar, save/open, file formats and the difference between DOCX and PDF.

**Example**

```
Create a new document, type a title and paragraph, save it as a DOCX, then export a PDF. Use a clear filename and a dedicated folder.
```

**Task.** Deliverable: a one-page personal profile with a title, headings and readable paragraphs.

**Quiz.** Which format is normally best for an editable Word document?
- Correct: DOCX
- Wrong: PDF
- Wrong: PNG

**Findings:** _none yet_

### 2. Text formatting & paragraph structure

**Concept.** Character formatting changes selected text: font, size, emphasis and colour. Paragraph formatting controls alignment, spacing, indentation, borders and line breaks. Use styles rather than manually formatting every heading.

**Example**

```
Apply Title, Heading 1 and Heading 2 styles. Set readable font size, paragraph spacing and consistent alignment. Use bullets for unordered items and numbering for sequences.
```

**Task.** Create a two-page study note with a clear heading hierarchy, bullet list and numbered procedure.

**Quiz.** Why use built-in heading styles?
- Correct: They create consistent structure and support navigation and accessibility
- Wrong: They only change text colour
- Wrong: They automatically correct every fact

**Findings:** _none yet_

### 3. Page layout, sections & headers

**Concept.** Page setup controls margins, orientation, paper size and columns. Headers and footers repeat information. Section breaks allow different layouts or page numbering within one document.

**Example**

```
Set margins, add a page number in the footer, create a section break and make one page landscape without changing the whole document.
```

**Task.** Create a report with a cover page, portrait body and one landscape table page.

**Quiz.** What does a section break allow?
- Correct: Different layout or formatting settings within one document
- Wrong: It deletes a page
- Wrong: It converts text to an image

**Findings:** _none yet_

### 4. Tables, images & references

**Concept.** Tables organise related information. Images need appropriate wrapping and alt text. Captions, cross-references, footnotes and citations help readers understand and verify a report.

**Example**

```
Insert a table, resize columns, add a caption to an image, set alternative text and insert a footnote. Avoid using spaces to align columns.
```

**Task.** Create a project report page containing a comparison table, labelled figure and footnote.

**Quiz.** What should informative images include for accessibility?
- Correct: Meaningful alternative text
- Wrong: A decorative border only
- Wrong: A larger file size

**Findings:** _none yet_

### 5. Long documents & collaboration

**Concept.** Use navigation pane, styles, automatic table of contents, comments, track changes and version history. Use page and section breaks instead of repeated blank lines.

**Example**

```
Apply heading styles to a multi-section report, insert an automatic table of contents, turn on Track Changes and respond to a comment.
```

**Task.** Prepare a 5-section report template with automatic contents and review comments.

**Quiz.** What powers an automatic table of contents?
- Correct: Consistent heading styles
- Wrong: Manual spaces
- Wrong: Text colour

**Findings:** _none yet_

### 6. Professional formatting & accessibility

**Concept.** Professional documents use consistent styles, clear language, descriptive links, adequate contrast, meaningful headings, accessible tables and correct metadata. Run spelling and accessibility checks, then inspect PDF export.

**Example**

```
Use the accessibility checker, set document properties, inspect reading order and export a tagged PDF where available. Check page breaks and links after export.
```

**Task.** Polish a CV or project report using consistent spacing, styles, page numbers and accessible structure.

**Quiz.** What is a good final quality check?
- Correct: Review layout, spelling, links, accessibility and exported PDF
- Wrong: Only change the font
- Wrong: Assume export is always perfect

**Findings:** _none yet_

### 7. Templates, styles & mail merge

**Concept.** Repeatable documents should be built from styles and templates, not manual formatting. A template (.dotx) stores page setup, styles and placeholder text so every new document starts consistent. Mail merge combines one main document with a list of records, such as names and addresses in an Excel sheet, to create personalised letters, labels or emails. Prepare the list first: one header row, one record per row, no blank rows and correct formats. Preview the results and test with a few records before merging everyone, and protect personal data in the source list.

**Example**

```
Mail merge steps (fictional offer letters)
  1. Prepare Excel list: Name, Role, StartDate, Salary (header row, no blanks)
  2. Word: Mailings > Start Mail Merge > Letters
  3. Select Recipients > Use an Existing List > choose the workbook
  4. Insert Merge Field for each placeholder
  5. Preview Results, check three records, then Finish & Merge
```

**Explanation / note.** A merge combines fixed text with fields from each record in the data source.

**Task.** Create a letter template with styles and a mail merge from a fictional list of five people. Preview each record, fix one deliberately wrong date format in the list, and save the template for reuse.

**Quiz.** What is the main purpose of a mail merge?
- Correct: To create personalised documents from a main document and a data list
- Wrong: To compress a document before emailing it
- Wrong: To translate a document into another language

**Findings:** _none yet_

### 8. Forms, content controls & macro safety

**Concept.** Word can collect structured information. Content controls such as text boxes, dropdown lists and date pickers create fill-in forms, and restricting editing protects everything except the controls. Fields and cross-references update document content automatically; update fields before sending. Macros automate tasks but can also carry malware, so only enable macros from sources you trust, never open unexpected macro-enabled files, and prefer built-in features or Power Automate when possible. Test any form on a clean copy, include instructions and check it works with a keyboard and screen reader.

**Example**

```
Form steps (fictional leave request)
  1. Developer tab: insert Plain Text controls for Name and Reason
  2. Insert a Drop-Down List for Leave Type (Casual, Sick, Earned)
  3. Insert a Date Picker for Start Date
  4. Review > Restrict Editing > Filling in forms only
  5. Test: tab through controls; save as .docx and as PDF
Security: keep macros disabled unless the source is trusted and the file is expected
```

**Explanation / note.** Attackers often hide malware in macros, so treat unexpected macro files as suspicious.

**Task.** Create a one-page request form with at least four content controls and editing restrictions. Test it with a colleague using only the keyboard, fix confusing labels and write a short rule for when macros are acceptable.

**Quiz.** Why should you be careful with macro-enabled documents from unknown senders?
- Correct: Macros can run harmful code on your computer
- Wrong: Macros always delete the document
- Wrong: Macros cannot be disabled

**Findings:** _none yet_

### 9. Workplace capstone

**Concept.** Create a complete professional report: cover, executive summary, contents, problem, method, findings, recommendations, references and appendix. Keep claims evidence-based and distinguish facts from assumptions.

**Example**

```
Use a fictional project brief. Create the report, add tables and figures, use styles, insert contents and references, collaborate with comments, then export PDF.
```

**Task.** Capstone: submit an editable DOCX and final PDF plus a short change log and source list.

**Quiz.** Which pair is most useful to hand over?
- Correct: Editable source document and final PDF
- Wrong: Only screenshots
- Wrong: A file with no title or date

**Findings:** _none yet_

## Capstone project brief

**.** 

Build:

Evidence to submit:

Stretch goal: 

**Brief findings (is it realistic, clear and fairly assessable?):** _none yet_
