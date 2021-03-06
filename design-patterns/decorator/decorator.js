/**
 * Created by undefined on 28.11.15.
 */

function Sale(price) {
    this.price = price || 100;
}
Sale.prototype.getPrice = function () {
    return this.price;
};
Sale.prototype.decorate = function (decorator) {
    var F = function () {}
        , overrides = this.constructor.decorators[decorator]
        , i
        , newobj;

    F.prototype = this;
    newobj = new F();
    newobj.uber = F.prototype;

    for(i in overrides) {
        if (overrides.hasOwnProperty(i)) {
            newobj[i] = overrides[i];
        }
    }
    return newobj;
};

Sale.decorators = {}; // All objects decorators here
Sale.decorators.fedtax = {
    getPrice: function () {
        var price = this.uber.getPrice();

        price += price * 5 / 100;
        return price;
    }
};
Sale.decorators.quebec = {
    getPrice: function () {
        var price = this.uber.getPrice();

        price += price * 7.5 / 100;
        return price;
    }
};
Sale.decorators.money = {
    getPrice: function () {
        return "$" + this.uber.getPrice().toFixed(2);
    }
};
Sale.decorators.cdn = {
    getPrice: function () {
        return "CDN$ " + this.uber.getPrice().toFixed(2);
    }
};

// Usage
var sale = new Sale(100);
sale = sale.decorate('fedtax'); // add federal tax
sale = sale.decorate('quebec'); // add local tax
sale = sale.decorate('money'); // format like money
sale.getPrice(); // $112.88

// Other country
var sale2 = new Sale(100);
sale2 = sale2.decorate('fedtax'); // add federal tax
sale2 = sale2.decorate('cdn'); // format like price CDN
sale2.getPrice(); // CDN$ 105.00