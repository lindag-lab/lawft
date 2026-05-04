import { test, expect } from '@playwright/test';
import { LoginSteps } from '../steps/login_steps.js';
import { AddNewLeadSteps } from '../steps/add_new_lead.steps.js';
import qaData from '../testdata.json' assert { type: 'json' };

test('Add New Lead - End to End', async ({ page }) => {

  const loginSteps = new LoginSteps(page);
  const leadSteps = new AddNewLeadSteps(page);

  const user = qaData.login_wihtout_2FA;
  const lead = qaData.lead_1;

  await test.step('Login to application', async () => {
    await loginSteps.userLogin(
      qaData.baseURL,
      user.email,
      user.password
    );
  });

  await test.step('Fill Contact Details', async () => {
    await leadSteps.fillLeadContactsDetails(
      lead.title,
      lead.first_name,
      lead.last_name,
      lead.email
    );
  });

  await test.step('Fill Lead Information', async () => {
    await leadSteps.fillLeadInformationDetails(
      lead.practice_area,
      lead.case_name
    );
  });

  await test.step('Fill Payment Details', async () => {
    await leadSteps.fillPaymentDetails(
      lead.payment_type
    );
  });

  await test.step('Search Created Lead', async () => {
    await leadSteps.newLeadSearch();
  });

  await test.step('Verify Lead Header Name', async () => {
    const expectedName = await leadSteps.getExpectedHeaderText();
    console.log('Expected Lead Name:', expectedName);

    const actualName = await leadSteps.getActualHeaderText();
    console.log('Actual Lead Name:', actualName);

    expect(actualName).toBe(expectedName);
  });

});