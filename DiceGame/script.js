//================ Task 1 ==============================
// Create a function (rollDice)
// Roll Two "dice" one for the player and one for the computer
// Use one variables for the (player) and one for the (computer)
// (use a random number from 1-6 to represent a dice)

// If the player's dice roll is higher than the computer dice roll,
// console.log("PLAYER WINS")
// otherwise, log ("COMPUTER WINS")
// Use a ternary to check for the winner
// ----- After testing it, remove the console.log()
// leaving just the string "PLAYER WINS" or "COMPUTER WINS" and save it to a variable (winner)
// FINALLY: return all three variables using an array
// return [VALUE1, VALUE2, VALUE3]
const btn1 = document.querySelector("#play-game");
const btn2 = document.querySelector("#reset");



const dice = Math.ceil(Math.random() * 6);
const dice1 = Math.ceil(Math.random() * 6);
let winner = "";

let player;
let computer;

function rollDice() {
  player = dice;
  computer = dice1;
  if (player > computer) {
    console.log("PLAYER WINS");
    console.log(player);
    winner = "PLAYER WINS";
  } else if (player === computer){ 
       winner = "Tie";
       return winner;

}else {
    console.log("COMPUTER WINS");
    winner = "COMPUTER WINS";
    console.log(computer);
  }

  return [player, computer, winner];
}

// ============ Task 2 ==============================
// Let's update our UI (User Interface)
// Create a function (displayScore)
// Create a new a div displaying:
// Computer Score: , Player Score:  & the Winner:
// so there is a running record of game data.
// Append the new div to the parent div on the HTML.

function displayScore() {
  const pDiv = document.querySelector("#winner");
  const div = document.createElement("div");
  div.innerHTML = `<p>Computer Score: ${computer} </p> 
                  <p> Player Score: ${player} & </p>
                  <p>the Winner: ${winner}</p>`;
  pDiv.appendChild(div);
}

btn1.addEventListener("click", rollDice);
btn1.addEventListener("click", displayScore);
// Create a Reset Function (resetGame)
// REMOVE the div with the game score, leaving just the parent div
// creating a clean slate for a new set of games :)

function resetGame(){
  document.querySelector('#winner').firstElementChild.remove();
}
btn2.addEventListener("click",resetGame)
// ==== Final Step =====================
// Create a new function (playGame):
// Call the rollDice and the displayScore function inside this function

// ========= Don't forget to add your events listeners
// Attach the (playGame) function to the play game button
// Attach the (resetGame) function to the reset button

// ===== Now let's host this game in GITHUB PAGES and style it !!!
