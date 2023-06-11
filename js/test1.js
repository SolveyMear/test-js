/*propose trois films différents selon les ages indiqués par l'utilisateur: */
window.addEventListener('load', function	() {

	
	// //lilo et stitch moins de 13 ans inclu, matrix de 14 à 18 ans, evil dead plus de 18 ans
	let birthYearInput = document.querySelector('.birth-year-input');
	function getMovie(){
		let birthYear = birthYearInput.value
		console.log('hello', {birthYear})
		birthYear = parseInt(birthYear)
		let year = 2023
		let age = (year - birthYear);
		let movieReturnedSpan = document.querySelector(".movie-returned")
		console.log(birthYear)
		console.log(year)
		console.log(age)
		console.log('by', {birthYear})

		if (isNaN(birthYear)){
			console.log('nope')
			movieReturnedSpan.innerText = "Please enter your birth year"
		} else if(age <= 13) {
			movieReturnedSpan.innerText = "Je vous conseille Lilo & Stitch";
			console.log('Lilo et Stitch')
		} else if (age < 18) {
			console.log("Je vous conseille Matrix");
		} else {
			movieReturnedSpan.innerText = "Je vous conseille Evil Dead";
		}
		
	}
	birthYearInput.addEventListener('change', getMovie)
	
	
	
})

/* ça fonctionnait pas pq mon .value qui récupère la valeur de l'input était en dehors de la fonction donc n'était pas mise à jour dans la fonction.
DOnc j'ai inclu les variables dans la fonction SAUF la prmeière qui assigne birthYearInput et qui surout appelle la fonction. On peut la sortir pq elle ne change pas, l'input c'est toujours l'input.


debbuging au début de la fonction permet de passer ligne par ligne dans la console et avoir toutes les infos, les valeurs...*/
