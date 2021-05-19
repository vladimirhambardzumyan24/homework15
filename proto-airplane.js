let Airplane = {
  takeOff: function () {
    this.isFlying = true;
  },
  land: function () {
    this.isFlying = false;
  },
};

let Fly = {
  __proto__: Airplane,
  isFlying: false,
};

Fly.takeOff();
console.log(Fly.isFlying);
Fly.land();
console.log(Fly.isFlying);
