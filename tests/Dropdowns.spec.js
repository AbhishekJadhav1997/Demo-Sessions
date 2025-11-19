import { test, expect } from '@playwright/test';

test('TestAssertions',async({page})=>{

await page.goto('https://testautomationpractice.blogspot.com/')

// different type of method 

//await page.locator('#country').selectOption({label:'India'})   //label tag similar with text
 //await page.locator('#country').selectOption('India') //by using the text 
//await page.locator('#country').selectOption({value:'uk'}) // by using vaule 
//await page.locator('#country').selectOption({index:1}) //by indexing 
//await page.selectOption('#country','India') //direct select option option

// different type of assertions 

//const Count= await page.locator('//select[@id="country"]/option')
//await expect(Count).toHaveCount(10)

const options=await page.$$('//select[@id="country"]/option')
//await expect(options.length).toBe(10)

//console.log('Number og option :',options.length)

//value is present or not 
//const Count= await page.locator('//select[@id="country"]').textContent()
//await expect(Count.includes('India')).toBeTruthy()


//handling multiselect options from dropdown
await page.locator('#colors').selectOption(['Red','Green','Yellow'])
await page.waitForTimeout(5000)


})