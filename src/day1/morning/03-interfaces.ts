// 📖 Lesson 3: Interfaces and Type Aliases
// Create your own custom types for complex objects!

console.log("\n=== 📖 Lesson 3: Interfaces and Type Aliases ===");

// 1. BASIC INTERFACE
console.log("\n1️⃣ Basic Interface:");

// Define the structure of a Student object
interface Student {
    name: string;
    age: number;
    isEnrolled: boolean;
}

// Use the interface
let student1: Student = {
    name: "Alice",
    age: 20,
    isEnrolled: true
};

let student2: Student = {
    name: "Bob",
    age: 19,
    isEnrolled: false
};

console.log("Student 1:", student1);
console.log("Student 2:", student2);

// 2. INTERFACE WITH OPTIONAL PROPERTIES
console.log("\n2️⃣ Interface with Optional Properties:");

interface Teacher {
    name: string;
    subject: string;
    experience: number;
    email?: string;        // Optional property (notice the ?)
    phone?: string;        // Optional property
}

let teacher1: Teacher = {
    name: "Mr. Smith",
    subject: "Math",
    experience: 5
    // email and phone are optional, so we can skip them
};

let teacher2: Teacher = {
    name: "Ms. Johnson",
    subject: "Science",
    experience: 8,
    email: "johnson@school.com"  // We can include optional properties if we want
};

console.log("Teacher 1:", teacher1);
console.log("Teacher 2:", teacher2);

// 3. INTERFACE WITH METHODS
console.log("\n3️⃣ Interface with Methods:");

interface Calculator {
    add(a: number, b: number): number;
    subtract(a: number, b: number): number;
    multiply(a: number, b: number): number;
}

let myCalculator: Calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b
};

console.log("5 + 3 =", myCalculator.add(5, 3));
console.log("10 - 4 =", myCalculator.subtract(10, 4));
console.log("6 × 7 =", myCalculator.multiply(6, 7));

// 4. TYPE ALIASES
console.log("\n4️⃣ Type Aliases:");

// Type alias for a simple type
type UserID = string;
type Score = number;

// Type alias for a complex object (similar to interface)
type Course = {
    id: UserID;
    title: string;
    instructor: string;
    credits: number;
    averageScore: Score;
};

let mathCourse: Course = {
    id: "MATH101",
    title: "Calculus I",
    instructor: "Dr. Brown",
    credits: 4,
    averageScore: 87.5
};

console.log("Math Course:", mathCourse);

// 5. INTERFACE VS TYPE ALIAS
console.log("\n5️⃣ Interface vs Type Alias:");

// Interface (can be extended and merged)
interface Animal {
    name: string;
    species: string;
}

// Type alias (more flexible for unions, primitives)
type Pet = {
    name: string;
    owner: string;
};

let myDog: Animal = {
    name: "Buddy",
    species: "Dog"
};

let myCat: Pet = {
    name: "Whiskers",
    owner: "Alice"
};

console.log("My dog:", myDog);
console.log("My cat:", myCat);

// 6. EXTENDING INTERFACES
console.log("\n6️⃣ Extending Interfaces:");

interface Person {
    name: string;
    age: number;
}

// Employee extends Person (inherits all Person properties)
interface Employee extends Person {
    employeeId: string;
    department: string;
    salary: number;
}

let employee: Employee = {
    name: "John Doe",
    age: 30,
    employeeId: "EMP001",
    department: "Engineering",
    salary: 75000
};

console.log("Employee:", employee);

// 7. UNION TYPES WITH TYPE ALIASES
console.log("\n7️⃣ Union Types with Type Aliases:");

type Status = "pending" | "approved" | "rejected";
type Priority = "low" | "medium" | "high";

type Task = {
    id: number;
    title: string;
    status: Status;
    priority: Priority;
};

let task1: Task = {
    id: 1,
    title: "Review code",
    status: "pending",
    priority: "high"
};

let task2: Task = {
    id: 2,
    title: "Write documentation",
    status: "approved",
    priority: "medium"
};

console.log("Task 1:", task1);
console.log("Task 2:", task2);

// 8. FUNCTION INTERFACES
console.log("\n8️⃣ Function Interfaces:");

interface MathOperation {
    (x: number, y: number): number;
}

let addition: MathOperation = (x, y) => x + y;
let multiplication: MathOperation = (x, y) => x * y;

console.log("Addition function: 8 + 3 =", addition(8, 3));
console.log("Multiplication function: 4 × 5 =", multiplication(4, 5));

console.log("\n🎯 PRACTICE EXERCISE:");
console.log("Try creating your own interface for a 'Book' with properties like:");
console.log("title, author, pages, isAvailable, etc.");

console.log("\n💡 Key Takeaways:");
console.log("• Interfaces define the shape/structure of objects");
console.log("• Use ? for optional properties");
console.log("• Interfaces can include methods");
console.log("• Type aliases are great for unions and simple types");
console.log("• Interfaces can extend other interfaces");
console.log("• Both help you create reusable, clear type definitions");
