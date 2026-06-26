import {expect,Page, Locator} from '@playwright/test';
import { BasePage} from '../Pages/Base';


export class navBar extends BasePage{

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

        


    }

}

export class gamePass extends navBar{

    

}

export class games extends navBar{

    

}