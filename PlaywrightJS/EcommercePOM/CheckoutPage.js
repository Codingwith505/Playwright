

class CheckoutPage {
    constructor(page) {
        this.page = page;
        this.clickCheckout = page.locator("text='Proceed To Checkout'");
        this.orderPlaced = page.locator("text='Place Order'");
    }

    async clickCheckOut() {

        await this.clickCheckout.click();
    }
    async placeOrder(){
        await this.orderPlaced.click();
    }

}
module.exports = { CheckoutPage }
