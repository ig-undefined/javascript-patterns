function Parent(name) {
  this.name = name || "Adam";
}
Parent.prototype.say = function() {
  return this.name;
};

function Child(name) {
  Parent.apply(this, arguments);
}

var kid = new Child("Patrick"); // new child
kid.name; // Patrick
typeof kid.say; // undefined