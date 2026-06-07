import {test,expect} from '@playwright/test';
import {LoginPage,} from '../Pages/Login';

test('Login xbox web',async({page})=>{

    const loginPage = new LoginPage(page)
    loginPage.goto();
    loginPage.login("testingsushil9192@gmail.com","Sushil1417");


})

test('purchase the product', async ({page})=>{

})

