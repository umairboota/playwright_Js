const {test, expect} = require('@playwright/test');

test('Assertions', async ({page}) => {

    // open App URL
    await page.goto('https://kitchen.applitools.com/');

    await page.pause();



})