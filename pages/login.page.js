import { LoginPageLocators } from './locators.js';
import testData from '../testdata.json' assert { type: 'json' };

export class LoginPageActions {

  constructor(page) {
    this.page = page;
    this.locators = new LoginPageLocators(page);
  }

  async navigate(url) {
    await this.page.goto(url || 'https://qa.lawft.com/#/login');
  }

  async login(username, password) {
    await this.locators.username.fill(username || testData.login.email);
    await this.locators.password.fill(password || testData.login.password);
    await this.locators.loginButton.click();
  }

  async authMFA(totpCode) {
    await this.locators.authButton.click();
    await this.locators.continueBtn.click();

    // ⚠️ You are ignoring totpCode param here (fixed below)
    await this.locators.totpInput.fill(totpCode || testData.login.totpCode);

    await this.locators.verifyBtn.click();
  }

  async selectTenant(tenantName) {
    const tenant = tenantName || testData.login.tenant;
    const tenantLocator = this.page.locator(`//span[text()='${tenant}']`);
    await tenantLocator.click();
  }
}