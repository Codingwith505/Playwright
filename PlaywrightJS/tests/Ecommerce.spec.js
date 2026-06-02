const { test, expect } = require('@playwright/test');
const { ControllerPages } = require('../EcommercePOM/ControllerPages');
const { json } = require('stream/consumers');
const dataset = JSON.parse(JSON.stringify(require('../Util/EcommercePOMDataSet.json')));



test("Ecommerce test page object model", async ({ page }) => {
   
    const name = dataset.fName + " " + dataset.lName;

    const controllerPages = new ControllerPages(page);
    const homepage = controllerPages.GotohomePage(page);
    await homepage.goToUrl();
    await homepage.SignUPandLoginpage();
    const loginPage = controllerPages.getLoginPage(page);
    await loginPage.goToFill(dataset.fName, dataset.email,);
    await loginPage.goToSignUP();
    const signupPage = controllerPages.fillSignupPage(page);
    await signupPage.goToFillAllDetails(dataset.password,dataset.days,dataset.month,dataset.year, dataset.fName, dataset.lName);
    await signupPage.fillTheAddress(dataset.company,dataset.city, dataset.country,dataset.state,dataset.pincode,dataset.mobileNumber);
    await signupPage.createAccount();
    const verifypages = controllerPages.goToVerifyPages(page);
    await verifypages.verifyCreatedAccount();
    await homepage.SignUPandLoginpage();
    const productpage = controllerPages.getProductPage(page);
    await productpage.addTheProduct(dataset.productName);
    await verifypages.productSuccessfullyAdded()
    const cartPage = controllerPages.goToCart(page);
    await cartPage.goToCart();
    const checkoutPage = controllerPages.goToCheckOut(page);
    await checkoutPage.clickCheckOut();
    await verifypages.verifyAddressDetails(name);
    await verifypages.verifyProductname(dataset.productName);
    await checkoutPage.placeOrder();
    const paymentPage = controllerPages.paymentDetails(page);
    await paymentPage.fillThePaymentDetails(name, dataset.cardnumber,dataset.cvv,dataset.Emonths,dataset.Eyear);
    await paymentPage.confimOrder();
    await verifypages.verifyOrderPlaced();
    await loginPage.logOut();

});