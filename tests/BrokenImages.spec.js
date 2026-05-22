import { test, expect } from "@playwright/test";

test("find broken images", async ({ page }) => {

    await page.goto("https://the-internet.herokuapp.com/broken_images");

    const brokenImages = await page.evaluate(async () => {

        const images = Array.from(document.querySelectorAll('img'));
        const brokenImageList = [];

        for (const image of images) {

            const response = await fetch(image.src, {
                method: 'HEAD'
            }).catch(() => null);

            if (!response || !response.ok) {
                brokenImageList.push(image.src);
            }
        }

        return brokenImageList;
    });

    console.log(`Total broken images: ${brokenImages.length}`);
    console.log("Broken image names:");

    for (const src of brokenImages) {
        console.log(src);
    }
});