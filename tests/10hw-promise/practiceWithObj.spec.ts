const response = {
    status: "success",
    data: {
        'some users': [
            {
                name: 'Alex',
                age: 33,
            },
            {
                name: 'Vlad',
                age: 30
            }
        ]
    }
}

console.log(response.data["some users"][0].name);


//Завдання 1: Отримання значень
const bookStore = {
    name: "Book Haven",
    location: "Main Street",
    books: [
        { title: "1984", author: "George Orwell", price: 15 },
        { title: "Brave New World", author: "Aldous Huxley", price: 18 },
        { title: "Fahrenheit 451", author: "Ray Bradbury", price: 20 }
    ]
};

console.log(bookStore.books[1].author);
console.log(bookStore.books[bookStore.books.length - 1].price);
// Виведи у консоль ім'я другого автора
// Виведи ціну останньої книги у списку


//Завдання 2: Додавання нових елементів
const student = {
    name: "John",
    age: 21,
    subjects: ["Math", "Physics"]
};
console.log(student)

student.subjects.push("Computer Science");
console.log(student)
console.log(student.subjects[2]);
// Додай новий предмет "Computer Science" до масиву subjects
// Виведи оновлений список предметів у консоль


//Завдання 3: Оновлення значень
const car: any = {
    brand: "Toyota",
    model: "Corolla",
    specifications: {
        engine: "1.8L",
        horsepower: 140
    }
};

car.horsepower = 150
car.fuelType = "Petrol"
console.log(car);
// Онови значення потужності (horsepower) до 150
// Додай нову властивість fuelType зі значенням "Petrol"
// Виведи оновлений об'єкт у консоль


//Завдання 4: Видалення властивості
const userProfile: any = {
    username: "coolUser123",
    password: "12345",
    email: "user@example.com"
};

delete userProfile.password
console.log(userProfile)
// Видали пароль (password) з об'єкта
// Виведи оновлений об'єкт у консоль


//Завдання 5: Робота з вкладеними об'єктами
const company = {
    name: "TechCorp",
    employees: [
        {
            name: "Alice",
            position: "Developer",
            skills: ["JavaScript", "React"]
        },
        {
            name: "Bob",
            position: "Designer",
            skills: ["Photoshop", "Illustrator"]
        }
    ]
};

console.log(company.employees[0].skills);
company.employees[0].skills.push('TypeScript');
console.log(company.employees[0].skills);
// Виведи у консоль усі навички (skills) першого співробітника
// Додай нову навичку "TypeScript" для першого співробітника
// Виведи оновлений список навичок у консоль