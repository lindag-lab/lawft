import { LeadPageLocators } from './locators.js';
import testData from '../testdata.json' assert { type: 'json' };

export class AddNewLeadPageActions {

    constructor(page) {
        this.page = page;
        this.locators = new LeadPageLocators(page);
        this.timeout = 900000 ;
    }

    async clickLeadsMenu() {
        await this.locators.leadsMenu.waitFor({ state: 'visible', timeout: this.timeout });
        await this.locators.leadsMenu.click();
    }

    async clickAddNewLeadButton() {
        await this.locators.addNewLeadButton.waitFor({ state: 'visible', timeout: this.timeout });
        await this.locators.addNewLeadButton.click();
    }

    async selectContactTitle(title) {
        await this.locators.contactTitle.waitFor({ state: 'visible', timeout: this.timeout });
        await this.locators.contactTitle.click();

        const option = this.selectOption(title);
        await option.waitFor({ state: 'visible', timeout: this.timeout });
        await option.click();
    }

    selectOption(userOption) {
        return this.page.locator(`ul.p-dropdown-items li[aria-label="${userOption}"]`);
    }

    async fillLeadFirstName(firstName) {
        await this.locators.leadFirstName.waitFor({ timeout: this.timeout });
        await this.locators.leadFirstName.fill(firstName);
    }

    async fillLeadLastName(lastName) {
        await this.locators.leadLastName.waitFor({ timeout: this.timeout });
        await this.locators.leadLastName.fill(lastName);
    }   

    async fillLeadEmail(email) {
        await this.locators.leadEmail.waitFor({ timeout: this.timeout });
        await this.locators.leadEmail.fill(email);
    }

    async toggleLawftAccess() {
        await this.locators.enableLawftAccess.waitFor({ timeout: this.timeout });
        await this.locators.enableLawftAccess.click();
    }

    async clickNextButton() {
        await this.locators.nextButton.waitFor({ timeout: this.timeout });
        await this.locators.nextButton.click();
    }
    
    async selectPracticeArea(practiceArea) {
        await this.locators.selectPA.waitFor({ timeout: this.timeout });
        await this.locators.selectPA.click();

        const option = this.selectOption(practiceArea);
        await option.waitFor({ timeout: this.timeout });
        await option.click();
    }

    async fillCaseName(caseName) {
        await this.locators.caseName.waitFor({ timeout: this.timeout });
        await this.locators.caseName.fill(caseName);
    }   

    async selectPaymentType(paymentType) {
        await this.locators.selectPaymentType.waitFor({ timeout: this.timeout });
        await this.locators.selectPaymentType.click();

        const option = this.selectOption(paymentType);
        await option.waitFor({ timeout: this.timeout });
        await option.click();
    }

    async clickAddLeadSubmitButton() {
        await this.locators.addLeadSubmitButton.waitFor({ timeout: this.timeout });
        await this.locators.addLeadSubmitButton.click();
    }

    async searchForNewLead(firstName, lastName) {
        await this.locators.searchByClient.waitFor({ timeout: this.timeout });
        await this.locators.searchByClient.fill(`${firstName} ${lastName}`);
    }

    async clickNewLead(firstName, lastName, title) {
        const fullName = `${title} ${firstName} ${lastName}`;
        const newLeadLink = this.page.locator(`//a[text()="${title} ${firstName} ${lastName}"]`);
        await newLeadLink.waitFor({ timeout: this.timeout });
        await newLeadLink.click();
    }

    async getHeaderText() {
        const header = this.page.locator('h1');
        await header.waitFor({ timeout: this.timeout });
        return await header.textContent();
    }
}