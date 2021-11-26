"use strict";
// plain js
// let id = 5
// console.log(id)
// id = 5
/**
 * Basic Types
 */
let id = 6;
let name1 = "Abu";
let isValid = true;
let x = 'Its just any';
let ids = [1, 2, 3, 4, 5];
let arr = [1, 'its also any', 4.5];
/**
 * tuple type values can be given in sequence as defined
 */
let tuples = [1, 'string', false];
/**
 * Array of arrays
 */
let employee;
employee = [
    [1, 'test'],
    [2, 'test2'],
    [3, 'test3']
];
/**
 * Union
 */
let pid = 'test';
pid = false;
pid = 'Sujith';
/**
 * Enum
 */
var Directions;
(function (Directions) {
    Directions["Up"] = "Go up";
    Directions["Down"] = "Go Down";
    Directions["Left"] = "Go Left";
    Directions["Right"] = "Go Right";
})(Directions || (Directions = {}));
console.log(Directions.Up);
/**
 * Objects
 */
const user = {
    id: 5,
    name: 'Shaji'
};
const User1 = { id: 1, name: 'Shaji', dpt: 'CSE' };
/**
 * functions
 */
function AddNum(x, y) {
    return x + y;
}
console.log(AddNum(1, 2));
function logger(str) {
    console.log(str);
}
let user1 = {
    id: 5,
    name: 'Shaji',
    age: 21
};
// user1.age = 20 does not wrk since read only
user1.name = 'test user';
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
const mul = (x, y) => x * y;
console.log(add(10, 5));
console.log(sub(10, 5));
console.log(mul(10, 5));
/**
 * Classes
 */
class Person {
    constructor(id, name) {
        this.id = id,
            this.name = name;
    }
    //fns
    register() {
        console.log(`${this.name} Registered with id : ${this.id}`);
    }
}
const bruce = new Person(4, "Bruce Lee");
console.log(bruce);
bruce.register();
class Person1 {
    /**
     * public
     * private
     * protected
     */
    constructor(id, name) {
        this.id = id,
            this.name = name;
    }
    register() {
        console.log(`${this.name} Registered with id : ${this.id}`);
    }
}
const Jack = new Person1(4, "Jack Ma");
console.log(Jack);
Jack.register();
class Emp extends Person1 {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp1 = new Emp(1, 'Ajith', 'intern');
logger(emp1);
/**
 * Generics
 */
let getArr = (item) => new Array().concat(item);
let numArr = getArr([1, 2, 3, 4, 56, 7, 9]);
let strArr = getArr(['c', 'java', 'python']);
