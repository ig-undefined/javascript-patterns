/**
 * Created by undefined on 27.11.15.
 */

// Simple copying
function extend(parent, child) {
    var i
        , child = child || {};

    for (i in parent) {
        if (parent.hasOwnProperty(i)) {
            child[i] = parent[i];
        }
    }
    return child;
}

// Usage
var dad = {
    name: "Adam"
};
var kid = extend(dad);
kid.name; // Adam

// Deep copying
function extendDeep(parent, child) {
    var i
        , toStr = Object.prototype.toString
        , astr = "[object Array]";

    child = child || {};

    for (i in parent) {
        if (parent.hasOwnProperty(i)) {
            if (typeof parent[i] === "object") {
                child[i] = (toStr.call(parent[i]) === astr) ? [] : {};
                extendDeep(parent[i],child[i]);
            } else {
                child[i] = parent[i];
            }
        }
    }
}

// Usage
var dad = {
    counts: [1,2,3],
    reads: { paper: true }
};
var kid = extendDeep(dad);
kid.counts.push(4);
kid.counts.toString(); // [1,2,3,4]
dad.counts.toString(); // [1,2,3]

dad.reads === kid.reads; // false