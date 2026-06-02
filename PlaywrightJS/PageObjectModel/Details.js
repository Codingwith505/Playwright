
class Details {
    constructor(page) {
        this.page = page;
        this.fillDetails = page.locator(".field");
        this.fillCountry = page.locator("[placeholder*='Country']");
        this.loadMenu = page.locator(".ta-results");
        this.getAllCountry = page.locator("[type='button']");
        this.submitcountryName = page.locator("[type='submit']");
        this.submittheDetailsForm = page.locator(".btnn");

    }

    async cardDetails(cvv, name, coupon) {

        const countDetails = await this.fillDetails.count();
        for (let i = 0; i < countDetails; i++) {
            const getAllTitle = await this.fillDetails.nth(i).locator(".title").textContent();
            if (getAllTitle === "CVV Code ?") {
                await this.fillDetails.nth(i).locator("input").fill(cvv);
            }
            else if (getAllTitle === "Name on Card ") {
                await this.fillDetails.nth(i).locator("input").fill(name);
            }
            else if (getAllTitle === "Apply Coupon ") {
                await this.fillDetails.nth(i).locator("input").fill(coupon);
                break;
            }
        }
    }

    async selectCountry(){
        await this.fillCountry.pressSequentially("ind", { delay: 100 });
    await this.loadMenu.waitFor();

    const countryCount = await this.getAllCountry .count();
    for (let i = 0; i < countryCount; i++) {
        const extractText = await this.getAllCountry.nth(i).textContent();
        console.log(extractText);
        if (extractText === " India") {
            await this.getAllCountry.nth(i).click();
            break;
        }
    }
    await this.submitcountryName.click();
    }
   async submitTheDetails(){
         await this.submittheDetailsForm .click();
    }


}
module.exports = { Details }





    

    
    
   
