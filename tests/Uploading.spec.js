import {test, expect} from "@playwright/test";
import { buffer } from "node:stream/consumers";

//uploading single file
test.skip("Upload single files", async ({page}) =>{
    await page.goto("https://west-wind.com/wconnect/wcscripts/fileupload.wwd");
    await page.locator("//input[@id='upload']").setInputFiles("C:/Users/muska/Downloads/J. K. Rowling.jpg");
    await page.waitForTimeout(5000);
})

//uploading multiple files
test.skip("upload multiple files", async ({page}) =>{
    await page.goto("https://west-wind.com/wconnect/wcscripts/fileupload.wwd");
    await page.locator("//input[@id='upload']").setInputFiles(["C:/Users/muska/Downloads/J. K. Rowling.jpg", "C:/Users/muska/Downloads/John Green.jpg"]);
    await page.waitForTimeout(5000);
})

//uploading buffer file
test.skip("upload buffer file", async ({page}) =>{
    await page.goto("https://west-wind.com/wconnect/wcscripts/fileupload.wwd")
    await page.locator("//input[@id='upload']").setInputFiles({

        name: 'playwright.txt',
        mimeType: 'text/plain',
        buffer: Buffer.from('This is a text')
    })
    await page.waitForTimeout(5000);
})

//uploading file without input type
test.skip("upload file without input type", async ({page}) =>{
    await page.goto("https://easyupload.io/");
    const fileChooserPromise = page.waitForEvent('filechooser');
    await page.locator("//span[@type='button']").click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles('C:/Users/muska/Downloads/J. K. Rowling.jpg');

    await page.waitForTimeout(5000);

})

//removing uploaded file
test("remove uplaoded file", async ({page}) =>{
    await page.goto("https://west-wind.com/wconnect/wcscripts/fileupload.wwd");
    await page.locator("//input[@id='upload']").setInputFiles(["C:/Users/muska/Downloads/J. K. Rowling.jpg", "C:/Users/muska/Downloads/John Green.jpg"]);
    await page.waitForTimeout(5000);
    await page.locator("//input[@id='upload']").setInputFiles([]);
    await page.waitForTimeout(5000);
})