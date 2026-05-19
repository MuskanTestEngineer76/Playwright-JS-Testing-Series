import {test, expect} from "@playwright/test";

test("Working with iframe", async ({page}) =>{
    await page.goto("https://the-internet.herokuapp.com/iframe");
   const frameArea = await page.frameLocator('#mce_0_ifr').locator('#tinymce');
   await frameArea.fill("Your content goes here.");
   await expect(frameArea).toHaveText("Your content goes here.");
   await page.waitForTimeout(10000);
})