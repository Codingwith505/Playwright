const {expect} = require ('@playwright/test')

class VerifyProduct{
    constructor(page){
        this.page =page;
        this.loadTheProduct = page.locator(".infoWrap");
        this.verifyUsername = page.locator("div label");
        this.verifyThankYou = page.locator(".hero-primary");
        this.verifyOrderId = page.locator(".col-text.-main");
        this.verifyInLastProductName = page.locator(".title");

    }
    async GoToverifyProduct(productname){
        await this.loadTheProduct.first().waitFor();
        await expect(this.loadTheProduct.locator("h3")).toContainText(productname);
    }
   async goToCheckOut(){
         await this.page.locator("text='Checkout'").click();
    }

    async VerifyUsername(userName){
        await expect(this.verifyUsername).toHaveText(userName);
    }
    async VerifyThankYouMessage(){
         await expect(this.verifyThankYou).toContainText(" Thankyou for the order. ");
    }

    async VerifyOrderId(cleanId){
        await expect(this.verifyOrderId).toHaveText(cleanId);
    }

    async VerifyProductName(productname){
         await expect(this.verifyInLastProductName).toContainText(productname);
    }

}



   
    
   



module.exports = {VerifyProduct};