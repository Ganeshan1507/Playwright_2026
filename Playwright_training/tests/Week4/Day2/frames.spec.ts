// Load the URL (https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm)
// Requirements:
// - Click the "Try It" button inside the frame
// - Click OK/Cancel in the alert that appears
// - Confirm the action is performed correctly by verifying the text displayed

import { test } from '@playwright/test';    

test.only(`FrameLocator`,async({page})=>{   
    await page.goto("https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm")

        // Handle the alert
    page.on('dialog', async alertType => {
        await alertType.accept(); // Click OK
        //  await alertType.dismiss(); // Click Cancel
    });

    await page.frameLocator("#iframeResult").locator("//button[text()='Try it']").click()
    await page.waitForTimeout(2000)

    // Verify the result
    const resultText = await page.frameLocator("#iframeResult").locator("#demo").textContent();
    console.log(`Result text: ${resultText}`);  
    


})