let code = document.getElementById("linear-gradient-code--input");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let setBackgroundColor = document.getElementById("gradient");
let direction = document.querySelector(".select-direction--options");
let button = document.querySelector(".button");

function setGradient() {
  setBackgroundColor.style.background =
    "linear-gradient(" +
    direction.value +
    ", " +
    color1.value +
    ", " +
    color2.value +
    ")";

  code.value = setBackgroundColor.style.background + ";";
}

function copyTextFunc() {
  /* Select the text field */
  code.select();
  code.setSelectionRange(0, 99999); /*For mobile devices*/

  /* Copy the text inside the text field */
  document.execCommand("copy");
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

direction.addEventListener("click", setGradient);

button.addEventListener("click", copyTextFunc);
