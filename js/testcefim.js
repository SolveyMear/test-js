//le retour

let button = document.querySelector(".btn");
let ex1Cefim = document.querySelector(".ex1cefim");
let emptyTextNode = document.createTextNode("");
let textNode = document.createTextNode("J'aime le JS !");
function returnJS() {
      button.addEventListener("click", function () {
            ex1Cefim.appendChild(emptyTextNode);
		ex1Cefim.appendChild(textNode);
	});
}
returnJS();

//un, deux...

let oneTwoInput = document.querySelector("#one-two-input");
let oneTwoSpan = document.querySelector(".one-two-return");
function unDeux() {
	oneTwoSpan.innerText = "";
	let oneTwoInputValue = oneTwoInput.value;
	oneTwoInputValue = parseInt(oneTwoInputValue);

	if (oneTwoInputValue > 2) {
		oneTwoSpan.innerText = "";
		return;
	}

	if (oneTwoInputValue === 2) {
		oneTwoSpan.innerText = "two";
	} else if (oneTwoInputValue === 1) {
		oneTwoSpan.innerText = "one";
	} else if (oneTwoInputValue === 0) {
		oneTwoSpan.innerText = "zero";
	}
}

oneTwoInput.addEventListener("change", unDeux);
