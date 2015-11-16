function Parent(name) {
  this.name = name || "Adam";
}
Parent.prototype.say = function () {
  return this.name;
};

function Child(name) {}

inherit(Child, Parent);

function inherit (C, P) {
  C.prototype = new P();
}

// Usage
inherit(Child, Parent);

var parent = new Parent;
var child = new Child;
child.say(); // Adam