//l'utilisateur doit deviner le chiffre 8 et on doit afficher un texte selon qu'il a trouvé ou pas
let guess = 8
let number1

console.log("Exercice 4: Deviner un chiffre")
while (number1 !== guess){
    number1 = prompt('Entre un chiffre')*1
    console.log(number1)
    if(number1 !== guess){
        console.log('Essaye encore')
    }
}
console.log('Bravo!')