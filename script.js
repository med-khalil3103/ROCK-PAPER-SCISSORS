function computerPlay() { //computer picks a random
  const arr = ['rock', 'paper', 'scissors'];
  let x = Math.floor(Math.random() * 3);

  return arr[x];
}
// console.log(computerPlay());   //computer play testing

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  // console.log('you picked ' + playerSelection)
  // console.log('the computer picked ' + computerSelection) //selection testing
  if (playerSelection == 'rock' && computerSelection == 'scissors') {
    return "W";
  }
  else if (playerSelection == 'paper' && computerSelection == 'rock') {
    return "W";
  }
  else if (playerSelection == 'scissors' && computerSelection == 'paper') {
    return "W";
  }
  if (playerSelection == 'scissors' && computerSelection == 'rock') {
    return "L";
  }
  else if (playerSelection == 'rock' && computerSelection == 'paper') {
    return "L";
  }
  else if (playerSelection == 'paper' && computerSelection == 'scissors') {
    return "L";
  }
  else if (playerSelection == computerSelection) {
    return "T";
  }
}
// const playerSelection = "Rock";
// const computerSelection = computerPlay();
// console.log(playRound(playerSelection, computerSelection));  // playRound testing

function game() {
  let playerCount = 0;
  let computerCount = 0;
  // let n = 0;
  // while (playerCount < 5 || computerCount < 5) {
  //   n++
  for (let i = 0; i < 1000; i++) {
    let playerSelection = prompt('pick your play');
    let computerSelection = computerPlay();
    let result = playRound(playerSelection, computerSelection);
    if (result == "W") {
      playerCount++;
      console.log("you won this round")
    }
    else if (result == "L") {
      computerCount++;
      console.log("you lost this round")
    }
    else if (result == "T") {
      console.log("you tied this round")
    }
    console.log('Your score is ' + playerCount);
    console.log('the computer\'s score is ' + computerCount);
    if (playerCount === 5 || computerCount === 5) { break; }
  }

  if (playerCount > computerCount) {
    return console.log('You won');
  }
  else if (playerCount < computerCount) {
    return console.log('You lost');
  }

}
game();
// function game2() {
//   let playerCount = 0;
//   let computerCount = 0;
//   while (playerCount > 5 || computerCount > 5) {
//     playerSelection = prompt('pick your play');
//     computerSelection = computerPlay();
//     result = playRound(playerSelection, computerSelection);
//     if (result == "You Win! Scissors beats Paper") {
//       return playerCount++;
//     }
//     else if ("You Lose! Scissors beats Paper") {
//       return computerCount++;
//     }
//   }
// }
// game2();
