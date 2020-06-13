// create the interface 
interface Person {
    name: string;
    age: number;
    print(text: string): void;
}

// using the interface as type 
let user: Person = {
    name: 'walid',
    age: 5,
    print(text: string) {
        console.log(this.name)
    }
}

// type insted of interface 
type PersonType = {
    name: string;
    age: number;
    print(text: string): void;
}
    | { name: string }

