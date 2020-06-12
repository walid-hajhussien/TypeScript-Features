class Car {
    // accessible from outside & inside 
    public carType: string;
    // only accessible from inside the class. 
    private model: string;
    // accessible from inside & child by inheritance , readonly can't be change after initialize
    protected readonly id: number;
    // can accessible without initialize the class 
    //you can't access them from inside your non static parts
    static years: string;

    constructor(carType: string, model: string, id: number, year: string) {
        this.carType = carType;
        this.model = model;
        this.id = id;
        // to access them from inside your non static parts use the class name 
        Car.years = year;
    }

    // static method can chane static propertise 
    static changeYears(years: string) {
        this.years = years
    }
}



