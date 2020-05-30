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
let add2 = (a:number , b:number = 2) => {
    return a + b
};

// spread operator
let arr1 = [1,2,3]
let arr2 = [...arr1,4] //[1,2,3,4]

let obj1 = {name:'walid'};
let obj2 = {...obj1,age:50};

