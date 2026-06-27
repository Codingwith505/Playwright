import {test as base,Page} from '@playwright/test';
import { LoginPage } from '../Pages/Login';
import { CartPage } from '../Pages/CartPage';
import path from 'path';
import { NavBar } from '../Components/NavBar';


type myfixtures = {
    loginPage:LoginPage,
    cartPage:CartPage,
    navBar:NavBar,
    userPage:Page,
    adminPage:Page
}


export const test = base.extend<myfixtures>({


    loginPage:async ({page},use)=>{
        await use(new LoginPage(page));
    },

    cartPage:async({page},use)=>{
        await use(new CartPage(page));
    },

    navBar:async({page},use)=>{
      await use(new NavBar(page));
    },
    adminPage: async ({ browser }, use) => {
    const ctx  = await browser.newContext({
      storageState: path.resolve(__dirname, '../admin.json') 
    });
    const page = await ctx.newPage();
    await use(page);
    await ctx.close();  
  },

  userPage:async({browser},use) => {
    const ctx = await browser.newContext({
        storageState: path.resolve(__dirname, '../user.json')
    });
    const page = await ctx.newPage();
    await use(page);
    await ctx.close();
  }

})

export {expect} from '@playwright/test'