const {test, expect} = require('@playwright/test');

test('Home Page', async ({page}) => {

    await page.goto('https://demoblaze.com/index.html');

    const title = await page.title();
    console.log('Page Title is:', title);
    await expect(page).toHaveTitle('STORE');

    const url = page.url();
    console.log('Page URL is:', url);

    await expect(page).toHaveURL('https://demoblaze.com/index.html');
    
    await page.close();

});

