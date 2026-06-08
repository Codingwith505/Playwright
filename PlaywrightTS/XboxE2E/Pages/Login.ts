import { expect, Locator } from "@playwright/test";
import { Page,BrowserContext  } from "./Base";

export class LoginPage {
  private readonly signInButton: Locator;
  private readonly emailInput: Locator;
  private readonly submitButton: Locator;
  private readonly chooseToPassword: Locator;
  private readonly useYourPassword: Locator;
  private readonly passwordInput: Locator;

  constructor(private page: Page) {
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

  async goto() {
    await this.page.goto("https://www.xbox.com/en-IN", {
      waitUntil: "domcontentloaded",
      timeout: 60000,
    });
  }

  async login(email: string, pass: string) {
    await this.signInButton.first().click();
    await this.emailInput.fill(email);
    await this.submitButton.click();
    await this.page.screenshot({path:'error.png',fullPage:true});
    await this.chooseToPassword.click();
    await this.useYourPassword.click();
    await this.passwordInput.fill(pass);
    await this.submitButton.click();
  }
}

export { expect } from "@playwright/test";