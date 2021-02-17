let rndNumber = Math.random().toString(36).substr(1, 4);

let data = {
  targetPage: "http://automationpractice.com/index.php",
  email: "somemail" + rndNumber + "@mailmail.com",
  firstName: "John",
  lastName: "Doe",
  password: "12345678",
  newpassword: "12345678",
  address: "Some address 123",
  city: "Some City",
  postcode: "75000",
  phone: "060123456",
  emailValid: "somemail.h1k@mailmail.com",
  url_myAccount:
    "http://automationpractice.com/index.php?controller=my-account",
  url_authentication:
    "http://automationpractice.com/index.php?controller=authentication&back=my-account",
  message: "I would like to know about the status of my order #10000",
  keyword: "dress",
  keywordError: "something else",
};

export { data };
