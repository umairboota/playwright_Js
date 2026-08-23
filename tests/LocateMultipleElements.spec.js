const {test, expect} = require('@playwright/test'); 

test('locateMultipleElements', async ({page}) => {

    await page.goto('https://demoblaze.com/index.html');

    /*
    const links = await page.$$('a');  // this will return an array of all the anchor tags on the page

    for(const link of links){
        const linkText =await link.textContent();
        console.log(linkText);
    }
    */

    await page.waitForSelector("//div[@id='tbodyid']//div//div//h4/a");
    
    const products = await page.$$("//div[@id='tbodyid']//div//div//h4/a");
    for (const product of products){
        const productName = await product.textContent();
        console.log(productName);
    }

    await page.close();

});