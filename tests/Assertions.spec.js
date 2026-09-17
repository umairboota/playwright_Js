const { test, expect } = require('@playwright/test');

test('Assertions'
    , async ({ page }) => {

        // open App URL
        await page.goto('https://kitchen.applitools.com/');

        // await page.pause();

        await expect(page.locator('text= The Kitchen')).toHaveCount(1);

        if (await page.$('text= The Kitchen')) {
            await expect(page.locator('text= The Kitchen')).toBeVisible();
            await page.locator('text= The Kitchen').click();
        }

    })

test('test visibility of elements', async ({ page }) => {

    // visibility or hidden of elements

    await page.goto('https://kitchen.applitools.com/');

    await expect(page.locator('div > img')).toBeVisible();

    await expect(page.locator('div > img1')).not.toBeVisible();

})


test(' test enabbled/disbaled elements', async ({ page }) => {

    await page.goto('https://kitchen.applitools.com/');
    await expect(page.locator('(//h3[@class="chakra-heading css-zey6tx"])[1]')).toBeEnabled();

    await expect.soft(page.locator('(//h3[@class="chakra-heading css-zey6tx"])[6]')).toBeDisabled();

})


test('test the value is matched or not?', async ({ page }) => {

    await page.goto('https://kitchen.applitools.com/');

    await expect(page.locator('text= The Kitchen')).toHaveText('The Kitchen');


    await expect.soft(page.locator('text= The Kitchen')).not.toHaveText('The Kitchen2');



})

test('test the attributes', async ({page})=>{


    await page.goto('https://kitchen.applitools.com/');

    await expect(page.locator('text= The Kitchen')).toHaveAttribute('class','chakra-heading css-dpmy2a');
    await expect(page.locator('div > img')).toHaveClass(/.*css-1ws335m/);


})