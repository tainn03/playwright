import { test, expect } from '@playwright/test';

test('has title', async ({page}) => {
  await page.goto('https://example.com');

  await expect(page).toHaveTitle(/Example Domain/);
})

test('get more information link', async ({page}) => {
  await page.goto("https://example.com");

  await page.getByRole('link', { name: 'Learn more' }).click();

  await expect(page.getByRole('heading', { name: 'Example Domains' })).toBeVisible();

  await expect(page).toHaveURL('https://www.iana.org/help/example-domains');
});
