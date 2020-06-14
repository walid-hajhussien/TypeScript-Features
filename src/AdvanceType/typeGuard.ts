
//  Type Guards allow you to narrow down the type of an object within a conditional block

type Fruit = {
    name: string
}

type Apple1 = {
    code: number
}

// unioun type
type allFruit = Fruit | Apple1

// unioun type
type All = number | string

// unioun with class
class A {
    constructor(public id: number) { }
}

class B {
    constructor(public name: string) { }
}



// Guard type with Typeof
function printG1(data: All) {
    // you need to check which type
    //  Typeof
    if (typeof data === 'string') {
        console.log("string", data)
    } else {
        console.log("number", data)
    }

}
// Guard type with In
function printG2(data: allFruit) {
    // you need to check which type
    //  in
    if (name in data) {
        console.log("Fruit", data)
    } else {
        console.log("Apple1", data)
    }

}

// Guard type with instanceof

function printG3(data: A | B) {
    // you need to check which type
    //  instanceof
    if (data instanceof A) {
        console.log("A", data)
    } else {
        console.log("B", data)
    }

}

