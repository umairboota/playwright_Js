const {test, expect} = require('@playwright/test');

test('Assertions', async ({page}) => {

    // open App URL
    await page.goto('https://demo.nopcommerce.com/register');


// navigate to register page

await expect(page).toHaveURL('https://demo.nopcommerce.com/register');

await expect(page).toHaveTitle('nopCommerce demo store. Register');

// to be visible

const logoElement = page.locator('.header-logo');
await expect(logoElement).toBeVisible();

});