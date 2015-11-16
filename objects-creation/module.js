/**
 * Created by Geek on 15.11.2015.
 */

MYAPP.namespace('MYAPP.utilities.array');

MYAPP.utilities.array = (function () {
    var uobj = MYAPP.utilities.object
        , ulang = MYAPP.utilities.lang
        , array_string = "[object Array]"
        , ops = Object.prototype.toString;

    return {
        inArray: function (needle, haystack) {
            for (var i = 0, max = haystack.length; i < max; i += 1) {
                if (haystack[i] === needle) {
                    return true;
                }
            }
            return false;
        },
        isArray: function (obj) {
            return ops.call(obj) === array_string;
        }
    };
}());