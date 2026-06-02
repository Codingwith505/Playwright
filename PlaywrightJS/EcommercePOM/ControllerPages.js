const { LoginPage } = require('./LoginPage')
const { HomePage } = require('./HomePage')
const { VerifyPage } = require('./VerifyPage')
const { SignupPage } = require('./SignupPage');
const { ProductPage } = require('./ProductPage');
const { CartPage } = require('./CartPage');
const { CheckoutPage } = require('./CheckoutPage');
const {PaymentPage} = require('./PaymentPage')



class ControllerPages {

    constructor(page) {
        this.page = page;
        this.loginpage = new LoginPage(this.page);
        this.homepage = new HomePage(this.page);
        this.verifypage = new VerifyPage(this.page);
        this.signuppage = new SignupPage(this.page);
        this.productpage = new ProductPage(this.page);
        this.cartpage = new CartPage(this.page);
        this.checkoutpage = new CheckoutPage(this.page);
        this.paymentpage = new PaymentPage(this.page);
    }

    getLoginPage() {
        return this.loginpage;
    }
    GotohomePage() {
        return this.homepage;
    }

    goToVerifyPages() {
        return this.verifypage;
    }

    fillSignupPage() {
        return this.signuppage;
    }

    getProductPage() {
        return this.productpage;
    }
    goToCart() {
        return this.cartpage;
    }
    goToCheckOut() {
        return this.checkoutpage;
    }
    paymentDetails(){
        return this.paymentpage;
    }


}

module.exports = { ControllerPages };
