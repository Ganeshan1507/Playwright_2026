

// https://www.leafground.com/window.xhtml
// click on the Open button
// get the title of both the pages
// enter the email in the dashboard page(opened new page)

import { test } from '@playwright/test';

test.only("Handle Windows and Enter email Id",async({page})=>{
    await page.goto("https://www.leafground.com/window.xhtml")
    const [newPage] = await Promise.all([
        page.waitForEvent('popup'), // Wait for the new page to open
        page.click("//[text()='Open']") // Click the "Open" button
    ]);

    // Get the title of the original page
    const originalTitle = await page.title();
    console.log("Original Page Title:" + originalTitle);
    // Get the title of the new page
    const newPageTitle = await newPage.title();
    console.log("New Page Title:" + newPageTitle);

        // Enter email in the dashboard page (new page)
        await newPage.locator("#email").fill("test@gmail.com");
    });
    
