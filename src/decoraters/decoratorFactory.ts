// create the factory function
// create the decorator function
function DecoratorLoggerFactory(data:string) {

    return function(constructor: Function){
        console.log("class-constructor-" + data + ':' ,constructor);
    }
}
// create the class & add the decorator by  factory
@DecoratorLoggerFactory('Person2')
class Person2 {
    constructor(public name:string) {
        console.log("class created")
    }
}
