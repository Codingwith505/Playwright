import {test,expect} from '../Fixtures/fixture'
import { CartPage } from '../Pages/CartPage';

test ('User Can Login',async({loginPage})=>{
await loginPage.goto("https://www.xbox.com/en-IN");
await loginPage.login("testingsushil9192@gmail.com","Sushil1417");
await loginPage.sucessfullLogin();
})

test ('User can Select Game',async({cartPage})=>{
await cartPage.searchGame("Fortnite");
await cartPage.getStatusName();
})

