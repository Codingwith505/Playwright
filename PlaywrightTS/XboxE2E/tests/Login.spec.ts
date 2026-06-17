import { test, expect } from '@playwright/test';
import { LoginPage } from '../Pages/Login';
import { CartPage } from '../Pages/CartPage';

test('Login xbox web', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const cartPage = new CartPage(page);

  await loginPage.goto("https://www.xbox.com/en-IN");
  await loginPage.login("testingsushil9192@gmail.com", "Sushil1417");
  await loginPage.dismissPopups();
  await loginPage.sucessfullLogin();
  await cartPage.searchGame("Fortnite");
  await cartPage.getStatusName();

  
});