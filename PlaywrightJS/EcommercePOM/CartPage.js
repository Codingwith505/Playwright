class CartPage {
    constructor(page) {
        this.page = page;
        this.cart = page.locator("//a[.='View Cart']");
    }

    async goToCart() {
        await this.cart.click();
    }


}
module.exports = { CartPage }


