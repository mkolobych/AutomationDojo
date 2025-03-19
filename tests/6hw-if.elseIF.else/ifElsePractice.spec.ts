import { test, expect } from "@playwright/test"

function isNumberEven(number: number) {
    if (number % 2 === 0 && number > 0) {
        return ("The number is even and positive");
    } else if (number % 2 === 0 && number < 0) {
        return ("The number is even and negative");
    } else if (number % 2 !== 0 && number > 0) {
        return ("The number is odd and positive");
    } else if (number % 2 !== 0 && number < 0) {
        return ("The number is odd and negative");
    } else {
        return ("You entered zero");
    }
}

test("is Even and positive", async () => {
    const result = isNumberEven(2);
    expect(result).toBe("The number is even and positive");
});

test("is Even and negative", async () => {
    const result = isNumberEven(-2);
    expect(result).toBe("The number is even and negative");
});

test("is odd and positive", async () => {
    const result = isNumberEven(1);
    expect(result).toBe("The number is odd and positive");
});

test("is odd and negative", async () => {
    const result = isNumberEven(-1);
    expect(result).toBe("The number is odd and negative");
});

test("is zero entered", async () => {
    const result = isNumberEven(0);
    expect(result).toBe("You entered zero");
});



function greetingInTime(time: number) {
    if (time >= 5 && time < 12) {
        return ("Good morning!");
    } else if (time >= 12 && time <= 18) {
        return ("Good day!");
    } else if (time > 18 && time < 23) {
        return ("Good evening!");
    } else if ((time >= 23 && time <= 24) || (time >= 0 && time < 5)) {
        return ("Good night!");
    } else {
        return ("Invalid time! Please enter a value between 0 and 24.");
    }
}

test("morming greetings 5 am", async () => {
    const result = greetingInTime(5);
    expect(result).toBe("Good morning!");
});

test("morming greetings 11 am", async () => {
    const result = greetingInTime(11);
    expect(result).toBe("Good morning!");
});

test("good day greetings 12 pm", async () => {
    const result = greetingInTime(12);
    expect(result).toBe("Good day!");
});

test("good day greetings 18 pm", async () => {
    const result = greetingInTime(18);
    expect(result).toBe("Good day!");
});

test("good evening greetings 19 pm", async () => {
    const result = greetingInTime(19);
    expect(result).toBe("Good evening!");
});

test("good evening greetings 22 pm", async () => {
    const result = greetingInTime(22);
    expect(result).toBe("Good evening!");
});

test("Good night greetings 23 pm", async () => {
    const result = greetingInTime(23);
    expect(result).toBe("Good night!");
});

test("Good night greetings 24 pm", async () => {
    const result = greetingInTime(24);
    expect(result).toBe("Good night!");
});

test("Good night greetings o am", async () => {
    const result = greetingInTime(0);
    expect(result).toBe("Good night!");
});

test("Good night greetings 4 am", async () => {
    const result = greetingInTime(4);
    expect(result).toBe("Good night!");
});



function isTestPassed(evaluation: number) {
    if (evaluation >= 50 && evaluation <= 100) {
        return ("Test Passed");
    } else if (evaluation >= 0 && evaluation < 50) {
        return ("Test Failed");
    } else {
        return ("The value is not valid");
    }
}

test("passed with 50 points", async () => {
    const result = isTestPassed(50);
    expect(result).toBe("Test Passed");
});

test("passed with 100 points", async () => {
    const result = isTestPassed(100);
    expect(result).toBe("Test Passed");
});

test("failed with 49 points", async () => {
    const result = isTestPassed(49);
    expect(result).toBe("Test Failed");
});

test("failed with 0 points", async () => {
    const result = isTestPassed(0);
    expect(result).toBe("Test Failed");
});

test("value is not valid", async () => {
    const result = isTestPassed(101);
    expect(result).toBe("The value is not valid");
});



function isVotingAgeTrue(age: number) {
    if (age >= 18) {
        return ("You can vote");
    } else {
        return ("You cannot vote");
    }
}

test("age over 18", async () => {
    const result = isVotingAgeTrue(18);
    expect(result).toBe("You can vote");
});

test("age under 18", async () => {
    const result = isVotingAgeTrue(17);
    expect(result).toBe("You cannot vote");
});



function whichNumberIsGreater(a: number, b: number) {
    if (a > b) {
        return ("The first number is larger");
    } else if (a < b) {
        return ("The second number is larger");
    } else if (a === b) {
        return ("The numbers are equal");
    }
}
whichNumberIsGreater(8, 10);

test("first number is larger", async () => {
    const result = whichNumberIsGreater(10.1, 10);
    expect(result).toBe("The first number is larger");
});

test("The second number is larger", async () => {
    const result = whichNumberIsGreater(10, 10.001);
    expect(result).toBe("The second number is larger");
});



function trafficLightColors(color: string) {
    if (color == "green") {
        return ("Go go");
    } else if (color == "yellow") {
        return ("get ready");
    } else if (color == "red") {
        return ("Stop");
    } else {
        return ("invalid value, please use the following: green, yellow, red");
    }
}

trafficLightColors("green");


function isTheNumberPositive(number: number) {
    if (number > 0) {
        return ("The number is Positive");
    } else if (number < 0) {
        return ("The number is Negative");
    } else {
        return ("Zero");
    }

}
isTheNumberPositive(5);