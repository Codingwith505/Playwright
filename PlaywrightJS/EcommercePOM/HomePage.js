
class HomePage {
    constructor(page) {
        this.page = page;
        this.goToSignUPandLoginpage = page.locator("a[href*='login']");
    }

    async goToUrl() {
        await this.page.goto("https://automationexercise.com/");
    }
    async SignUPandLoginpage() {
        await this.goToSignUPandLoginpage.click();
    }

}
module.exports = { HomePage }