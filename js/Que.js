import EventEmmiter from "./EventEmmiter";

let queueCounter = document.getElementById("count");

export default class Que extends EventEmmiter {
  constructor() {
    super();
    this.queueCount = 0;
  }
  addPerson() {
    this.queueCount++;
    queueCounter.innerHTML = this.queueCount;
    this.emit("add person");
  }
  lessPerson() {
    this.queueCount--;
    queueCounter.innerHTML = this.queueCount;
  }
}
