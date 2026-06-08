import { test, expect } from '@playwright/test';
import { LoginPage } from '../Pages/Login';

test('Login xbox web', async ({ page }) => {
  const loginPage = new LoginPage(page);

  loginPage.dismissPopups();

  await loginPage.goto();
  await loginPage.login("testingsushil9192@gmail.com", "Sushil1417");
});