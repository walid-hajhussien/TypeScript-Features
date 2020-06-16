import { group } from "console";

// function 
function mearge<T, U>(obj1: T, obj2: U) {
    return Object.assign(obj1, obj2)
}

const gUser = mearge<{ name: string }, { id: number }>({ name: 'walid0' }, { id: 5 })

// We say that this version of the identity function is generic, as it works over a range of types
function identity<T>(arg: T): T {
    return arg;
}

const garg = identity<string>('walid');



