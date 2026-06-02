# Test info

- Name: Ecommerce test page object model
- Location: C:\SushilMaurya\Playwright\tests\Ecommerce.spec.js:8:1

# Error details

```
Error: locator.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('#password')

    at SignupPage.goToFillAllDetails (C:\SushilMaurya\Playwright\EcommercePOM\SignupPage.js:23:29)
    at C:\SushilMaurya\Playwright\tests\Ecommerce.spec.js:20:22
```

# Page snapshot

```yaml
- banner:
  - link "Website for automation practice":
    - /url: /
    - img "Website for automation practice"
  - list:
    - listitem:
      - link " Home":
        - /url: /
    - listitem:
      - link " Products":
        - /url: /products
    - listitem:
      - link " Cart":
        - /url: /view_cart
    - listitem:
      - link " Signup / Login":
        - /url: /login
    - listitem:
      - link " Test Cases":
        - /url: /test_cases
    - listitem:
      - link " API Testing":
        - /url: /api_list
    - listitem:
      - link " Video Tutorials":
        - /url: https://www.youtube.com/c/AutomationExercise
    - listitem:
      - link " Contact us":
        - /url: /contact_us
- heading "Login to your account" [level=2]
- textbox "Email Address"
- textbox "Password"
- button "Login"
- heading "OR" [level=2]
- heading "New User Signup!" [level=2]
- textbox "Name": Animesh
- textbox "Email Address": animesh67@gmail.com
- paragraph: Email Address already exist!
- button "Signup"
- contentinfo:
  - heading "Subscription" [level=2]
  - textbox "Your email address"
  - button ""
  - paragraph: Get the most recent updates from our site and be updated your self...
  - paragraph: Copyright © 2021 All rights reserved
- insertion:
  - iframe
```

# Test source

```ts
   1 | class SignupPage {
   2 |     constructor(page) {
   3 |         this.page = page;
   4 |         this.password = page.locator("#password");
   5 |         this.selectDays = page.locator("#days");
   6 |         this.selectMonths = page.locator("#months");
   7 |         this.selectYear = page.locator("#years");
   8 |         this.checkBox1 = page.locator("#newsletter");
   9 |         this.checkbox2 = page.locator("#optin");
  10 |         this.firstName = page.locator("#first_name")
  11 |         this.lastName = page.locator("#last_name")
  12 |         this.companyName = page.locator("#company")
  13 |         this.address = page.locator("//input [@id='address1']")
  14 |         this.countryName = page.locator("#country")
  15 |         this.statename = page.locator("#state")
  16 |         this.cityName = page.locator("#city")
  17 |         this.pinCode = page.locator("#zipcode")
  18 |         this.mobileNumber = page.locator("#mobile_number")
  19 |         this.createAccountButton = page.getByRole("button", { name: "Create Account" })
  20 |     }
  21 |
  22 |     async goToFillAllDetails(password,days,month,year, fName, lName) {
> 23 |         await this.password.fill(password)
     |                             ^ Error: locator.fill: Test timeout of 30000ms exceeded.
  24 |         await this.selectDays.selectOption(days);
  25 |         await this.selectMonths.selectOption(month);
  26 |         await this.selectYear.selectOption(year);
  27 |         await this.checkBox1.click();
  28 |         await this.checkbox2.click();
  29 |         await this.firstName.fill(fName);
  30 |         await this.lastName.fill(lName);
  31 |     }
  32 |     async fillTheAddress(company, city,country,state,pincode,mobileNumber){
  33 |         await this.companyName.fill(company);
  34 |         await this.address.fill(city);
  35 |         await this.countryName.selectOption(country);
  36 |         await this.statename.fill(state);
  37 |         await this.cityName.fill(city);
  38 |         await this.pinCode.fill(pincode);
  39 |         await this.mobileNumber.fill(mobileNumber);
  40 |     }
  41 |
  42 |     async createAccount() {
  43 |
  44 |         await this.createAccountButton.click();
  45 |     }
  46 |
  47 | }
  48 | module.exports = { SignupPage }
  49 |
```