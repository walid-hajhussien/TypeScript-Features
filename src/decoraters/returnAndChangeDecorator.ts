// we can change the class using the decorator
// create the decorator
// you need to provide with type
// this is the structure how to inform typescript about constructor type
// the good thing here that the code will be executed when instantiate the class
function ChangeDecorator<T extends { new(...arg: any[]): { title: string } }>(originConstructor: T) {
    return class extends originConstructor {
        constructor(...arg: any[]) {
            super(arg[0]);
            this.title = 'done'
        }
    }
}

// return with method decorator
function Changemethod(target: any, name: string | symbol, descriptor: PropertyDescriptor) {
    return {
        ...descriptor, value: () => {
            console.log("method changed")
        }
    }
}

// create class 1
@ChangeDecorator
class BMW {
    public title: string = '';

    constructor(public name: string) {
    }
}

const t1 = new BMW('walid');

// class 2

class BMW2 {
    public title: string = '';

    constructor(public name: string) {
    }
    @Changemethod
    print() {
        console.log("title", this.name)
    }
}

const t2 = new BMW2('walid');
console.log(t2)
