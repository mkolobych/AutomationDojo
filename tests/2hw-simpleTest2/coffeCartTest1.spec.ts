import { test, expect } from "@playwright/test";

test.describe("Cart tests", () => {

    test.beforeEach(async ({ page }) => {
        await page.goto("https://coffee-cart.app/");
    })

    test("Mocha should contain whipped cream, steamed milk, chocolate syrup, espresso", async ({ page }) => {
        await expect(page.locator("//div[@data-test='Mocha']")).toBeVisible();
        await expect(page.locator("//div[@data-test='Mocha']/div[1]")).toContainText("espresso");
        await expect(page.locator("//div[@data-test='Mocha']/div[2]")).toContainText("chocolate syrup");
        await expect(page.locator("//div[@data-test='Mocha']/div[3]")).toContainText("steamed milk");
        await expect(page.locator("//div[@data-test='Mocha']/div[4]")).toContainText("whipped cream");
    });

    test("'No coffee, go add some.' message is visible", async ({ page }) => {
        await page.locator("//a[@aria-label='Cart page']").click();

        await expect(page.locator("//div[@class='list']")).toContainText("No coffee, go add some.");
        await expect(page.locator("//button[@class='pay']")).not.toBeVisible();
        await expect(page.locator("//*[@id='app']/div[2]/div/ul")).not.toBeVisible();
    });

    test("The extra cup of Mocha can be skipped", async ({ page }) => {
        await page.locator("//ul[@data-v-a9662a08]/li[1]").click({ clickCount: 3 });

        await expect(page.locator("//div[@ class='promo']")).toBeVisible();

        await page.locator("//div[@class='buttons']/button[2]").click();

        await expect(page.locator("//div[@ class='promo']")).not.toBeVisible();
        await expect(page.locator('//a[@aria-label="Cart page"]')).toContainText("cart (3)")
    });

    test("Espresso Macchiato can be removed from the Cart", async ({ page }) => {
        await page.locator("//ul[@data-v-a9662a08]/li[2]").click();
        await page.locator("//a[@aria-label='Cart page']").click();

        await expect(page.locator("//div[contains(text(), 'Espresso Macchiato')]")).toBeVisible();

        await page.locator('//button[@class="delete"]').click();

        await expect(page.locator("//div[@class='list']")).toContainText("No coffee, go add some.");
        await expect(page.locator("//button[@class='pay']")).not.toBeVisible();
        await expect(page.locator("//*[@id='app']/div[2]/div/ul")).not.toBeVisible();
    });

    test("Cappuccino can be removed from the Cart via the minus button", async ({ page }) => {
        await page.locator("//ul[@data-v-a9662a08]/li[3]").click();
        await page.locator("//a[@aria-label='Cart page']").click();

        await expect(page.locator('//div[contains(text(),"Cappuccino")]')).toBeVisible();

        await page.locator("//li[@class='list-item']/div/div/button[2]").click();

        await expect(page.locator("//div[@class='list']")).toContainText("No coffee, go add some.");
        await expect(page.locator("//button[@class='pay']")).not.toBeVisible();
        await expect(page.locator("//*[@id='app']/div[2]/div/ul")).not.toBeVisible();
    });
});