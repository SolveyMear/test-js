// FONCTIONS:

//on doit générer un chiffre au hasard et indiquer si le chiffre est bon ou pas


console.log("Exercice 5: générer un chiffre au hasard et  deviner s'il est bon")
let randomNumber
function getRandomNumber(){
   randomNumber =  Math.floor(Math.random()*11)
   return randomNumber
}

/* ----------------------------------------------------------------------------------------------------------------
là j'ai pas mis de paramètres mais si on veut pouvoir changer l'intervalle il vaut mieux mettre un max en paramètre et comme ça on pourra changer le max. Attention, le floor arrondi au chiffre inférieur alors il faut bien multiplier par max + 1

ça donnerait:

function getRandomNumber(max){
    return Math.floor(Math.random()*max+1
}
const solution = getRandomNumber(10)
-------------------------------------------------------------------------------------------------------------------*/

console.log(getRandomNumber())

function guess2(){

    for (let i = 0; i < 3; i++){
        //let numberTried = prompt('entrez un nombre entre 0 et 10')*1
        if(numberTried == randomNumber){
            console.log('Bravo')
            break
        } else if (i === 2) {
            console.log('Vous avez perdu')
        }
    }
}
console.log(guess2())

// Pour sortir de la boucle si le nombre a été trouvé, on break