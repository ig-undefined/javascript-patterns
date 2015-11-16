/**
 * Created by Geek on 15.11.2015.
 */

MYAPP.utilities.array = (function () {

    var array_string = "[object Array]"
        , ops = Object.prototype.toString
        , inArray = function (haystack, needle) {
            for (var i = 0, max = haystack.length; i < max; i += 1) {
                if (haystack[i] === needle) {
                    return true;
                }
            }
            return false;
        }
        , isArray = function (obj) {
            return ops.call(obj) === array_string;
        };

    return {
        inArray: inArray,
        isArray: isArray
    };
}());