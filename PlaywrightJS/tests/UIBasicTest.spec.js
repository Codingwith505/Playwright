const {test, expect} = require ('@playwright/test');
const { only } = require('node:test');



test('Browser context playwright test', async ({browser})=>
    {
 
        // to launch a new fresh browser
       const context = await browser.newContext();
       const page = await context.newPage();
       await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
       console.log(await page.title());
       await page.locator("#username").fill("rahulshetty");
       await page.locator("[name='password']").fill("sushil");
       await page.locator(".btn.btn-info.btn-md").click();
       console.log(await page.locator("[style*='block']").textContent());
       await expect(page.locator("[style*='block']")).toContainText('Incorrect');

       // to fill correct code
       await page.locator("#username").fill("rahulshettyacademy");
       await page.locator("[name='password']").fill("learning");
       await page.locator(".btn.btn-info.btn-md").click();

       console.log(await page.locator(".card-body a").first().textContent());
       console.log(await page.locator(".card-body a").nth(1).textContent());
        console.log(await page.locator(".card-body a").allTextContents());

    });


    test('Page playwright test', async({page})=>
    {
        const email = "sushil34@gmail.com";
        const pass = "Sushil123";

        await page.goto("https://rahulshettyacademy.com/client/");
        console.log(await page.title());
        await expect(page).toHaveTitle("Let's Shop");
        await page.locator("text='Register here'").click();
        await page.locator("#firstName").fill("Sushil");
        await page.locator("#lastName").fill("Maurya");
        await page.locator("#userEmail").fill(email);
        await page.locator("#userMobile").fill("8585986542")
        await page.locator("[placeholder='Passsword']").fill(pass);
        await page.locator("#confirmPassword").fill(pass);
        await page.locator("[type='submit']").click();
        const confimRegister = await page.locator("[style='cursor: pointer;']").textContent();
        console.log(confimRegister);
        
       await expect(page.locator("[style='cursor: pointer;']")).toContainText('Already have an account? ');
       await page.locator("text='Login here'").click();
       
        await page.locator("#userEmail").fill(email);
        await page.locator("#userPassword").fill(pass);
        await page.locator("#login").click();

        await page.waitForLoadState('networkidle');

       //console.log( await page.locator(".card-body b").nth(0).textContent());
       console.log(await page.locator(".card-body b").allTextContents());


        //
    });

    test('CheckBox and Radio', async ({browser})=>
    {
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
        await page.locator("#username").fill("rahulshettyacademy");
       await page.locator("[name='password']").fill("learning");
       const radioButton= page.locator(".customradio ").last();
       await radioButton.click();
        await expect(radioButton).toBeChecked();
       await page.locator("#okayBtn").click();
       const selectDropdown = page.locator("select.form-control");
       await selectDropdown.selectOption("consult");
       await page.locator("#terms").click();

       await page.locator(".btn.btn-info.btn-md").click();
       //await page.pause();
    
    });


    test('child window and parent window', async ({browser})=>
    {
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
        const blinkText = page.locator("[href*='documents-request']");
        await expect(blinkText).toHaveAttribute('class', 'blinkingText');
        
        const [newPage] = await Promise.all([
            context.waitForEvent('page'),
            blinkText.click()

        ]);
        const emailContent = await newPage.locator(".red").textContent();
        console.log(emailContent);
        const newContent = emailContent.split("@")[1];
        const newemail = newContent.split(".")[0];
        console.log(newemail);
        await page.locator("#username").fill(newemail);


        // context.waitForEvent('page'),
        // await blinkText.click();
        

       
       await page.pause();
    
    });