import { test, expect } from '@playwright/test';

test.describe('Playwright tests', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://playwright.dev/');
    });

    test("The user can change the theme of the site to a dark and vice versa", async ({ page }) => {
        await page.locator('//button[@aria-live="polite"]').click();

        await expect(page.locator('//button[@aria-live="polite"]')).toHaveAttribute('title', 'Switch between dark and light mode (currently dark mode)')

        await page.locator('//button[@aria-live="polite"]').click();

        await expect(page.locator('//button[@aria-live="polite"]')).toHaveAttribute('title', 'Switch between dark and light mode (currently light mode)')
    });

    test("the user can return to the main Playwright page", async ({ page }) => {
        await page.locator("//a[contains(text(), 'Community')]").click();

        await expect(page).toHaveURL("https://playwright.dev/community/welcome");

        await page.locator('//b[@class="navbar__title text--truncate"]').click();

        await expect(page).toHaveURL("https://playwright.dev/");
    });

    test("Community in the footer to contain all required attributes", async ({ page }) => {
        await expect(page.locator("//div[contains(text(), 'Community')]")).toBeVisible();
        await expect(page.locator("//a[normalize-space()='Stack Overflow']")).toHaveAttribute('href', 'https://stackoverflow.com/questions/tagged/playwright');
        await expect(page.locator('//a[normalize-space()="Discord"]')).toHaveAttribute('href', 'https://aka.ms/playwright/discord');
        await expect(page.locator('//a[normalize-space()="Twitter"]')).toHaveAttribute('href', 'https://twitter.com/playwrightweb');
        await expect(page.locator('//a[normalize-space()="LinkedIn"]')).toHaveAttribute('href', 'https://www.linkedin.com/company/playwrightweb');
    });

    test("The user can not see the search result if he entered invalid data in the search field", async ({ page }) => {

        await page.locator('//button[@class="DocSearch DocSearch-Button"]').click();

        await expect(page.locator('//div[@class="DocSearch-Modal"]')).toBeVisible();

        await page.locator("//input[@class='DocSearch-Input']").click();
        await page.locator("//input[@class='DocSearch-Input']").fill('sfsfdsfefsef');
        await page.locator('//label').click();

        await expect(page.locator('//p[@class="DocSearch-Title"]')).toContainText('No results for');
    });

    test("the user can clear the search field", async ({ page }) => {
        await page.locator('//button[@class="DocSearch DocSearch-Button"]').click();

        await expect(page.locator('//div[@class="DocSearch-Modal"]')).toBeVisible();

        await page.locator("//input[@class='DocSearch-Input']").click();
        await page.locator("//input[@class='DocSearch-Input']").fill("Fixtures");
        await page.locator('//label').click();

        await expect(page.locator('//div[contains(text(),"Playwright Test")]')).toBeVisible();

        await page.locator("//button[@class='DocSearch-Reset']").click();

        await expect(page.locator('//div[contains(text(),"Playwright Test")]')).not.toBeVisible();

    });
});