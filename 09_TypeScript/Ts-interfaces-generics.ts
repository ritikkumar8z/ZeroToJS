/**
 * 📘 TypeScript: Interfaces & Generics
 * Author: Ritik Kumar
 * Date: 24 Feb 2025
 *
 * Interfaces → define object shapes (contracts)
 * Generics → reusable, type-safe functions/classes
 */
  
// ------------------------------
// 1. Interfaces
// ------------------------------
interface User { 
  id: number;
  name: string;
  email?: string; // optional
}

const user1: User = {
  id: 1,
  name: "Ritik",
  email: "ritik@example.com",
};

const user2: User = {
  id: 2,
  name: "Kumar",
  // email optional
};

// Function with interface
function printUser(user: User) {
  console.log(`ID: ${user.id}, Name: ${user.name}`);
}
printUser(user1);

// ------------------------------
// 2. Extending Interfaces
// ------------------------------
interface Admin extends User {
  role: "admin" | "superadmin";
}

const admin1: Admin = { id: 3, name: "Alice", role: "admin" };

// ------------------------------
// 3. Generics
// ------------------------------

// Generic function → works with any type
function identity<T>(arg: T): T {
  return arg;
}

const num = identity<number>(42); // num: number
const str = identity<string>("Hello"); // str: string

// Generic array
function getFirstElement<T>(arr: T[]): T | undefined {
  return arr[0];
}

const firstNum = getFirstElement([1, 2, 3]); // number
const firstStr = getFirstElement(["a", "b"]); // string

// Generic interface
interface ApiResponse<T> {
  status: number;
  data: T;
}

const response: ApiResponse<User> = {
  status: 200,
  data: user1,
};

// ------------------------------
// 4. Summary
// ------------------------------
/**
 * Interfaces = define consistent object shapes (like contracts)
 * Generics = reusable & type-safe code (functions, classes, interfaces)
 * Together → scalable, maintainable TypeScript
 */
