import {expect,Page, Locator} from '@playwright/test';
import { BasePage} from './Base'

export class CartPage extends BasePage{

    private readonly clickSearchBar:Locator;
    private readonly searchBar:Locator;
    private readonly statusOfGame:Locator;

    constructor(page:Page){
        super(page);
        
        this.clickSearchBar = page.getByTitle("Search xbox.com");
        this.searchBar = page.getByRole('combobox');
        this.statusOfGame = page.locator(".module__desktopContainer___F5e");
    }

    private getSelectResult(gameName:string):Locator{
            return this.page.getByAltText(gameName);
        }

    async searchGame(gameName:string){
        await this.clickSearchBar.click();
        await this.searchBar.fill(gameName);
        await this.getSelectResult(gameName).click();

    }

    async getTextResult(){
        await this.statusOfGame.click();

    }


}
 