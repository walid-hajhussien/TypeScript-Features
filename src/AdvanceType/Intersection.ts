
//Intersection types allow us to combine our types

// first type
type EmployeeType = {
    name: string
}

// second type
type EmployeeDateType = {
    startDate: Date
}

// Intersection type
type AdminType = EmployeeType & EmployeeDateType

const employee1: AdminType = {
    name: 'walid',
    startDate: new Date()
}

