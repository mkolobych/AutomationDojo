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