import { Given, When, Then } from '@wdio/cucumber-framework';

import LoginPage from '../pageobjects/login.page.js';
import SecurePage from '../pageobjects/secure.page.js';

const pages = {
    login: LoginPage
}

Then(/^I should see a flash message saying (.*)$/, async (message) => {
    await expect(SecurePage.flashAlert).toBeExisting();
    await expect(SecurePage.flashAlert).toHaveTextContaining(message);
});

Then(/^Stop Evinced$/, async (page) => {
    const issues = await browser.evStop()
    const date = Date.now()
    await browser.evSaveFile(issues, "html", `./reports/${featureName}-report.html`)
});
