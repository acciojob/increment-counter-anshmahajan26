let count = 0;

let counter = document.getElementById("counter");
let btn = document.getElementById("incrementBtn");

btn.addEventListener("click", function () {
  alert(count);          // show un-incremented value
  count++;               // increment
  counter.innerHTML = count; // update UI
});
