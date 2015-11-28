/**
 * Created by undefined on 28.11.15.
 */

function Sale(price) {
    this.price = price || 100;
    this.decorators_list = [];
}
Sale.prototype.decorate = function (decorator) {
    this.decorators_list.push(decorator);
};
Sale.prototype.getPrice = function () {
    var price = this.price
        , i
        , max = this.decorators_list.length
        , name;

    for (i = 0; i < max; i += 1) {
        name = this.decorators_list[i];
        price = Sale.decorators[name].getPrice(price);
    }
    return price;
};

Sale.decorators = {};
Sale.decorators.fedtax = {
    getPrice: function (price) {
        return price + price * 5 / 100;
    }
};
Sale.decorators.quebec = {
    getPrice: function (price) {
        return price + price * 7.5 / 100;
    }
};
Sale.decorators.money = {
    getPrice: function (price) {
        return "$" + price.toFixed(2);
    }
};

// Usage
var sale = new Sale(100);
sale = sale.decorate('fedtax'); // add federal tax
sale = sale.decorate('quebec'); // add local tax
sale = sale.decorate('money'); // format like money
sale.getPrice(); // $112.88