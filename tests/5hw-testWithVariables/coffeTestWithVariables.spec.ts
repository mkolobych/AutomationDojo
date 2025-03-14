import { test, expect } from '@playwright/test'

const name = "Marian";
const email = "marian@exmple.com";
const url = "https://coffee-cart.app/";


test.describe("Cart test", () => {

    const getElements = (page) => ({
        cartButton: page.locator("//*[@aria-label='Cart page']"),
        emptyCartList: page.locator("//*[@class='list']"),
        totalButton: page.locator("//button[@data-test='checkout']"),
        headerList: page.locator("//*[@class='list-header']"),
        mochaCup: page.locator("//*[@data-test='Mocha']"),
        espressoMacchiatoCup: page.locator("//*[@data-test='Espresso_Macchiato']"),
        cappuccinoCup: page.locator("//*[@data-test='Cappuccino']"),
        extraCupBanner: page.locator("//*[@class='promo']"),
        skipExtraCupButton: page.locator("//button[contains(text(),'skip.')]"),
        orderListItems: page.locator(`//*[@class ='list-header']/following-sibling::li`),
        orderCappuccinoList: page.locator(`//*[@class ='list-header']/following-sibling::li`),
        deleteCupButton: page.locator('//button[@class="delete"]'),
        removeCappuccinButton: page.locator("//button[@aria-label='Remove one Cappuccino']").filter({ visible: true }),
        nameField: page.locator("//input[@id='name']"),
        emailField: page.locator("//input[@id='email']"),
        submitButton: page.locator("//button[@id='submit-payment']"),
        successBanner: page.locator("//*[@class='snackbar success']"),
        menuCups: page.locator("//*[@class='cup-body']").filter({ visible: true })
    });

    test.beforeEach(async ({ page }) => {
        await page.goto(url);
    });

    test("The menu contains nine cups of coffee", async ({ page }) => {
        const elements = getElements(page);
        await expect(elements.menuCups).toHaveCount(9);
    });

    test("'No coffee, go add some.' message is visible", async ({ page }) => {
        const elements = getElements(page);

        await elements.cartButton.click();

        await expect(elements.emptyCartList).toHaveText("No coffee, go add some.");
        await expect(elements.totalButton).not.toBeVisible();
        await expect(elements.headerList).not.toBeVisible();
    });

    test("Extra cup of Mocha can be skipped", async ({ page }) => {
        const elements = getElements(page);

        await elements.mochaCup.click({ clickCount: 3 });

        await expect(elements.extraCupBanner).toBeVisible();

        await elements.skipExtraCupButton.click();

        await expect(elements.extraCupBanner).not.toBeVisible();
        await expect(elements.cartButton).toContainText("cart (3)");
    });

    test("remove Espresso Macchiato from the Cart", async ({ page }) => {
        const elements = getElements(page);

        await elements.espressoMacchiatoCup.click();
        await elements.cartButton.click();

        await expect(elements.orderListItems.getByText("Espresso Macchiato")).toBeVisible();

        await elements.deleteCupButton.click();

        await expect(elements.emptyCartList).toContainText("No coffee, go add some.");
        await expect(elements.totalButton).not.toBeVisible();
        await expect(elements.orderListItems).not.toBeVisible();
    });

    test("Remove Cappuccino from the Cart  via the minus button", async ({ page }) => {
        const elements = getElements(page);

        await elements.cappuccinoCup.click();
        await elements.cartButton.click();

        await expect(elements.orderListItems.getByText("Cappuccino")).toBeVisible();

        await elements.removeCappuccinButton.click();

        await expect(elements.emptyCartList).toContainText("No coffee, go add some.");
        await expect(elements.totalButton).not.toBeVisible();
        await expect(elements.orderListItems).not.toBeVisible();
    });

    test("Send a paymant details", async ({ page }) => {
        const elements = getElements(page);

        await elements.totalButton.click();
        await elements.nameField.pressSequentially(name);
        await elements.emailField.pressSequentially(email);
        await elements.submitButton.click();

        await expect(elements.successBanner).toBeVisible();
        await expect((elements.successBanner)).toHaveText("Thanks for your purchase. Please check your email for payment.")
    });
});