//1. Function Declaration
console.log(sum(2, 3))

function sum(a: number, b: number) {
    return a + b
}
console.log(sum(1, 3))
//✅ Зберігається в змінній
//✅ Не піднімається (не можна викликати до оголошення)
//✅ Використовується для функцій в якості аргументів

//2. Function Expression
//console.log(multiply(3, 4))
const multiply = function (a: number, b: number) {
    return a * b
}

console.log(multiply(3, 4))

// ✅ Зберігається в змінній
// ✅ Не піднімається (не можна викликати до оголошення)
// ✅ Використовується для функцій в якості аргументів

//3. Arrow Function (=>)
const add = (a: number, b: number) => a + b

//✅ Коротший запис функції
//✅ this успадковується від зовнішньої області
//✅ Автоматичне повернення (якщо один вираз)

//Замикання (Сlosures)

function outer() {
    let counter = 0;  // Змінна, доступна тільки всередині outer

    function inner() {  // Функція замикання
        counter++;  // Має доступ до змінної counter з outer
        console.log(counter);
    }

    return inner;  // Повертаємо inner, що зберігає доступ до counter
}

const increment = outer();  // Викликаємо outer і отримуємо inner
increment();
increment();
increment();