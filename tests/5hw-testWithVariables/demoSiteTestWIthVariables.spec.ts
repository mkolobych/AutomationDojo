import { test, expect } from '@playwright/test'

const url = "https://demo.learnwebdriverio.com/";

const getElements = (page) => ({
    registerButton: page.locator("//*[@href='/register']"),
    userNameField: page.locator("//input[@placeholder='Username']"),
    emailField: page.locator("//input[@placeholder='Email']"),
    passwordField: page.locator("//input[@placeholder='Password']"),
    signUpButton: page.locator("//button[contains(text(),'Sign up')]"),
    signInButton: page.locator("//button[contains(text(),'Sign up')]"),
    accountButton: page.locator("//*[@class='nav-item']/*[starts-with(@href, '/@')]"),
    userNameBlankErrorMessage: page.locator(`//*[text()="username can't be blank"]`),
    emailBlankErrorMessage: page.locator(`//*[text()="email can't be blank"]`)
});

function generateRandomID(length: number): string {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let id = "";

    for (let i = 0; i < length; i++) {
        id += chars[Math.floor(Math.random() * chars.length)];
    };

    return id;
};

function generateUsername(): string {
    return `user${generateRandomID(10)}`;
};

function generateEmail(): string {
    return `email${generateRandomID(10)}@example.com`;
};

function generatePassword(): string {
    return generateRandomID(10);
};


test.beforeEach(async ({ page }) => {
    await page.goto(url);
});

const username = generateUsername();
const email = generateEmail();
const password = generatePassword();

test("Sign up", async ({ page }) => {
    const element = getElements(page);

    await element.registerButton.click();
    await element.userNameField.pressSequentially(username);
    await element.emailField.pressSequentially(email);
    await element.passwordField.pressSequentially(password);
    await element.signUpButton.click();

    await expect(element.signInButton).not.toBeVisible();
    await expect(element.registerButton).not.toBeVisible();

    await expect(element.accountButton).toHaveAttribute('href', `/@${username.toLowerCase()}/`);
    await expect(element.accountButton).toContainText(username.toLocaleLowerCase());
});

test("sign up required fields", async ({ page }) => {
    const element = getElements(page);

    await element.registerButton.click();
    await element.signUpButton.click();

    await expect(element.userNameBlankErrorMessage).toBeVisible();
    await expect(element.emailBlankErrorMessage).toBeVisible();
});