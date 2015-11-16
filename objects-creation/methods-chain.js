/**
 * Created by Geek on 15.11.2015.
 */

var obj = {
    value: 1,
    increment: function () {
        this.value += 1;
        return this;
    },
    add: function (value) {
        this.value += value;
        return this;
    },
    shout: function () {
        alert(this.value);
    }
};

obj.increment()
    .add(12)
    .increment()
    .shout();