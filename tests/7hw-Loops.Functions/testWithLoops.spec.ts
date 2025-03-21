import { test, expect } from "@playwright/test";
import { username, email, password } from "/AutomationDojo/helpers/generators";

const conduitUrl = "https://demo.learnwebdriverio.com/";
const coffeeUrl = "https://coffee-cart.app/";

const getElements = (page) => ({
    registerButton: page.locator("//*[@href='/register']"),
    signUpButton: page.locator("//button[contains(text(),'Sign up')]"),
    signInButton: page.locator("//*[@href='login']"),
    accountButton: page.locator("//*[@class='nav-item']/*[starts-with(@href, '/@')]"),
    fieldValidationMessage: (fieldName: string) => page.locator(`//*[text()="${fieldName} can't be blank"]`),
    signUpInputs: (placeholder: string) => page.locator(`//input[@placeholder="${placeholder}"]`),
    newArticleButton: page.locator("[href='/editor']"),
    articleTitel: page.locator(`input[data-qa-id="editor-title"]`),
    articleDescription: page.locator(`input[data-qa-id="editor-description"]`),
    articleComment: page.locator(`.no-border.no-resize`),
    publishArtcle: page.locator(`button[data-qa-id="editor-publish"]`),
    homeButton: page.locator(`//*[contains(text(),"Home")]`),
    getArticleTitle: (i: number) => page.locator(`//*[text()="Test article ${i}"]`),

    cups: page.locator(".cup-body"),
    extraCupPopup: page.locator(".promo"),
    skipButton: page.locator("//button[contains(text(),'skip.')]"),
    cartButton: page.locator("[aria-label='Cart page']"),
    totalbutton: page.locator(".pay"),
    coffeeList: page.locator(".cart-preview .list-item"),
});

const signUp = async (page) => {
    const element = getElements(page);
    await page.goto(conduitUrl);
    await element.registerButton.click();
    await element.signUpInputs("Username").fill(username);
    await element.signUpInputs("Email").fill(email);
    await element.signUpInputs("Password").fill(password);
    await element.signUpButton.click();
}

test("add all cups", async ({ page }) => {
    const element = getElements(page);

    await page.goto(coffeeUrl);

    for (let i = 0; i < 9; i++) {
        await element.cups.nth(i).click();

        if (await element.extraCupPopup.isVisible()) {
            await element.skipButton.click();
        };
    };

    await expect(element.cartButton).toContainText("9");
    await expect(element.totalbutton).toContainText("Total: $119.00");

    await element.cartButton.click();

    const addedCoffe = await element.coffeeList.count();
    await expect(addedCoffe).toBe(9);
});


test("Sign up", async ({ page }) => {
    const element = getElements(page);

    await signUp(page);

    for (let i = 1; i <= 10; i++) {
        await element.newArticleButton.click();
        await element.articleTitel.fill(`Test article ${i}`);
        await element.articleDescription.fill("Test discription");
        await element.articleComment.fill("Test comment");
        await element.publishArtcle.click();
        //await page.waitForTimeout(300);
        await element.getArticleTitle(i).waitFor();
    }
    await element.homeButton.click();

    for (let i = 1; i <= 10; i++) {
        await expect(element.getArticleTitle(i)).toBeVisible();
    }
});