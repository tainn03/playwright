import { test, expect } from '@playwright/test';

test('authenticated test example', async ({ page }) => {
  // This test also runs with authentication
  await page.goto('https://github.com/settings');
  
  // Add more test assertions here
  await expect(page.locator('#settings-header')).toContainText('Nguyễn Nhất Tài (tainn03)');

  // Add your test logic here
  console.log('User is successfully authenticated!');
});