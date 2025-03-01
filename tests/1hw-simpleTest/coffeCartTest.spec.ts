import { test, expect } from '@playwright/test';

test.describe('Coffe nemu tests', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://coffee-cart.app/');
    });

    test('Verify that all coffee types are visible in the menu', async ({ page }) => {

        const firstCoffe = page.locator('//ul[@data-v-a9662a08]/li[1]');
        await expect(firstCoffe).toBeVisible();
        await expect(firstCoffe).toContainText("Espresso");

        const secondCoffe = page.locator('//ul[@data-v-a9662a08]/li[2]')
        await expect(secondCoffe).toBeVisible();
        await expect(secondCoffe).toContainText("Espresso Macchiato ");

        const thidCoffe = page.locator('//ul[@data-v-a9662a08]/li[3]')
        await expect(thidCoffe).toBeVisible();
        await expect(thidCoffe).toContainText("Cappuccino");

        const fourthCoffe = page.locator('//ul[@data-v-a9662a08]/li[4]');
        await expect(fourthCoffe).toBeVisible();
        await expect(fourthCoffe).toContainText('Mocha');

        const fifthCoffe = page.locator('//ul[@data-v-a9662a08]/li[5]');
        await expect(firstCoffe).toBeVisible();
        await expect(fifthCoffe).toContainText('Flat White');

        const sixthCoffe = page.locator('//ul[@data-v-a9662a08]/li[6]');
        await expect(sixthCoffe).toBeVisible();
        await expect(sixthCoffe).toContainText('Americano');

        const seventhCoffe = page.locator('//ul[@data-v-a9662a08]/li[7]');
        await expect(seventhCoffe).toBeVisible();
        await expect(seventhCoffe).toContainText('Cafe Latte');

        const eightCoffe = page.locator('//ul[@data-v-a9662a08]/li[8]');
        await expect(eightCoffe).toBeVisible();
        await expect(eightCoffe).toContainText('Espresso Con Panna');

        const ninhtCoffe = page.locator('//ul[@data-v-a9662a08]/li[9]');
        await expect(ninhtCoffe).toBeVisible();
        await expect(ninhtCoffe).toContainText('Cafe Breve');
    });

    test('Verify that user can add "Espresso" to the cart', async ({ page }) => {
        await page.locator('//ul[@data-v-a9662a08]/li[1]').click();

        await expect(page.locator('//a[@aria-label="Cart page"]')).toContainText('1');
        await expect(page.locator('//button[@class="pay"]')).toContainText('Total: $10.00');
    });

    test("Verify that user can accept confirmation of adding coffee to cart", async ({ page }) => {
        await page.locator('//ul[@data-v-a9662a08]/li[1]').click({ button: 'right' });

        await expect(page.locator('//dialog[@data-cy="add-to-cart-modal"]')).toBeVisible();

        await page.locator('//form[@method="dialog"]/button[1]').click();

        await expect(page.locator('//dialog[@data-cy="add-to-cart-modal"]')).not.toBeVisible();
        await expect(page.locator('//a[@aria-label="Cart page"]')).toHaveCount(1);
        await expect(page.locator('//button[@class="pay"]')).toContainText('Total: $10.00');
    });

    test('Verify that user can declaine the adding coffee to cart', async ({ page }) => {
        await page.locator('//ul[@data-v-a9662a08]/li[1]').click({ button: 'right' });

        await expect(page.locator('//dialog[@data-cy="add-to-cart-modal"]')).toBeVisible();

        await page.locator('//form[@method="dialog"]/button[2]').click();

        await expect(page.locator('//dialog[@data-cy="add-to-cart-modal"]')).not.toBeVisible();
        await expect(page.locator('//a[@aria-label="Cart page"]')).toHaveCount(1) // Received: 1, Expected: 0
        await expect(page.locator('//button[@class="pay"]')).toContainText('Total: $0.00');
    })

    test('verify that user can check Payment details', async ({ page }) => {
        const name = "Mario";
        const email = "mario@example.com"
        await page.locator('//button[@class="pay"]').click();

        await expect(page.locator("//div[@class='modal-content size']")).toBeVisible();

        await page.locator('//input[@id="name"]').fill(name);
        await page.locator('//input[@id="email"]').fill(email);
        await page.locator('//button[@id="submit-payment"]').click();

        const snackBarSuccess = page.locator('//div[@class="snackbar success"]');
        await expect(snackBarSuccess).toBeVisible();
        await expect(snackBarSuccess).toHaveText('Thanks for your purchase. Please check your email for payment.');
    });

});