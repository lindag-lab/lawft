    import { expect } from '@playwright/test';
    import { LoginPageActions } from '../pages/login.page.js';

    export class LoginSteps {

        constructor(page) {
            this.page = page;
            this.login = new LoginPageActions(page);
        }

        async userLogin(baseURL, username, password, tenantName) {

            await this.page.setViewportSize({ width: 1920, height: 1080 });
            await this.login.navigate(baseURL);
            await this.login.login(username, password);
            await expect(this.page).toHaveURL(/dashboard/, { timeout: 600000 });
        }
    }