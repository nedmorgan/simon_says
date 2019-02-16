// player constructor
class Player {
  constructor(name) {
    this.name = name
    this.score = 0
    this.colorSeq = []
  }
}

// game variable
let game = {
  score: 0,
  interval: 3000,
  players: [],
  currentPlayer: '',
  sequence: [],
  track: false,
  sounds: {
    green: new Audio('media/sfx_sounds_Blip1.wav'),
    red: new Audio('media/sfx_sounds_Blip4.wav'),
    yellow: new Audio('media/sfx_sounds_Blip8.wav'),
    blue: new Audio('media/sfx_sounds_Blip10.wav')
  }
}

// default variable for reset
let defaultGame = {
  player1: `Player 1`,
  player2: `Player 2`,
  interval: 3000,
  score: 0
}

// new player variables
let player1 = new Player()
let player2 = new Player()

// game score variable
let value = 1

// button variables
let startButton = document.getElementById('startButton')
let resetButton = document.getElementById('resetButton')

// color div variables
const green = document.getElementById('green')
const red = document.getElementById('red')
const yellow = document.getElementById('yellow')
const blue = document.getElementById('blue')

// set current player function
function curPlayer(name) {
  game.currentPlayer = name
  document.getElementById('player-banner').innerHTML = name
}

// function to keep score
function score(num) {
  game.score += num
}

// input for player 1
function input1() {
  player1.name = prompt('Player 1, please input your name.')
  document.getElementById('player-one').innerHTML = player1.name
  game.players.push(player1.name)
  curPlayer(player1.name)
}

// input for player 2 and if not then take away player 2
function input2() {
  player2.name = prompt(`Player 2, please input your name.`)
  document.getElementById('player-two').innerHTML = player2.name
  game.players.push(player2.name)
  if (player2.name === '') {
    document.querySelector('.player2-score').setAttribute('style', 'display:none')
  }
}

// function to check if arrays match
function checkArray(arr1, arr2) {
  arr1.forEach((e1) => arr2.forEach((e2) => {
    if (e1 !== e2) {
      game.track = false
    } else {
      game.track = true
    }
  }))
}

// function to decrease game interval
function decreaseTimer() {
  if (game.interval > 0) {
    game.interval -= 150
    console.log(game.interval)
  } else if (game.interval <= 0) {
    alert(`There are no move levels left. You've Won!`)
  }
}

// the color will show and the sound will play when a color div is clicked
function greenClick() {
  let index = 1
  green.classList.add('green-blur')
  game.sounds.green.play()
  setTimeout(function () {
    green.classList.remove('green-blur')
  }, game.interval)
  decreaseTimer()
  if (player1.name === game.currentPlayer) {
    player1.colorSeq.push(index)
    checkArray(player1.colorSeq, game.sequence)
    if (game.track === true) {
      score(value)
      player1.score = game.score
      document.getElementById('one-score').innerHTML = player1.score
    } else {
      document.getElementById('best-score').innerHTML = player1.score
      alert(`Bad Choice. You have lost!`)
      curPlayer(player2.name)
      alert(`Player2, your turn`)
      game.interval = defaultGame.interval
      game.sequence = []
      game.score = 0
    }
  } else if (player2.name === game.currentPlayer) {
    player2.colorSeq.push(index)
    checkArray(player2.colorSeq, game.sequence)
    if (game.track === true) {
      score(value)
      player2.score = game.score
      document.getElementById('two-score').innerHTML = player2.score
    } else {
      alert(`Bad Choice. You have lost!`)
      if (player2.score > player1.score) {
        document.getElementById('best-score').innerHTML = player2.score
        alert(`${player2.name} you have the high score`)
      }
    }
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
  if (player1.name === game.currentPlayer) {
    player1.colorSeq.push(index)
    checkArray(player1.colorSeq, game.sequence)
    if (game.track === true) {
      score(value)
      player1.score = game.score
      document.getElementById('one-score').innerHTML = player1.score
    } else {
      document.getElementById('best-score').innerHTML = player1.score
      alert(`Bad Choice. You have lost!`)
      curPlayer(player2.name)
      alert(`Player2, your turn`)
      game.interval = defaultGame.interval
      game.sequence = []
      game.score = 0
    }
  } else if (player2.name === game.currentPlayer) {
    player2.colorSeq.push(index)
    checkArray(player1.colorSeq, game.sequence)
    if (game.track === true) {
      score(value)
      player2.score = game.score
      document.getElementById('two-score').innerHTML = player2.score
    } else {
      alert(`Bad Choice. You have lost!`)
      if (player2.score > player1.score) {
        document.getElementById('best-score').innerHTML = player2.score
        alert(`${player2.name} you have the high score`)
      }
    }
  }
}

function yellowClick() {
  let index = 3
  yellow.classList.add('yellow-blur')
  game.sounds.yellow.play();
  setTimeout(function () {
    yellow.classList.remove('yellow-blur')
  }, game.interval)
  decreaseTimer()
  if (player1.name === game.currentPlayer) {
    player1.colorSeq.push(index)
    checkArray(player1.colorSeq, game.sequence)
    if (game.track === true) {
      score(value)
      player1.score = game.score
      document.getElementById('one-score').innerHTML = player1.score
    } else {
      document.getElementById('best-score').innerHTML = player1.score
      alert(`Bad Choice. You have lost!`)
      curPlayer(player2.name)
      alert(`Player2, your turn`)
      game.interval = defaultGame.interval
      game.sequence = []
      game.score = 0
    }
  } else if (player2.name === game.currentPlayer) {
    player2.colorSeq.push(index)
    checkArray(player2.colorSeq, game.sequence)
    if (game.track === true) {
      score(value)
      player2.score = game.score
      document.getElementById('two-score').innerHTML = player2.score
    } else {
      alert(`Bad Choice. You have lost!`)
      if (player2.score > player1.score) {
        document.getElementById('best-score').innerHTML = player2.score
        alert(`${player2.name} you have the high score`)
      }
    }
  }
}

function blueClick() {
  let index = 4
  blue.classList.add('blue-blur')
  game.sounds.blue.play();
  setTimeout(function () {
    blue.classList.remove('blue-blur')
  }, game.interval)
  decreaseTimer()
  if (player1.name === game.currentPlayer) {
    player1.colorSeq.push(index)
    checkArray(player1.colorSeq, game.sequence)
    if (game.track === true) {
      score(value)
      player1.score = game.score
      document.getElementById('one-score').innerHTML = player1.score
    } else {
      document.getElementById('best-score').innerHTML = player1.score
      alert(`Bad Choice. You have lost!`)
      curPlayer(player2.name)
      alert(`Player2, your turn`)
      game.interval = defaultGame.interval
      game.sequence = []
      game.score = 0
    }
  } else if (player2.name === game.currentPlayer) {
    player2.colorSeq.push(index)
    checkArray(player2.colorSeq, game.sequence)
    if (game.track === true) {
      score(value)
      player2.score = game.score
      document.getElementById('two-score').innerHTML = player2.score
    } else {
      alert(`Bad Choice. You have lost!`)
      if (player2.score > player1.score) {
        document.getElementById('best-score').innerHTML = player2.score
        alert(`${player2.name} you have the high score`)
      }
    }
  }
}

// function to automatically have the color blur and sound play
function greenShow() {
  let numVal = 1
  green.classList.add('green-blur')
  game.sounds.green.play()
  setTimeout(function () {
    green.classList.remove('green-blur')
  }, game.interval)
  game.sequence.push(numVal)
}

function redShow() {
  let numVal = 2
  red.classList.add('red-blur')
  game.sounds.red.play()
  setTimeout(function () {
    red.classList.remove('red-blur')
  }, game.interval)
  game.sequence.push(numVal)
}

function yellowShow() {
  let numVal = 3
  yellow.classList.add('yellow-blur')
  game.sounds.yellow.play()
  setTimeout(function () {
    yellow.classList.remove('yellow-blur')
  }, game.interval)
  game.sequence.push(numVal)
}

function blueShow() {
  let numVal = 4
  blue.classList.add('blue-blur')
  game.sounds.blue.play()
  setTimeout(function () {
    blue.classList.remove('blue-blur')
  }, game.interval)
  game.sequence.push(numVal)
}

// function to math random through the game array of numbers
function random() {
  let randomNum = Math.ceil(Math.random() * 4)
  if (randomNum === 1) {
    greenShow()
  } else if (randomNum === 2) {
    redShow()
  } else if (randomNum === 3) {
    yellowShow()
  } else if (randomNum === 4) {
    blueShow()
  }
  return randomNum
}

// async function to activate game
async function gameplay() {

}

// function to reset the game to start from scratch
function reset() {
  game.interval = defaultGame.interval
  document.getElementById('player-one').innerHTML = defaultGame.player1
  document.getElementById('player-two').innerHTML = defaultGame.player2
  document.getElementById('player-banner').innerHTML = ''
  document.getElementById('one-score').innerHTML = defaultGame.score
  document.getElementById('two-score').innerHTML = defaultGame.score
  alert(`Press Start button to begin new game`)
}

green.addEventListener('click', greenClick)
red.addEventListener('click', redClick)
yellow.addEventListener('click', yellowClick)
blue.addEventListener('click', blueClick)

// event listener for start button
startButton.addEventListener('click', function () {
  input1()
  input2()
})

// event listener for reset button
resetButton.addEventListener('click', function () {
  reset()
})