import {test, expect} from "@playwright/test";


//first way
test.skip("basic auth", async ({page}) =>{
    await page.goto("https://admin:admin@the-internet.herokuapp.com/basic_auth");
    const text = await page.locator("div[class='example'] p").textContent();
    expect(text).toContain("Congratulations");
    await page.waitForTimeout(5000);

})

// second way
test("basic auth second", async ({ page }) => {

    // Define basic auth credentials
    const username = "admin";
    const password = "admin";

    // Encode credentials as Base64 string
    const base64Credentials = Buffer
        .from(`${username}:${password}`)
        .toString('base64');

    // Setup request interceptor to handle basic auth
    await page.route('**/*', async (route) => {

        const headers = {
            ...route.request().headers(),
            'Authorization': `Basic ${base64Credentials}`,
        };

        await route.continue({ headers });
    });

    // Navigate to website
    await page.goto("https://the-internet.herokuapp.com/basic_auth");

    // Validate success message
    const text = await page.locator("div.example p").textContent();

    await expect(page.locator("div.example p"))
        .toContainText("Congratulations");

    await page.waitForTimeout(5000);
});