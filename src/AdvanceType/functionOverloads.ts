/*•	feature that allows us to define multiple functions signatures so to save for one at the same 
function which simply means we can have multiple possible ways of calling a function with different parameters  */

type AllF = string | number

// you can inform typeScript which type will be return 
function addf(n1: number, n2: number): number
function addf(n1: string, n2: string): string
function addf(n1: AllF, n2: AllF) {
    if (typeof n1 === 'string' || typeof n2 === 'string') {
        return n1.toString() + n2.toString()
    } else {
        return n1 + n2
    }
}

const sum3 = addf(3, 4);

// salary 
function salary(basic: number): number
function salary(basic: number, tax?: number): number
function salary(basic: number, tax?: number): number {
    if (tax) {
        return (tax / 100) * basic
    }
    return basic
}

const sumf = salary(100, 20)