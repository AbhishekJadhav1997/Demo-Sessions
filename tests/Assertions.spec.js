import { test, expect } from '@playwright/test';

test('TestAssertions',async({page})=>{

    await page.goto('https://demo.nopcommerce.com/register')

    // 1)expect(page).toHaveURL() — Page has URL
    await expect(page).toHaveURL('https://demo.nopcommerce.com/register')

    // 2)expect(page).toHaveTitle() — Page has title
  await expect(page).toHaveTitle('nopCommerce demo store. Register')

  //3)expect(locator).toBeVisible() — Element is visible
  const logo=await page.locator('.header-logo')
  await expect(logo).toBeVisible()

//   4)expect(locator).toBeEnabled() — Control is enabled

const SearchStorteInput=await page.locator('#small-searchterms')
await expect (SearchStorteInput).toBeEnabled()

//5)expect(locator).toBeChecked() — Radio/Checkbox is checked

const MaleRadioButton=await page.locator('#gender-male')
MaleRadioButton.click()
await expect(MaleRadioButton).toBeChecked()

await expect(await page.locator('input[type="checkbox"]')).toBeChecked()

// 6)expect(locator).toHaveAttribute() — Element has attribute

const attribute=await page.locator('#FirstName')
await expect(attribute).toHaveAttribute('type','text')

//7)expect(locator).toHaveText() — Element matches text

const registerText=await page.locator('//div[@class="page-title"]/h1')
await expect(registerText).toHaveText('Register')

await expect(registerText).toContainText('Reg')


//9)expect(locator).toHaveValue(value) — Input has a value

const Input=await page.locator('#small-searchterms')
Input.fill("Demo sessions")
await expect (Input).toHaveValue('Demo sessions')

//10)expect(locator).toHaveCount() — List of elements has given length
await page.goto('https://www.globalsqa.com/demo-site/select-dropdown-menu/')
// await page.waitForTimeout('2000')
const Dropdownoption=await page.locator('//select[@fdprocessedid="p8dg3s"]/option')
await expect(Dropdownoption).toHaveCount('249')


})