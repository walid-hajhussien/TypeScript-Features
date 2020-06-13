class Flat {
    private static instance: Flat;
    private name: string;

    private constructor(name: string) {
        this.name = name;
    }

    static getInstance(name: string) {
        if (this.instance) {
            return this.instance
        }
        this.instance = new Flat(name);
        return this.instance
    }

    get flatName() {
        return this.name
    }
}

const flat1 = Flat.getInstance('f1'); // {name: "f1"}
const flat2 = Flat.getInstance('f2'); // {name: "f1"}
