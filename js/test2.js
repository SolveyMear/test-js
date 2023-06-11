//on affiche que le produit d'une multiplication est positif ou négatif

//let A = prompt('entrer un nombre A')
//let B = prompt('entrer un nombre B')

window.addEventListener('load', function	() {

let inputA = document.querySelector("#first-number-input");
let inputB = document.querySelector("#second-number-input");
let ex2Result = document.querySelector(".ex2-result-span");

function isPositive() {
	let inputAValue = inputA.value;
	inputAValue = parseInt(inputAValue);
   console.log('A', {inputAValue})
	let inputBValue = inputB.value;
	inputBValue = parseInt(inputBValue);
   console.log('B', {inputBValue})

	let result = inputAValue * inputBValue;
	let sign;

	console.log(
		"Exercice 2: Indiquer le résultat de la multiplication de 2 chiffres est positif ou négatif"
	);
	if (result > 0) {
		sign = "positif";
	} else {
		sign = "négatif";
	}
	ex2Result.innerText = `${inputAValue} x ${inputBValue} = ${result} Le résultat est ${sign}`;
}

inputB.addEventListener('change', isPositive)

})