const {test, expect} = require ('@playwright/test');
const { Console } = require('console');
const { only } = require('node:test');






    test('Page playwright test', async({page})=>
    {
        const email = "sushil34@gmail.com";
        const pass = "Sushil123";
        const productname = "IPHONE 13 PRO";

        await page.goto("https://rahulshettyacademy.com/client/");
       // login the page using credential
        await page.locator("#userEmail").fill(email);
        await page.locator("#userPassword").fill(pass);
        await page.locator("#login").click();
        await page.waitForLoadState('networkidle');

        // select the correct item and add to cart
        const items = page.locator(".card-body");
        const count = await items.count();

        for(let i = 0; i < count; i++){
           const itemName =  await items.nth(i).locator("b").textContent();
           console.log(itemName);
           if(itemName === productname){
                await items.nth(i).locator("text=' Add To Cart'").click();
                break;
           }
        }
        await page.locator("[routerlink='/dashboard/cart']").click();

        // verify the product
        await page.locator(".infoWrap").first().waitFor();
        await expect (page.locator(".infoWrap").locator("h3")).toContainText(productname);
        await page.locator("text='Checkout'").click();

        // fill the personal information
        const fillDetails = page.locator(".field");
        const countDetails = await fillDetails.count();

        for(let i = 0; i < countDetails; i++){
            const getAllTitle = await fillDetails.nth(i).locator(".title").textContent();
            console.log(getAllTitle);
            if(getAllTitle === "CVV Code ?"){
                await fillDetails.nth(i).locator("input").fill("897");
            }
            else if(getAllTitle === "Name on Card "){
                await fillDetails.nth(i).locator("input").fill("sushil kumar maurya");
            }
            else if(getAllTitle === "Apply Coupon "){
                await fillDetails.nth(i).locator("input").fill("rahulshettyacademy");
                break;
            }
        }
        

        // verify the emails and select the country
        await expect(page.locator("div label")).toHaveText(email);
        await page.locator("[placeholder*='Country']").pressSequentially("ind",{delay:100});
        await page.locator(".ta-results").waitFor();
        //await expect(page.locator('.ta-results')).toBeVisible();

        const getAllCountry = page.locator("[type='button']");
        const countryCount = await getAllCountry.count();
        for(let i = 0; i < countryCount; i++){
            const extractText = await getAllCountry.nth(i).textContent();
            console.log(extractText);
            if(extractText === " India"){
                await getAllCountry.nth(i).click();
                break;
            }
        }
        await page.locator("[type='submit']").click();
        await page.locator(".btnn").click();

        // verify the thank you message and extract the opderid 
        await expect(page.locator(".hero-primary")).toContainText(" Thankyou for the order. ");
        const orderId = await page.locator("label.ng-star-inserted").textContent();
        const cleanId1 =  orderId.trim();
        const cleanId = cleanId1.split("|")[1].trim();
        console.log(cleanId);
        await page.locator("button[routerlink='/dashboard/myorders']").click();
        await page.locator(".table").waitFor();

        // verify the oderid from order Table and click the view button
        const orderTable = page.locator("tr.ng-star-inserted");
        const countRow = await orderTable.count();
        for(let i = 0; i < countRow; i++){
            const getId = await orderTable.nth(i).locator("th[scope='row']").textContent();
            console.log(getId);
            const trimmedId = getId.trim(); 
            if(trimmedId === cleanId){
                await orderTable.nth(i).locator("td button.btn.btn-primary").click();
                break;
            }
        }

        // verify the all details we can fill in the past 
        await expect(page.locator(".col-text.-main")).toHaveText(cleanId);
        await expect(page.locator(".title")).toContainText(productname);

        //sign out the page
        await page.locator("text=' Sign Out '").click();
        

        
    });

