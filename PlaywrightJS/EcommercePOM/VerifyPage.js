const { expect } = require("@playwright/test");

class VerifyPage {
    constructor(page) {
        this.page = page;
        this.createdVerify = page.locator("h2 b");
        this.verifyProduct = page.locator("//p[text()='Your product has been added to cart.']");
        this.verifyCompany = page.locator("#address_delivery li.address_firstname");
        this.verifyProductName = page.locator(".cart_description a");
        this.confimOderToVerify = page.locator("[data-qa='order-placed']");
    }

    async verifyCreatedAccount() {
        await expect(this.createdVerify).toContainText("Account Created!");
    }
    async productSuccessfullyAdded() {
        await expect(this.verifyProduct).toContainText("Your product has been added to cart.");
    }

    async verifyAddressDetails(name) {
        const getText = await this.verifyCompany.innerText();
        const cleenText = getText.split(".")[1].trim();
        expect(cleenText).toContain(name);
    }
    async verifyProductname(productName) {
        await expect(this.verifyProductName).toContainText(productName);
    }
    async verifyOrderPlaced() {
        await expect(this.confimOderToVerify).toContainText("Order Placed!");
    }



}
module.exports = { VerifyPage }












