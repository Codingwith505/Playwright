import { Page, expect, Locator } from "@playwright/test";
import { BasePage }  from "./Base";

export class LoginPage extends BasePage {
  private readonly signInButton: Locator;
  private readonly emailInput: Locator;
  private readonly submitButton: Locator;
  private readonly chooseToPassword: Locator;
  private readonly useYourPassword: Locator;
  private readonly passwordInput: Locator;

  constructor(page:Page, ) {
    super(page);
    this.signInButton = page.getByRole("button",{name:'ME', exact:true});
    this.emailInput = page.locator("#usernameEntry");
    this.submitButton = page.locator("button[type=submit]");
    this.chooseToPassword = page.locator("#idA_PWD_SwitchToCredPicker");
    this.useYourPassword = page.locator('div[aria-label="Use your password"]');
    this.passwordInput = page.locator('//input[@type="password"]');
  }

  dismissPopups() {
    this.page.on("dialog", dialog => dialog.dismiss());
  }


  async login(email: string, pass: string) {
    await this.signInButton.first().click();
    await this.emailInput.fill(email);
    await this.submitButton.click();
    await this.chooseToPassword.click();
    await this.useYourPassword.click();
    await this.passwordInput.fill(pass);
    await this.submitButton.click();
  }
}