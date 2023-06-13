/* ----------------------------------------------------------------------------------------------------------------
J'ai pas mis de paramètres à getRandomNumber mais si on veut pouvoir changer l'intervalle il vaut mieux mettre un max en paramètre et comme ça on pourra changer le max. Attention, le floor arrondi au chiffre inférieur alors il faut bien multiplier par max + 1

ça donnerait:

function getRandomNumber(max){
    return Math.floor(Math.random()*max+1
}
const solution = getRandomNumber(10)
-------------------------------------------------------------------------------------------------------------------*/

window.addEventListener('load', function(){

    let randomNumber

    function getRandomNumber(){
          randomNumber = Math.floor(Math.random()*11)
          return randomNumber
    }
    
    getRandomNumber()
    console.log('the random number is:', randomNumber)
    
          let secondNumberGuess = document.querySelector("#guess-number2-input")
          let secondNumberSpan = document.querySelector('.guess-number2-result')
          let numberOfChances = 3
          let isBravo = false
    function guessSecondNumber(){
        
        let secondNumberValue = secondNumberGuess.value
        secondNumberValue = parseInt(secondNumberValue)
        console.log('the secondNumberValue is: ', secondNumberValue)
        if (numberOfChances === 0){
            return
        }
        if(isBravo === true){
            return
        }
        numberOfChances--
          
          if(secondNumberValue === randomNumber){
              console.log('Bravo')
              secondNumberSpan.innerText = 'Bravo!'
              isBravo = true

            } else if(secondNumberValue !== randomNumber){
                console.log('Raté')
                secondNumberSpan.innerText = 'Raté, vous n\'avez plus que ' + (numberOfChances) + ' chances.'
            }
            if (numberOfChances === 0 && secondNumberValue !== randomNumber){
                secondNumberSpan.innerText = 'Vous avez perdu'
            }
          
    }
    
    secondNumberGuess.addEventListener('change', guessSecondNumber)

})