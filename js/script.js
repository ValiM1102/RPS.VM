const playerTXT = document.querySelector("#playerTXT");
const computerTXT = document.querySelector("#computerTXT");
const resultTXT = document.querySelector("#resultTXT");
const choiseBTN = document.querySelectorAll(".choiseBTN");

let player;
let computer;
let result;

choiseBTN.forEach(button => button.addEventListener("click", () => {
    player = button.textContent;
    computerTurn();
    playerTXT.textContent = `Player: ${player}`;
    computerTXT.textContent = `Computer: ${computer}`;
    resultTXT.textContent = checkWinner()
}))
//computer moves definition
function computerTurn(){
    const randNum =  Math.floor(Math.random() * 3) + 1;
    switch(randNum){
        case 1 :
            computer = "ROCK";
            break;
        case 2 :
            computer = "SCISSORS";
            break;
        case 3 :
            computer = "PAPER";
            break;
    }
}
//wiiner check definition
function checkWinner(){
    if(player == computer){
        return "Draw!";
    }
    else if(computer == "ROCK"){
        return (player == "PAPER") ? "You Win!" : "You Lose!";
    }
    else if(computer == "PAPER"){
        return (player == "SCISSORS") ? "You Win!" : "You Lose!";
    }
    else if(computer == "SCISSORS"){
        return (player == "ROCK") ? "You Win!" : "You Lose!";
    }
}