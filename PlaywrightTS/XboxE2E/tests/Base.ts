import {test as base,Page,BrowserContext} from "@playwright/test"


type myPages = {
  userPage:Page;
  adminPage:Page;
  userContext:BrowserContext;
}

export const test = base.extend<myPages>({

  userContext: async ({browser}, use ) =>{ 
    const context = await browser.newContext({storageState: 'user.json'});
    await use (context);
    await context.close();

  },
  userPage:async ({userContext},use)=>{
    const page = await userContext.newPage();
    await use(page);
    await page.close();
  },
  adminPage:async ({browser},use)=>{
    const context = await browser.newContext({storageState: 'admin.json'});
    const page = await context.newPage();
    await use (page);
    await context.close();
  }
})
export {expect} from "@playwright/test"