import { test, expect } from '@playwright/test'

test('login test', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');

    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill('scret_sauce');
    await expect(page.locator('[data-test="login-button"]')).toContainText('Login');
    await expect(page.locator('[data-test="login-credentials"]').getByRole('heading')).toContainText('Accepted usernames are:');
    await page.locator('[data-test=login-button]').click();

    await page.close();


})

test.only('HomePage', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="username"]').press('Tab');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    await page.getByText('Swag Labs').click();
    await page.getByRole('button', { name: 'Open Menu' }).click();
    await page.locator('[data-test="logout-sidebar-link"]').click();




})