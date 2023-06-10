/*propose trois films différents selon les ages indiqués par l'utilisateur: */

let birthYear = prompt('Quel est votre année de naissance?')
let year = 2023
let age = year - birthYear

// console.log('hello?')

// //lilo et stitch moins de 13 ans inclu, matrix de 14 à 18 ans, evil dead plus de 18 ans

console.log('Exercice 1: Conseiller un film selon l\'âge indiqué')
if (age <= 13){
    console.log('Je vous conseille Lilo & Stitch')
} else if (age < 18){
    console.log('Je vous conseille Matrix')
} else {
    console.log('Je vous conseille Evil Dead')
}