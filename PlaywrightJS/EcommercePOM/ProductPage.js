

class ProductPage {
    constructor(page) {
        this.page = page;
        this.selectProduct = page.locator(".product-image-wrapper");
    }

    async addTheProduct(productName) {
        const count = await this.selectProduct.count();
        for (let i = 0; i <= count; i++) {
           const getProductName =  await this.selectProduct.nth(i).locator("p").first().textContent();
            if(getProductName === productName){
                await this.selectProduct.nth(i).locator("text='Add to cart'").first().click();
                break;
            }
        }
    }


}
module.exports = { ProductPage }
