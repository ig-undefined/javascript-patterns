/**
 * Created by Geek on 15.11.2015.
 */

var Gadget = (function () {
    var counter = 0
        , NewGadget;

    NewGadget = function () {
        counter += 1;
    };
    NewGadget.prototype.getLastId = function () {
        return counter;
    };

    return NewGadget;
}());

// Usage
var iphone = new Gadget();
iphone.getLastId(); // 1
var ipod = new Gadget();
ipod.getLastId(); // 2
var ipad = new Gadget();
ipad.getLastId(); // 3