import { TIMEOUT } from "node:dns";
import {test,expect} from "./Base"

test('Login xbox web',async({userPage})=>{

    const email:string = "testingsushil9192@gmail.com";
    const wrongpass:string = "Sushil1417";

    await userPage.goto("https://www.xbox.com/en-IN/");
    await userPage.click("//button[@type='button']");
    await userPage.fill('#usernameEntry',email);
    await userPage.click('button[type=submit]');
    await userPage.on("dialog",dialog => dialog.dismiss());
    await userPage.click('#idA_PWD_SwitchToCredPicker');
    await userPage.click('div[aria-label="Use your password"]');
    await userPage.fill('//input[@type="password"]',wrongpass);
    await userPage.click('button[type=submit]');
    await userPage.on("dialog",dialog => dialog.dismiss());
    await expect(userPage.locator("div[aria-label=GraveBroom5235]")).toBeVisible({timeout:5000});
    await userPage.click("div[aria-label=GraveBroom5235]");
    await expect(userPage.locator("span[data-tid=me-control-displayname]")).toHaveText("GraveBroom5235");
})

test('purchase the product', async ({userPage})=>{

})

