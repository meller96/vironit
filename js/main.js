import Que from "./Que";
import Atm from "./Atm";
let count1 = 0;
let count2 = 0;
let atm1_elem = document.getElementById("atm-1");
let atm2_elem = document.getElementById("atm-2");
let atm1 = new Atm(atm1_elem, count1);
let atm2 = new Atm(atm2_elem, count2);
let atms = [atm1, atm2];

let q = new Que();

function randomInteger(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  rand = Math.round(rand);
  return rand;
}
atm1.on("Free", function() {
  console.log("Is free");
});
atm2.on("Free", function() {
  console.log("Is free");
});
atm1.on("Busy", function() {
  console.log("Is busy");
});
atm2.on("Busy", function() {
  console.log("Is busy");
});
q.on("add person", function() {
  let foundAtm = atms.find(function(atm) {
    return atm.isFree;
  });

  if (foundAtm) {
    setTimeout(
      function(atm) {
        q.lessPerson();
        atm.setBusy();
      }.bind(null, foundAtm),
      1000
    );
  }
});
let func = function() {
  q.addPerson();
  setTimeout(func, randomInteger(500, 1000));
};
func();
