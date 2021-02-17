import { Selector, ClientFunction } from "testcafe";

class page {
  constructor() {
    //User registration elements
    this.signin_link = Selector("a").withText("Sign in");
    this.emailAddress_input = Selector("#email_create");
    this.createAccount_btn = Selector("#SubmitCreate");
    this.title_rbtn = Selector("#id_gender1");
    this.firstName_input = Selector("#customer_firstname");
    this.lastName_input = Selector("#customer_lastname");
    this.email_input = Selector("#email");
    this.passwd_input = Selector("#passwd");
    this.dayBirth_dropdown = Selector("#days");
    this.dayBirth_value = Selector("#days > option:nth-child(3)");
    this.monthBirth_dropdown = Selector("#months");
    this.monthBirth_value = Selector("#months > option:nth-child(3)");
    this.yearBirth_dropdown = Selector("#years");
    this.yearBirth_value = Selector("#years > option:nth-child(22)");
    this.firstNameAddress_input = Selector("#firstname");
    this.lastNameAddress_input = Selector("#lastname");
    this.address_input = Selector("#address1");
    this.city_input = Selector("#city");
    this.state_dropdown = Selector("#id_state");
    this.state_value = Selector("#id_state > option:nth-child(51)");
    this.zip_input = Selector("#postcode");
    this.country_dropdown = Selector("#id_country");
    this.country_value = Selector("#id_country > option:nth-child(2)");
    this.phone_input = Selector("#phone_mobile");
    this.addressAlias_input = Selector("#alias");
    this.register_btn = Selector("#submitAccount");
    this.textInfoAccount_msg = Selector("#center_column > h1");

    //Sign in elements
    this.email_account_input = Selector("#email");
    this.passwd_account_input = Selector("#passwd");
    this.signin_btn = Selector("#SubmitLogin");

    //Sign out element
    this.logout_link = Selector("a").withText("Sign out");

    //If sing in fail element
    this.alertError_msg = Selector("#center_column > div.alert.alert-danger");

    //Header elements
    this.shopPhone_text = Selector(
      "#header > div.nav > div > div > nav > span"
    );
    this.contactUs_link = Selector("a").withText("Contact us");
    this.signin_link = Selector("a").withText("Sign in");

    //Menu elements
    this.menuWomen = Selector("#block_top_menu > ul > li:nth-child(1) > a");
    this.menuDresses = Selector("#block_top_menu > ul > li:nth-child(2) > a");
    this.menuTtshirt = Selector("#block_top_menu > ul > li:nth-child(3) > a");
    this.submenuTops = Selector(
      "#categories_block_left > div > ul > li:nth-child(1) > span"
    );
    this.submenuBlouse = Selector(
      "#categories_block_left > div > ul > li:nth-child(1) > ul > li.last > a"
    );

    //Support message elements
    this.customerServicePage = Selector("#center_column > h1").withText(
      "CUSTOMER SERVICE - CONTACT US"
    );
    this.csSubjectHeading_list = Selector("#id_contact");
    this.csSubjectHeading_op1 = Selector("#id_contact > option:nth-child(2)");
    this.csEmail_input = Selector("#email");
    this.csMessage_input = Selector("#message");
    this.csSend_btn = Selector("#submitMessage");
    this.csAlertSuccess = Selector("#center_column > p").withText(
      "Your message has been successfully sent to our team."
    );

    //Search elements
    this.search_input = Selector("#search_query_top");
    this.search_btn = Selector("#searchbox > button");
    this.counter_label = Selector("#center_column > h1 > span.heading-counter");

    //If Search field empty
    this.searchAlertWarning1 = Selector("#center_column > p").withText(
      "Please enter a search keyword"
    );

    //If Unknown term searched
    this.searchAlertWarning2 = Selector("#center_column > p").withText(
      "No results were found for your search"
    );

    //Elements for adding item to cart and checkout
    this.quickView_img3 = Selector(
      "#center_column > ul > li > div > div.left-block > div > a.product_img_link > img"
    );
    this.addtoCart_btn = Selector(
      "#center_column > ul > li > div > div.right-block > div.button-container > a.button.ajax_add_to_cart_button.btn.btn-default > span"
    );
    this.alertSuccessadd = Selector(
      "#layer_cart > div.clearfix > div.layer_cart_product.col-xs-12.col-md-6 > h2"
    );
    this.proceedCheckout_btn = Selector(
      "#layer_cart > div.clearfix > div.layer_cart_cart.col-xs-12.col-md-6 > div.button-container > a"
    );
    this.shoppingsummary_title = Selector("#cart_title");
    this.proceedCheckout_btn2 = Selector(
      "#center_column > p.cart_navigation.clearfix > a.button.btn.btn-default.standard-checkout.button-medium"
    );
    this.proceedCheckout_btn3 = Selector(
      "#center_column > form > p > button"
    ).withText("Proceed to checkout");
    this.agreeTerms_checkbox = Selector("#cgv");
    this.proceedCheckout_btn4 = Selector("#form > p > button");
    this.paybank_opt1 = Selector(
      "#HOOK_PAYMENT > div:nth-child(1) > div > p > a"
    );
    this.confirmorder_btn = Selector("#cart_navigation > button");
    this.confirmation_msg = Selector("#center_column > div > p > strong");

    this.deleteProd_icon = Selector(
      "#cart_quantity_down_5_19_0_403157 > span > i"
    );
    this.alertSuccess_delete = Selector("#center_column > p");
  }
}

export default new page();
