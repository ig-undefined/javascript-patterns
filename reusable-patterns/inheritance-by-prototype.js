/**
 * Created by undefined on 27.11.15.
 */

function object(o) {
    function F() {}
    F.prototype = o;
    return new F();
}

function Person() {
    this.name = "Adam";
}
Person.prototype.getName = function () {
    return this.name;
};

// Bad
var papa = new Person();
var kid = object(papa);
kid.getName(); // Adam

// Better
var papa = new Person();
var kid = object(Person.prototype);
typeof kid.getName; // function
typeof kid.name; // undefined
