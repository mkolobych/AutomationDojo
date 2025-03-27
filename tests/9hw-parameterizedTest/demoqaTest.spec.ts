import { test, expect, Page } from '@playwright/test'

const urls = {
    demoqaURL: "https://demoqa.com/text-box"
};

const elements = (page: Page) => ({
    textBoxInputs: (placeholder: string) => page.locator(`[placeholder="${placeholder}"]`),
    parmanentAddress: page.locator(`[id="permanentAddress"][class="form-control"]`),
    submitButton: page.locator('.btn-primary')
});

const placeholder = {
    fullName: "Full Name",
    email: "name@example.com",
    currentAddress: "Current Address"
};

const formData = [
    {
        fullName: "John Doe",
        email: "johndoe@example.com",
        currentAddress: "123 Main St, New York, NY",
        permanentAddress: "456 Elm St, Boston, MA"
    },
    {
        fullName: "",
        email: "johndoe@example.com",
        currentAddress: "123 Main St, New York, NY",
        permanentAddress: "456 Elm St, Boston, MA"
    },


]

test("", async ({ page }) => {
    const element = elements(page);
    await page.goto(urls.demoqaURL);
    await element.textBoxInputs(placeholder.fullName).fill('111');
    await element.textBoxInputs(placeholder.email).fill("222");
    await element.textBoxInputs(placeholder.currentAddress).fill("333");
    await element.parmanentAddress.fill("4444");
    await element.submitButton.click();
});