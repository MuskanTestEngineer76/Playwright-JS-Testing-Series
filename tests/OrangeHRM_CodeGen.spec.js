import { test, expect } from '@playwright/test';

test('google Website code gen', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.getByRole('button', { name: 'I\'m Feeling Lucky' }).click();
 
});