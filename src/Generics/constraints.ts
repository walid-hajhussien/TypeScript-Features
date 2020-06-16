// function 
// extends object : any kind of object but should be 
function mearge2<T extends object, U extends object>(obj1: T, obj2: U) {
    return Object.assign(obj1, obj2)
}

const gUser2 = mearge2({ name: 'walid0' }, { id: 5 })


// create interface 
interface Lengthwise {
    length: number;
}

// can be use with string 
const n: Lengthwise = 'walid'

// here we make sure that any arg should have length property
function loggingIdentity<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);  // Now we know it has a .length property, so no more error
    return arg;
}



// The "keyof" Constraint
// We use keyof to make sure that the value is a key from specific object 
function getKeyValue<T extends object, U extends keyof T>(obj: T, key: U) {
    return obj[key]
}



