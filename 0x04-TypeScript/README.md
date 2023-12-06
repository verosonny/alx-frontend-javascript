### Basic Types in TypeScript:

#### Example:
```typescript
let name: string = "John";
let age: number = 25;
let isStudent: boolean = false;
let scores: number[] = [90, 85, 88];
let tuple: [string, number] = ["Alice", 30];
```

### Interfaces, Classes, and Functions:

#### Example:
```typescript
// Interface
interface Person {
  name: string;
  age: number;
}

// Class implementing an interface
class Student implements Person {
  constructor(public name: string, public age: number) {}
}

// Function with an interface parameter
function printPerson(person: Person): void {
  console.log(`Name: ${person.name}, Age: ${person.age}`);
}

const student = new Student("Bob", 22);
printPerson(student);
```

### Working with the DOM and TypeScript:

#### Example:
```typescript
// Accessing DOM element
const button = document.querySelector('#myButton') as HTMLButtonElement;

// Adding event listener
button.addEventListener('click', (event) => {
  console.log('Button clicked');
});
```

### Generic Types:

#### Example:
```typescript
// Generic function
function identity<T>(arg: T): T {
  return arg;
}

// Generic interface
interface Box<T> {
  value: T;
}

const box: Box<number> = { value: 42 };
```

### Using Namespaces:

#### Example:
```typescript
namespace MathOperations {
  export function add(x: number, y: number): number {
    return x + y;
  }
}

const result = MathOperations.add(3, 5);
console.log(result); // Output: 8
```

### Merging Declarations:

#### Example:
```typescript
// Merging interface declarations
interface Car {
  brand: string;
  speed: number;
}

interface Car {
  color: string;
}

const myCar: Car = {
  brand: "Toyota",
  speed: 120,
  color: "blue",
};
```

### Ambient Namespace to Import External Library:

#### Example:
```typescript
// Declaration file (example.d.ts)
declare namespace MyLibrary {
  function greet(name: string): void;
}

// Usage in TypeScript file
MyLibrary.greet("Alice");
```

### Basic Nominal Typing with TypeScript:

#### Example:
```typescript
// Using a nominal type with a class
class Student {
  private studentBrand: string; // Nominal type

  constructor(brand: string) {
    this.studentBrand = brand;
  }

  getBrand(): string {
    return this.studentBrand;
  }
}

const student = new Student("CS101");
console.log(student.getBrand()); // Output: CS101
```

In TypeScript, nominal typing involves using a class with private members to create a distinct type, even if the structure is identical. This helps prevent unintended type compatibility.
