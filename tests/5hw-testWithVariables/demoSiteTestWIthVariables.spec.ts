import { test, expect } from '@playwright/test'

// test.describe("sign up functionality", ({ page }) => {
//     const url = page.goto("https://demo.learnwebdriverio.com/");

//     test.beforeEach(async ({ page }) => {
//     });
// });


function TestData() {
    this.baseUrl = "https://demo.learnwebdriverio.com/";
    this.signupButton = "#signup";
}

test.beforeEach(async ({ page }) => {
    await page.goto(this.baseUrl);
});
