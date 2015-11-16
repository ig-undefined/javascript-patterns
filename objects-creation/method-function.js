/**
 * Created by Geek on 15.11.2015.
 */

if (typeof Function.prototype.method !== "function") {
    Function.prototype.method = function (name, implementation) {
        this.prototype[name] = implementation;
        return this;
    };
}

var Person = function (name) {
    this.name = name;
}
    .method('getName', function () {
        return this.name;
    })
    .method('setName', function (name) {
        this.name = name;
        return this;
    });

// Usage
var a = new Person("Adam");
a.getName(); // Adam
a.setName("Eve").getName(); // Eve