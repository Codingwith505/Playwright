const { test, expect } = require('@playwright/test');
const { AllObjectPOM } = require('../PageObjectModel/AllObjectPOM')
const { stringify } = require('querystring');
const dataset = JSON.parse(JSON.stringify(require('../Util/FullAutomationPOMData.json')))





for (const data of dataset) {
    test(`Page Object Model ${data.productName}`, async ({ page }) => {

        const allObject = new AllObjectPOM(page);
        const login = allObject.getLoginPage(page);
        await login.GotoUrl();
        await login.Login(data.userName, data.password);
        const dashboard = allObject.GotoDashboard(page);
        await dashboard.AddtoCarttheProduct(data.productName);
        await dashboard.GotoCart();
        const verifyProduct = allObject.goToVerifyProduct(page);
        await verifyProduct.GoToverifyProduct(data.productName);
        await verifyProduct.goToCheckOut();
        const details = allObject.fillTheDetails(page);
        await details.cardDetails(data.cvvNumber, data.name, data.applyCoupon);
        await verifyProduct.VerifyUsername(data.userName);
        await details.selectCountry(data.countryName);
        await details.submitTheDetails();
        await verifyProduct.VerifyThankYouMessage();
        const orderDetailsVerify = allObject.getOrderDetails();
        const orderId = await orderDetailsVerify.ContainOrderID();
        await orderDetailsVerify.goToHistoryPage();
        await orderDetailsVerify.verifyTheOrderID();
        await verifyProduct.VerifyOrderId(orderId);
        await verifyProduct.VerifyProductName(data.productName);
        await login.Logout();

    });
}
