import {test, expect} from '@playwright/test';

test('Verify url of OrangeHRM website', async ({page}) =>{
    await page.goto('https://opensource-demo.orangehrmlive.com');
    await expect(page).toHaveURL(/.*orangehrmlive/);
})