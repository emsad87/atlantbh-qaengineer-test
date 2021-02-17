import { Selector, ClientFunction } from "testcafe";
import page from "./pageElements";
import { data } from "./data";

const getLocation = ClientFunction(() => document.location.href.toString());

fixture("Smoke Test").page(data.targetPage);

test("TC-Homepage-01", async (t) => {
  console.log("Running TC-Homepage-01 / Checking if header elements loaded");

  // Find and confirm existance of header elements
  await t
    .expect(page.shopPhone_text.exists)
    .ok()
    .expect(page.contactUs_link.exists)
    .ok()
    .expect(page.signin_link.exists)
    .ok();
});

test("TC-Homepage-02", async (t) => {
  console.log("Running TC-Homepage-02 / Checking if menu elements loaded");

  // Find and confirm existance of menu elements
  await t
    .hover(page.menuWomen)
    .wait(3000)
    .expect(page.menuWomen.exists)
    .ok()
    .hover(page.menuDresses)
    .wait(3000)
    .expect(page.menuDresses.exists)
    .ok()
    .hover(page.menuTtshirt)
    .wait(3000)
    .expect(page.menuTtshirt.exists)
    .ok();
});

test("TC-User-01", async (t) => {
  console.log("Running TC-User-01 / User Registration Test case");
  console.log("Created email: ", data.email);

  // Navigating to Sign in / Sign up page
  await t.click(page.signin_link);

  // Inserting data in create accoung field
  await t
    .typeText(page.emailAddress_input, data.email)
    .click(page.createAccount_btn);

  // Inserting data in all required fields
  console.log("TC-User-01 / Executing new User registration");
  await t
    .click(page.title_rbtn)
    .typeText(page.firstName_input, data.firstName)
    .expect(page.firstName_input.value)
    .eql(data.firstName)
    .typeText(page.lastName_input, data.lastName)
    .expect(page.lastName_input.value)
    .eql(data.lastName)
    .expect(page.email_input.value)
    .contains(data.email)
    .expect(page.email_input.hasAttribute("readonly"))
    .notOk()
    .typeText(page.passwd_input, data.password)
    .expect(page.passwd_input.value)
    .eql(data.password)
    .click(page.dayBirth_dropdown)
    .click(page.dayBirth_value)
    .click(page.monthBirth_dropdown)
    .click(page.monthBirth_value)
    .click(page.yearBirth_dropdown)
    .click(page.yearBirth_value);

  await t
    .expect(page.firstNameAddress_input.value)
    .eql(data.firstName)
    .expect(page.lastNameAddress_input.value)
    .eql(data.lastName)
    .typeText(page.address_input, data.address)
    .expect(page.address_input.value)
    .contains(data.address)
    .typeText(page.city_input, data.city)
    .expect(page.city_input.value)
    .contains(data.city)
    .click(page.state_dropdown)
    .click(page.state_value)
    .typeText(page.zip_input, data.postcode)
    .expect(page.zip_input.value)
    .contains(data.postcode)
    .click(page.country_dropdown)
    .click(page.country_value)
    .typeText(page.phone_input, data.phone)
    .expect(page.phone_input.value)
    .eql(data.phone)
    .expect(page.addressAlias_input.value)
    .contains("My address")
    .typeText(page.addressAlias_input, "My hood", { replace: true })
    .expect(page.addressAlias_input.value)
    .eql("My hood")
    .click(page.register_btn)
    .expect(page.textInfoAccount_msg.innerText)
    .contains("MY ACCOUNT");
});

test("TC-User-02", async (t) => {
  console.log("Running TC-User-02 / User Sign in Test case");

  // Navigating to Sign in page
  await t.click(page.signin_link);

  // Entering data in Sing in fields
  console.log("TC-User-02 / Executing Sign in");
  await t
    .typeText(page.email_account_input, data.emailValid)
    .expect(page.email_account_input.value)
    .eql(data.emailValid)
    .typeText(page.passwd_account_input, data.password)
    .expect(page.passwd_account_input.value)
    .eql(data.password)
    .click(page.signin_btn);

  // Checking for success
  await t.expect(getLocation()).contains(data.url_myAccount);
});

test("TC-Cart-01", async (t) => {
  console.log(
    "Running TC-Cart-01 / Cart Functionality - Add item and proceed to checkout Test case"
  );
  // Navigating to items
  await t.click(page.menuWomen);

  await t.click(page.submenuTops).click(page.submenuBlouse);

  await t.hover(page.quickView_img3);

  console.log("TC-Cart-01 / Adding item in cart");
  // Adding item to cart
  await t.click(page.addtoCart_btn);

  // Checking for added item confirmation
  await t
    .expect(page.alertSuccessadd.innerText)
    .contains("Product successfully added")
    .click(page.proceedCheckout_btn);

  // Checking cart / proceeding checkout
  console.log("TC-Cart-01 / Proceeding to checkout");
  await t
    .expect(page.shoppingsummary_title.innerText)
    .contains("SHOPPING-CART SUMMARY")
    .click(page.proceedCheckout_btn2);

  // Entering Sign in data in Sign in field
  console.log("TC-Cart-01 / Signing in");
  await t
    .typeText(page.email_account_input, data.emailValid)
    .expect(page.email_account_input.value)
    .eql(data.emailValid)
    .typeText(page.passwd_account_input, data.password)
    .expect(page.passwd_account_input.value)
    .eql(data.password)
    .click(page.signin_btn);

  await t.click(page.proceedCheckout_btn3);

  // Accepting terms
  await t
    .click(page.agreeTerms_checkbox)
    .expect(page.agreeTerms_checkbox.checked)
    .ok()
    .click(page.proceedCheckout_btn4);

  await t.click(page.paybank_opt1);

  // Confirming order / checking for success
  console.log("TC-Cart-01 / Confirming order");
  await t
    .click(page.confirmorder_btn)
    .expect(page.confirmation_msg.innerText)
    .contains("Your order on My Store is complete.");
});
