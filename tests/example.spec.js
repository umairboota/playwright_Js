// @ts-check
import { test, expect } from '@playwright/test';

/** @type {import('@playwright/test').BrowserContext} */
let context;
let page;
test.beforeAll(async ({browser}) => {

  context = await browser.newContext();
  await context.tracing.start(
    {
      snapshots: true,
      screenshots: true,
      sources: true
    }
  )

page = await context.newPage();
})

test('has title', async ({page}) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});


test('get started link', async ({page}) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});


test.afterAll(async () => {
  await context.tracing.stop({ path: 'trace.zip' });

})
