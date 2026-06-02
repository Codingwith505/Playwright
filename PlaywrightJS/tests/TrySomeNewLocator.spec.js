
const {test, expect } = require("@playwright/test");
const { only } = require('node:test');
 test('Page playwright test', async({page})=>
    {

        await page.goto("https://rahulshettyacademy.com/angularpractice/");
        await page.locator("input.ng-touched").fill("Sushil");
        await page.locator("[name='email']").fill("Suhil34@gmail.com");
        await page.getByLabel("Check me out if you Love IceCreams!").click();
        await page.getByLabel("Gender").selectOption("Female");
        await page.getByLabel("Employed").check();
    });