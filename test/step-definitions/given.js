import { Given, When, Then } from '@wdio/cucumber-framework';

import LoginPage from '../pageobjects/login.page.js';
import SecurePage from '../pageobjects/secure.page.js';

const pages = {
    login: LoginPage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    console.log("-----------------------Name: ", featureName)
    await pages[page].open()
    await browser.evStart()
});

Given(/^I am on the Evinced Demo Page$/, async () => {
    console.log("-----------------------Name: ", featureName)
    await browser.url("https://demo.evinced.com")
    await browser.evStart()
    await browser.pause(2000)
});


