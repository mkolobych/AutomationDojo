//1️⃣ Перевірка масиву  
function isInputAppay(input: any) {
    return Array.isArray(input)
}

console.log(isInputAppay("QA DOJO"));
console.log(isInputAppay([1, 2, 4, 0]))


//2️⃣ Клонування масиву 
function cloneArray(array: Array<number>) {
    return array.slice();
}

const original = [1, 2, 4, 0];
const cloned = cloneArray(original);
cloned[0] = 19;

console.log(original);
console.log(cloned);


//3️⃣ Перші елементи масиву  
function firstElements(array: Array<any>, element: number = 1) {
    return array.slice(0, element)
};
const array = [2, 2, 3, 4, 4];
console.log(firstElements(array, 3));


//4️⃣ Останні елементи масиву 
function lastElements<T>(array: T[], element: number = 1) {
    return array.slice(-element);
};
const array1 = [1, 2, 3, 4, 4]
console.log(lastElements(array1, 3));


//5️⃣ Об’єднання елементів масиву
function jounArrayElements(array: Array<string>, divider: string) {
    return array.join(divider);
};
const myColor = ["Red", "Green", "White", "Black"];
console.log(jounArrayElements(myColor, "+"));


//6️⃣ Дефіси між парними числами
function addDashesBtwnEvens(input: number): string {
    let numStr = input.toString();
    let result = numStr[0]; // Починаємо з першої цифри

    for (let i = 1; i < numStr.length; i++) {
        if (+numStr[i] % 2 === 0 && +numStr[i - 1] % 2 === 0) {
            result += "-"; // Додаємо дефіс між парними числами
        }
        result += numStr[i]; // Додаємо поточну цифру
    }

    return result;
}

console.log(addDashesBtwnEvens(161685961));


//7️⃣ Сортування масиву
function sortedArray(arr: number[]) {
    const sortedArray: number[] = []; // Новий масив для відсортованих елементів

    for (let num of arr) { // Проходимо по кожному елементу масиву
        let i = 0;
        while (i < sortedArray.length && sortedArray[i] < num) { // Шукаємо місце для вставки
            i++;
        }
        sortedArray.splice(i, 0, num); // Вставляємо число в правильне місце
    }

    return sortedArray;
}

const arr1 = [-3, 8, 7, 6, 5, -4, 3, 2, 1];
console.log(sortedArray(arr1));


//8️⃣ Числа від 1 до 345
function createArray(number: number) {
    const newArray: number[] = [];
    for (let i = 1; i <= number; i++) {
        newArray.push(i);
    };
    return newArray;
};
console.log(createArray(345));


//9️⃣Сума чисел від 1 до 100
function sumOfnumbers(array: Array<number>) {
    let sum: number = 0;
    for (let num of array) {
        sum += num;
    };
    return sum
}

const arrWithNumbers = [1, 2, 3, 4, 5];
console.log(sumOfnumbers(arrWithNumbers));


//🔟Числа від 241 до 1
function createReverseArray(number: number) {
    const newArray: number[] = [];

    for (let i = number; i >= 1; i--) {
        newArray.push(i);
    }

    return newArray;
}

console.log(createReverseArray(241));


//1️⃣ 1️⃣ Максимальне число з двох
function maxNumber(a: number, b: number) {
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        console.log("Будь ласка, введіть цілі числа.")
    } else if (a > b) {
        console.log(a);
    } else if (a < b) {
        console.log(b);
    } else if (a === b) {
        console.log("Обидва числа рівні")
    };
};

maxNumber(2, 3)


// Practice with Array's methods

// перевірка чи Array
function isArray(data: any) {
    return Array.isArray(data);
}
console.log(isArray([2, 3, 4, 5, 8]));

//Знайти всі парні числа у масиві
function findAllEvenNumbers(array: Array<number>) {
    return array.filter(n => n % 2 === 0); //
}
console.log(findAllEvenNumbers([2, 3, 4, 5, 8]));


//Знайти суму всіх чисел у масиві
function findSumOfArray(array: Array<number>) {
    return array.reduce((sum, x) => sum + x, 0);
}
console.log(findSumOfArray([1, 2, 3]))


//Перетворити масив чисел у масив їхніх квадратів
function squareArray(array: Array<number>) {
    return array.map(x => x ** 2);
}
console.log(squareArray([1, 2, 3]));


//Перевірити, чи всі числа більше 5
function allNumbersAreGreaterN(array: Array<number>, n: number) {
    return array.every(x => x > n);
}
console.log(allNumbersAreGreaterN([9, 1], 5))


//Перевірити, чи є хоча б одне число більше 5
function oneNumberIsGreaterN(array: Array<number>, n: number) {
    return array.some(x => x > n);
}
console.log(oneNumberIsGreaterN([1, 2, 3, 4, 5,], 3));



