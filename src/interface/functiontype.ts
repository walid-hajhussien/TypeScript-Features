// with type 
type AddFnType = (a: number, b: number) => number
const f1: AddFnType = (a: number, b: number) => {
    return a + b
}

// eith interface 
interface AddFnInterface {
    (a: number, b: number): number;
}
const f2: AddFnInterface = (a: number, b: number) => {
    return a + b
}