import { test, expect } from '@playwright/test';
import { LoginPage } from '../Pages/Login';

test('Login xbox web', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto("https://www.xbox.com/en-IN");
  await loginPage.login("testingsushil9192@gmail.com", "Sushil1417");
  await loginPage.sucessfullLogin();
  
});