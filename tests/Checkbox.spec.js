import {test, expect} from '@playwright/test';

test("Handling checkboxes", async ({page}) =>{
    await page.goto("https://demoqa.com/automation-practice-form");
    await page.locator("(//label[normalize-space()='Sports'])[1]").click();
    await page.locator("(//label[normalize-space()='Music'])[1]").check();
    await page.locator("(//label[normalize-space()='Reading'])[1]").click();
    await page.locator("(//label[normalize-space()='Sports'])[1]").uncheck();
    await page.locator("(//label[normalize-space()='Reading'])[1]").click();

    await page.waitForTimeout(5000);
})