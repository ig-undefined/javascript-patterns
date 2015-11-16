/**
 * Created by Geek on 15.11.2015.
 */

var Gadget = function (price) {
    this.price = price;
};

// Static method
Gadget.isShiny = function () {
    var msg = "you bet";

    if (this instanceof Gadget) {
        msg += ", it costs $" + this.price + "!";
    }
    return msg;
};
Gadget.prototype.isShiny = function () {
    return Gadget.isShiny.call(this);
};

// Usage
Gadget.isShiny(); // you bet

var iphone = new Gadget(500);
iphone.isShiny(); // you bet, it costs $500!