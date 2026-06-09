// import {test as base,Page,BrowserContext} from "@playwright/test"

import {Page,Locator} from "@playwright/test";

export abstract class BasePage {
  constructor (protected readonly page:Page){

  }

  async goto(url:string){
    await this.page.goto(url);
    await this.page.waitForLoadState('networkidle');
  }

  async takeScreenshot(name: string) {
    await this.page.screenshot({ path: `screenshots/${name}.png` });
  }

}

































// type myPages = {
//   userPage:Page;
//   adminPage:Page;
//   userContext:BrowserContext;
// }

// export const test = base.extend<myPages>({

//   userContext: async ({browser}, use ) =>{ 
//     const context = await browser.newContext({storageState: 'user.json'});
//     await use (context);
//     await context.close();

//   },
//   userPage:async ({userContext},use)=>{
//     const page = await userContext.newPage();
//     await use(page);
//     await page.close();
//   },
//   adminPage:async ({browser},use)=>{
//     const context = await browser.newContext({storageState: 'admin.json'});
//     const page = await context.newPage();
//     await use (page);
//     await context.close();
//   }
// })
export {expect} from "@playwright/test"