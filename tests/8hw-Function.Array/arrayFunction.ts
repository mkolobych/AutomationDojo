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

//перевернути масив
function reverseArray(array: Array<number>) {
    return [...array].reverse(); // [...original] Копія масиву
};

const randomArray = [1, 2, 3, 4, 5];
console.log(reverseArray(randomArray))
console.log(randomArray)

//Знайти перше число більше 5
function findFirstNumberGreaterThenN(array: Array<number>, num: number) {
    return array.find(n => n > num)
}
const anyArray = [1, 4, 5, 6, 7, 8];
console.log(findFirstNumberGreaterThenN(anyArray, 5));

//Видалити дублікати з масиву
function removeDuplicates(array: Array<number>) {
    return [...new Set(array)];//new Set(arr) – створює Set, що містить лише унікальні значення.
}
const arrWithDublicate = [1, 2, 2, 3, 3, 4, 5, 5];
console.log(removeDuplicates(arrWithDublicate));


//скопіювати масив за допомогою sclice()
function copyArray(array: Array<number>) {
    return array.slice() //slice() – створює копію частини масиву, array.slice(0, 2) - [1, 2], array.slice(-3) - [4, 5, 5];
}
const originall = [1, 2, 2, 3, 3, 4, 5, 5];
console.log(copyArray(originall))


//видали елементи масиву
function removeElementsOfArray(array: Array<number>) {
    return array.splice(0, 2);
}
const anyArray1 = [1, 2, 3, 4, 5, 6];
console.log(removeElementsOfArray(anyArray1)) // [1, 2];
console.log(anyArray1);


//розділити стрінгу з кількох слів на масив
function stringToArray(str: string) {
    return str.split(" ")
}
const anyString = "Marian Kolobych Stepanovych"
console.log(stringToArray(anyString))// ["Marian", "Kolobych", "Stepanovych"]


//Додати в кінець масиву едемент
function addElement(arr: Array<unknown>, data: any) {
    return arr.push(data) // додати елемент в кінець масиву
}
const anyArray2 = ["1", 2, 3, 4]
console.log(addElement(anyArray2, "5"));
console.log(anyArray2) //["1", 2, 3, 4, "5"]


//видаляє останній елемент масиву
function RemoveElement(arr: Array<unknown>) {
    return arr.pop() //видаляє останні елемент масиву
}
const anyArray3 = ["1", 2, 3, 4]
console.log(RemoveElement(anyArray3)) //4
console.log(anyArray3) //["1", 2, 3]

//додай перший елемент
function addFirstElement(arr: Array<unknown>, data: any) {
    return arr.unshift(data) //додає перший елемент
}
const anyArray4 = ["1", 2, 3, 4]
console.log(addFirstElement(anyArray4, 5)) //5
console.log(anyArray4) // [5,"1", 2, 3, 4]

//видаляє видаляє перший елемент масиву
function RemoveFirstElement(arr: Array<unknown>) {
    return arr.shift() //видаляє видаляє перший елемент масиву
}
const anyArray5 = ["1", 2, 3, 4]
console.log(RemoveFirstElement(anyArray5)) //"1"
console.log(anyArray5) //[2, 3, 4]

//повернути кожний елемент масиву 
function returnElement(arr: number[]): number[] {
    arr.forEach(num => console.log(num)); // Виводить елементи масиву
    return arr; // Повертає масив
}

const numbers = [1, 2, 3, 4, 5];
const result = returnElement(numbers);

console.log(result);


// повернути індекс елемента
function returnIndexOfElement(arr: Array<number>, index: number) {
    return arr.indexOf(index);
}
const array5 = [1, 2, 3, 4, 5, 6];
console.log(returnIndexOfElement(array5, 5)) //4


// сортує елементи масиву
function sortArray(arr: number[]) {
    return arr.sort((a, b) => a - b); // Сортує масив за зростанням
}
const array6 = [5, 3, 6, 1, 4, 2];
console.log(sortArray(array6)); // [1, 2, 3, 4, 5, 6]


// Знайти найбільше число в масиві
function findMax1(arr: number[]) {
    return Math.max(...arr)// знайти максимальне значення масву, Math.min(...arr) знайти мінімальне значення
}
const array2 = [1, 2, 3, 4, 5]
console.log(findMax1(array2))


//Напиши функцію, яка приймає масив чисел і повертає їхню суму.
function sumArray(arr: number[]) {
    return arr.reduce((sum, x) => sum + x, 0);
}
const array01 = [1, 2, 3, 4, 5]
console.log(sumArray(array01))


//Підрахувати кількість парних чисел у масиві
function countEvenNumbers(arr: number[]) {
    return arr.filter(n => n % 2 === 0).length;
}
// ✅ filter().length – для підрахунку кількості парних чисел.
// ✅ filter().reduce() – якщо треба порахувати суму парних чисел

const array04 = [1, 2, 3, 4, 5]
console.log(countEvenNumbers(array04));


//Об'єднати два масиви без повторен
//Напиши функцію, яка приймає два масиви і повертає один об'єднаний масив, у якому немає дублікатів.
function mergeUnique(arr1: Array<unknown>, arr2: Array<unknown>) {
    const contactArray = arr1.concat(arr2);
    return [...new Set(contactArray)]
}
const arrOne = [1, 3, 4, 5, 6, 7, 8, "a"];
const arrTwo = [1, 3, "a", "b"]
console.log(mergeUnique(arrOne, arrTwo));


//Перетворити масив чисел у масив їхніх квадратів
function squareNumbers(arr: number[]) {
    return arr.map(x => x ** 2)
}
const array06 = [1, 2, 3, 4, 5, 5, 6, 7]
console.log(squareNumbers(array06));
