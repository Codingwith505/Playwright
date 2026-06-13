import {expect,Page, Locator} from '@playwright/test';
import { BasePage} from './Base'

export class CartPage extends BasePage{

    private readonly clickSearchBar:Locator;

    constructor(page:Page){
        super(page);
        this.clickSearchBar = page.getByTitle("Search xbox.com");
    }


}
 