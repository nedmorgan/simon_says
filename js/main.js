//player constructor
class Player {
  constructor(name, score) {
    this.name = name
    this.score = score
    this.colorSeq = []
  }
}

//game variable
let game = {
  level: 0,
  interval: 3000,
  colors: [1, 2, 3, 4],
  players: [],
  currentPlayer: '',
  sequence: [],
  switch: true,
  sounds: {
    green: new Audio('media/sfx_sounds_Blip1.wav'),
    red: new Audio('media/sfx_sounds_Blip4.wav'),
    yellow: new Audio('media/sfx_sounds_Blip8.wav'),
    blue: new Audio('media/sfx_sounds_Blip10.wav')
  }
}

//default variable for reset
let defaultGame = {
  player1: `Player 1`,
  player2: `Player 2`,
  interval: 3000,
  score: 0
}

//this is how to get an audio file to play
// document.getElementById('resetButton').addEventListener('click', function() {
//   console.log(game.sounds.green)
//   game.sounds.blue.play();
// })

//new player variables
let player1 = new Player()
let player2 = new Player()

//button variables
let startButton = document.getElementById('startButton')
let resetButton = document.getElementById('resetButton')

//color div variables
const green = document.getElementById('green')
const red = document.getElementById('red')
const yellow = document.getElementById('yellow')
const blue = document.getElementById('blue')

//set current player function
function curPlayer(name) {
  game.currentPlayer = name
}

//input for player 1
function input1() {
  player1.name = prompt(`Player 1, please input your name.`)
  document.getElementById('player-one').innerHTML = player1.name
  document.getElementById('player-banner').innerHTML = player1.name
  game.players.push(player1.name)
  curPlayer(player1.name)
}

//input for player 2 and if not then take away player 2
function input2() {
  player2.name = prompt(`Player 2, please input your name.`)
  if (player2.name === null) {
    document.querySelector('.player2-score').setAttribute('style', 'display:none')
  } else {
    document.getElementById('player-two').innerHTML = player2.name
    game.players.push(player2.name)
  }
}

//the color will show and the sound will play when a color div is clicked
function greenClick() {
  let index = 1
  green.classList.add('green-blur')
  game.sounds.green.play();
  setTimeout(function () {
    green.classList.remove('green-blur')
  }, game.interval)
  decreaseTimer()
  if (player1.name === game.currentPlayer) {
    player1.colorSeq.push(index)
  } else if(player2.name !== null && player2.name === game.currentPlayer) {
    player2.colorSeq.push(index)
  }

}

function redClick() {
  let index = 2
  red.classList.add('red-blur')
  game.sounds.red.play();
  setTimeout(function () {
    red.classList.remove('red-blur')
  }, game.interval)
  decreaseTimer()
  //need to make this specific to each player
  // this.colorSeq.push(index)
}

function yellowClick() {
  let index = 3
  yellow.classList.add('yellow-blur')
  game.sounds.yellow.play();
  setTimeout(function () {
    yellow.classList.remove('yellow-blur')
  }, game.interval)
  decreaseTimer()
  //need to make this specific to each player
  // this.colorSeq.push(index)
}

function blueClick() {
  let index = 4
  blue.classList.add('blue-blur')
  game.sounds.blue.play();
  setTimeout(function () {
    blue.classList.remove('blue-blur')
  }, game.interval)
  decreaseTimer()
  //need to make this specific to each player
  // this.colorSeq.push(index)
}

//function to automatically have the color blur and sound play
function greenShow() {
  green.classList.add('green-blur')
  game.sounds.green.play();
  setTimeout(function () {
    green.classList.remove('green-blur')
  }, game.interval)
}

function redShow() {
  red.classList.add('red-blur')
  game.sounds.red.play();
  setTimeout(function () {
    red.classList.remove('red-blur')
  }, game.interval)
}

function yellowShow() {
  yellow.classList.add('yellow-blur')
  game.sounds.yellow.play();
  setTimeout(function () {
    yellow.classList.remove('yellow-blur')
  }, game.interval)
}

function blueShow() {
  blue.classList.add('blue-blur')
  game.sounds.blue.play();
  setTimeout(function () {
    blue.classList.remove('blue-blur')
  }, game.interval)
}

//function to math random through the game array of numbers
function random() {
  let randomNum = Math.ceil(Math.random() * 4)
  if (randomNum === 1) {
    greenShow()
    game.sequence.push(randomNum)
  } else if (randomNum === 2) {
    redShow()
    game.sequence.push(randomNum)
  } else if (randomNum === 3) {
    yellowShow()
    game.sequence.push(randomNum)
  } else if (randomNum === 4) {
    blueShow()
    game.sequence.push(randomNum)
  }
  return randomNum
}

//function to decrease game interval
function decreaseTimer() {
  if (game.interval > 0) {
    game.interval -= 150
    console.log(game.interval)
  } else if (game.interval <= 0) {
    alert(`There are no move levels left. You've Won!`)
  }
}

//async function to activate game
async function gameplay() {

}

//function to reset the game to start from scratch
function reset() {
  game.interval = defaultGame.interval
  document.getElementById('player-one').innerHTML = defaultGame.player1
  //player2 disappears when button is clicked. Need to fix
  document.getElementById('player-two').innerHTML = defaultGame.player2
  document.getElementById('one-score').innerHTML = defaultGame.score
  document.getElementById('two-score').innerHTML = defaultGame.score
  alert(`Press Start button to begin new game`)
}

green.addEventListener('click', greenClick)
red.addEventListener('click', redClick)
yellow.addEventListener('click', yellowClick)
blue.addEventListener('click', blueClick)

//event listener for start button
startButton.addEventListener('click', function () {
  input1()
  input2()
})

//event listener for reset button
resetButton.addEventListener('click', function () {
  reset()
})