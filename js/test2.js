//on affiche que le produit d'une multiplication est positif ou négatif

//let A = prompt('entrer un nombre A')
//let B = prompt('entrer un nombre B')
let result = A * B
let signe

console.log("Exercice 2: Indiquer le résultat de la multiplication de 2 chiffres est positif ou négatif")
if (result > 0){
   signe = 'positif'
} else{
 signe = 'négatif'
}console.log(`${A} x ${B} = ${result} Le résultat est ${signe}`)