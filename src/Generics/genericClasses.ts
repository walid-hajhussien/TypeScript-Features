// we can use the class with multi type of data 
class gStorage<T> {
    private data: T[] = [];

    constructor() { }

    add(item: T): void {
        this.data.push(item)
    }

    remove(item: T): void {
        this.data.splice(this.data.indexOf(item), 1);
    }

    get() {
        return [...this.data];
    }
}

const storage1 = new gStorage<string>()
// you can only use string
storage1.add('walid')

// constrain the type
// we can use the class with multi type of data 
class gStorage2<T extends string | number> {
    private data: T[] = [];

    constructor() { }

    add(item: T): void {
        this.data.push(item)
    }

    remove(item: T): void {
        this.data.splice(this.data.indexOf(item), 1);
    }

    get() {
        return [...this.data];
    }
}