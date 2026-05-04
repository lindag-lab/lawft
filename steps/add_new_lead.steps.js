import { AddNewLeadPageActions } from '../pages/lead_create.page.js';
import { UtilsPageActions } from '../pages/utils.js';

export class AddNewLeadSteps {
    
    constructor(page) {
        this.lead = new AddNewLeadPageActions(page);
        this.utils = new UtilsPageActions(); 
        this.firstName = '';
        this.lastName = '';
        this.title = '';
    }

    async fillLeadContactsDetails(title, firstName, lastName, email) {
        await this.lead.clickLeadsMenu();
        await this.lead.clickAddNewLeadButton();
        await this.lead.selectContactTitle(title);
        this.title = title;
        await this.lead.fillLeadFirstName(firstName);
        this.firstName = firstName;
        const refLastName = this.utils.refactorLastName(lastName);
        await this.lead.fillLeadLastName(refLastName);
        this.lastName = refLastName;
        const refEmail = this.utils.refactorEmail(email);
        await this.lead.fillLeadEmail(refEmail);
        await this.lead.toggleLawftAccess();
        await this.lead.clickNextButton();
    }

    async fillLeadInformationDetails(practiceArea, caseName) {
        await this.lead.selectPracticeArea(practiceArea);
        const refCaseName = this.utils.refactorCaseName(caseName);
        await this.lead.fillCaseName(refCaseName);
        await this.lead.clickNextButton();
    }

    async fillPaymentDetails(paymentType) {
        await this.lead.selectPaymentType(paymentType);
        await this.lead.clickAddLeadSubmitButton(); 
    }

    async newLeadSearch() {
        await this.lead.searchForNewLead(this.firstName, this.lastName);
        await this.lead.clickNewLead(this.firstName, this.lastName, this.title);
    }

    async getExpectedHeaderText() {
        return `${this.title} ${this.firstName} ${this.lastName}`;
    }

    async getActualHeaderText() {
        return await this.lead.getHeaderText();
    }
}