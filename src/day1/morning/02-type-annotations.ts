// 📖 Lesson 2: Type Annotations and Inference
// Building on what you learned about explicit types!

console.log("\n=== 📖 Lesson 2: Type Annotations and Inference ===");

// 1. TYPE ANNOTATIONS (Explicit typing)
console.log("\n1️⃣ Type Annotations (You specify the type):");

// Variable annotations
let studentName: string = "Emma";
let studentAge: number = 20;
let isEnrolled: boolean = true;
let grades: number[] = [85, 92, 78, 96];

console.log(`Student: ${studentName}, Age: ${studentAge}, Enrolled: ${isEnrolled}`);
console.log(`Grades: ${grades}`);

// 2. TYPE INFERENCE (TypeScript guesses)
console.log("\n2️⃣ Type Inference (TypeScript figures it out):");

let teacherName = "Mr. Smith";        // TypeScript infers: string
let classSize = 25;                   // TypeScript infers: number
let hasProjector = true;              // TypeScript infers: boolean
let subjects = ["Math", "Science"];   // TypeScript infers: string[]

console.log(`Teacher: ${teacherName}, Class size: ${classSize}`);
console.log(`Has projector: ${hasProjector}, Subjects: ${subjects}`);

// 3. FUNCTION TYPE ANNOTATIONS
console.log("\n3️⃣ Function Type Annotations:");

// Function with parameter and return type annotations
function calculateGrade(score: number, maxScore: number): string {
    const percentage = (score / maxScore) * 100;
    
    if (percentage >= 90) return "A";
    if (percentage >= 80) return "B";
    if (percentage >= 70) return "C";
    if (percentage >= 60) return "D";
    return "F";
}

// Function with no return value (void)
function printStudentInfo(name: string, grade: string): void {
    console.log(`Student ${name} received grade: ${grade}`);
}

let finalGrade = calculateGrade(87, 100);
printStudentInfo("Alice", finalGrade);

// 4. ARROW FUNCTIONS WITH TYPE ANNOTATIONS
console.log("\n4️⃣ Arrow Functions with Types:");

// Arrow function with explicit types
const multiply = (a: number, b: number): number => {
    return a * b;
};

// Arrow function with inferred return type
const greet = (name: string) => {
    return `Hello, ${name}!`;  // TypeScript infers return type is string
};

console.log(`Multiply 5 x 3 = ${multiply(5, 3)}`);
console.log(greet("Bob"));

// 5. OBJECT TYPE ANNOTATIONS
console.log("\n5️⃣ Object Type Annotations:");

// Explicit object type annotation
let student: { name: string; age: number; isActive: boolean } = {
    name: "Charlie",
    age: 19,
    isActive: true
};

// Object with inferred types
let teacher = {
    name: "Ms. Johnson",    // inferred: string
    subject: "Biology",     // inferred: string
    experience: 5           // inferred: number
};

console.log("Student:", student);
console.log("Teacher:", teacher);

// 6. ARRAY TYPE ANNOTATIONS
console.log("\n6️⃣ Array Type Annotations:");

// Different ways to annotate arrays
let scores1: number[] = [95, 87, 92];           // Method 1
let scores2: Array<number> = [88, 91, 85];     // Method 2
let names: string[] = ["John", "Jane", "Bob"];

// Mixed type arrays (use union types - we'll learn more about this later)
let mixedData: (string | number)[] = ["Alice", 25, "Bob", 30];

console.log("Scores 1:", scores1);
console.log("Scores 2:", scores2);
console.log("Names:", names);
console.log("Mixed data:", mixedData);

// 7. WHEN TO USE ANNOTATIONS VS INFERENCE
console.log("\n7️⃣ When to use annotations vs inference:");

// ✅ Good: Let TypeScript infer when it's obvious
let message = "Hello World";        // Clear it's a string
let count = 42;                     // Clear it's a number

// ✅ Good: Use annotations when you want to be explicit
let userId: string = "user123";     // Could be confused for a number
let price: number;                  // Will be assigned later

// ✅ Good: Always annotate function parameters
function processOrder(orderId: string, amount: number): boolean {
    console.log(`Processing order ${orderId} for $${amount}`);
    return true;
}

price = 29.99;  // Now we assign the value
let orderSuccess = processOrder("ORD-001", price);
console.log(`Order processed successfully: ${orderSuccess}`);

// 8. COMMON MISTAKES TO AVOID
console.log("\n8️⃣ Common mistakes to avoid:");

// ❌ Don't over-annotate when inference is clear
let obviousString: string = "This annotation is unnecessary";

// ✅ Better: Let TypeScript infer
let betterString = "TypeScript can figure this out";

// ❌ Don't forget to annotate function parameters
// function badFunction(x, y) { return x + y; }  // TypeScript will complain

// ✅ Better: Always annotate parameters
function goodFunction(x: number, y: number) { return x + y; }

console.log("Obvious string:", obviousString);
console.log("Better string:", betterString);
console.log("Good function result:", goodFunction(10, 20));

console.log("\n🎯 PRACTICE EXERCISE:");
console.log("Try creating your own variables with and without type annotations!");
console.log("Notice when TypeScript can infer the type vs when you need to be explicit.");

console.log("\n💡 Key Takeaways:");
console.log("• Type annotations = You tell TypeScript the type");
console.log("• Type inference = TypeScript figures out the type");
console.log("• Always annotate function parameters");
console.log("• Use annotations when you want to be extra clear");
console.log("• Let inference work when the type is obvious");
