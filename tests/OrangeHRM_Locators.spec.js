import{test, expect} from '@playwright/test';

test("locate orange hrm website element using different locators",  async ({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await page.getByLabel('Password');                         //locate by lable
    await page.getByPlaceholder("Username").fill("Admin")      //locate by pleaceholder
    await page.getByPlaceholder("Password").fill("admin123");    //locate by placeholder
    await page.getByRole('button', {name: 'Login'}).click();    //locate by role
    await page.getByAltText('profile picture').click();         //locate by alt text
    await page.getByText("Logout").click();                     //locate by text
    await page.waitForTimeout(5000);                            //add wait


})