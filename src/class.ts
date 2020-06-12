/*
Classes allow us to define how objects should look like,
which data they should hold. Which methods they should have so that we can easily build objects based on these classes.
And we then called this instances off the classes.
* */

// class
export class Department {
    protected employee: string[];
    private readonly id: number;

    constructor(public name: string, id: number) {
        this.employee = [];
        this.id = id;
    }

    addEmployee(employee: string) {
        this.employee.push(employee)
    }

    describe(this: Department) {
        console.log("Name", this.name)
    }

}



