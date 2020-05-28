/*     TypeScript Basics & Basic Types         */

//-	Type Assignment
let age: number = 5;

//-	Type Inference
let age2 = 25;

// number
let number1: number = 5;

// string
let name1: string = "walid";

//boolean
let result: boolean = true;

//object

let person: { name: string; age: number } = {
    name: "walid",
    age: 30,
};

// array
let array1: string[] = ["walid"];
let array2: (string | number)[] = [1, "ahmed"];
let array3: any[] = [1, 2, "a"];

// Tuples
let role: [number, string] = [1, "admin"];

//Enum
enum Role2 {
    ADMIN,
    USER,
} // Role2.ADMIN = 0
enum Role3 {
    ADMIN = "ADMIN",
    USER = "USER",
}

// Any
let array4: any[] = [1, true];

// union type
let result2: string | number = 2;

// literal type
const value: 5 = 5;
const name2: "walid" = "walid";
const role2: "admin" | "user" = "user";

// Aliases
type Combined = string | number;
let age3: Combined = 3;

// function return type
function print3(): void {
    console.log(55555)
}

function add(x: number): number {
    return x
}

function print2(): undefined {
    console.log(55555)
    return
}

// function as type
let canAdd: Function = print2;

// function as type with arrow function
let canAdd2: (n: number) => number;
canAdd2 = add;

// function type with callback
function sum(n1: number, n2: number, cb: (x: number) => void): void {
    let result = n1 + n2;
    cb(result)
}

sum(1, 2, (result) => {
    console.log(result);
});

// unknown
let result1: unknown;
result1 = 'waled';
if (typeof result1 === 'string') {
    let result3: string = result1;
}

// Never
function error(message: string):never {
    throw {error: message}
}


