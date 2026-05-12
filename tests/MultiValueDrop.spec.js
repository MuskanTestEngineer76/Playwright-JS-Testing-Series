import {test, expect} from '@playwright/test';


test("Handling multi dropdown value", async ({page}) =>{
    await page.goto("https://demoqa.com/select-menu?utm_source=chatgpt.com");
    // await page.locator("(//select[@id='cars'])[1]").selectOption(["Volvo", "Saab", "Opel"])     //first way
    await page.locator("(//select[@id='cars'])[1]").selectOption({index:1},{index:2});      //second way
    await page.waitForTimeout(5000);
})