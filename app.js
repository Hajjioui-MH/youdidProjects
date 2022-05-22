// La selection des elements HTML

var increase = document.querySelector(".increase");
var counter = document.querySelector("#value");
var reset = document.querySelector(".reset");
var decrease = document.querySelector(".decrease");

var valeurInitial = 0;

increase.addEventListener("click", function () {
  valeurInitial = valeurInitial + 1;

  counter.textContent = valeurInitial;

  changeColor();
});

reset.addEventListener("click", function () {
  valeurInitial = 0;
  counter.textContent = 0;
  changeColor();
});

decrease.addEventListener("click", function () {
  valeurInitial = valeurInitial - 1;

  counter.textContent = valeurInitial;

  changeColor();
});

function changeColor() {
  if (valeurInitial > 0) {
    counter.style.color = "green";
  } else if (valeurInitial < 0) {
    counter.style.color = "red";
  } else {
    counter.style.color = "black";
  }
}
