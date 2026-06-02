class LoginPage {
    constructor(page) {
        this.page = page;
        this.firstName = page.locator("//input[@name='name']");
        this.email = page.locator("[placeholder='Email Address']");
        this.signup = page.getByRole("button", { name: "Signup" });
        this.logout = page.locator("a[href*='/logout']");
    }

    async goToFill(fName, email) {
        await this.firstName.fill(fName);
        await this.email.nth(1).fill(email);
    }
    async goToSignUP() {
        await this.signup.click();
    }
    async logOut(){
        await this.logout.click();
    }

}
module.exports = { LoginPage }
