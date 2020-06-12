import { Department } from './class'
// inheritance 
class ITdepartment extends Department {
    constructor(id: number, private admins: string[] = []) {
        super('IT', id)
    }
    // overriding method
    addEmployee(employee: string) {
        // employee access modifier should be protected
        if (employee = 'admin') { return }
        this.employee.push(employee)
    }
}
const it1 = new ITdepartment(1)

it1.addEmployee('walid')