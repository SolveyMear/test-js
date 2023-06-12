//l'utilisateur doit deviner le chiffre 8 et on doit afficher un texte selon qu'il a trouvé ou pas
window.addEventListener("load", function () {
	let numberTest = document.querySelector("#guess-number1-input");
	let guessResultSpan = document.querySelector(".guess-number1-result");
console.log(numberTest)
	function guessNumber() {
        //debugger
		let numberTestValue = numberTest.value;
		numberTestValue = parseInt(numberTestValue);
		let answer = 8;
        guessResultSpan.innerText = ''
		while (numberTestValue !== answer) {
			console.log(numberTestValue);
			console.log("hello?");
			if (numberTestValue !== answer) {
				guessResultSpan.innerText = "Raté, essaye encore";
				console.log("Essaye encore");
                return
			}
		}
		guessResultSpan.innerText = "Bravo! La réponse était 8";
		console.log("Bravo!");
	}
	numberTest.addEventListener("change", guessNumber);
});
