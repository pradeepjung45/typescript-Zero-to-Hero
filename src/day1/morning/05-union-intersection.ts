// 📖 Lesson 5: Union and Intersection Types
// The final morning lesson - complete your TypeScript fundamentals!

console.log("\n=== 📖 Lesson 5: Union and Intersection Types ===");

// 1. UNION TYPES (OR) - Type can be ONE of several types
console.log("\n1️⃣ Union Types (OR - this OR that):");

// Basic union types
let id: string | number;
id = "USER123";     // ✅ Valid - string
id = 42;            // ✅ Valid - number
// id = true;       // ❌ Error - boolean not allowed

let status: "pending" | "approved" | "rejected";
status = "pending";   // ✅ Valid
status = "approved";  // ✅ Valid
// status = "maybe";  // ❌ Error - not in the union

console.log(`ID: ${id}, Status: ${status}`);

// 2. FUNCTION PARAMETERS WITH UNION TYPES
console.log("\n2️⃣ Function Parameters with Union Types:");

function formatId(id: string | number): string {
    // Need to handle both string and number cases
    if (typeof id === "string") {
        return id.toUpperCase();
    } else {
        return `ID-${id}`;
    }
}

console.log(`Format string ID: ${formatId("abc123")}`);
console.log(`Format number ID: ${formatId(456)}`);

// 3. ARRAYS WITH UNION TYPES
console.log("\n3️⃣ Arrays with Union Types:");

let mixedData: (string | number)[] = ["Alice", 25, "Bob", 30];
let scores: (number | null)[] = [95, null, 87, null, 92];

console.log("Mixed data:", mixedData);
console.log("Scores with nulls:", scores);

// 4. INTERSECTION TYPES (AND) - Type must have ALL properties
console.log("\n4️⃣ Intersection Types (AND - this AND that):");

interface User {
    name: string;
    email: string;
}

interface Admin {
    permissions: string[];
    level: number;
}

// Intersection type - must have ALL properties from both types
type AdminUser = User & Admin;

let adminUser: AdminUser = {
    name: "John Doe",
    email: "john@company.com",
    permissions: ["read", "write", "delete"],
    level: 5
};

console.log("Admin user:", adminUser);

// 5. COMPLEX UNION TYPES WITH OBJECTS
console.log("\n5️⃣ Complex Union Types with Objects:");

interface Dog {
    type: "dog";
    breed: string;
    bark(): void;
}

interface Cat {
    type: "cat";
    color: string;
    meow(): void;
}

type Pet = Dog | Cat;

function petInfo(pet: Pet): string {
    // Use discriminated union pattern
    if (pet.type === "dog") {
        return `Dog breed: ${pet.breed}`;
    } else {
        return `Cat color: ${pet.color}`;
    }
}

let myDog: Dog = {
    type: "dog",
    breed: "Golden Retriever",
    bark: () => console.log("Woof!")
};

let myCat: Cat = {
    type: "cat",
    color: "Orange",
    meow: () => console.log("Meow!")
};

console.log(petInfo(myDog));
console.log(petInfo(myCat));

// 6. TYPE GUARDS WITH UNION TYPES
console.log("\n6️⃣ Type Guards with Union Types:");

function processValue(value: string | number | boolean): string {
    if (typeof value === "string") {
        return `String: ${value.toUpperCase()}`;
    } else if (typeof value === "number") {
        return `Number: ${value * 2}`;
    } else {
        return `Boolean: ${value ? "TRUE" : "FALSE"}`;
    }
}

console.log(processValue("hello"));
console.log(processValue(42));
console.log(processValue(true));
console.log(processValue(false));

// 7. OPTIONAL PROPERTIES VS UNION WITH UNDEFINED
console.log("\n7️⃣ Optional Properties vs Union with Undefined:");

interface Product {
    name: string;
    price: number;
    description?: string;           // Optional property
    category: string | undefined;   // Union with undefined
}

let product1: Product = {
    name: "Laptop",
    price: 999,
    category: "Electronics"
    // description is optional, can be omitted
};

let product2: Product = {
    name: "Book",
    price: 29,
    description: "Great read!",
    category: undefined  // Must be explicitly set to undefined
};

console.log("Product 1:", product1);
console.log("Product 2:", product2);

// 8. COMBINING MULTIPLE INTERSECTIONS
console.log("\n8️⃣ Combining Multiple Intersections:");

interface Timestamped {
    createdAt: Date;
    updatedAt: Date;
}

interface Identifiable {
    id: string;
}

interface Auditable {
    createdBy: string;
    modifiedBy: string;
}

// Combine multiple interfaces
type DatabaseEntity = Identifiable & Timestamped & Auditable;

let userRecord: DatabaseEntity = {
    id: "user-123",
    createdAt: new Date(),
    updatedAt: new Date(),
    createdBy: "admin",
    modifiedBy: "admin"
};

console.log("Database entity:", userRecord);

// 9. PRACTICAL EXAMPLE - API RESPONSE TYPES
console.log("\n9️⃣ Practical Example - API Response Types:");

interface SuccessResponse {
    success: true;
    data: any;
    message: string;
}

interface ErrorResponse {
    success: false;
    error: string;
    code: number;
}

type ApiResponse = SuccessResponse | ErrorResponse;

function handleApiResponse(response: ApiResponse): string {
    if (response.success) {
        return `Success: ${response.message}`;
    } else {
        return `Error ${response.code}: ${response.error}`;
    }
}

let successResponse: ApiResponse = {
    success: true,
    data: { users: [] },
    message: "Data fetched successfully"
};

let errorResponse: ApiResponse = {
    success: false,
    error: "User not found",
    code: 404
};

console.log(handleApiResponse(successResponse));
console.log(handleApiResponse(errorResponse));

// 10. UNION TYPES WITH LITERAL TYPES
console.log("\n🔟 Union Types with Literal Types:");

type Theme = "light" | "dark" | "auto";
type Size = "small" | "medium" | "large";
type ButtonVariant = "primary" | "secondary" | "danger";

interface ButtonProps {
    text: string;
    size: Size;
    variant: ButtonVariant;
    disabled?: boolean;
}

function createButton(props: ButtonProps): string {
    const disabledText = props.disabled ? " (disabled)" : "";
    return `${props.variant} ${props.size} button: "${props.text}"${disabledText}`;
}

let button = createButton({
    text: "Click me",
    size: "large",
    variant: "primary"
});

console.log("Button:", button);

console.log("\n🎯 PRACTICE EXERCISE:");
console.log("Try creating a union type for different payment methods:");
console.log("CreditCard | PayPal | BankTransfer - each with different properties!");

console.log("\n💡 Key Takeaways:");
console.log("• Union types (|) = 'this OR that' - value can be one of several types");
console.log("• Intersection types (&) = 'this AND that' - value must have all properties");
console.log("• Use type guards to safely work with union types");
console.log("• Discriminated unions use a common property to distinguish types");
console.log("• Literal types create very specific type constraints");
console.log("• These patterns are essential for real-world TypeScript applications!");
