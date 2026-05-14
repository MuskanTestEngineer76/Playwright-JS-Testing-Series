import {test, expect} from "@playwright/test";
import { skip } from "node:test";



test.skip("simple alert", async ({page}) =>{
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts?utm_source=chatgpt.com");

    await page.on("dialog", async(a) =>{
        console.log(await a.message());
        a.accept();
    })
    await page.locator("//button[@onclick='jsAlert()']").click();
    await page.waitForTimeout(5000);
})

test.skip("Confirmation alert", async ({page}) =>{
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts?utm_source=chatgpt.com");

    await page.on("dialog", async(b) =>{
        console.log(await b.message());
        b.accept();
    })
    await page.locator("//button[@onclick='jsConfirm()']").click();
    await page.waitForTimeout(5000);
})

test("Prompt alert", async ({page}) =>{
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts?utm_source=chatgpt.com");

    await page.on("dialog" , async(c) =>{
        console.log(await c.message());
        c.accept('Playwright series by muskan');
        expect(c.type()).toContain("prompt")       //to check prompt contain "prompt" word
    })

await page.locator("//button[@onclick='jsPrompt()']").click();
await page.waitForTimeout(5000);
})