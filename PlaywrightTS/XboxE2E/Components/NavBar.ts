import {expect,Page, Locator} from '@playwright/test';
import { BasePage} from '../Pages/Base';


export class NavBar extends BasePage{

    private readonly gamePass:Locator;
    private readonly games:Locator;
    private readonly devices:Locator;
    private readonly store:Locator;
    private readonly privacy:Locator;
    private readonly community:Locator;
    private readonly support:Locator;
    private readonly developers:Locator;

    constructor(page:Page){
        super(page)

        this.gamePass = page.getByRole("button",{name:"Game Pass"});
        this.games = page.getByRole("button",{name:"Games"});
        this.devices = page.getByRole("button",{name:'Devices'});
        this.store = page.getByRole("button",{name:"Store"});
        this.privacy = page.getByRole("button",{name:"Privacy"});
        this.community = page.getByRole("button", {name:"Community"});
        this.support = page.getByRole("button", {name:"Support"});
        this.developers = page.getByRole("button",{name:"Developers"});

    }


    async clickOnGamePass (){
        await this.gamePass.click();
    }

    async clickOnGames (){
        await this.games.click();
    }
    async clickOnDevice (){
        await this.devices.click();
    }
    async clickOnStore (){
        await this.store.click();
    }
    async clickOnPrivacy (){
        await this.privacy.click();
    }
    async clickOnCommunity (){
        await this.community.click();
    }
    async clickOnSupport (){
        await this.support.click();
    }
    async clickOnDevelopers (){
        await this.developers.click();
    }

}

export class gamePass extends NavBar{

     private clickOnDropDown(dropDownText:string):Locator{
            return this.page.getByText(dropDownText,{exact:true});

        }

        async clickOnDropDownGP(dropDownText:string){
            await this.clickOnGamePass();
            await this.clickOnDropDown(dropDownText).click();
        }
}

export class games extends NavBar{

    

}