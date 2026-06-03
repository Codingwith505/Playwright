import {test,expect} from '@playwright/test';
import {chromium} from '@playwright/test';

test('browser', async({page})=>{
    const browser = await chromium.launch({headless:false});

    // user context browser
    const userCtx = await browser.newContext({storageState:'user.json'});
    const userPage = await userCtx.newPage();

    await userPage.goto("https://www.xbox.com/en-IN/");



    //context 2 => fully isolated (admin user)
    const adminCtx = await browser.newContext({storageState:'admin.json'})
    const adminPage = await adminCtx.newPage();
    await adminPage.goto("https://www.youtube.com/");


})





//Basic test
test.skip('user cannot login', async({page})=>{
    await page.goto("https://www.xbox.com/en-IN/");
    await page.click("//button[@type='button']");
    await page.fill('#usernameEntry','mauryasushil419@gmail.com');
    await page.click('button[type=submit]');
    await page.click('#idA_PWD_SwitchToCredPicker');
    await page.click('div[aria-label="Use your password"]');
    await page.fill('//input[@type="password"]','Sus_hil403612@#');
    await page.click('button[type=submit]');
    await expect(page.locator('div[role=alert]')).toHaveText("That password is incorrect for your Microsoft account.");
})
