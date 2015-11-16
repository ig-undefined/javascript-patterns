var Cat = function () {
  this.legs = 4;
  this.say = function () {
    return "meow";
  };
};
var Bird = function () {
  this.wings = 2;
  this.fly = true;
};
var CatWings = function () {
  Cat.apply(this);
  Bird.apply(this);
};

var jane = new CatWings();
console.dir(jane); // Cat + Bird properties