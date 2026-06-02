
class PaymentPage {
    constructor(page) {
        this.page = page;
        this.nameOnCard = page.locator("[data-qa='name-on-card']");
        this.cardNumber = page.locator("[data-qa='card-number']");
        this.cvv = page.locator("[data-qa='cvc']");
        this.monthOnCard = page.locator("[data-qa='expiry-month']");
        this.yearsOnCard = page.locator("[data-qa='expiry-year']");
        this.submit = page.locator("#submit");
    }

    async fillThePaymentDetails(name,cardnumber,cvv,Emonths,Eyear) {

        await this.nameOnCard.fill(name);
        await this.cardNumber.fill(cardnumber);
        await this.cvv.fill(cvv);
        await this.monthOnCard.fill(Emonths);
        await this.yearsOnCard.fill(Eyear);
    }
    async confimOrder(){
        await this.submit.click();
    }

}
module.exports = { PaymentPage }
