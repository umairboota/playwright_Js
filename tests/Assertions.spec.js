const { test, expect } = require('@playwright/test');

test('Assertions'
    , async ({ page }) => {

    // open App URL
    await page.goto('https://kitchen.applitools.com/');

    await page.pause();

    await expect(page.locator('text= The Kitchen')).toHaveCount(1);

    if (await page.$('text= The Kitchen')) {
        await expect(page.locator('text= The Kitchen')).toBeVisible();
        await page.locator('text= The Kitchen').click();
    }

})

test('test visibility of elements', async ({ page }) => {

    // visibility or hidden of elements

    await page.goto('https://kitchen.applitools.com/');

    await expect(page.locator, '.chakra-image').toBeVisible();


})