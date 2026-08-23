import{test, expect} from '@playwright/test';

test('Login Flow', async ({page}) => {
    await page.goto('https://www.saucedemo.com/');
    await expect(page).toHaveTitle('Swag Labs');

});

test('Login flow with valid credentials', async ({page}) => {
    await page.goto('https://www.saucedemo.com/');

    await page.fill('#user-name', 'standard_user');
    await page.locator('#password-123').fill('secret_sauce');

    await page.click('#login-button');

    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    
    await page.click('#react-burger-menu-btn');

    await page.click('#logout_sidebar_link');



});