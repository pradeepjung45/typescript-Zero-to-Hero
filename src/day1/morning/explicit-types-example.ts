// 🎯 Understanding Explicit Types vs Type Inference

console.log("\n=== 🤔 Explicit Types vs Type Inference ===");

// 1. TYPE INFERENCE (TypeScript guesses the type)
console.log("\n1️⃣ Type Inference (TypeScript guesses):");

let name = "John";           // TypeScript knows this is a string
let count = 42;              // TypeScript knows this is a number
let isActive = true;         // TypeScript knows this is a boolean

console.log(`Name: ${name} (TypeScript inferred: string)`);
console.log(`Count: ${count} (TypeScript inferred: number)`);
console.log(`Is Active: ${isActive} (TypeScript inferred: boolean)`);

// 2. EXPLICIT TYPES (You tell TypeScript the type)
console.log("\n2️⃣ Explicit Types (You specify the type):");

let userName: string = "Alice";     // You explicitly say this is a string
let userAge: number = 25;           // You explicitly say this is a number
let isLoggedIn: boolean = false;    // You explicitly say this is a boolean

console.log(`User Name: ${userName} (Explicitly typed: string)`);
console.log(`User Age: ${userAge} (Explicitly typed: number)`);
console.log(`Is Logged In: ${isLoggedIn} (Explicitly typed: boolean)`);

// 3. WHY USE EXPLICIT TYPES?
console.log("\n3️⃣ Why use explicit types?");

// Example 1: When you want to be clear about your intentions
let score: number;  // You plan to assign a number later
// score = "high";  // This would cause an error - good!
score = 95;         // This works
console.log(`Score: ${score}`);

// Example 2: When the initial value might be confusing
let userId: string = "123";  // Even though it looks like a number, it's a string ID
console.log(`User ID: ${userId} (This is a string, not a number!)`);

// Example 3: When you want to accept multiple types initially
let data: any = null;        // You explicitly allow any type
data = "loading...";
data = 42;
data = { name: "John" };
console.log(`Data: ${data}`);

// 4. PRACTICAL EXAMPLES
console.log("\n4️⃣ Practical Examples:");

// Without explicit type - TypeScript might infer wrong type
let items = [];              // TypeScript thinks this is 'any[]'
items.push("apple");
items.push(123);             // This works but might not be what you want!

// With explicit type - You're clear about what you want
let groceries: string[] = [];   // You explicitly say "only strings allowed"
groceries.push("apple");
groceries.push("banana");
// groceries.push(123);         // This would cause an error - good!

console.log("Items (any type):", items);
console.log("Groceries (only strings):", groceries);

// 5. FUNCTION PARAMETERS - ALWAYS BE EXPLICIT!
console.log("\n5️⃣ Function Parameters (always be explicit!):");

// Without explicit types - confusing and error-prone
function badAdd(a: any, b: any) {      // What types are a and b? We have to use 'any'
    return a + b;
}

// With explicit types - clear and safe
function goodAdd(a: number, b: number): number {
    return a + b;
}

console.log("Bad add result:", badAdd("5", "3"));    // "53" - probably not what you wanted!
console.log("Good add result:", goodAdd(5, 3));     // 8 - exactly what you wanted!

console.log("\n💡 Key Takeaway:");
console.log("Use explicit types when you want to be 100% clear about what type a variable should be!");
console.log("This prevents bugs and makes your code easier to understand.");
