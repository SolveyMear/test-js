//faire une fonction qui renvoie si un mot est un palindrome ou pas

console.log("Exercice 7: Ecrire une fonction qui renvroi true si un mot est un palindrome")
function isPalindrome(word) {
    let allCapsWord = word.toUpperCase()
	let joinedWord = allCapsWord.split("").reverse().join('');
	// splitWord.reverse();
    // //console.log(reversedWord)
	// let joinedWord = splitWord.join("");
    // //console.log(joinedWord)
	if (joinedWord !== allCapsWord) {
		return false;
		console.log("is it true?");
	} else {
		return true;
		console.log("hello");
		console.log(joinedWord);
	}
}
console.log(isPalindrome("kayak"));
console.log(isPalindrome("sos"));
console.log(isPalindrome("seves"));
console.log(isPalindrome("Kayak"));
console.log(isPalindrome("SOS"));
console.log(isPalindrome("ressasser"));
console.log(isPalindrome("bonjour"));
