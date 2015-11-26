/**
 * Created by undefined on 27.11.15.
 */

function bind(o, m) {
    return function () {
        return m.apply(o, [].prototype.slice.call(arguments));
    };
}