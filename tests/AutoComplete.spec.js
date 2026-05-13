import {test, expect} from '@playwright/test';
import { count } from 'node:console';

test("Handling auto complete", async ({page}) =>{

    const searchValue = "Ch";
    const selectValue = "China";
    await page.goto("https://alphagov.github.io/accessible-autocomplete/examples/");
    await page.locator("//input[@id='autocomplete-default']").type(searchValue, {delay:100});

    const values = page.locator('//ul[@id="autocomplete-default__listbox"]/li');
    const countValues = await values.count();

    for(let i=0; i<countValues; i++){
        const text = await values.nth(i).textContent();

        if(text===selectValue){
            await values.nth(i).click();
            break;
        }

    }

    await page.waitForTimeout(5000);


    //select option by using keyboard keys
    // await page.keyboard.press("ArrowDown");
    // await page.keyboard.press("ArrowDown");
    // await page.keyboard.press("Enter");

})