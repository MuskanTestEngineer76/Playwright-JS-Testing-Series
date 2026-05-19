import { test, expect } from "@playwright/test";
import path from "path";

//file paths
const jkRowlingFile = path.join(__dirname, "../uploads/J. K. Rowling.jpg");
const johnGreenFile = path.join(__dirname, "../uploads/John Green.jpg");

//uploading single file
test.skip("Upload single files", async ({ page }) => {

    await page.goto("https://west-wind.com/wconnect/wcscripts/fileupload.wwd");

    await page.locator("#upload").setInputFiles(jkRowlingFile);

    await page.waitForTimeout(5000);
});

//uploading multiple files
test.skip("upload multiple files", async ({ page }) => {

    await page.goto("https://west-wind.com/wconnect/wcscripts/fileupload.wwd");

    await page.locator("#upload")
        .setInputFiles([jkRowlingFile, johnGreenFile]);

    await page.waitForTimeout(5000);
});

//uploading buffer file
test.skip("upload buffer file", async ({ page }) => {

    await page.goto("https://west-wind.com/wconnect/wcscripts/fileupload.wwd");

    await page.locator("#upload").setInputFiles({

        name: "playwright.txt",
        mimeType: "text/plain",
        buffer: Buffer.from("This is a text")
    });

    await page.waitForTimeout(5000);
});

//uploading file without input type
test.skip("upload file without input type", async ({ page }) => {

    await page.goto("https://easyupload.io/");

    const fileChooserPromise = page.waitForEvent("filechooser");

    await page.locator("//span[@type='button']").click();

    const fileChooser = await fileChooserPromise;

    await fileChooser.setFiles(jkRowlingFile);

    await page.waitForTimeout(5000);
});

//removing uploaded file
test("remove uploaded file", async ({ page }) => {

    await page.goto(
        "https://west-wind.com/wconnect/wcscripts/fileupload.wwd",
        {
            waitUntil: "domcontentloaded",
            timeout: 60000
        }
    );

    await page.locator("#upload")
        .setInputFiles([jkRowlingFile, johnGreenFile]);

    await page.waitForTimeout(5000);

    await page.locator("#upload").setInputFiles([]);

    await page.waitForTimeout(5000);
});