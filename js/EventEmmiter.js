export default class EventEmmiter {
  constructor() {
    this.eventTable = {};
  }
  on(str, callback) {
    if (!this.eventTable[str]) {
      this.eventTable[str] = [];
    }
    this.eventTable[str].push(callback);
  }
  emit(str) {
    this.eventTable[str].forEach(callback => {
      callback();
    });
  }
}
