//player constructor
class Player {
  constructor(name, score) {
    this.name = name
    this.score = score
    this.colorSeq = []
  }
}

//Gameplay variable
let gameplay = {
  level: 0,
  interval: 3000,
  colors: [1, 2, 3, 4],
  players: [],
  sequence: [],
  sounds: {
    green: new Audio('media/sfx_sounds_Blip1.wav'),
    red: new Audio('media/sfx_sounds_Blip4.wav'),
    yellow: new Audio('media/sfx_sounds_Blip8.wav'),
    blue: new Audio('media/sfx_sounds_Blip10.wav')
  }
}

//this is how to get an audio file to play
// document.getElementById('resetButton').addEventListener('click', function() {
//   console.log(gameplay.sounds.green)
//   gameplay.sounds.blue.play();
// })

//new player variables
let player1 = new Player()
let player2 = new Player()
let startButton = document.getElementById('startButton')

//color div variables
const green = document.getElementById('green')
const red = document.getElementById('red')
const yellow = document.getElementById('yellow')
const blue = document.getElementById('blue')

//input for player 1
function input1() {
  player1.name = prompt(`Player 1, please input your name.`)
  document.getElementById('player1').innerHTML = player1.name

}

//input for player 2 and if not then take away player 2
function input2() {
  player2.name = prompt(`Player 2, please input your name.`)
  if (player2.name === null) {
    document.querySelector('.player2-score').setAttribute('style', 'display:none')
  } else {
    document.getElementById('player2').innerHTML = player2.name
  }
}

//the color will show and the sound will play when a color div is clicked
function greenClick() {
  green.classList.add('green-blur')
  gameplay.sounds.green.play();
  setTimeout(function () {
    green.classList.remove('green-blur')
  }, gameplay.interval)
}

function redClick() {
  red.classList.add('red-blur')
  gameplay.sounds.red.play();
  setTimeout(function () {
    red.classList.remove('red-blur')
  }, gameplay.interval)
}

function yellowClick() {
  yellow.classList.add('yellow-blur')
  gameplay.sounds.yellow.play();
  setTimeout(function () {
    yellow.classList.remove('yellow-blur')
  }, gameplay.interval)
}

function blueClick() {
  blue.classList.add('blue-blur')
  gameplay.sounds.blue.play();
  setTimeout(function () {
    blue.classList.remove('blue-blur')
  }, gameplay.interval)
}

//function to automatically have the color blur and sound play
function greenShow() {
  green.classList.add('green-blur')
  gameplay.sounds.green.play();
  setTimeout(function () {
    green.classList.remove('green-blur')
  }, gameplay.interval)
}

function redShow() {
  red.classList.add('red-blur')
  gameplay.sounds.red.play();
  setTimeout(function () {
    red.classList.remove('red-blur')
  }, gameplay.interval)
}

function yellowShow() {
  yellow.classList.add('yellow-blur')
  gameplay.sounds.yellow.play();
  setTimeout(function () {
    yellow.classList.remove('yellow-blur')
  }, gameplay.interval)
}

function blueShow() {
  blue.classList.add('blue-blur')
  gameplay.sounds.blue.play();
  setTimeout(function () {
    blue.classList.remove('blue-blur')
  }, gameplay.interval)
}

//function to math random through the gameplay array of numbers
function random() {
  let randomNum = Math.ceil(Math.random() * 4)
  if (randomNum === 1) {
    console.log(randomNum)
    console.log(`green`)
  } else if (randomNum === 2) {
    console.log(randomNum)
    console.log(`red`)
  } else if (randomNum === 3) {
    console.log(randomNum)
    console.log(`yellow`)
  } else if (randomNum === 4) {
    console.log(randomNum)
    console.log(`blue`)
  }
  return randomNum
}

//function to decrease game interval
function decreaseTimer() {
  if (gameplay.interval > 0) {
    gameplay.interval -= 150
    console.log(gameplay.interval)
  } else if (gameplay.interval <= 0) {
    alert(`There are no move levels left. You've Won!`)
  }
}

green.addEventListener('click', greenClick)
red.addEventListener('click', redClick)
yellow.addEventListener('click', yellowClick)
blue.addEventListener('click', blueClick)

//event listener for start button
startButton.addEventListener('click', function () {
  input1()
  input2()
  greenShow()
  redShow()
  yellowShow()
  blueShow()
})