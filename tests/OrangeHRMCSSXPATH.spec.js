import{test, expect} from '@playwright/test';

test("Locate Orange HRM website element using CSS xpath locators",  async ({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await page.getByLabel('Password');                         //locate by lable
    await page.locator('//input[@placeholder="Username"]').fill("Admin");  //locate by using xpath and css locator
    await page.getByPlaceholder("Password").fill("admin123");    //locate by placeholder
    await page.getByRole('button', {name: 'Login'}).click();    //locate by role
    await page.getByAltText('profile picture').click();         //locate by alt text
    await page.getByText("Logout").click();                     //locate by text
    await page.waitForTimeout(5000);                            //add wait


})