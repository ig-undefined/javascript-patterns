/**
 * Created by undefined on 27.11.15.
 */

var agg = (function () {
    var index = 0
        , data = [1,2,3,4,5]
        , length = data.length;

    return {
        next: function () {
            var element;

            if (!this.hasNext()) {
                return null;
            }
            element = data[index];
            index = index + 2;

            return element;
        },
        hasNext: function () {
            return index < length;
        },
        rewind: function () {
            index = 0;
        },
        current: function () {
            return data[index];
        }
    }
}());

// Usage
while (agg.hasNext()) {
    console.log(agg.next());
}
agg.rewind(); // return
console.log(agg.current()); // 1