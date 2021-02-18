# Atlantbh - QA Engineer - Test

Atlanbh - QA Engineer - Test task - [Emsad Ahmetašević](https://emsad87.github.io/)

# Description

These are the test task result files for Atlantbh - QA Engineer - Test

e-commerce test

Target: [e-commerce](http://automationpractice.com/index.php)

Created automated Smoke test cases, positive and negative test cases in separated files.

Used framework: [TestCafe](https://devexpress.github.io/testcafe/)

Used reporter plugin: [testcafe-reporter-html
](https://www.npmjs.com/package/testcafe-reporter-html)

Folder ["test-cases"](test-cases/) contains .xlsx file with test case list and bug report list

Folder ["test-scripts"](test-scripts/) contains all automated test case files

- [smokeTC.test.js](test-scripts/smokeTC.test.js) (Executes smoke test cases)
- [positiveTC.test.js](test-scripts/positiveTC.test.js) (Executes positive test cases)
- [negativeTC.test.js](test-scripts/negativeTC.test.js) (Executes negative test cases)
- [data.js](test-scripts/data.js) (contains all data needed to execute test cases)
- [pageElements.js](test-scripts/pageElements.js) (contains all page elements selectors needed to execute test cases)
- [cat.jpg](test-scripts/cat.jpg) (Image file needed in a test case) **I like cats xD**

Folder ["reports"](reports/) contains html report files automaticaly created

**I did not automate all test cases, left some for manual testing**

**Also did not cover all possible test cases, probably left some of them, there are a lot of test case possibilities**

**Could also create some helper files to simplify code and avoid repeating - but there was not a lot of code repeating so no need for now and could also create a custom reporter plugin**

**Commented important part of code and also did console logs to show what the code is executing - to keep track of progress during code run in headless mode**

**If having trouble runing files see solution in FIX part of this reademe file**

# How to install and run

## 1. Install testcafe (A node.js tool to automate end-to-end web testing)

>     npm install testcafe

## 2. Install testcafe html reporter (A testcafe plugin for creating html report files)

>     npm install testcafe-reporter-html

## 3. Main run

>     testcafe chrome:headless **/smokeTC.test.js -r html:reports/smokeTC-report.html

>     testcafe chrome:headless **/positiveTC.test.js -r html:reports/positiveTC-report.html

>     testcafe chrome:headless **/negativeTC.test.js -r html:reports/negativeTC-report.html

## 4. Other run options (Instead of "scriptname" enter desired test script name)

- Run Tests in All Installed Browsers

  >     testcafe all **/scriptname.test.js

- Run in Multiple Browsers

  >     testcafe chrome,firefox **/scriptname.test.js

- Run in one Browser

  >     testcafe chrome **/scriptname.test.js

- Run in one Browser headless (Not executing browser UI)

  >     testcafe chrome:headless **/scriptname.test.js

- Run all test files in one Browser headless

  >     testcafe chrome:headless **/*.test.js

- Run Tests from Multiple Scripts

  >     testcafe chrome **/scriptname1.test.js **/scriptname2.test.js

- Run specific test case from script

  >     testcafe chrome **/scriptname.test.js -t "Test case"

- Run with report creation (Instead "reportname" enter desired report name)

  >     testcafe chrome **/scriptname.test.js -r html:reports/reportname.html

# FIX

## **If having trouble with "About Execution Policies" when running test script.**

Run this in terminal (Allowing execution only for open session):

>     Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope Process

---

Created by:

[Emsad Ahmetašević](https://emsad87.github.io/)
