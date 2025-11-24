import { test, expect } from '@playwright/test';

test('TestAssertions',async({page})=>{

    await page.goto('https://demo.nopcommerce.com/register')

    // 1)expect(page).toHaveURL() — Page has URL
    await expect(page).toHaveURL('https://demo.nopcommerce.com/register')

    // 2)expect(page).toHaveTitle() — Page has title
  await expect.soft(page).toHaveTitle('nopCommerce')

  ///
  //another some changes 




  //3)expect(locator).toBeVisible() — Element is visible
  const logo=await page.locator('.header-logo')
  await expect(logo).toBeVisible()
  // this is demo session for git hub
})