class SignupPage {
    constructor(page) {
        this.page = page;
        this.password = page.locator("#password");
        this.selectDays = page.locator("#days");
        this.selectMonths = page.locator("#months");
        this.selectYear = page.locator("#years");
        this.checkBox1 = page.locator("#newsletter");
        this.checkbox2 = page.locator("#optin");
        this.firstName = page.locator("#first_name")
        this.lastName = page.locator("#last_name")
        this.companyName = page.locator("#company")
        this.address = page.locator("//input [@id='address1']")
        this.countryName = page.locator("#country")
        this.statename = page.locator("#state")
        this.cityName = page.locator("#city")
        this.pinCode = page.locator("#zipcode")
        this.mobileNumber = page.locator("#mobile_number")
        this.createAccountButton = page.getByRole("button", { name: "Create Account" })
    }

    async goToFillAllDetails(password,days,month,year, fName, lName) {
        await this.password.fill(password)
        await this.selectDays.selectOption(days);
        await this.selectMonths.selectOption(month);
        await this.selectYear.selectOption(year);
        await this.checkBox1.click();
        await this.checkbox2.click();
        await this.firstName.fill(fName);
        await this.lastName.fill(lName);
    }
    async fillTheAddress(company, city,country,state,pincode,mobileNumber){
        await this.companyName.fill(company);
        await this.address.fill(city);
        await this.countryName.selectOption(country);
        await this.statename.fill(state);
        await this.cityName.fill(city);
        await this.pinCode.fill(pincode);
        await this.mobileNumber.fill(mobileNumber);
    }

    async createAccount() {

        await this.createAccountButton.click();
    }

}
module.exports = { SignupPage }
