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
    age: 30
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
