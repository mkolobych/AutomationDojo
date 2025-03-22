export { username, email, password, articleName }

function generateRandomID(length: number): string {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let id = "";

    for (let i = 0; i < length; i++) {
        id += chars[Math.floor(Math.random() * chars.length)];
    }

    return id;
}

function generateUsername(): string {
    return `user${generateRandomID(10)}`;
}

function generateEmail(): string {
    return `email${generateRandomID(10)}@example.com`;
}

function generatePassword(): string {
    return generateRandomID(10);
}

function generateArticleName(): string {
    return `Article:${generateRandomID(10)}`;
}

const username = generateUsername();
const email = generateEmail();
const password = generatePassword();
const articleName = generateArticleName();