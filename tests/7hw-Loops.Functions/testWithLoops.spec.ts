import { test, expect } from "@playwright/test";
import { username, email, password } from "/AutomationDojo/helpers/generators";

const conduitUrl = "https://demo.learnwebdriverio.com/";

const getElements = (page) => ({
    registerButton: page.locator("//*[@href='/register']"),
    signUpButton: page.locator("//button[contains(text(),'Sign up')]"),
    signInButton: page.locator("//*[@href='login']"),
    accountButton: page.locator("//*[@class='nav-item']/*[starts-with(@href, '/@')]"),
    fieldValidationMessage: (fieldName: string) => page.locator(`//*[text()="${fieldName} can't be blank"]`),
    signUpInputs: (placeholder: string) => page.locator(`//input[@placeholder="${placeholder}"]`),
});

test("add all cups", async ({ page }) => {
    await page.goto("https://coffee-cart.app/");

    for (let i = 0; i < 9; i++) {
        await page.locator(".cup-body").nth(i).click({ force: true });

        const extraCupPopup = page.locator(".promo");
        if (await extraCupPopup.isVisible()) {
            await page.locator("//button[contains(text(),'skip.')]").click();
        };
    };

    await expect(page.locator("[aria-label='Cart page']")).toContainText("9");
    await expect(page.locator(".pay")).toContainText("Total: $119.00");

    await page.locator("[aria-label='Cart page']").click();

    const coffeeList = await page.locator(".cart-preview .list-item").count();
    await expect(coffeeList).toBe(9);
});


test("Sign up", async ({ page }) => {
    const element = getElements(page);

    await page.goto(conduitUrl);
    await element.registerButton.click();
    await element.signUpInputs("Username").fill(username);
    await element.signUpInputs("Email").fill(email);
    await element.signUpInputs("Password").fill(password);
    await element.signUpButton.click();

    // for (let i = 0; i < 10; i++) {
    //     await page.locator("[href='/editor']").click();
    //     await page.locator(`input[data-qa-id="editor-title"]`).fill(`Test article ${i}`);
    //     await page.locator(`input[data-qa-id="editor-description"]`).fill("Test discription");
    //     await page.locator(`.no-border.no-resize`).fill("Test comment");
    //     await page.locator(`button[data-qa-id="editor-publish"]`).click();
    // }

});