// plain js
// let id = 5
// console.log(id)
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// id = 5
/**
 * Basic Types
 */
var id = 6;
var name1 = "Abu";
var isValid = true;
var x = 'Its just any';
var ids = [1, 2, 3, 4, 5];
var arr = [1, 'its also any', 4.5];
/**
 * tuple type values can be given in sequence as defined
 */
var tuples = [1, 'string', false];
/**
 * Array of arrays
 */
var employee;
employee = [
    [1, 'test'],
    [2, 'test2'],
    [3, 'test3']
];
/**
 * Union
 */
var pid = 'test';
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
var user = {
    id: 5,
    name: 'Shaji'
};
var User1 = { id: 1, name: 'Shaji', dpt: 'CSE' };
/**
 * functions
 */
function AddNum(x, y) {
    return x + y;
}
console.log(AddNum(1, 2));
function logmsg(str) {
    console.log(str);
}
var user1 = {
    id: 5,
    name: 'Shaji',
    age: 21
};
// user1.age = 20 does not wrk since read only
user1.name = 'test user';
var add = function (x, y) { return x + y; };
var sub = function (x, y) { return x - y; };
var mul = function (x, y) { return x * y; };
console.log(add(10, 5));
console.log(sub(10, 5));
console.log(mul(10, 5));
/**
 * Classes
 */
var Person = /** @class */ (function () {
    function Person(id, name) {
        this.id = id,
            this.name = name;
    }
    //fns
    Person.prototype.register = function () {
        console.log("".concat(this.name, " Registered with id : ").concat(this.id));
    };
    return Person;
}());
var bruce = new Person(4, "Bruce Lee");
console.log(bruce);
bruce.register();
var Person1 = /** @class */ (function () {
    /**
     * public
     * private
     * protected
     */
    function Person1(id, name) {
        this.id = id,
            this.name = name;
    }
    Person1.prototype.register = function () {
        console.log("".concat(this.name, " Registered with id : ").concat(this.id));
    };
    return Person1;
}());
var Jack = new Person1(4, "Jack Ma");
console.log(Jack);
Jack.register();
var Emp = /** @class */ (function (_super) {
    __extends(Emp, _super);
    function Emp(id, name, position) {
        var _this = _super.call(this, id, name) || this;
        _this.position = position;
        return _this;
    }
    return Emp;
}(Person1));
var emp1 = new Emp(1, 'Ajith', 'intern');
logmsg(emp1);
