import { test, expect } from '@playwright/test';

test('login',async({page})=>{

    //Login
  await page.goto('https://www.demoblaze.com/index.html')
  await page.locator('#login2').click()
  await page.locator('#loginusername').fill('pavalol')
  await page.locator('#loginpassword').fill('test@123')
  await page.click('//button[text()="Log in"]')


  //homepage
const MobileLinks=await page.$$('//a[@class="hrefch"]')
await page.waitForTimeout(3000)
await expect(MobileLinks).toHaveLength(9)

  //logout


await page.click('#logout2')


})



test('Add product to the cart',async({page})=>{

  await page.goto('https://www.demoblaze.com/index.html')

  
    //Login
  await page.goto('https://www.demoblaze.com/index.html')
  await page.locator('#login2').click()
  await page.locator('#loginusername').fill('pavalol')
  await page.locator('#loginpassword').fill('test@123')
  await page.click('//button[text()="Log in"]')
  
// add product to cart
await page.click('//a[text()="Samsung galaxy s6"]')
await page.click('//a[text()="Add to cart"]')

page.on('dialog',async dialog =>{

    await expect (dialog.message()).toContain('Product added.')
    dialog.accept()
    //dialog.dismiss()
})


   //logout
await page.click('#logout2')
})