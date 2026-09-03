// @ts-check
import { test, expect } from '@playwright/test';

test.beforeAll(async ({ context }) => {
  await context.tracing.start({
    snapshots: true,
    screenshots: true,
    sources: true
  });
});


test.afterAll(async ({ context }, testInfo) => {
  await context.tracing.stop({
    path: testInfo.outputPath('trace.zip')
  });
});

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  await page.getByRole('link', { name: 'Get started' }).click();

  await expect(
    page.getByRole('heading', { name: 'Installation' })
  ).toBeVisible();
});

