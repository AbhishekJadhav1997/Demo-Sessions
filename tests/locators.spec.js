// import { expect } from "@playwright/test";

import {test, expect} from '@playwright/test'

test('locators',async({page})=>{
  
  await page.goto('https://staging.proctoru.com/session/new');


  await page.locator('#username').fill('nonstop@meazurelearning.com')
    await page.waitForTimeout(1000)

 await page.locator('#password').fill('Weteststuff1!')

  await page.click('input[value="Log in"]')
    await page.waitForTimeout(3000)

  await page.goto('https://staging.proctoru.com/institutions');
 
  await page.click('#select2-select2-institution-container');
  await page.locator('//span[@class="select2-search select2-search--dropdown"]/input').fill('blackboard institution')
  
   await page.waitForTimeout(3000)

})