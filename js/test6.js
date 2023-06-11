console.log("Exercice 6:Ecrire une fonction qui devra retourner true si un chiffre est premier")
function isPremier(n) {
	if (n < 2) {
		return false;
	}
	for (let i = n - 1; i > 1; i--) {
		if (n % i === 0) {
			return false;
		}
	}
    return true;
}

console.log("0", isPremier(0));
console.log("1", isPremier(1));
console.log("2", isPremier(2));
console.log("11", isPremier(11));