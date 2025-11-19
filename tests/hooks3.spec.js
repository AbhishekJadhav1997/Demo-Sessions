import { test, expect } from '@playwright/test';

let page;

test.beforeAll(async ({browser})=>{

  page=await browser.newPage();

  await page.goto('https://www.demoblaze.com/index.html')
  await page.locator('#login2').click()
  await page.locator('#loginusername').fill('pavalol')
  await page.locator('#loginpassword').fill('test@123')
  await page.click('//button[text()="Log in"]')


})

test.afterAll(async ()=>{


await page.click('#logout2')


})

test('login',async()=>{

  //homepage
const products=await page.$$('//a[@class="hrefch"]')
await page.waitForTimeout(3000)
 await expect(products).toHaveLength(9)
})



test('Add product to the cart',async()=>{
  
// add product to cart
await page.click('//a[text()="Samsung galaxy s6"]')
await page.click('//a[text()="Add to cart"]')

page.on('dialog',async dialog =>{

    await expect (dialog.message()).toContain('Product added.')
    dialog.accept()
    //dialog.dismiss()
})

})