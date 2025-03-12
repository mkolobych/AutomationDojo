import { test, expect } from "@playwright/test"

test.beforeEach(async ({ page }) => {
    await page.goto("https://demo.learnwebdriverio.com/");
});

test("Sign up", async ({ page }) => {
    function generateRandomID(length: number): string {
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        let id = "";

        for (let i = 0; i < length; i++) {
            id += chars[Math.floor(Math.random() * chars.length)];
        };

        return id;
    };

    function generateUsername(): string {
        return `Marian${generateRandomID(10)}`;
    };

    function generateEmail(): string {
        return `kolobych${generateRandomID(10)}@example.com`;
    };

    function generatePassword(): string {
        return generateRandomID(10);
    };

    const username = generateUsername();
    const email = generateEmail();
    const password = generatePassword();

    await page.locator("//*[@href='/register']").click();
    await page.locator("//input[@placeholder='Username']").pressSequentially(username);
    await page.locator("//input[@placeholder='Email']").pressSequentially(email);
    await page.locator("//input[@placeholder='Password']").pressSequentially(password);
    await page.locator("//button[contains(text(),'Sign up')]").click();

    await expect(page.locator("//*[@href='/login' and @class='nav-link']")).not.toBeVisible();
    await expect(page.locator("//*[@href='/register']")).not.toBeVisible();

    const accountButton = page.locator("//*[@class='nav-item']/*[starts-with(@href, '/@')]");
    await expect(accountButton).toHaveAttribute('href', `/@${username.toLowerCase()}/`);
    await expect(accountButton).toContainText(username.toLocaleLowerCase());
});

test("Sign up error messages", async ({ page }) => {
    await page.locator("//*[@href='/register']").click();
    await page.locator("//button[contains(text(),'Sign up')]").click();

    await expect(page.locator(`//*[text()="username can't be blank"]`)).toBeVisible();
    await expect(page.locator(`//*[text()="email can't be blank"]`)).toBeVisible();
});