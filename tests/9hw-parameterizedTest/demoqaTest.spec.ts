import { test, expect, Page } from '@playwright/test'

const urls = {
    demoqaURL: "https://demoqa.com/text-box"
};

const elements = (page: Page) => ({
    inputLocators: (id: string) => page.locator(`[class*="form-control"][id="${id}"]`),
    submitButton: page.locator('.btn-primary'),
    outputLocators: (id: string) => page.locator(`[class="mb-1"][id="${id}"]`),
});

const locatorId = {
    fullNameinpt: "userName",
    emailInpt: "userEmail",
    currentAddress: "currentAddress",
    permanentAddress: "permanentAddress",
    fullNameOutput: "name",
    emailOutput: "email"
};

const formData = [
    {
        fullName: "John Doe",
        email: "johndoe@example.com",
        currentAddress: "123 Main St, New York, NY",
        permanentAddress: "456 Elm St, Boston, MA"
    },
    {
        fullName: "Alice Johnson",
        email: "alice.johnson@example.com",
        currentAddress: "789 Pine St, Los Angeles, CA",
        permanentAddress: "101 Maple St, San Francisco, CA"
    },
    {
        fullName: "Bob Smith",
        email: "bob.smith@example.com",
        currentAddress: "222 Oak St, Chicago, IL",
        permanentAddress: "333 Birch St, Houston, TX"
    },
    {
        fullName: "Charlie Brown",
        email: "charlie.brown@example.com",
        currentAddress: "444 Cedar St, Seattle, WA",
        permanentAddress: "555 Walnut St, Denver, CO"
    },
    {
        fullName: "Diana Miller",
        email: "diana.miller@example.com",
        currentAddress: "666 Cherry St, Miami, FL",
        permanentAddress: ""
    },
];

for (const data of formData) {
    test(`Надсилання платіжної форми для ${data.fullName}`, async ({ page }) => {
        const element = elements(page);
        await page.goto(urls.demoqaURL);
        await element.inputLocators(locatorId.fullNameinpt).fill(data.fullName);
        await element.inputLocators(locatorId.emailInpt).fill(data.email);
        await element.inputLocators(locatorId.currentAddress).fill(data.currentAddress);
        await element.inputLocators(locatorId.permanentAddress).fill(data.permanentAddress);
        await element.submitButton.click();

        await expect(element.outputLocators(locatorId.fullNameOutput)).toContainText(data.fullName)
        await expect(element.outputLocators(locatorId.emailOutput)).toContainText(data.email);
        await expect(element.outputLocators(locatorId.currentAddress)).toContainText(data.currentAddress);
        if (data.permanentAddress) {
            await expect(element.outputLocators(locatorId.permanentAddress)).toContainText(data.permanentAddress);
        } else {
            await expect(element.outputLocators(locatorId.permanentAddress)).not.toBeVisible();
        };

    });
}
