import { test, expect } from '@playwright/test';
import { LoginPageActions } from '../pages/login.page.js';
import qaData from '../test-data/qa.json' assert { type: 'json' };

test('Valid Login Test without 2FA and single-tenant', async ({ page }) => {

  const login = new LoginPageActions(page);
  await page.setViewportSize({ width: 1920, height: 1080 });

  await login.navigate(qaData.baseURL);

  await login.login(
    qaData.firm_admin_single_tenant.email,
    qaData.firm_admin_single_tenant.password
  );

  await page.waitForURL('**/dashboard', { timeout: 90000 });
  await expect(page).toHaveURL(/dashboard/);

});
