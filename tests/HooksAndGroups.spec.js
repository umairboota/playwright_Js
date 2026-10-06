import { test, expect } from '@playwright/test';

test.describe('All the Tests', () => {

    test.beforeEach(async ({ page }) => {

        await page.goto('https://www.saucedemo.com/');

        await page.locator('[data-test="username"]').click();
        await page.locator('[data-test="username"]').fill('standard_user');
        await page.locator('[data-test="password"]').click();
        await page.locator('[data-test="password"]').fill('secret_sauce');
        await expect(page.locator('[data-test="login-button"]')).toContainText('Login');
        await expect(page.locator('[data-test="login-credentials"]').getByRole('heading')).toContainText('Accepted usernames are:');
        await page.locator('[data-test=login-button]').click();


    })

    test('HomePage', async ({ page }) => {
        await page.getByRole('button', { name: 'Open Menu' }).click();
    })



    test('logout flow', async ({ page }) => {

        await page.getByRole('button', { name: 'Open Menu' }).click();
        await page.locator('[data-test="logout-sidebar-link"]').click();

        await page.waitForURL('https://www.saucedemo.com/')

    })

})