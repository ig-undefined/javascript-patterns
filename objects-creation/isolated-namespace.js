/**
 * Created by Geek on 15.11.2015.
 */

Sandbox.modules = {};

Sandbox.modules.dom = function (box) {
    box.getElement = function () {};
    box.getStyle = function () {};
    box.foo = "bar";
};
Sandbox.modules.event = function (box) {
    box.attachEvent = function () {};
    box.detachEvent = function () {};
};
Sandbox.modules.ajax = function (box) {
    box.makeRequest = function () {};
    box.getResponse = function () {};
};

function Sandbox() {
    var args = Array.prototype.slice.call(arguments)
        , callback = args.pop()
        , modules = (args[0] && typeof args[0] === "string") ? args : args[0]
        , i
        , len;

    if (!(this instanceof Sandbox)) {
        return new Sandbox(modules, callback);
    }
    this.a = 1;
    this.b = 2;

    if (!modules || modules === '*') {
        modules = [];
        for (i in Sandbox.modules) {
            if (Sandbox.modules.hasOwnProperty(i)) {
                modules.push(i);
            }
        }
    }
    for (i = 0, len = modules.length; i < len; i += 1) {
        Sandbox.modules[modules[i]](this);
    }
    callback(this);
}

Sandbox.prototype = {
    name: "My Application",
    version: "1.0",
    getName: function () {
        return this.appCodeName;
    }
};