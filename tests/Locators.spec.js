import {test, expect} from '@playwright/test';


test('learning Locators', async ({page})=>{

    await page.goto('https://www.saucedemo.com/');
})