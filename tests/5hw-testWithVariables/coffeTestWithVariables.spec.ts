import { test, expect } from '@playwright/test'

test.describe("Cart test", () => {

    test.beforeEach(async ({ page }) => {
        await page.goto("https://coffee-cart.app/");
    });

    test("Mocha contains the right ingredients", async ({ page }) => {
        await expect(page.locator("[data-test='Mocha']")).toBeVisible();
        await expect(
            page.locator("//*[@class='cup-body']").filter({ visible: true })
        ).toHaveCount(9);
    });

    test("'No coffee, go add some.' message is visible", async ({ page }) => {
        await page.locator("//*[@aria-label='Cart page']").click();

        await expect(page.locator("//*[@class='list']")).toHaveText("No coffee, go add some.");
        await expect(page.locator("//button[@data-test='checkout']")).not.toBeVisible();
        await expect(page.locator("//*[@class='list - header']")).not.toBeVisible();
    });

    test("Extra cup of Mocha can be skipped", async ({ page }) => {
        await page.locator("//*[@data-test='Mocha']").click({ clickCount: 3 });

        await expect(page.locator("//*[@class='promo']")).toBeVisible();

        await page.locator("//button[contains(text(),'skip.')]").click();

        await expect(page.locator("//*[@class='promo']")).not.toBeVisible();
        await expect(page.locator('//*[@aria-label="Cart page"]')).toContainText("cart (3)");
    });

    test("remove Espresso Macchiato from the Cart", async ({ page }) => {
        await page.locator("//*[@data-test='Espresso_Macchiato']").click();
        await page.locator("//*[@aria-label='Cart page']").click();

        const listItem = page
            .locator(`//*[@class ='list-header']/following-sibling::li`)
            .getByText("Espresso Macchiato")
        await expect(listItem).toBeVisible();

        await page.locator('//button[@class="delete"]').click();

        await expect(page.locator("//*[@class='list']")).toContainText("No coffee, go add some.");
        await expect(page.locator("//*[@data-test='checkout']")).not.toBeVisible();
        await expect(page.locator("//*[@class ='list-header']/following-sibling::li")).not.toBeVisible();
    });

    test("Remove Cappuccino from the Cart  via the minus button", async ({ page }) => {
        await page.locator("//*[@data-test='Cappuccino']").click();
        await page.locator("//*[@aria-label='Cart page']").click();

        const listItem = page
            .locator(`//*[@class ='list-header']/following-sibling::li`)
            .getByText("Cappuccino")
        await expect(listItem).toBeVisible();

        await page
            .locator("//button[@aria-label='Remove one Cappuccino']")
            .filter({ visible: true })
            .click();

        await expect(page.locator("//*[@class='list']")).toContainText("No coffee, go add some.");
        await expect(page.locator("//button[@data-test='checkout']")).not.toBeVisible();
        await expect(page.locator("//*[@class ='list-header']/following-sibling::li")).not.toBeVisible();
    });

    test("Send a paymant details", async ({ page }) => {
        const name = "Marian";
        const email = "marian@exmple.com";

        await page.locator("//button[@data-test='checkout']").click();
        await page.locator("//input[@id='name']").pressSequentially(name);
        await page.locator("//input[@id='email']").pressSequentially(email);
        await page.locator("//button[@id='submit-payment']").click();

        await expect(page.locator("//*[@class='snackbar success']")).toBeVisible();
        await expect(page.locator("//*[@class='snackbar success']")).toHaveText("Thanks for your purchase. Please check your email for payment.")
    });
});