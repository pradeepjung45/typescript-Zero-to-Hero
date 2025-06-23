// 09-type-guards.ts - TypeScript Type Guards Lesson

console.log("\n=== 📖 Lesson 9: Type Guards in TypeScript ===\n");

// 1️⃣ What are Type Guards?
console.log("1️⃣ What are Type Guards?");
console.log("Type guards are ways to check the type of a value at runtime, so you can safely use it.");

// 2️⃣ typeof Type Guard
console.log("\n2️⃣ typeof Type Guard:");
function printId(id: string | number) {
    if (typeof id === "string") {
        console.log("ID is a string, uppercase:", id.toUpperCase());
    } else {
        console.log("ID is a number, doubled:", id * 2);
    }
}
printId("abc123");
printId(42);

// 3️⃣ instanceof Type Guard
console.log("\n3️⃣ instanceof Type Guard:");
class Dog {
    bark() { console.log("Woof!"); }
}
class Cat {
    meow() { console.log("Meow!"); }
}
function makeSound(pet: Dog | Cat) {
    if (pet instanceof Dog) {
        pet.bark();
    } else {
        pet.meow();
    }
}
makeSound(new Dog());
makeSound(new Cat());

// 4️⃣ Custom Type Guard Function
console.log("\n4️⃣ Custom Type Guard Function:");
type Fish = { swim: () => void };
type Bird = { fly: () => void };
function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined;
}
function move(pet: Fish | Bird) {
    if (isFish(pet)) {
        pet.swim();
    } else {
        pet.fly();
    }
}
move({ swim: () => console.log("Swimming!") });
move({ fly: () => console.log("Flying!") });

// 5️⃣ Discriminated Unions
console.log("\n5️⃣ Discriminated Unions:");
type ShapeTG =
    | { kind: "circle"; radius: number }
    | { kind: "square"; side: number };
function getAreaTG(shape: ShapeTG): number {
    if (shape.kind === "circle") {
        return Math.PI * shape.radius * shape.radius;
    } else {
        return shape.side * shape.side;
    }
}
console.log("Circle area:", getAreaTG({ kind: "circle", radius: 3 }));
console.log("Square area:", getAreaTG({ kind: "square", side: 4 }));

// 6️⃣ Type Guards with Arrays/Objects
console.log("\n6️⃣ Type Guards with Arrays/Objects:");
function printNames(names: string | string[]) {
    if (Array.isArray(names)) {
        console.log("Names:", names.join(", "));
    } else {
        console.log("Name:", names);
    }
}
printNames(["Alice", "Bob"]);
printNames("Charlie");

// 7️⃣ Real-World Example: API Response
console.log("\n7️⃣ Real-World Example: API Response");
type ApiResponseTG =
    | { success: true; data: { user: string } }
    | { success: false; error: string };
function handleApiResponseTG(res: ApiResponseTG) {
    if (res.success) {
        console.log("User:", res.data.user);
    } else {
        console.log("Error:", res.error);
    }
}
handleApiResponseTG({ success: true, data: { user: "Alice" } });
handleApiResponseTG({ success: false, error: "Not found" });

// 8️⃣ Practice Exercise
console.log("\n🎯 PRACTICE EXERCISE:");
console.log("Write a function that takes a value of type string | number | boolean and prints a different message for each type.\n");

// 9️⃣ Key Takeaways
console.log("\n💡 Key Takeaways:");
console.log("• Type guards let you safely check and use different types at runtime");
console.log("• Use typeof for primitives, instanceof for classes, custom guards for complex types");
console.log("• Discriminated unions and Array.isArray are powerful for real-world checks");
console.log("• Type guards make your code safer and easier to understand!"); 