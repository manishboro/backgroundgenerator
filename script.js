var code = document.getElementById("bg-value--code");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var direction = document.querySelector(".select");
var copyText = document.getElementById("bg-code");
var button = document.querySelector(".button");

function setGradient() {
	body.style.background = 
	"linear-gradient("+ direction.value +", " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")" ;

	code.value = body.style.background + ";";
}

function copyTextFunc() {
	copyText = document.getElementById("bg-value--code");

	/* Select the text field */
	copyText.select();
	copyText.setSelectionRange(0, 99999); /*For mobile devices*/
  
	/* Copy the text inside the text field */
	document.execCommand("copy");
  
	/* Alert the copied text */
	alert("Copied to clip-board : " + copyText.value);
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

direction.addEventListener("click", setGradient);

//button.addEventListener("click", console.log('hello'));

