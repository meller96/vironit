import EventEmmiter from "./EventEmmiter";

export default class Atm extends EventEmmiter {
  constructor(atm, count) {
    super();
    this.isFree = true;
    this.atm = atm;
    this.count = count;
  }
  randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    rand = Math.round(rand);
    return rand;
  }

  setFree() {
    this.emit("Free");
    this.isFree = true;
    this.atm.style.backgroundColor = "greenyellow";
  }

  setBusy() {
    this.count++;
    this.isFree = false;
    this.atm.style.backgroundColor = "red";
    this.atm.innerHTML = this.count;
    this.emit("Busy");
    setTimeout(this.setFree.bind(this), this.randomInteger(1000, 3000));
  }
}
