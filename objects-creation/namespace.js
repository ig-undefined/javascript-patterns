/**
 * Created by Geek on 15.11.2015.
 */

var MYAPP = MYAPP || {};

MYAPP.namespace = function (ns_string) {
  var parts = ns_string.split('.')
      , parent = MYAPP
      , i;

    if (parts[0] === "MYAPP") {
        parts = parts.slice(1);
    }

    for (i = 0; i < parts.length; i += 1) {
        if (typeof parent[parts[i]] === "undefined") {
            parent[parts[i]] = {};
        }
        parent = parent[parts[i]];
    }
    return parent;
};