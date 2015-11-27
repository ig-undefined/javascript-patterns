/**
 * Created by undefined on 27.11.15.
 */

// Bad
function Universe() {
    var instance = this;

    this.start_time = 0;
    this.bang = "Big";

    Universe = function () {
        return instance;
    };
}

var uni = new Universe();
var uni2 = new Universe();

uni === uni2; // true

// Better
function Universe() {
    var instance;

    Universe = function Universe() {
        return instance;
    };

    Universe.prototype = this;
    instance = new Universe();
    instance.constructor = Universe;

    instance.start_time = 0;
    instance.bang = "Big";

    return instance;
}

// Also good
var Universe;

(function () {
    var instance;

    Universe = function Universe() {
        if (instance) {
            return instance;
        }
        instance = this;

        this.start_time = 0;
        this.bang = "Big";
    }
}());