// let's create validator to validate name & age


// create validator interface
interface ValidatorSetup {
    [property: string]: {
        [validatersProperty: string]: string[]
    }
}

// validator storage
const registersValidator: ValidatorSetup = {};

// create required decorator to validate empty string
function RequiredDecorator(target: any, name: string) {
    //access class name target.constructor.name
    if (registersValidator[target.constructor.name]) {
        if (registersValidator[target.constructor.name][name]) {
            registersValidator[target.constructor.name][name].push('required');
        } else {
            registersValidator[target.constructor.name][name] = ['required'];
        }

    } else {
        registersValidator[target.constructor.name] = {
            [name]: ['required']
        }
    }

}

// create positive validator
function PositiveDecorator(target: any, name: string) {

    if (registersValidator[target.constructor.name]) {
        if (registersValidator[target.constructor.name][name]) {
            registersValidator[target.constructor.name][name].push('Positive');
        } else {
            registersValidator[target.constructor.name][name] = ['Positive'];
        }

    } else {
        registersValidator[target.constructor.name] = {
            [name]: ['required']
        }
    }
}

// create validator function
function validate(obj: any) {
    const objValidatorSetup = registersValidator[obj.constructor.name];
    if (!objValidatorSetup) {
        return true;
    }
    let isValid = true;
    // loop throw the objValidatorSetup
    for (let prop in objValidatorSetup) {
        for (let validator of objValidatorSetup[prop]) {
            switch (validator) {
                case 'required':
                    isValid = isValid && !!obj[prop];
                    break;
                case 'Positive':
                    isValid = isValid && obj[prop] > 0;
                    break

            }
        }
    }
    return isValid


}

// create class


class BigAnimal {
    @RequiredDecorator
    name: string;
    @PositiveDecorator
    age: number;

    constructor(name: string, age: number) {
        this.age = age;
        this.name = name;
    }

}

//
const c1 = new BigAnimal('', 21);
const c2 = new BigAnimal('Cat', 0);
const c3 = new BigAnimal('Dog', 5);
console.log("c1", validate(c1));
console.log("c2", validate(c2));
console.log("c3", validate(c3));
