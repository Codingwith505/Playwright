const {test, expect } = require("@playwright/test");
const { only } = require('node:test');



async function login(page, username, password) {

        await page.goto("https://rahulshettyacademy.com/client/");
        await page.locator("text='Register here'").click();
        await page.locator("#firstName").fill("Sushil");
        await page.locator("#lastName").fill("Maurya");
        await page.locator("#userEmail").fill(username);
        await page.locator("#userMobile").fill("8585986542")
        await page.locator("[placeholder='Passsword']").fill(password);
        await page.locator("#confirmPassword").fill(password);
        await page.locator("[formcontrolname='required']").click();
        await page.locator("#login").click();
}

async function getCleanOrderId( orderId) {
    

    if (orderId) {
        const cleanId = orderId.replace(/\|/g, "").trim(); // Remove '|' and trim spaces
        return cleanId;
    } else {
        throw new Error("Order ID not found.");
    }
}





test('End to End Add to cart', async({page})=>{
        const email = "sushil09@gmail.com";
        const pass = "Sushil321";
        const productName = "ZARA COAT 3";
       

        await login(page,email, pass)
        
       //await page.getByRole("button", {name:'Register'}).click();
       await page.locator("text='Login here'").click();
       await page.getByPlaceholder("email@example.com").fill(email);
       await page.getByPlaceholder("enter your passsword").fill(pass);
       await page.getByRole("button",{name:'Login'}).click();

       await page.waitForLoadState('networkidle');
       // write some another way to use getBy locators 
       await page.locator(".card-body").filter({hasText:productName}).getByRole("button", {name:"Add To Cart"}).click();
       //await page.locator(`.card-body:has-text("${productName}") >> button:has-text("Add To Cart")`).click();

       await page.getByRole("listitem").getByRole('button',{name:"Cart"}).click();
       //await page.locator(`button.btn.btn-custom:has-text("Cart")`).click();

        await page.locator(".cart").waitFor();
       await expect(page.locator(`text=${productName}`)).toContainText(productName);

       await page.getByRole("button", {name: "Checkout"}).click();

       await expect(page.locator("[style*='color: lightgray; font-weight: 600;']")).toHaveText(email);
       await page.locator("div.field.small input.input.txt").nth(0).fill("788");

        await page.locator("div.field.small:nth-of-type(1) input.input.txt").fill("rahulshettyacademy");
        
        

        // click the india option
        await page.getByPlaceholder("Select Country").pressSequentially("ind", {delay:200});
        await page.locator(".ta-results").getByRole("button",{name:"India"}).nth(1).click();
        await page.getByRole("button", {name:"Apply Coupon"}).click();


        await expect(page.locator("p.mt-1.ng-star-inserted")).toHaveText("* Coupon Applied");
        
        
        await page.locator(".btnn").click();
        await expect (page.locator("td h1")).toContainText(" Thankyou for the order. ");
        

        const orderId = await page.locator("td label.ng-star-inserted").textContent();
        const cleanId = await getCleanOrderId(orderId);
        console.log("Clean ID:", cleanId);
        const cleanId1 = cleanId;
    
        


        await page.locator("label[routerlink='/dashboard/myorders']").click();
        await page.waitForLoadState('networkidle');

        await page.locator("tbody th").filter({hasText: cleanId}).getByRole("button",{name : "View"}).click();
        
        // await expect(page.locator("tr.ng-star-inserted",{hasText:cleanId})).toContainText(cleanId);
        // await expect(page.locator("tr td",{hasText:productName}).nth(0)).toContainText(productName);


        // await page.locator("button.btn.btn-primary").nth(0).click();
        // verify all details once again
        await expect(page.locator(`text=${cleanId1}`)).toContainText(cleanId1);
        await expect(page.locator("div p[class$='text']").nth(0)).toHaveText(email);

        await expect(page.locator(`text=${productName}`)).toContainText(productName);
         await expect(page.locator(".tagline")).toHaveText("Thank you for Shopping With Us");

       

         

        
       



     

});

