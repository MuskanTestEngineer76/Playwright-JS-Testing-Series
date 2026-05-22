import { test, expect } from "@playwright/test";

test("Working with iframe", async ({ page }) => {

    await page.goto("https://the-internet.herokuapp.com/iframe");

    const frameArea = page
        .frameLocator('#mce_0_ifr')
        .locator('#tinymce');

    await frameArea.click();

    await page.keyboard.press('Control+A');

    await page.keyboard.press('Backspace');

    await page.keyboard.type("Your content goes here.");

    await expect(frameArea).toContainText("Your content goes here.");

});