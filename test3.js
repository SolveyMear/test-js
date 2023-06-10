//on affiche par ordre décroissant tous les chiffres avant le chiffre indiqué par l"utilisateur

let number = prompt('Entrez chiffre entre 0 et 10')

console.log("Exercice3: afficher par ordre décroissant les chiffres")
if (number < 0 || number > 10){
    console.log('Le chiffre doit être compris entre 0 et 10')
} else {
    for (let i = number; i >= 0; i--){
        console.log(i)
    }
while(number >= 0){
    console.log(number)
    number--
}
}

//PROBLEME DANS CELUI LA, IL AFFICHE 2 FOIS LA BOUCLE