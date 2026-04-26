import test from '@playwright/test'
import { parse } from 'csv-parse/sync'
import fs from 'fs'

let loginData:any[]
loginData=parse(fs.readFileSync("../Data/loginCredentials.csv"),{
     columns:true,
     skip_empty_lines:true,
})


for (let data of loginData) {
  test(`Learning CSV Parameterization role ${data.tcId}`, async ({ page }) => {
    await page.goto("https://login.salesforce.com/?locale=in")
    await page.locator("#username").fill(data.username)
    await page.locator("#password").fill(data.password)
    await page.locator("#Login").click()
  })
}