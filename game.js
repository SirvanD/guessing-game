//user can click on any button to disable it
//clicking on reset should re-enable every button

console.log('guessing game')

let allNumbers = document.querySelectorAll('.options');
let resetBtn= document.querySelector('.reset-btn');
let guessCounter= document.querySelector('p')
let secretNumber = 7;
let messageDiv = document.querySelector('.messageDiv')

allNumbers.forEach (function(button) {
    button.addEventListener('click', handleClick)
})

// allNumbers.forEach (function(button) {
//     resetBtn.addEventListener('click', handleClick)

// })

    function handleClick(event) {        
        let theOneTheUSerClickedOn = event.target
        let userGuess = Number(theOneTheUSerClickedOn.textContent)
        if (userGuess === secretNumber) {
            messageDiv.textContent = "Welcome to the underworld!"
            for (let i =0; i < allNumbers.length; i++) {
                allNumbers[i].disabled = true;
            }     
        } else {
            theOneTheUSerClickedOn.disabled = true 
            guessFn()
        }  
           
    }      
        
        //also can use classList.toggle
        // if (theOneTheUSerClickedOn.disabled) {
        //     theOneTheUSerClickedOn.disabled = false
        // } else {
        //     theOneTheUSerClickedOn.disabled = false
        // }
        
        
        // if (theOneTheUSerClickedOn.classList.contains('selected')) {
        //     theOneTheUSerClickedOn.classList.remove('selected');
            
        // } else {
        //     theOneTheUSerClickedOn.classList.add('selected')
        // }
    
    
    function handleReset () {
        for (let i =0; i < allNumbers.length; i++) {
            allNumbers[i].disabled = false;
            resetGuessFn ()
        }        
    }
resetBtn.addEventListener('click', handleReset)

let counter = 1;


function guessFn() {
   
    guessCounter.textContent = `Number of guesses : ${counter++}`;    
}

function resetGuessFn () {
    counter = 0;
    guessCounter.textContent = `Number of guesses : ${counter}`; 
    messageDiv.textContent = "";
}









