// Створіть функцію, яка використовує проміс для імітації затримки у 2 секунди перед поверненням значення.
// Вимоги:

// • Створіть функцію waitForTwoSeconds(), яка повертає проміс, що вирішується через 2 секунди.
// • Після виконання проміса функція повинна вивести в консоль повідомлення “2 секунди пройшло!”.

// * використовуйте setTimeout()

function waitForTwoSeconds(resolved: boolean, timeout: number): Promise<string> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            if (resolved) {
                console.log("2 секунди пройшло!");
                resolve;
            } else {
                reject("Сталася помилка!");
            };

        }, timeout);
    });
};

waitForTwoSeconds(true, 2000);