class OrderDetails {

    constructor(page) {
        this.page = page;
        this.orderId = page.locator("label.ng-star-inserted");
        this.orderHistory = page.locator("button[routerlink='/dashboard/myorders']");
        this.waitingmenu = page.locator(".table");
        this.orderTable = page.locator("tr.ng-star-inserted")

    }

   async ContainOrderID() {
    const labelLocator = await this.orderId;
    const orderIdText = await labelLocator.textContent();
    const cleanId = orderIdText.trim().split("|")[1].trim();
    this.containId = cleanId;
    return cleanId;
}

    async goToHistoryPage() {
        await this.orderHistory.click();
        await this.waitingmenu.waitFor();
    }
    async verifyTheOrderID() {
        const orderID = this.containId;
        const countRow = await this.orderTable.count();
        for (let i = 0; i < countRow; i++) {
            const getId = await this.orderTable.nth(i).locator("th[scope='row']").textContent();
            const trimmedId = getId.trim();
            if (trimmedId === orderID) {
                await this.orderTable.nth(i).locator("td button.btn.btn-primary").click();
                break;
            }
        }
    }

}

module.exports = { OrderDetails }





// verify the oderid from order Table and click the view button



