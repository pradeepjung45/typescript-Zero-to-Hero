// 07-enums.ts - TypeScript Enums Lesson

enum Direction {
    Up,    // 0
    Down,  // 1
    Left,  // 2
    Right  // 3
}

enum Color {
    Red = "RED",
    Green = "GREEN",
    Blue = "BLUE"
}

enum Status {
    Pending = 1,
    InProgress = 3,
    Done = 7
}

const base = 10;
enum Computed {
    A = base * 2,
    B = "hello".length,
    C = 100
}

console.log("\n=== 📖 Lesson 7: Enums in TypeScript ===\n");

// 1️⃣ What is an Enum?
console.log("1️⃣ What is an Enum?");
console.log("An enum is a way to give more friendly names to sets of numeric or string values.");

// 2️⃣ Numeric Enums
console.log("\n2️⃣ Numeric Enums:");
console.log("Direction.Up:", Direction.Up);
console.log("Direction.Down:", Direction.Down);

// 3️⃣ String Enums
console.log("\n3️⃣ String Enums:");
console.log("Color.Red:", Color.Red);
console.log("Color.Green:", Color.Green);

// 4️⃣ Custom Enum Values
console.log("\n4️⃣ Custom Enum Values:");
console.log("Status.Pending:", Status.Pending);
console.log("Status.Done:", Status.Done);

// 5️⃣ Using Enums in Functions
console.log("\n5️⃣ Using Enums in Functions:");
function printDirection(dir: Direction) {
    switch (dir) {
        case Direction.Up:
            console.log("Going Up!"); break;
        case Direction.Down:
            console.log("Going Down!"); break;
        case Direction.Left:
            console.log("Going Left!"); break;
        case Direction.Right:
            console.log("Going Right!"); break;
    }
}
printDirection(Direction.Left);

// 6️⃣ Reverse Mapping (Numeric Enums Only)
console.log("\n6️⃣ Reverse Mapping (Numeric Enums Only):");
console.log("Direction[0]:", Direction[0]); // 'Up'
console.log("Direction[2]:", Direction[2]); // 'Left'
console.log("Direction[3]:", Direction[3]); // 'Right'  

// 7️⃣ Computed and Constant Members
console.log("\n7️⃣ Computed and Constant Members:");
console.log("Computed.A:", Computed.A);
console.log("Computed.B:", Computed.B);
console.log("Computed.C:", Computed.C);

// 8️⃣ Enums in Objects and Arrays
console.log("\n8️⃣ Enums in Objects and Arrays:");
const user = {
    name: "Alice",
    favoriteColor: Color.Blue
};
console.log("User's favorite color:", user.favoriteColor);

const directions: Direction[] = [Direction.Up, Direction.Left];
console.log("Directions array:", directions);

// 9️⃣ Practice Exercise
console.log("\n🎯 PRACTICE EXERCISE:");
console.log("Create an enum called 'Role' with values 'Admin', 'User', and 'Guest'. Try using it in a function that prints a welcome message based on the role!\n");

// 🔟 Key Takeaways
console.log("\n💡 Key Takeaways:");
console.log("• Enums let you define a set of named constants");
console.log("• Numeric enums have auto-incremented values, string enums have fixed values");
console.log("• Use enums to make your code more readable and less error-prone");
console.log("• Only numeric enums support reverse mapping"); 