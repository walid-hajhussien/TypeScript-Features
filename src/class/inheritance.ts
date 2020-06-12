
// inheritance 
// parent 
class Department1 {
    protected employee: string[];
    private readonly id: number;
    private code: number = 0

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
// child 
class ITdepartment extends Department1 {
    constructor(id: number, private admins: string[] = []) {
        super('IT', id)
    }
    // overriding method
    addEmployee(employee: string) {
        // employee access modifier should be protected
        if (employee === 'admin') { return }
        this.employee.push(employee)
    }


}
const it1 = new ITdepartment(1)

it1.addEmployee('walid')
