import { test, expect } from "@playwright/test";

test.describe("Cart tests", () => {

    test.beforeEach(async ({ page }) => {
        await page.goto("https://coffee-cart.app/");
    })

    test("Mocha should contain whipped cream, steamed milk, chocolate syrup, espresso", async ({ page }) => {
        await expect(page.locator("[data-test='Mocha']")).toBeVisible();
        await expect(page.locator("div[data-test='Mocha'] > div:nth-child(1)")).toContainText("espresso");
        await expect(page.locator("div[data-test='Mocha'] > div:nth-child(2)")).toContainText("chocolate syrup");
        await expect(page.locator("div[data-test='Mocha'] > div:nth-child(3)")).toContainText("steamed milk");
        await expect(page.locator("div[data-test='Mocha'] > div:nth-child(4)")).toContainText("whipped cream");
    });

    test("'No coffee, go add some.' message is visible", async ({ page }) => {
        await page.locator("a[aria-label='Cart page'], div[class='list']").click();

        await expect(page.locator("div[class='list'] p")).toContainText("No coffee, go add some.");
        await expect(page.locator(".pay")).not.toBeVisible();
        await expect(page.locator("//*[@id='app']/div[2]/div/ul")).not.toBeVisible(); //який селектор тут краще обрати?
    });

    test("The extra cup of Mocha can be skipped", async ({ page }) => {
        await page.locator("div[data-test='Mocha']").click({ clickCount: 3 });

        await expect(page.locator(".promo")).toBeVisible();

        await page.locator(".yes").click();

        await expect(page.locator(".promo")).not.toBeVisible();
        await expect(page.locator('a[aria-label="Cart page"]')).toContainText("cart (3)")
    });

    test("Espresso Macchiato can be removed from the Cart", async ({ page }) => {
        await page.locator("[data-test='Espresso_Macchiato']").click();
        await page.locator("[aria-label='Cart page']").click();

        await expect(page.locator("//div[contains(text(), 'Espresso Macchiato')]")).toBeVisible();// чи доцільно використовувати сss?

        await page.locator('.delete').click();

        await expect(page.locator(".list")).toContainText("No coffee, go add some.");
        await expect(page.locator(".pay")).not.toBeVisible();
        await expect(page.locator("//*[@id='app']/div[2]/div/ul")).not.toBeVisible();
    });

    test("Cappuccino can be removed from the Cart via the minus button", async ({ page }) => {
        await page.locator("div[data-test='Cappuccino']").click();
        await page.locator("a[aria-label='Cart page']").click();

        await expect(page.locator('//div[contains(text(),"Cappuccino")]')).toBeVisible();

        await page.locator("li[class='list-item'] div div[class='unit-controller'] button[aria-label='Remove one Cappuccino']").click(); ////li[@class='list-item']/div/div/button[2]

        await expect(page.locator(".list")).toContainText("No coffee, go add some.");
        await expect(page.locator(".pay'")).not.toBeVisible();
        await expect(page.locator("//*[@id='app']/div[2]/div/ul")).not.toBeVisible();
    });
});