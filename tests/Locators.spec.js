// one way to import test and expect from playwright test is by using require
// const {test, expect} = require('@playwright/test'); 

// second way to import test and expect from playwright test is by using require

import {test, expect} from '@playwright/test';

test('Locators', async ({page}) => {

    await page.goto('https://demoblaze.com/index.html');

    // click on the login button - id/property

    // await page.locator('#login2').click(); - method 1
    await page.click('#login2'); // method 2

    // enter username - CSS selector
    // await page.locator('#loginusername').fill('testuser'); // method 1
    await page.fill('#loginusername', 'boota1'); // method 2

    // enter password - XPath

    // await page.locator('//input[@id="loginpassword"]').fill('testpassword'); // method 1
    await page.fill('//input[@id="loginpassword"]', 'test123'); // method 2

    // click on the login button in the modal - text selector

    await page.click("//button[normalize-space()='Log in']"); // method 1

    // now we will perform the logout

    const logoutNav = await page.locator("//a[@id='logout2']");
    await expect(logoutNav).toBeVisible();

    await logoutNav.click();

    await page.close();
    

});