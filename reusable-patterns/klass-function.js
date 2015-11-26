/**
 * Created by undefined on 27.11.15.
 */

var klass = function (Parent, props) {

    var Child
      , F
      , i;

    // New Constructor
    Child = function () {

        if (Child.uber && Child.uber.hasOwnProperty("__construct")) {
            Child.uber.__constructor.apply(this, arguments);
        }
        if (Child.prototype.hasOwnProperty("__construct")) {
            Child.prototype.__constructor.apply(this, arguments);
        }
    };

    // Inheritance
    Parent = Parent || Object;
    F.prototype = Parent.prototype;
    Child.prototype = new F();
    Child.uber = Parent.prototype;
    Child.prototype.constructor = Child;

    for (i in props) {
        if (props.hasOwnProperty(i)) {
            Child.prototype[i] = props[i];
        }
    }

    // Return created class
    return Child;
};

// Usage
var Man = klass(null, {
   __construct: function (what) {
       console.log("Man's constructor");
       this.name = what;
   },
    getName: function () {
        return this.name;
    }
});
var SuperMan = klass(Man, {
   __construct: function (what) {
       console.log("Superman constructor");
   },
    getName: function () {
        var name = SuperMan.uber.getName.call(this);
        return "I am " + name;
    }
});

var first = new Man('Adam'); // Man's constructor
first.getName(); // Adam

var clark = new SuperMan('Clark Kent'); // Man's constructor, Superman constructor
clark.getName(); // I am Clark Kent