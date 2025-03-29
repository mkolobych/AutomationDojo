import { test, expect, Page } from '@playwright/test'
import { da, faker } from '@faker-js/faker';

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

// faker.seed(1234);

const formData = [
    {
        id: "9hw-01",
        fullName: "dsds sdsds",
        email: faker.internet.email(),
        currentAddress: faker.location.city(),
        permanentAddress: faker.location.city()
    },
    {
        id: "9hw-02",
        fullName: faker.person.fullName(),
        email: faker.internet.email(),
        currentAddress: faker.location.city(),
        permanentAddress: faker.location.city()
    },
    {
        id: "9hw-03",
        fullName: "Bob Smith",
        email: faker.internet.email(),
        currentAddress: faker.location.city(),
        permanentAddress: faker.location.city()
    },
    {
        id: "9hw-04",
        fullName: "Charlie Brown",
        email: faker.internet.email(),
        currentAddress: faker.location.city(),
        permanentAddress: faker.location.city()
    },
    {
        id: "9hw-05",
        fullName: "Diana Miller",
        email: faker.internet.email(),
        currentAddress: faker.location.city(),
        permanentAddress: ""
    },
];

// Перед запуском тестів логуємо дані, щоб переконатися, що вони стабільні
console.log("Generated test data:", formData);

async function fillUserData(page: Page, data: any) {
    const element = elements(page);
    await element.inputLocators(locatorId.fullNameinpt).fill(data.fullName);
    await element.inputLocators(locatorId.emailInpt).fill(data.email);
    await element.inputLocators(locatorId.currentAddress).fill(data.currentAddress);
    await element.inputLocators(locatorId.permanentAddress).fill(data.permanentAddress);

};

async function verifyUserData(page: Page, data: any) {
    const element = elements(page);
    await expect(element.outputLocators(locatorId.fullNameOutput)).toContainText(data.fullName);
    await expect(element.outputLocators(locatorId.emailOutput)).toContainText(data.email);
    await expect(element.outputLocators(locatorId.currentAddress)).toContainText(data.currentAddress);

    if (data.permanentAddress) {
        await expect(element.outputLocators(locatorId.permanentAddress)).toContainText(data.permanentAddress);
    } else {
        await expect(element.outputLocators(locatorId.permanentAddress)).not.toBeVisible();
    }
}

for (const data of formData) {
    test(`${data.id} - fill data for user ${data.fullName}`, async ({ page }) => {
        const element = elements(page);
        await page.goto(urls.demoqaURL);

        console.log(`Running test for: ${data.fullName} (${data.email})`);
        console.log("Test data:", data);  // Логування даних

        await fillUserData(page, data);
        await element.submitButton.click();
        await verifyUserData(page, data);
    });
}