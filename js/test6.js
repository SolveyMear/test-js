console.log(
	"Exercice 6:Ecrire une fonction qui devra retourner true si un chiffre est premier"
);

window.addEventListener("load", function () {
	let isPrimeInput = document.querySelector("#is-prime-input");
	let isPrimeSpan = document.querySelector(".is-prime-result");
	console.log("isPrimeSpan: ", { isPrimeSpan });

	function isPrime() {
		//debugger;
		console.log("isPrimeInput", isPrimeInput);
		isPrimeSpan.innerText = "";
		let isPrimeInputValue = isPrimeInput.value;
		isPrimeInputValue = parseInt(isPrimeInputValue);

		if (isPrimeInputValue < 2) {
			isPrimeSpan.innerText = isPrimeInputValue + " is not a prime number.";
			//return false;
		}
		for (let i = isPrimeInputValue - 1; i > 1; i--) {
			if (isPrimeInputValue % i === 0) {
				isPrimeSpan.innerText = `${isPrimeInputValue} is not a prime number.`;
				//return false;
			} else {
				isPrimeSpan.innerText = isPrimeInputValue + " is a prime number.";
			}
		}
		if (isPrimeInputValue == 2){
			isPrimeSpan.innerText = isPrimeInputValue + " is a prime number.";
		}

		//document.querySelector('.is-prime-result').innerText = (isPrimeInputValue) + ' is a prime number'
		//return true;
	}

	isPrimeInput.addEventListener("change", isPrime);
});
