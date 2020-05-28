"use strict";
/*     TypeScript Basics & Basic Types         */
//-	Type Assignment
var age = 5;
//-	Type Inference
var age2 = 25;
// number
var number1 = 5;
// string
var name1 = "walid";
//boolean
var result = true;
//object
var person = {
    name: "walid",
    age: 30,
};
// array
var array1 = ["walid"];
var array2 = [1, "ahmed"];
var array3 = [1, 2, "a"];
// Tuples
var role = [1, "admin"];
//Enum
var Role2;
(function (Role2) {
    Role2[Role2["ADMIN"] = 0] = "ADMIN";
    Role2[Role2["USER"] = 1] = "USER";
})(Role2 || (Role2 = {})); // Role2.ADMIN = 0
var Role3;
(function (Role3) {
    Role3["ADMIN"] = "ADMIN";
    Role3["USER"] = "USER";
})(Role3 || (Role3 = {}));
// Any
var array4 = [1, true];
// union type
var result2 = 2;
// literal type
var value = 5;
var name2 = "walid";
var role2 = "user";
var age3 = 3;
// function return type
function print3() {
    console.log(55555);
}
function add(x) {
    return x;
}
function print2() {
    console.log(55555);
    return;
}
// function as type
var canAdd = print2;
// function as type with arrow function
var canAdd2;
canAdd2 = add;
// function type with callback
function sum(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
sum(1, 2, function (result) {
    console.log(result);
});
// unknown
var result1;
result1 = 'waled';
if (typeof result1 === 'string') {
    var result3 = result1;
}
// Never
function error(message) {
    throw { error: message };
}
