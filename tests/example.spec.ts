import { test, expect, Page, chromium, webkit } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test("test", async () => {
  const browser = await chromium.launch({ headless: false }); // запускає бравзер Сromium (firefox, webkit..etc ); параметр, що вимикає безголовий режим (headless mode), тобто браузер відкриється з графічним інтерфейсом, як звичайний браузер.
  // Якщо headless: true (за замовчуванням) — браузер працює у фоні без графічного інтерфейсу.
  // Якщо headless: false — браузер відкривається з вікном, що корисно для налагодження тестів або автоматизації.

  // const page = await browser.newPage(); // створює сторінку бравзера (кожна сторінка створюється в окремо)
  const context = await browser.newContext(); // об'єднує сторінки в бравзерві (авторизація в одній педжі пошириться на інші пейджі, об'єднує сесії в одну)
  const page = await context.newPage();
  const page1 = await context.newPage();
  const page2 = await context.newPage();

  console.log("sssd")
})



const URL = "https://demo.learnwebdriverio.com/register";
const signUpBtn = '//button[contains(text(),"Sign up")]';

function inputLocatorByPlaceholder(page: Page, placeholder: string) {
  return page.locator(`//input[@placeholder="${placeholder}"]`);
}

function getValidationError(page: Page, fieldName: string) {
  return page.locator(`//li[text()="${fieldName} can't be blank"]`);
}

test("Successful sign up ", async ({ page }) => {
  const randomUsername = `user${Date.now()}`;
  const randomEmail = `user${Date.now()}@gmail.com`;
  const randomPassword = `Password${Date.now()}`;
  const loggedInUserName = page.locator(`//a[@href="/@${randomUsername}/"]`);

  await page.goto(URL);
  await inputLocatorByPlaceholder(page, "Username").fill(randomUsername);
  await inputLocatorByPlaceholder(page, "Email").fill(randomEmail);
  await inputLocatorByPlaceholder(page, "Password").fill(randomPassword);
  await page.locator(signUpBtn).click();

  await expect(loggedInUserName).toHaveText(randomUsername);
});

test("Validation messages are shown during sign up with empty fields", async ({ page }) => {
  await page.goto(URL);
  await page.locator(signUpBtn).click();
  await expect(getValidationError(page, "username")).toBeVisible();
  await expect(getValidationError(page, "email")).toBeVisible();
});

//await expect(page.locator(`//*[@class="author"][contains(text(), "${username.toLocaleLowerCase()}")]`)).toBeVisible();





/*
 Масив тестових даних для параметризованого запуску

 Зверніть увагу на те що testData це масив який містить обʼєкти в якості елементів масиву.
 Важливо щоб обʼєкти мають однакові ключі (в нашому випадку - name, email, wantsUpdates)
 */
const testData = [
  { name: "Іван Петренко", email: "ivan@example.com", wantsUpdates: true },
  { name: "Оксана Шевченко", email: "oksana@example.com", wantsUpdates: false },
];

// Параметризований тест, який проходить по кожному набору даних
// for (const data of testData) {
//   test(`Надсилання платіжної форми для ${data.name}`, async ({ page }) => {
//     // Відкриваємо сторінку з формою (замінити на актуальну адресу)
//     await page.goto("https://coffee-cart.app/");

//     await page.locator('[data-test="Cappuccino"]').click();

//     // Клікаємо по кнопці, яка відкриває форму (оновити селектор за потреби)
//     await page.locator('[data-test="checkout"]').click();

//     // Вводимо ім’я в поле Name
//     await page.getByRole("textbox", { name: "Name" }).fill(data.name);

//     // Вводимо email у відповідне поле
//     await page.getByRole("textbox", { name: "Email" }).fill(data.email);

//     // Якщо користувач хоче отримувати оновлення, клікаємо чекбокс
//     if (data.wantsUpdates) {
//       await page.getByRole("checkbox", { name: "Promotion checkbox" }).check();
//     }

//     // Натискаємо кнопку Submit для надсилання форми
//     await page.getByRole("button", { name: "Submit" }).click();

//     // Перевірка: очікуємо, що після надсилання з’явиться певне повідомлення або індикатор успіху
//   });
// }


