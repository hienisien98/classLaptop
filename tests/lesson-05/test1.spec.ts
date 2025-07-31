import { test } from "@playwright/test";

test("Test 01", async ({ page }) => {
    await test.step("Go to page", async () => {
        await page.goto('https://material.playwrightvn.com/');
    })

    await test.step("Click vào Bài học 1", async () => {
        await page.locator("//a[text()='Bài học 1: Register Page (có đủ các element)']").click();
    })


})