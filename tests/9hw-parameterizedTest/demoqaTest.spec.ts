import { test, expect, Page } from '@playwright/test'
import { faker } from '@faker-js/faker';

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
        id: "9hw-01",
        fullName: faker.person.fullName(),
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
        fullName: faker.person.fullName(),
        email: faker.internet.email(),
        currentAddress: faker.location.city(),
        permanentAddress: faker.location.city()
    },
    {
        id: "9hw-04",
        fullName: faker.person.fullName(),
        email: faker.internet.email(),
        currentAddress: faker.location.city(),
        permanentAddress: faker.location.city()
    },
    {
        id: "9hw-05",
        fullName: faker.person.fullName(),
        email: faker.internet.email(),
        currentAddress: faker.location.city(),
        permanentAddress: ""
    },
];

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
    };
};

for (const data of formData) {
    test(`${data.id} - fill form with random data`, async ({ page }) => {
        const element = elements(page);
        await page.goto(urls.demoqaURL);
        await fillUserData(page, data);
        await element.submitButton.click();
        await verifyUserData(page, data);
    });
};