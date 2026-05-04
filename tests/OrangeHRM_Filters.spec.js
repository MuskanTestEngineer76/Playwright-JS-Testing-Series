import {test, expect} from '@playwright/test';
import { link } from 'node:fs';

test("Filtering loactors", async({page}) =>{
    
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.locator('//input[@placeholder="Username"]').fill("Admin");
    await page.getByPlaceholder("Password").fill("admin123");
    await page.getByRole('button', {name:'Login'}).click();

    //filter by text in 2 way
    // await page.getByRole('listitem').filter({hasText:'Time'}).click();
    // await page.getByRole('listitem').filter({hasText:/Time/}).click();

    //filter by child / descendant
    await page.getByRole('listitem')
    .filter({has:page.getByRole('link', {name:'PIM'})})
    .click();

    await page.getByRole('listitem')
    .filter({has:page.getByRole('link', {name:'Employee list'})})
    .click();



    await page.waitForTimeout(5000);
})