import { test, expect } from '@playwright/test';

test("locate orange hrm website element using different locators", async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await page.getByPlaceholder("Username").fill("Admin");

    await page.getByPlaceholder("Password").fill("admin123");

    await page.getByRole('button', { name: 'Login' }).click();

    // More specific locator
    await page.locator('.oxd-userdropdown-img').click();

    await page.getByText("Logout").click();

    await page.waitForTimeout(5000);

});