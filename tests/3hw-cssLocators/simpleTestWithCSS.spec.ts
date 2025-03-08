import { test, expect } from "@playwright/test";

test.describe("Cart tests", () => {

    test.beforeEach(async ({ page }) => {
        await page.goto("https://coffee-cart.app/");
    })

    test("Mocha contains the right ingredients", async ({ page }) => {
        await expect(page.locator("[data-test='Mocha']")).toBeVisible();
        await expect(
            page.locator(".cup-body[data-test]").filter({ visible: true })
        ).toHaveCount(9);
    });


    test("'No coffee, go add some.' message is visible", async ({ page }) => {
        await page.locator("[aria-label='Cart page']").click();

        await expect(page.locator(".list p")).toContainText("No coffee, go add some.");
        await expect(page.locator(".pay")).not.toBeVisible();
        await expect(page.locator(".list-header")).not.toBeVisible();
    });

    test("Extra cup of Mocha can be skipped", async ({ page }) => {
        await page.goto("https://coffee-cart.app/");
        await page.locator("[data-test='Mocha']").click({ clickCount: 3 });

        await expect(page.locator(".promo")).toBeVisible();

        await page.locator(".buttons button:not(.yes)").click();
        //*[contains(@class, 'buttons')]//button[not(contains(@class, 'yes'))]

        await expect(page.locator(".promo")).not.toBeVisible();
        await expect(page.locator('[aria-label="Cart page"]')).toContainText("cart (3)")
    });

    test("remove Espresso Macchiato from the Cart", async ({ page }) => {
        await page.locator("[data-test='Espresso_Macchiato']").click();
        await page.locator("[aria-label='Cart page']").click();

        const listItem = page
            .locator(`//*[@class ='list-header']/following-sibling::li`)
            .getByText("Espresso Macchiato")
        await expect(listItem).toBeVisible();

        await page.locator('.delete').click();

        await expect(page.locator(".list")).toContainText("No coffee, go add some.");
        await expect(page.locator(".pay")).not.toBeVisible();
        await expect(page.locator("//*[@class ='list-header']/following-sibling::li")).not.toBeVisible();
    });

    test("Cappuccino can be removed from the Cart via the minus button", async ({ page }) => {
        await page.locator("[data-test='Cappuccino']").click();
        await page.locator("[aria-label='Cart page']").click();

        const listItem = page
            .locator(`//*[@class ='list-header']/following-sibling::li`)
            .getByText("Cappuccino")
        await expect(listItem).toBeVisible();

        await page
            .locator("[aria-label='Remove one Cappuccino']")
            .filter({ visible: true })
            .click();

        await expect(page.locator(".list")).toContainText("No coffee, go add some.");
        await expect(page.locator(".pay")).not.toBeVisible();
        await expect(page.locator("//*[@class ='list-header']/following-sibling::li")).not.toBeVisible();
    });
});