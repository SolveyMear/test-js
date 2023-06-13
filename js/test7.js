//faire une fonction qui renvoie si un mot est un palindrome ou pas
window.addEventListener("load", function () {
	let wordInput = document.querySelector("#is-palindrome-input");
	let wordResultSpan = document.querySelector(".is-palindromeresult");

	function isPalindrome() {
		//debugger
		let wordInputValue = wordInput.value;
		let allCapsWord = wordInputValue.toUpperCase();
		let joinedWord = allCapsWord.split("").reverse().join("");
		if (!isNaN(parseInt(wordInputValue))) {
			wordResultSpan.innerText = "";
			return
		}
		wordResultSpan.innerText = "";
		console.log(typeof wordInputValue);

		if (joinedWord !== allCapsWord) {
			wordResultSpan.innerText = `${wordInputValue} is not a palindrome`;
			console.log("is it true?");
		} else {
			wordResultSpan.innerText = `${wordInputValue} is a palindrome`;
			console.log("hello");
			console.log(joinedWord);
		}
		if (wordInputValue == "") {
			wordResultSpan.innerText = "";
		}
	}

	wordInput.addEventListener("change", isPalindrome);
});
