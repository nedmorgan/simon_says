class Player {
  constructor(name, score) {
    this.name = name
    this.score = score
    this.colorSeq = []
  }
}

let player1 = new Player()
let player2 = new Player()
let startButton = document.getElementById('startButton')

function input1() {
  player1.name = prompt(`Player 1, please input your name.`)
  document.getElementById('player1').innerHTML = player1.name

}

function input2() {
  player2.name = prompt(`Player 2, please input your name.`)
  if (player2.name === null) {
    document.querySelector('.player2-score').setAttribute('style', 'display:none')
  } else {
    document.getElementById('player2').innerHTML = player2.name
  }
}

startButton.addEventListener('click', function () {
  input1()
  input2()
})