import {test, expect} from '@playwright/test';

test("Handling select dropdown", async ({page}) =>{
    await page.goto("https://www.saucedemo.com/");
    await page.locator("//input[@id='user-name']").fill("standard_user");
    await page.locator("//input[@id='password']").fill("secret_sauce");
    await page.locator("//input[@id='login-button']").click();
    await page.locator("//select[@class='product_sort_container']").selectOption("hilo");  //by value
    await page.locator("//select[@class='product_sort_container']").selectOption({index : 2});  //by index
    await page.locator("//select[@class='product_sort_container']").selectOption({label : 'Price (high to low)'});  //by lable
    await page.locator("//select[@class='product_sort_container']").selectOption("Price (low to high)");    //by adding lable directly
    await page.waitForTimeout(5000);
})