// you can added to setter & getter (accessor)
// you can added to function (method)
// you can added to function parameter (parameter)

// create accessor decorator 
function AccessorLog(target: any, name: string, descriptor: PropertyDescriptor) {
    console.log("target", target)
    console.log("name", name)
    console.log("descriptor", descriptor)
}

// create method decorator 
function MethodD(target: any, name: string | symbol, descriptor: PropertyDescriptor) {
    console.log("target", target)
    console.log("name", name)
    console.log("descriptor", descriptor)
}

// create parameter decorator
// position : location of the parameter
function ParameterD(target: any, name: string | symbol, position: number) {
    console.log("target", target)
    console.log("name", name)
    console.log("position", position)
}

// create the class
class ProductA {
    private _amount: number = 0;

    constructor() {
    }

    @AccessorLog
    get amount() {
        return this._amount;
    }

    set amount(value: number) {
        this._amount = value;
    }

    @MethodD
    getTaxAmount(@ParameterD tax:number) {
        return this._amount * 0.1;
    }


}
