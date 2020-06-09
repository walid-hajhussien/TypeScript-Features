/*
Classes allow us to define how objects should look like,
which data they should hold. Which methods they should have so that we can easily build objects based on these classes.
And we then called this instances off the classes.
* */

// class
class Department {
    public name: string;
    private employee: string[];

    constructor(name: string) {
        this.name = name;
        this.employee = [];
    }

    addEmployee(employee: string) {
        this.employee.push(employee)
    }

    describe(this: Department) {
        console.log("Name", this.name)
    }

}


