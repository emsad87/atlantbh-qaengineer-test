import { Selector, ClientFunction } from "testcafe";
import page from "./pageElements";
import { data } from "./data";

fixture("Negative Test Cases").page(data.targetPage);

test("TC-User-04", async (t) => {
  // Navigating to Sign in page
  console.log("Running TC-User-04 / User Invalid Sign in Test case");
  await t.click(page.signin_link);

  // Inserting data in sing in fields
  console.log("TC-User-04 / Entering data in Sign in fields");
  await t
    .typeText(page.email_account_input, "error@testcafe.com")
    .expect(page.email_account_input.value)
    .notEql(data.emailValido)
    .typeText(page.passwd_account_input, "someinvalidpassword")
    .expect(page.passwd_account_input.value)
    .notEql(data.password)
    .click(page.signin_btn);

  // Checking for fail confirmation
  await t
    .expect(page.alertError_msg.innerText)
    .contains("Authentication failed.");
});

test("TC-Search-02", async (t) => {
  console.log("Running TC-Search-02 / Empty search Test case");

  // Executing empty search
  console.log("TC-Search-02 / Executing empty search");
  await t.click(page.search_btn);

  // Checking for search result
  await t
    .expect(page.counter_label.innerText)
    .eql("0 results have been found.")
    .expect(page.searchAlertWarning1.innerText)
    .contains("Please enter a search keyword");
});

test("TC-Search-03", async (t) => {
  console.log("Running TC-Search-03 / Unknown keyword search Test case");

  // Entering unknown keyword in search field
  console.log("TC-Search-03 / Executing empty search");
  await t
    .typeText(page.search_input, data.keywordError)
    .expect(page.search_input.value)
    .eql(data.keywordError)
    .click(page.search_btn);

  // Checking for search result
  await t
    .expect(page.counter_label.innerText)
    .eql("0 results have been found.")
    .expect(page.searchAlertWarning2.innerText)
    .contains("No results were found for your search");
});
