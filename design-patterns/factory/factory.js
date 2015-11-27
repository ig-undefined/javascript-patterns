/**
 * Created by undefined on 27.11.15.
 */

// Parent constructor
function CarMaker() {}

// Parent method
CarMaker.prototype.drive = function () {
    return "Vroom, I have " + this.doors + " doors";
};

// Static constructor
CarMaker.factory = function (type) {
    var constr = type
        , newcar;

    // Throw error if constructor for type is not present
    if (typeof CarMaker[constr] !== "function") {
        throw {
            name: "Error",
            message: constr + " doesn't exists"
        };
    }

    // Here we know that constructor is present and let's define relation with parent
    if (typeof CarMaker[constr].prototype.drive !== "function") {
        CarMaker[constr].prototype = new CarMaker();
    }

    // create new instance
    newcar = new CarMaker[constr]();

    return newcar;
};

CarMaker.Compact = function () {
    this.doors = 4;
};
CarMaker.Convertible = function () {
    this.doors = 2;
};
CarMaker.SUV = function () {
    this.doors = 24;
};

// Usage
var corolla = CarMaker.factory('Compact');
var solstice = CarMaker.factory('Convertible');
var cherokee = CarMaker.factory('SUV');

corolla.drive(); // "Vroom, I have 4 doors"
solstice.drive(); // "Vroom, I have 2 doors"
cherokee.drive(); // "Vroom, I have 24 doors"