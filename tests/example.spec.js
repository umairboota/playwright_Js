
import { test, expect } from '@playwright/test';

let context;
let page;

test.beforeAll(async ({ browser }) => {

  context = await browser.newContext();

  await context.tracing.start({
    snapshots: true,
    screenshots: true
  });

  page = await context.newPage();
});

test.afterAll(async () => {

  await context.tracing.stop({
    path: 'trace2.zip'
  });
});

test('has title', async () => {

  await page.goto('https://playwright.dev/');

  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async () => {

  await page.goto('https://playwright.dev/');

  await page.getByRole('link', { name: 'Get started' }).click();

  await expect(
    page.getByRole('heading', { name: 'Installation' })
  ).toBeVisible();
});

