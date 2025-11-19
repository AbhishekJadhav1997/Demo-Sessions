import { test, expect } from '@playwright/test';
import {LoginPage} from '../pages/LoginPage.js';
import fs from 'fs';
import { log } from 'console';
const userData = JSON.parse(
  fs.readFileSync('./testdata/userData.json', 'utf-8')
);


test('test', async ({ page }) => {
//Login
 
    const loginpage=new LoginPage(page)
    await loginpage.gotoLoginPage()
    await loginpage.login(userData.username,userData.password)
    await page.waitForTimeout(2000)

})