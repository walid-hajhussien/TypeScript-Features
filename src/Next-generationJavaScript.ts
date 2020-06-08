// let & const ==> Block scope
const age1: number = 50;
let age4: number = 60;

// write the method inside the obj
let personEs53 = {
    name: 'walid',
    print() {
        console.log('walid');
    }
};


// arrow function this
let personEs5 = {
    name: 'walid',
    print: function () {

        (function t() {
            // this related to windows
            //  console.log(this.name)
        })()

    }

};
let personEs52 = {
    name: 'walid',
    print: function () {
        (() => {
            // this related to personEs52
            console.log(this.name)
        })()

    }

}

//-	Default Function Parameters
let add2 = (a: number, b: number = 2) => {
    return a + b
};

// spread operator
let arr1 = [1, 2, 3]
let arr2 = [...arr1, 4] //[1,2,3,4]

let obj1 = {name: 'walid'};
let obj2 = {...obj1, age: 50};

// rest parameter
let add5 = (n1: number, ...numbers: number[]) => {
    return numbers.reduce((sum, value) => {
        return sum + value;
    }, 0)
}

// object & array
let array = [1, 2, 3, 4]
const [v1, v2, ...rest] = array // v1 = 1 , rest = [3,4]

let obj = {firstName: 'walid', firstAge: 25};
const {firstName:n1, firstAge:a1} = obj;
