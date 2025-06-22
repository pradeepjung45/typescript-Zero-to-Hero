// 06-classes.ts - TypeScript Classes & Object-Oriented Programming

console.log("\n=== 📖 Lesson 6: Classes & Object-Oriented Programming ===\n");

// 1️⃣ Basic Class Syntax
class Animal {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    move(distance: number): void {
        console.log(`${this.name} moved ${distance} meters.`);
    }
}

const dog = new Animal("Buddy");
dog.move(10);

// 2️⃣ Properties & Methods
class Person {
    firstName: string;
    lastName: string;
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}

const person2 = new Person("Alice", "Smith");
console.log("Full Name:", person2.getFullName());

// 3️⃣ Inheritance (Extending Classes)
class Employee extends Person {
    employeeId: string;
    constructor(firstName: string, lastName: string, employeeId: string) {
        super(firstName, lastName);
        this.employeeId = employeeId;
    }
    getEmployeeInfo(): string {
        return `${this.getFullName()} (ID: ${this.employeeId})`;
    }
}

const emp = new Employee("Bob", "Johnson", "101");
console.log("Employee Info:", emp.getEmployeeInfo());

// 4️⃣ Access Modifiers: public, private, protected
class BankAccount {
    public owner: string;
    private _balance: number;
    protected accountType: string;

    constructor(owner: string, initialBalance: number, accountType: string) {
        this.owner = owner;
        this._balance = initialBalance;
        this.accountType = accountType;
    }

    public deposit(amount: number): void {
        if (amount <= 0) throw new Error("Deposit must be positive!");
        this._balance += amount;
        console.log(`Deposited $${amount}. New balance: $${this._balance}`);
    }

    public withdraw(amount: number): void {
        if (amount <= 0) throw new Error("Withdraw must be positive!");
        if (amount > this._balance) throw new Error("Insufficient funds!");
        this._balance -= amount;
        console.log(`Withdrew $${amount}. New balance: $${this._balance}`);
    }

    public get balance(): number {
        return this._balance;
    }

    public printStatement(): void {
        console.log(`Owner: ${this.owner}, Type: ${this.accountType}, Balance: $${this._balance}`);
    }
}

const account = new BankAccount("Charlie", 500, "Savings");
account.deposit(200);      // Deposited $200. New balance: $700
account.withdraw(100);     // Withdrew $100. New balance: $600
console.log(account.balance); // 600
account.printStatement();  // Owner: Charlie, Type: Savings, Balance: $600

// 5️⃣ Static Properties & Methods
class MathUtil {
    static PI = 3.14159;
    static square(x: number): number {
        return x * x;
    }
}
console.log("PI:", MathUtil.PI);
console.log("Square of 5:", MathUtil.square(5));

// 6️⃣ Getters & Setters
class Rectangle {
    private _width!: number;
    private _height!: number;

    constructor(width: number, height: number) {
        this.width = width;   // Use setter for validation
        this.height = height; // Use setter for validation
    }

    get area(): number {
        return this._width * this._height;
    }

    get perimeter(): number {
        return 2 * (this._width + this._height);
    }

    set width(value: number) {
        if (value <= 0) throw new Error("Width must be positive!");
        this._width = value;
    }

    set height(value: number) {
        if (value <= 0) throw new Error("Height must be positive!");
        this._height = value;
    }

    printInfo(): void {
        console.log(`Rectangle: width=${this._width}, height=${this._height}, area=${this.area}, perimeter=${this.perimeter}`);
    }

    static createSquare(side: number): Rectangle {
        return new Rectangle(side, side);
    }
}

// Usage:
const rect = new Rectangle(10, 5);
rect.printInfo(); // Rectangle: width=10, height=5, area=50, perimeter=30

rect.width = 20;
rect.printInfo(); // Rectangle: width=20, height=5, area=100, perimeter=50

const square = Rectangle.createSquare(7);
square.printInfo(); // Rectangle: width=7, height=7, area=49, perimeter=28

// 7️⃣ Abstract Classes
abstract class Shape {
    abstract getArea(): number;
    describe(): void {
        console.log("This is a shape.");
    }
}
class Circle extends Shape {
    radius: number;
    constructor(radius: number) {
        super();
        this.radius = radius;
    }
    getArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}
const circle = new Circle(3);
circle.describe();
console.log("Circle Area:", circle.getArea());

// 8️⃣ Practice Exercise
console.log("\n🎯 PRACTICE EXERCISE:");
console.log("Create a class 'Car' with properties make, model, year, and a method getCarInfo(). Try adding a private property for mileage and a method to update it!\n");

// 9️⃣ Key Takeaways
console.log("\n💡 Key Takeaways:");
console.log("• Classes are blueprints for creating objects with properties and methods");
console.log("• Use inheritance to share behavior between classes");
console.log("• Access modifiers (public, private, protected) control visibility");
console.log("• Static members belong to the class, not instances");
console.log("• Getters/setters provide controlled access to properties");
console.log("• Abstract classes define contracts for subclasses"); 