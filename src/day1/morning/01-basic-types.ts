// 📖 Lesson 1: Basic Types in TypeScript
// This is your first step into TypeScript!

console.log("\n=== 📖 Lesson 1: Basic Types ===");

// 1. NUMBER TYPE
console.log("\n1️⃣ Number Type:");
let age: number = 25;
const price: number = 99.99;
let temperature: number = -5;
console.log(`Age: ${age}, Price: $${price}, Temperature: ${temperature}°C`);

// 2. STRING TYPE
console.log("\n2️⃣ String Type:");
let firstName: string = "John";
let lastName: string = 'Doe';
let fullName: string = `${firstName} ${lastName}`;
console.log(`Full name: ${fullName}`);

// 3. BOOLEAN TYPE
console.log("\n3️⃣ Boolean Type:");
let isStudent: boolean = true;
let hasGraduated: boolean = false;
console.log(`Is student: ${isStudent}, Has graduated: ${hasGraduated}`);

// 4. ARRAYS
console.log("\n4️⃣ Arrays:");
let numbers: number[] = [1, 2, 3, 4, 5];
let fruits: string[] = ["apple", "banana", "orange"];
let flags: boolean[] = [true, false, true];

// Alternative array syntax
let colors: Array<string> = ["red", "green", "blue"];

console.log("Numbers:", numbers);
console.log("Fruits:", fruits);
console.log("Flags:", flags);
console.log("Colors:", colors);

// 5. TUPLES (Fixed-length arrays with specific types)
console.log("\n5️⃣ Tuples:");
let person: [string, number] = ["Alice", 30];
let coordinate: [number, number] = [10, 20];
let userInfo: [string, number, boolean] = ["Bob", 25, true];

console.log("Person:", person);
console.log("Coordinate:", coordinate);
console.log("User info:", userInfo);

// 6. ANY TYPE (Use sparingly!)
console.log("\n6️⃣ Any Type (avoid when possible):");
let anything: any = 42;
anything = "Hello";
anything = true;
console.log("Anything can be:", anything);

// 7. VOID TYPE (for functions that don't return anything)
console.log("\n7️⃣ Void Type:");
function sayHello(): void {
    console.log("Hello from a void function!");
}
sayHello();

// 8. UNDEFINED and NULL
console.log("\n8️⃣ Undefined and Null:");
let notAssigned: undefined = undefined;
let empty: null = null;
console.log("Not assigned:", notAssigned);
console.log("Empty:", empty);

// 🎯 PRACTICE EXERCISE
console.log("\n🎯 PRACTICE TIME!");
console.log("Try modifying the values above and run the code again!");
console.log("Next: Uncomment the next lesson in src/index.ts");

// 💡 Quick Tips:
// - TypeScript infers types automatically in many cases
// - Use explicit types when you want to be clear about your intentions
// - Arrays can hold multiple values of the same type
// - Tuples are great for fixed-structure data like coordinates or key-value pairs
