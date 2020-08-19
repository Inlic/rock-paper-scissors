let choices = [
  {id: "Rock",
   outcomes: [ 
      {Scissors: "Win"},
      {Paper: "Lose"},
      {Rock: "Tie"},
      {Lizard: "Win"},
      {Spock: "Lose"}
   ],
   img: "/rock-paper-scissors/assets/rock.jpg"
  },
  {id: "Paper",
   outcomes: [ 
    {Scissors: "Lose"},
    {Paper: "Tie"},
    {Rock: "Win"},
    {Lizard: "Lose"},
    {Spock: "Win"}
   ],
   img: "/rock-paper-scissors/assets/paper.jpg"
  },
  {id: "Scissors",
   outcomes: [ 
    {Scissors: "Tie"},
    {Paper: "Win"},
    {Rock: "Lose"},
    {Lizard: "Win"},
    {Spock: "Lose"}
   ],
  img: "/rock-paper-scissors/assets/scissors.jpg"
  },
  {id: "Lizard",
   outcomes: [ 
    {Scissors: "Lose"},
    {Paper: "Win"},
    {Rock: "Lose"},
    {Lizard: "Tie"},
    {Spock: "Win"}
   ],
  img: "/rock-paper-scissors/assets/lizard.jpg"
  },
  {id: "Spock",
   outcomes: [ 
    {Scissors: "Win"},
    {Paper: "Lose"},
    {Rock: "Win"},
    {Lizard: "Lose"},
    {Spock: "Tie"}
   ],
  img: "/rock-paper-scissors/assets/spock.jpg"
  }
]

function drawDefault(){
  document.getElementById("player-image").innerHTML = "<img src='/rock-paper-scissors/assets/default.jpg'><h1 class='text-secondary'>Waiting on Player<h1>"
  document.getElementById("ai-image").innerHTML = "<img src='/rock-paper-scissors/assets/default.jpg'>"
}

function drawButton(){
  let template = ""
  for(let i = 0; i < choices.length; i++){
    let choice = choices[i]
    template += `<button class="btn btn-primary mx-3 text-white" onclick="drawPlayer('${choice.id}')">${choice.id}</button>`
  }
  document.getElementById("player-choice").innerHTML = template
}

function drawPlayer(playerChoice){
  let playerIndex = choices.findIndex(c => c.id == playerChoice)
  let playerImage = choices[playerIndex].img
  document.getElementById("player-image").innerHTML = `<img class='animate' src='${playerImage}'><h1 class='text-secondary'>Player chooses ${playerChoice}</h1>`
  drawComputer(playerIndex)  
}

function drawComputer(playerIndex){
  let aiChoice = choices[playerIndex].outcomes[Math.floor(Math.random()*choices[playerIndex].outcomes.length)]
  let aiList = Object.entries(aiChoice)
  let aiID = aiList['0'][0]
  let gameStatus = aiList['0'][1]
  let aiIndex = choices.findIndex(c => c.id == aiID)
  let aiImage = choices[aiIndex].img
  document.getElementById("ai-image").innerHTML = `<img class='animate' src='${aiImage}'><h1 class='text-white animate'>Computer chooses ${aiID}</h1>`
  document.getElementById("matchup-outcome").innerHTML = `<h1 class = 'animate' >${gameStatus}</h1>`
}

function drawInitial(){
  drawDefault()
  drawButton()
}


//draw the initial board
// default image for player
// buttons for player rock paper scissors
// default image for computer choice
// computer plays after player
// rand function for computer choice 0 choices.length
// message once computer chooses

drawInitial()