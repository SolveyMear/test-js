window.addEventListener('load', function(){

    //assign variable outside scope so as to call the function
    let countdownInput = document.querySelector("#countdown-input")
    let coundownSpan = document.querySelector(".countdown-returned")
    
    function countdown(){
        let countdownInputValue = countdownInput.value
        countdownInputValue = parseInt(countdownInputValue)
        coundownSpan.innerText = ''     

        if (countdownInputValue < 0 || countdownInputValue > 10){
            coundownSpan.innerText = 'Le chiffre doit être compris entre 0 et 10'
        } else {
            for (let i = countdownInputValue; i >= 0; i--){
                coundownSpan.innerText += (' ' + i + ' - ')               
            }      
        }        
    }
    countdownInput.addEventListener('change', countdown)
})

