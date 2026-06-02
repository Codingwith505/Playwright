import {test,expect} from '@playwright/test';
import {chromium} from '@playwright/test';

test('browser', async({page})=>{
    const browser = await chromium.launch({headless:false});

    // user context browser
    const userCtx = await browser.newContext({storageState:'user.json'});
})





//Basic test
test('user cannot login', async({page})=>{
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
