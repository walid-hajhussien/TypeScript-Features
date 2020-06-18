// create print class
class PrintMessage {
    constructor(public message: string) {
    }

    print() {
        console.log("without decorator",this.message);
    }
}

const p1 = new PrintMessage('Welcome to DOM ');
// add ! it's exist
const $button1 = document.querySelector('#print-button1')!;
// here will print undefined because this will be missing
$button1.addEventListener('click', p1.print);

// auto Bind decorator
// the get will be return instead of value
function AutoBindDecorator(target: any, name: string, descriptor: PropertyDescriptor):PropertyDescriptor {
    const  newDescriptor:PropertyDescriptor = {
        enumerable:descriptor.enumerable,
        configurable:descriptor.configurable,
        get(){
            const bindFn = descriptor.value.bind(this);
            return bindFn;
        }
    }
    console.log("newDescriptor",newDescriptor)
return (newDescriptor)
}


// create print class with auto Bind decorator
class PrintMessage2 {
    constructor(public message: string) {
    }

    @AutoBindDecorator
    print() {
        console.log("with decorator",this.message);
    }
}
const p2 = new PrintMessage2('Welcome to DOM ');
const $button2 = document.querySelector('#print-button2')!;
$button2.addEventListener('click', p2.print);
