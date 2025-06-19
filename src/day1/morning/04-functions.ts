// 📖 Lesson 4: Functions with Typed Parameters and Return Values
// Master TypeScript functions completely!

console.log("\n=== 📖 Lesson 4: Functions with Typed Parameters and Return Values ===");

// 1. BASIC FUNCTION TYPING
console.log("\n1️⃣ Basic Function Typing:");

// Function with typed parameters and return type
function greetUser(name: string, age: number): string {
    return `Hello ${name}, you are ${age} years old!`;
}

// Function with no return value
function logMessage(message: string): void {
    console.log(`Log: ${message}`);
}

let greeting = greetUser("Alice", 25);
console.log(greeting);
logMessage("User logged in successfully");

// 2. ARROW FUNCTIONS WITH TYPES
console.log("\n2️⃣ Arrow Functions with Types:");

// Arrow function with explicit types
const calculateArea = (width: number, height: number): number => {
    return width * height;
};

// Arrow function with inferred return type
const formatName = (firstName: string, lastName: string) => {
    return `${lastName}, ${firstName}`;  // TypeScript infers: string
};

console.log(`Area: ${calculateArea(10, 5)}`);
console.log(`Formatted name: ${formatName("John", "Doe")}`);

// 3. OPTIONAL PARAMETERS
console.log("\n3️⃣ Optional Parameters:");

// Parameters with ? are optional
function createUser(name: string, email: string, age?: number): string {
    if (age) {
        return `User: ${name} (${email}) - Age: ${age}`;
    }
    return `User: ${name} (${email}) - Age: Not provided`;
}

console.log(createUser("Bob", "bob@email.com", 30));
console.log(createUser("Alice", "alice@email.com"));  // age is optional

// 4. DEFAULT PARAMETERS
console.log("\n4️⃣ Default Parameters:");

function calculatePrice(basePrice: number, tax: number = 0.1, discount: number = 0): number {
    const afterDiscount = basePrice - (basePrice * discount);
    return afterDiscount + (afterDiscount * tax);
}

console.log(`Price with defaults: $${calculatePrice(100)}`);
console.log(`Price with custom tax: $${calculatePrice(100, 0.15)}`);
console.log(`Price with discount: $${calculatePrice(100, 0.1, 0.2)}`);

// 5. REST PARAMETERS
console.log("\n5️⃣ Rest Parameters:");

function sumNumbers(...numbers: number[]): number {
    return numbers.reduce((total, num) => total + num, 0);
}

function combineStrings(separator: string, ...strings: string[]): string {
    return strings.join(separator);
}

console.log(`Sum: ${sumNumbers(1, 2, 3, 4, 5)}`);
console.log(`Combined: ${combineStrings(" - ", "apple", "banana", "orange")}`);

// 6. FUNCTION OVERLOADS
console.log("\n6️⃣ Function Overloads:");

// Define multiple function signatures
function processData(data: string): string;
function processData(data: number): number;
function processData(data: boolean): string;

// Implementation that handles all cases
function processData(data: string | number | boolean): string | number {
    if (typeof data === "string") {
        return data.toUpperCase();
    }
    if (typeof data === "number") {
        return data * 2;
    }
    return data ? "TRUE" : "FALSE";
}

console.log(`String processing: ${processData("hello")}`);
console.log(`Number processing: ${processData(21)}`);
console.log(`Boolean processing: ${processData(true)}`);

// 7. FUNCTIONS WITH OBJECT PARAMETERS
console.log("\n7️⃣ Functions with Object Parameters:");

interface UserInfo {
    name: string;
    email: string;
    age?: number;
}

function registerUser(user: UserInfo): string {
    const ageText = user.age ? ` (${user.age} years old)` : "";
    return `Registered: ${user.name}${ageText} - Contact: ${user.email}`;
}

let newUser: UserInfo = {
    name: "Charlie",
    email: "charlie@email.com",
    age: 28
};

console.log(registerUser(newUser));
console.log(registerUser({ name: "Diana", email: "diana@email.com" }));

// 8. FUNCTION TYPES AS PARAMETERS
console.log("\n8️⃣ Function Types as Parameters:");

// Define a function type
type MathOperation = (a: number, b: number) => number;

function executeOperation(x: number, y: number, operation: MathOperation): number {
    return operation(x, y);
}

const add: MathOperation = (a, b) => a + b;
const multiply: MathOperation = (a, b) => a * b;

console.log(`Execute add: ${executeOperation(5, 3, add)}`);
console.log(`Execute multiply: ${executeOperation(5, 3, multiply)}`);

// 9. ASYNC FUNCTIONS
console.log("\n9️⃣ Async Functions:");

async function fetchUserData(userId: string): Promise<UserInfo> {
    // Simulate API call
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                name: "API User",
                email: "api@email.com",
                age: 25
            });
        }, 100);
    });
}

// Note: In real code, you'd use await, but for this demo we'll use .then()
fetchUserData("123").then(user => {
    console.log(`Async result: ${user.name} - ${user.email}`);
});

// 10. GENERIC FUNCTIONS (Preview - we'll learn more later)
console.log("\n🔟 Generic Functions (Preview):");

function getFirstItem<T>(items: T[]): T | undefined {
    return items.length > 0 ? items[0] : undefined;
}

let firstNumber = getFirstItem([1, 2, 3]);        // TypeScript knows it's number | undefined
let firstName = getFirstItem(["a", "b", "c"]);   // TypeScript knows it's string | undefined

console.log(`First number: ${firstNumber}`);
console.log(`First name: ${firstName}`);

console.log("\n🎯 PRACTICE EXERCISE:");
console.log("Try creating a function that takes a product object and calculates total price!");
console.log("Include: basePrice, quantity, tax (optional), discount (optional)");

console.log("\n💡 Key Takeaways:");
console.log("• Always type function parameters");
console.log("• Return types can often be inferred but explicit is clearer");
console.log("• Use ? for optional parameters");
console.log("• Default parameters provide fallback values");
console.log("• Rest parameters handle variable arguments");
console.log("• Function overloads allow multiple signatures");
console.log("• Functions can take other functions as parameters");
