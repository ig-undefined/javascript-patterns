/**
 * Created by Geek on 15.11.2015.
 */

MYAPP.namespace('MYAPP.utilities.Array');

MYAPP.utilities.array = (function () {
    var uobj = MYAPP.utilities.object
        , ulang = MYAPP.utilities.lang
        , Constr;

    Constr = function (obj) {
        this.elements = this.toArray(obj);
    };
    Constr.prototype = {
        constructor: MYAPP.utilities.Array,
        version: "2.0",
        toArray: function (obj) {
            for (var i = 0, a = [], len = obj.length; i < len; i += 1) {
                a[i] = obj[i];
            }
            return a;
        }
    };
    return Constr;
}());