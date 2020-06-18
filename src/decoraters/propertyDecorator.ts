// decorator receives two arguments
// 1 - the second argument we get is the property name
// 2 - The first argument is the target of the property


// create the decorators
function Log(target: any, name: string | symbol) {
    console.log("target", target)
    console.log("name", name)
}

// create the class
class Product {
    @Log
    title: string = 'wheels'

    constructor() {
    }
}
