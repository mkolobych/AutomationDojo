import { test, expect, Page } from "@playwright/test";
import { username, email, password, articleName } from "/AutomationDojo/helpers/generators";

const URLs = {
    conduit: "https://demo.learnwebdriverio.com/",
    coffee: "https://coffee-cart.app/"
};

const getElements = (page: Page) => ({
    registerButton: page.locator("[href='/register']"),
    signUpButton: page.locator("button:text('Sign up')"),
    signInButton: page.locator("[href='login']"),
    accountButton: page.locator(".nav-item > [href^='/@']"),
    fieldValidationMessage: (fieldName: string) => page.locator(`text='${fieldName} can't be blank'`),
    signUpInputs: (placeholder: string) => page.locator(`input[placeholder='${placeholder}']`),
    newArticleButton: page.locator("[href='/editor']"),
    articleTitle: page.locator("input[data-qa-id='editor-title']"),
    articleDescription: page.locator("input[data-qa-id='editor-description']"),
    articleComment: page.locator(".no-border.no-resize"),
    publishArticle: page.locator("button[data-qa-id='editor-publish']"),
    homeButton: page.locator("text=Home"),
    getArticleTitle: (i: number) => page.locator(`text='${articleName}${i}'`),
    deleteArticleButton: page.locator("[data-qa-id='article-delete']"),

    cups: page.locator(".cup-body"),
    extraCupPopup: page.locator(".promo"),
    skipButton: page.locator("button:text('skip.')"),
    cartButton: page.locator("[aria-label='Cart page']"),
    totalButton: page.locator(".pay"),
    coffeeList: page.locator(".cart-preview .list-item"),
});

const signUp = async (page: Page) => {
    const element = getElements(page);
    await page.goto(URLs.conduit);
    await element.registerButton.click();
    await element.signUpInputs("Username").fill(username);
    await element.signUpInputs("Email").fill(email);
    await element.signUpInputs("Password").fill(password);
    await element.signUpButton.click();
};

const articleCount: number = 10;

const createArticles = async (page: Page) => {
    const element = getElements(page);
    for (let i = 1; i <= articleCount; i++) {
        await element.newArticleButton.click();
        await element.articleTitle.fill(`${articleName}${i}`);
        await element.articleDescription.fill("Test description");
        await element.articleComment.fill("Test comment");
        await element.publishArticle.click();
        await element.getArticleTitle(i).waitFor();
    }
};

const isArticlePresent = async (page: Page) => {
    const element = getElements(page);
    for (let i = 1; i <= articleCount; i++) {
        await expect(element.getArticleTitle(i)).toBeVisible();
    }
};

const deleteArticles = async (page: Page) => {
    const element = getElements(page);
    for (let i = 1; i <= articleCount; i++) {
        await element.getArticleTitle(i).click();
        await element.deleteArticleButton.first().click();
    }
};

const addEachCup = async (page: Page) => {
    const element = getElements(page);
    for (let i = 0; i < 9; i++) {
        await element.cups.nth(i).click();
        if (await element.extraCupPopup.isVisible()) {
            await element.skipButton.click();
        }
    }
}

test("7hw-01 Add all cups", async ({ page }) => {
    const element = getElements(page);
    await page.goto(URLs.coffee);
    await addEachCup(page);
    await expect(element.cartButton).toContainText("9");
    await element.cartButton.click();
    await expect(element.coffeeList).toHaveCount(9);
});

test("7hw-02 Add articles", async ({ page }) => {
    const element = getElements(page);
    await signUp(page);
    await createArticles(page);
    await element.homeButton.click();
    await isArticlePresent(page);
    await deleteArticles(page);
});