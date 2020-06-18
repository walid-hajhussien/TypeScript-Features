// create decorators  D1 & D2
function D1() {
    return function (constructor: Function) {
        console.log("D1")
    }
}

function D2() {
    return function (constructor: Function) {
        console.log("D2")
    }
}

// create the class & add the decorator , D1 run first
@D2()
@D1()
class Person4 {
    constructor(public name: string) {
    }

}
