var readline = require('readline-sync');
const possibleWords = ["javascript","github"]
let win = []
let lose = []
let livesLeft = 7
let correctLetters = []
let incorrectLetters = []
let selectedWord = possibleWords[Math.floor(Math.random() * possibleWords.length)] // CHOSING RANDOM WORD
let arrayWord = selectedWord.split("")   //SPLITTING THE RANDOMLY SELECTED WORD INTO ARRAY
let hiddenWord = []



for (h=0; h<arrayWord.length; h++){   // LOOP TO DRAW UNDERSCORES FOR THE LENGTH OF THE WORD
    hiddenWord.push("_");            // REPLACING LETTERS WITH UNDERSCORES
}

function checkTillWin() {   // FUNCTION WHICH WILL LOOP UNTIL EITHER
                           // WIN OR LOSE CONDITION IS MET (1)


        //BELOW IS INPUT FROM PLAYER 
    var guess = readline.question("Guess your letter...").toLowerCase()

    arrayWord.forEach(function(letter){
        if (guess == letter){ // IF GUESS LETTER EXISTS IN ARRAYWORD
                                correctLetters.push(guess)} // PUSH CORRECT GUESS TO CORRECTLETTERS
        if (guess !== letter){
    incorrectLetters.push(guess) && livesLeft --
    return
        }})

    for (i=0; i>arrayWord.length; i++){
      if (guess == arrayWord[i]){
        hiddenWord[i] = guess
        console.log("Well done! Have another guess")
        
    }
}}
console.log(hiddenWord)
if (win == false && lose == false){   // LOGIC TO CHECK WHETHER TO RUN THE LOOP (1)
    checkTillWin()                   
}

/*
// BELOW ARE VISIBLE VARIABLES FOR TESTING 
console.log(correctLetters)
console.log(incorrectLetters)
//console.log(guess)
console.log(arrayWord)
console.log(hiddenWord)
*/
