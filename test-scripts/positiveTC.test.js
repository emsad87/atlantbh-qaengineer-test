import { Selector, ClientFunction } from "testcafe";
import page from "./pageElements";
import { data } from "./data";

const getLocation = ClientFunction(() => document.location.href.toString());

fixture("Positive Test Cases").page(data.targetPage);

// TC-User-03 User Sign out test case
test("TC-User-03", async (t) => {
  console.log("Running TC-User-03 / User Sign out Test case");
  // Navigating to sign in page
  await t.click(page.signin_link);

  // Executing sign in
  console.log("Running TC-User-03 / Signing in");
  await t
    .typeText(page.email_account_input, data.emailValid)
    .expect(page.email_account_input.value)
    .eql(data.emailValid)
    .typeText(page.passwd_account_input, data.password)
    .expect(page.passwd_account_input.value)
    .eql(data.password)
    .click(page.signin_btn);

  // Executing sign out
  console.log("Running TC-User-03 / Signing out");
  await t.click(page.logout_link);

  await t.expect(getLocation()).contains(data.url_authentication);
});

test("TC-Search-01", async (t) => {
  console.log("Running TC-Search-01 / Search functionality Test case");

  // Inserting search keywords in search field
  await t
    .typeText(page.search_input, data.keyword)
    .expect(page.search_input.value)
    .eql(data.keyword)
    .click(page.search_btn);

  // Checking for search result
  await t
    .expect(page.counter_label.innerText)
    .notEql({ a: "0 results have been found." }, "There is results");
});

test("TC-Contactform-01", async (t) => {
  console.log(
    "Running TC-Contactform-01 / Contact form functionality Test case"
  );
  // Navigating to Contact form page
  console.log("TC-Contactform-01 / Redirecting to Contact us page");
  await t.click(page.contactUs_link);

  await t.expect(page.customerServicePage.exists).ok();

  await t.click(page.csSubjectHeading_list);

  // Entering data in contact form fields
  console.log("TC-Contactform-01 / entering data in contact form fields");
  await t
    .click(page.csSubjectHeading_op1)
    .typeText(page.csEmail_input, data.emailValid)
    .expect(page.csEmail_input.value)
    .contains(data.emailValid)
    .typeText(page.csMessage_input, data.message)
    .expect(page.csMessage_input.value)
    .contains("I would like to know");

  // Attaching img file
  console.log("TC-Contactform-01 / Attaching img file");
  await t
    .click(Selector("#fileUpload"))
    .expect(Selector("#fileUpload").visible)
    .ok();
  await t.setFilesToUpload(Selector("#fileUpload"), "./cat.jpg");

  // Checking if img file is attached
  await t
    .wait(1000)
    .expect(Selector("#uniform-fileUpload > span.filename").innerText)
    .contains("cat.jpg")
    .click(page.csSend_btn);

  // Checking for success response
  await t
    .expect(page.csAlertSuccess.innerText)
    .contains("has been successfully sent");
});
