import {test, expect} from "@playwright/test";

test("Working with nested iframes", async ({page}) =>{
    await page.goto("https://the-internet.herokuapp.com/nested_frames");

    const mainFrame = await page.frameLocator('[name ="frame-top"]');
    const leftFrame = await mainFrame.frameLocator('[name ="frame-left"]').locator("body").textContent();
    console.log(leftFrame);

    const middleFrame = await mainFrame.frameLocator('[name ="frame-middle"]').locator('body').textContent();
    console.log(middleFrame);

    const rightFrame = await mainFrame.frameLocator('[name ="frame-right"]').locator('body').textContent();
    console.log(rightFrame);

    await page.waitForTimeout(5000);


})