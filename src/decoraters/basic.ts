// create the decorator function
function DecoratorLogger(constructor: Function) {
        console.log("class-constructor",constructor);
}

// create the class & add the decorator
@DecoratorLogger
class Person {
    constructor(public name:string) {
        console.log("class created")
    }
}

// create object
// const dperson = new Person('walid');

