// 08-null-handling.ts - TypeScript Null & Undefined Handling Lesson

console.log("\n=== 📖 Lesson 8: Null & Undefined Handling in TypeScript ===\n");

// 1️⃣ What are null and undefined?
console.log("1️⃣ What are null and undefined?");
let aNull: null = null;
let bUndefined: undefined = undefined;
console.log("a (null):", aNull);
console.log("b (undefined):", bUndefined);

// 2️⃣ Strict Null Checks
console.log("\n2️⃣ Strict Null Checks:");
let cNull: string | null = null;
cNull = "Hello";
console.log("c:", cNull);
// let d: string = null; // ❌ Error if strictNullChecks is enabled

// 3️⃣ Optional Properties
console.log("\n3️⃣ Optional Properties:");
interface UserNull {
    name: string;
    email?: string; // optional
}
const user1Null: UserNull = { name: "Alice" };
const user2Null: UserNull = { name: "Bob", email: "bob@example.com" };
console.log("user1:", user1Null);
console.log("user2:", user2Null);

// 4️⃣ Nullish Coalescing Operator (??)
console.log("\n4️⃣ Nullish Coalescing Operator (??):");
let inputNull: string | null = null;
let outputNull = inputNull ?? "Default value";
console.log("output:", outputNull);
inputNull = "Actual value";
outputNull = inputNull ?? "Default value";
console.log("output:", outputNull);

// 5️⃣ Optional Chaining (?.)
console.log("\n5️⃣ Optional Chaining (?.):");
type PersonWithOptionalAddress = { name: string; address?: { city: string } };
const personNull: PersonWithOptionalAddress = { name: "Charlie", address: { city: "Delhi" } };
console.log("person.address.city:", personNull.address?.city);
const person2Null: PersonWithOptionalAddress = { name: "Dana" };
console.log("person2.address?.city:", person2Null.address?.city);

// 6️⃣ Handling Null in Functions
console.log("\n6️⃣ Handling Null in Functions:");
function greetNull(name: string | null) {
    if (name) {
        console.log(`Hello, ${name}!`);
    } else {
        console.log("Hello, guest!");
    }
}
greetNull("Eve");
greetNull(null);

// 7️⃣ Practice Exercise
console.log("\n🎯 PRACTICE EXERCISE:");
console.log("Write a function that takes a user object with an optional 'nickname' property and prints the nickname if present, or 'No nickname' if not.\n");

// 8️⃣ Key Takeaways
console.log("\n💡 Key Takeaways:");
console.log("• null and undefined are different: null is intentional absence, undefined is uninitialized");
console.log("• Use strictNullChecks for safer code");
console.log("• Use optional properties, nullish coalescing (??), and optional chaining (?.) to handle missing values");
console.log("• Always check for null/undefined before using a value"); 