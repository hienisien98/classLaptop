import { test } from "@playwright/test";


test("Test 03", async ({ page }) => {
    page.goto('https://material.playwrightvn.com/');
    page.click("//a[text()='Bài học 3: Todo page']");

    page.locator("//input[@id='new-task']").fill("Task 1");
    page.click("//button[@id='add-task']");

    page.on('dialog', async dialog => dialog.accept());
    await page.click("//button[text()='Delete']");

})