// abstract class may contain implementation details for its members
// abstract class can not be initialize 
abstract class Food {
    // Abstract methods must be visible to sub-classes , private can't be use 
    protected abstract name: string;
    constructor(public id: number) {

    }

    public abstract eat(value: string): void;
    clean() {
        console.log('done')
    }
}

// child class
class Apple extends Food {
    protected name: string = 'Apple'

    eat() {

    }
}

const apple = new Apple(5)
console.log(apple.clean);