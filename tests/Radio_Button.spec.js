import {test, expect} from '@playwright/test';

test("Handling radio button" , async ({page}) =>{
    await page.goto("https://demoqa.com/automation-practice-form");
    await page.locator("(//input[@id='gender-radio-1'])[1]").click();
    await page.locator("(//label[normalize-space()='Female'])[1]").check();
    await page.waitForTimeout(5000);

    

})