import { test, expect } from '@playwright/test';

test('Login Flow', async ({ page }) => {

    // navigate to Login page

    await page.goto('https://www.saucedemo.com/');

    // enter the username

    await page.locator('#user-name').fill('standard_user');

    // enter the password

    await page.locator('#password').fill('secret_sauce');

        // click the login button

    await page.locator('#login-button').click();

    await page.pause();

    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

});