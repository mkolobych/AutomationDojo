import { test, expect } from "@playwright/test"

function isNumberEven(number: number) {
    if (number === 0) {
        console.log("You entered zero");
    } else if (number % 2 === 0 && number > 0) {
        console.log("The number is even and positive");
    } else if (number % 2 === 0 && number < 0) {
        console.log("The number is even and negative");
    } else if (number % 2 !== 0 && number > 0) {
        console.log("The number is odd and positive");
    } else {
        console.log("The number is odd and negative");
    }
}
isNumberEven(-1);

// function greetingInTime(time: number) {
//     if (time >= 5 && time < 12) {
//         console.log("Good morning!");
//     } else if (time >= 12 && time <= 18) {
//         console.log("Good day!");
//     } else if (time > 18 && time < 23) {
//         console.log("Good evening!");
//     } else if ((time >= 23 && time <= 24) || (time >= 0 && time < 5)) {
//         console.log("Good night!");
//     } else {
//         console.log("Invalid time! Please enter a value between 0 and 24.");
//     }
// }
// greetingInTime(24);

// function isTestPassed(evaluation: number) {
//     if (evaluation >= 50 && evaluation <= 100) {
//         console.log("Test Passed")
//     } else if (evaluation >= 0 && evaluation < 50) {
//         console.log("Test Failed");
//     } else {
//         console.log("The value is not valid");
//     }
// }

// isTestPassed(50);

// function isVotingAgeTrue(age: number) {
//     if (age >= 18) {
//         console.log("You can vote");
//     } else {
//         console.log("You cannot vote");
//     }
// }
// isVotingAgeTrue(17);

// function whichNumberIsGreater(a: number, b: number) {
//     if (a > b) {
//         console.log("The first number is larger");
//     } else if (a < b) {
//         console.log("The second number is larger");
//     } else if (a === b) {
//         console.log("The numbers are equal");
//     }
// }
// whichNumberIsGreater(8, 10);

// function trafficLightColors(color: string) {
//     if (color == "green") {
//         console.log("Go go");
//     } else if (color == "yellow") {
//         console.log("get ready");
//     } else if (color == "red") {
//         console.log("Stop");
//     } else {
//         console.log("invalid value, please use the following: green, yellow, red")
//     }
// }

// trafficLightColors("green")

// function isTheNumberPositive(number: number) {
//     if (number > 0) {
//         console.log("The number is Positive");
//     } else if (number < 0) {
//         console.log("The number is Negative");
//     } else {
//         console.log("Zero")
//     }

// }
// isTheNumberPositive(5);