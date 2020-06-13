type PersonType2 = { name: string }

// we can implement the type if there is no union 
class Test implements PersonType2 {
    name: string = ''
}

// implement interface
interface Greet {
    name: string;
    greet(): void;
}

interface Print {
    id: number;
}


class User implements Greet, Print {
    constructor(public name: string, public id: number) {

    }

    greet() {
        console.log(this.name)
    }
}

// can assign any class implement that interface
const user1: Greet = new User('walid', 2)


// Extends the interface 
interface Print2 extends Print, Greet {
    code: number
}

const user2: Print2 = {
    code: 5,
    id: 6,
    greet() {

    },
    name: ''
}

// read only 
interface Id {
    readonly id: number
}