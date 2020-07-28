//declare our variables

let btns = document.querySelectorAll(".btn");
let countResult = document.querySelector(".countResult");

btns.forEach(function (btn) {
  btn.addEventListener("click", counterLogic);
});

function counterLogic(e) {
  if (e.target.textContent === "increase") {
    countResult.textContent++;
  } else if (e.target.textContent === "decrease") {
    countResult.textContent--;
  }
}
