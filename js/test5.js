/* ----------------------------------------------------------------------------------------------------------------
J'ai pas mis de paramètres à getRandomNumber mais si on veut pouvoir changer l'intervalle il vaut mieux mettre un max en paramètre et comme ça on pourra changer le max. Attention, le floor arrondi au chiffre inférieur alors il faut bien multiplier par max + 1

ça donnerait:

function getRandomNumber(max){
    return Math.floor(Math.random()*max+1
}
const solution = getRandomNumber(10)
-------------------------------------------------------------------------------------------------------------------*/

window/addEventListener('load', function(){

    let randomNumber

    function getRandomNumber(){
          randomNumber = Math.floor(Math.random()*11)
          return randomNumber
    }
    
    getRandomNumber()
    console.log('the random number is:', randomNumber)
    
          let secondNumberGuess = document.querySelector("#guess-number2-input")
          let secondNumberSpan = document.querySelector('.guess-number2-result')
          let numberOfChances = 1
    function guessSecondNumber(){
          let secondNumberValue = secondNumberGuess.value
          secondNumberValue = parseInt(secondNumberValue)
          console.log('the secondNumberValue is: ', secondNumberValue)
          for (let i = numberOfChances+1; i > 0; i--){
    
                if(secondNumberValue === randomNumber){
                      console.log('Bravo')
                      secondNumberSpan.innerText = 'Bravo!'
                      break
                } else if(secondNumberValue !== randomNumber){
                      numberOfChances--
                      console.log('Raté')
                      secondNumberSpan.innerText = 'Raté, vous n\'avez plus que ' + (numberOfChances + 1) + ' chances.'
                      break
                } 
          }
    }
    
    secondNumberGuess.addEventListener('change', guessSecondNumber)

})