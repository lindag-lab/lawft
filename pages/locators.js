import testData from '../testdata.json';

export class LoginPageLocators {
    constructor(page) {
        this.page = page;

        this.username = page.locator('#email');
        this.password = page.locator('#password');
        this.loginButton = page.locator("//span[text()='Log in']");
        this.authButton = page.locator("//span[text()='Authenticator App']");
        this.continueBtn = page.locator("//span[text()='Continue']");
        this.totpInput = page.locator('#totpCode');
        this.verifyBtn = page.locator("//span[text()='Verify']");
    }
}

export class LeadPageLocators {
    constructor(page) {
        this.page = page;
        this.leadsMenu = page.locator("//a[text()='Leads']");
        this.addNewLeadButton = page.locator("//span[text()='Add New Lead']");
        this.contactTitle = page.locator("[id='contact.title']");
        this.leadFirstName = page.locator("//input[@id='contact.first_name']");
        this.leadLastName = page.locator("//input[@id='contact.last_name']");
        this.leadEmail = page.locator("//input[@id='contact.email']");
        this.enableLawftAccess = page.locator("//div[@id='detail_lawft_access']/descendant::span");
        this.nextButton = page.locator("//button[text()='Next Step']");  
        this.selectPA = page.locator("[id='case_description.case_practice_area']");  
        this.caseName = page.locator("//input[@name='case_description.case_name']");
        this.selectPaymentType = page.locator("[id='billing_preferences.payment_structure']");
        this.addLeadSubmitButton = page.locator("//button[text()='Add Lead']"); 
        this.searchByClient = page.locator("//input[@placeholder='Search By Client']");
    }
}