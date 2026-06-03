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
})

