function Parent(name) {
  this.name = name || "Adam";
}
Parent.prototype.say = function () {
  return this.name;
};

function Child(name) {
  Parent.apply(this, arguments);
}

function inherit(C, P) {
  C.prototype = P.prototype;
}

// Usage
inherit(Child, Parent);
