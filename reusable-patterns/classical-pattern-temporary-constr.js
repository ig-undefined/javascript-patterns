// Good
function inherit(C, P) {
  var F = function () {};
  F.prototype = P.prototype;
  C.prototype = new F();
}

// Better
function inherit(C, P) {
  var F = function () {};
  F.prototype = P.prototype;
  C.prototype = new F();
  C.uber = P.prototype; // Superclass link
}

// Will have this bad moment
function Parent() {}
function Child() {}
inherit(Child, Parent);

var kid = new Child();
kid.constructor.name; // Parent
kid.constructor == Parent; // true

// The Best
function inherit(C, P) {
  var F = function () {};
  F.prototype = P.prototype;
  C.prototype = new F();
  C.uber = P.prototype;
  C.prototype.constructor = C;
}

// ROCK OPTION FOR ROCKSTARS
var inherit = (function () {
  var F = function () {};

  return function (C, P) {
    F.prototype = P.prototype;
    C.prototype = new F();
    C.uber = P.prototype;
    C.prototype.constructor = C;
  }
}());