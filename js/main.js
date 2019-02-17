// player constructor
class Player {
  constructor(name) {
    this.name = name
    this.score = 0
    this.sequence = []
  }
}

// game variable
let game = {
  score: 0,
  interval: 3000,
  players: [],
  currentPlayer: '',
  sequence: [],
  track: true,
  compTurn: false,
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

// offset variable
let offset = 0

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
function score() {
  if (player1.name === game.currentPlayer) {
    game.score = game.sequence.length
    player1.score = game.score
    document.getElementById('one-score').innerHTML = player1.score;
  } else if (player2.name === game.currentPlayer) {
    game.score = game.sequence.length
    player2.score = game.score
    document.getElementById('two-score').innerHTML = player2.score;
  }
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
    document.getElementById('player-two').setAttribute('style', 'display:none')
  }
}

// function to decrease game interval
function decreaseTimer() {
  if (game.interval > 0) {
    game.interval -= 150
  } else if (game.interval <= 0) {
    alert(`There are no move levels left. You've Won!`)
  }
}

// the color will show and the sound will play when a color div is clicked
function greenClick() {
  green.classList.add('green-blur')
  game.sounds.green.play()
  setTimeout(function () {
    green.classList.remove('green-blur')
  }, 250)
  if (player1.name === game.currentPlayer) {
    player1.sequence.push(1)
    if (player1.sequence.length === game.sequence.length) {
      checkArray(player1.sequence, game.sequence)
      if (game.track == false) {
        document.getElementById('best-score').innerHTML = player1.score
        alert(`Bad Choice. You have lost!`)
        curPlayer(player2.name)
        alert(`Player2, your turn`)
        game.interval = defaultGame.interval
        game.sequence = []
        game.score = 0
      }
    }
  } else if (player2.name === game.currentPlayer) {
    player2.sequence.push(1)
    checkArray(player2.sequence, game.sequence)
    if (game.track == false) {
      alert(`Bad Choice. You have lost!`)
      if (player2.score > player1.score) {
        document.getElementById('best-score').innerHTML = player2.score
        alert(`${player2.name} you have the high score`)
      }
    }
  }
}

function redClick() {
  red.classList.add('red-blur')
  game.sounds.red.play();
  setTimeout(function () {
    red.classList.remove('red-blur')
  }, 250)
  if (player1.name === game.currentPlayer) {
    player1.sequence.push(2)
    if (player1.sequence.length === game.sequence.length) {
      checkArray(player1.sequence, game.sequence)
      if (game.track == false) {
        document.getElementById('best-score').innerHTML = player1.score
        alert(`Bad Choice. You have lost!`)
        curPlayer(player2.name)
        alert(`Player2, your turn`)
        game.interval = defaultGame.interval
        game.sequence = []
        game.score = 0
      }
    }
  } else if (player2.name === game.currentPlayer) {
    player2.sequence.push(2)
    checkArray(player1.sequence, game.sequence)
    if (game.track == false) {
      alert(`Bad Choice. You have lost!`)
      if (player2.score > player1.score) {
        document.getElementById('best-score').innerHTML = player2.score
        alert(`${player2.name} you have the high score`)
      }
    }
  }
}

function yellowClick() {
  yellow.classList.add('yellow-blur')
  game.sounds.yellow.play();
  setTimeout(function () {
    yellow.classList.remove('yellow-blur')
  }, 250)
  if (player1.name === game.currentPlayer) {
    player1.sequence.push(3)
    if (player1.sequence.length === game.sequence.length) {
      checkArray(player1.sequence, game.sequence)
      if (game.track == false) {
        document.getElementById('best-score').innerHTML = player1.score
        alert(`Bad Choice. You have lost!`)
        curPlayer(player2.name)
        alert(`Player2, your turn`)
        game.interval = defaultGame.interval
        game.sequence = []
        game.score = 0
      }
    }
  } else if (player2.name === game.currentPlayer) {
    player2.sequence.push(3)
    checkArray(player2.sequence, game.sequence)
    if (game.track == false) {
      alert(`Bad Choice. You have lost!`)
      if (player2.score > player1.score) {
        document.getElementById('best-score').innerHTML = player2.score
        alert(`${player2.name} you have the high score`)
      }
    }
  }
}

function blueClick() {
  blue.classList.add('blue-blur')
  game.sounds.blue.play();
  setTimeout(function () {
    blue.classList.remove('blue-blur')
  }, 250)
  if (player1.name === game.currentPlayer) {
    player1.sequence.push(4)
    if (player1.sequence.length === game.sequence.length) {
      checkArray(player1.sequence, game.sequence)
      if (game.track == false) {
        document.getElementById('best-score').innerHTML = player1.score
        alert(`Bad Choice. You have lost!`)
        curPlayer(player2.name)
        alert(`Player2, your turn`)
        game.interval = defaultGame.interval
        game.sequence = []
        game.score = 0
      }
    }
  } else if (player2.name === game.currentPlayer) {
    player2.sequence.push(4)
    checkArray(player2.sequence, game.sequence)
    if (game.track == false) {
      alert(`Bad Choice. You have lost!`)
      if (player2.score > player1.score) {
        document.getElementById('best-score').innerHTML = player2.score
        alert(`${player2.name} you have the high score`)
      }
    }
  }
}

// function to automatically have the color blur and sound play for initial instance of color in sequence
function greenShow() {
  green.classList.add('green-blur')
  game.sounds.green.play()
  setTimeout(function () {
    green.classList.remove('green-blur')
  }, game.interval)
  game.sequence.push(1)
}

function redShow() {
  red.classList.add('red-blur')
  game.sounds.red.play()
  setTimeout(function () {
    red.classList.remove('red-blur')
  }, game.interval)
  game.sequence.push(2)
}

function yellowShow() {
  yellow.classList.add('yellow-blur')
  game.sounds.yellow.play()
  setTimeout(function () {
    yellow.classList.remove('yellow-blur')
  }, game.interval)
  game.sequence.push(3)
}

function blueShow() {
  blue.classList.add('blue-blur')
  game.sounds.blue.play()
  setTimeout(function () {
    blue.classList.remove('blue-blur')
  }, game.interval)
  game.sequence.push(4)
}

// functions for computer to light up prior sequence of colors for player to complete
function oneShow() {
  green.classList.add('green-blur')
  game.sounds.green.play()
  setTimeout(function () {
    green.classList.remove('green-blur')
  }, game.interval)
}

function twoShow() {
  red.classList.add('red-blur')
  game.sounds.red.play()
  setTimeout(function () {
    red.classList.remove('red-blur')
  }, game.interval)
}

function threeShow() {
  yellow.classList.add('yellow-blur')
  game.sounds.yellow.play()
  setTimeout(function () {
    yellow.classList.remove('yellow-blur')
  }, game.interval)
}

function fourShow() {
  blue.classList.add('blue-blur')
  game.sounds.blue.play()
  setTimeout(function () {
    blue.classList.remove('blue-blur')
  }, game.interval)
}

// check to see if we are repeating numbers
let lastNum
// function to math random through the game array of numbers
function random() {
  let randomNum = Math.ceil(Math.random() * 4)
  if (lastNum == randomNum) {
    console.log(`That was the same number`)
    random()
  } else {
    if (randomNum === 1) {
      greenShow()
    } else if (randomNum === 2) {
      redShow()
    } else if (randomNum === 3) {
      yellowShow()
    } else if (randomNum === 4) {
      blueShow()
    }
  }
  lastNum = randomNum
}

// computer play sequence function
function computerPlay() {
  game.sequence.forEach(function (el) {
    setTimeout(function () {
      if (el == 1) {
        oneShow()
      }
      if (el == 2) {
        twoShow()
      }
      if (el == 3) {
        threeShow()
      }
      if (el == 4) {
        fourShow()
      }
    }, game.interval + offset)
    offset += game.interval
    console.log(offset)
  })
  offset = 0
  if (game.sequence.length === game.score) {
    setTimeout(function () {
      random()
    }, game.interval + 1500)
  }
}

// function to check if array length is equal and then check if the arrays match
function checkArray(arr1, arr2) {
  arr1.forEach((e1) => {
    return arr2.forEach((e2) => {
      if (e1 !== e2) {
        game.track = false
      } else {
        game.track = true
        if (player1.name === game.currentPlayer) {
          score()
          decreaseTimer()
          player1.sequence = []
          game.compTurn = false
          console.log(game.compTurn)
          setTimeout(function () {
            computerPlay()
          }, game.interval)
        } else {
          score()
          decreaseTimer()
          player2.sequence = []
          game.compTurn = false
          console.log(game.compTurn)
        }
      }
    })
  })
}

// function to activate game
// function gameplay() {
//   setTimeout(function () {
//     computerPlay()
//   }, 2000)
//   game.compTurn = true
// if (game.compTurn === true) {
//   random()
// }
// }

// function to reset the game to start from scratch
function reset() {
  game.sequence = []
  player1.sequence = []
  player2.sequence = []
  game.interval = defaultGame.interval
  document.getElementById('player-one').innerHTML = defaultGame.player1
  document.getElementById('player-two').innerHTML = defaultGame.player2
  document.getElementById('player-banner').innerHTML = ''
  document.getElementById('one-score').innerHTML = defaultGame.score
  document.getElementById('two-score').innerHTML = defaultGame.score
  alert(`Press Start button to begin new game`)
}

// event listener for each color click event
green.addEventListener('click', greenClick)
red.addEventListener('click', redClick)
yellow.addEventListener('click', yellowClick)
blue.addEventListener('click', blueClick)

// event listener for start button
startButton.addEventListener('click', function () {
  input1()
  input2()
  random()
})

// event listener for reset button
resetButton.addEventListener('click', function () {
  reset()
})