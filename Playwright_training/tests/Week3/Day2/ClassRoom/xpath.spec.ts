
import test from "@playwright/test";

// Relative Xpath -short way 




// //tagname
// Basic xpath
// attribute based
// //tagname[@att='attvlaue']
// partial attribute
// //tagname[contains(@att,'attValue')]
// textbased
// //tagname[text()='textvalue'] //black colour
// //a[text()='Leads']
// partial textbased
// //tagname[conatins(text(),'textValue')]
// //a[contains(text(),'CRM')]
// index based
// (relative xpath)[index] -always starts with 1
// (//tagname[@att='attvlaue'])[index]
// (//input[@class="inputLogin"])[2]  index go beyound 5 -not recommended 



// Advanced xpath-(relationship based xapth) 8th
// parent to child (top to bottom)


// (relative xapth)/child xapth 


// //p[@class='top']/input


// child to parent(bottom to top)


// //input[@id='username']/parent::p
// granparent to grandchild
// (relative xpath of the grandparent)//tagname of grandchild(relative xpath is option for the grand childeren)
// //form//input[@id='password']
// (//form//input)[3]
// grandchild to grandparent


// (relative xapth of child)/ancestor::tagname of the parent/grandparent
// //label[text()="Password"]/ancestor::form


// elder to younger sibling(top to bottom approach)
// (relative xpath of elder)/following-sibling::tagname og the younger sibling
// //label[text()='Username']/following-sibling::input
// younger to elder sibling


// (relative xpath of younger )/preceding-sibling::tagname of elder
// //span[text()='New']/preceding-sibling::input


// elder to younger cousin
// (relative xpath of elder)/following-sibling::tagname og the younger sibling
// //label[text()='Username']/following::input


// younger to elder cousin
// (relative xpath of younger )/preceding::tagname of elder


test("Select Option", async ({ page }) => {
  
    await page.goto("https://leaftaps.com/opentaps/control/main")


     await page.locator("//input[@id='username']").fill("demosalesmanager")
     await page.locator("//input[@id='password']").fill("crmsfa")
     await page.locator("//input[@class='decorativeSubmit']").click()

     await page.locator("//a[contains(text(),'CRM')]").click()
    
     await page.waitForTimeout

     await page.locator("//a[text()='Create Lead']").click()

     await page.locator("//input[@id='createLeadForm_companyName']").fill("Testleaf")
     await page.locator("//input[@id='createLeadForm_firstName']").fill("Dilip")
     await page.locator("//input[@id='createLeadForm_lastName']").fill("Rajendran")
});