/*
•	getters and setters which can be great for encapsulating logic and for adding extra logic
that should run when you try to read a property or when you try to set a property.

*/

class Department2 {
    constructor(private _name: string) {
    }
    get name() {
        return this._name
    }

    set name(value: string) {
        this.name = value
    }
}

// example 
const hr = new Department2('HR');
hr.name = 'IT'
console.log(hr.name)