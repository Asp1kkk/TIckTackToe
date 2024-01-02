const buttons = Array.from(document.querySelectorAll('.field'))
const reset = document.querySelector('#reset')

const winningCombinations = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6]
  ];

const players = {
	1: 'X',
	0: 'O'
}

function checkWin() {
	let newRes = results.map(element => (element == '') ? (element = Math.random()) : element = element)
	winningCombinations.forEach(combination => {
		const [a, b, c] = combination;
		if (newRes[a] == newRes[b] && newRes[b] == newRes[c]) {
			alert(`${players[turn]} - Player Wins!`)
			reset.classList.remove('none')
			n = 0;
			return;
		}
	})
	if (results.filter(Boolean).length == 9 && n != 0) {
		reset.classList.remove('none')
		alert('Draw!')
	}
}

let turn = 0;
let results = [];

buttons.forEach(element => {
	element.onclick = () => {
		if (turn === 0) {
			element.innerHTML = "X"
			turn = 1
		} else {
			element.innerHTML = 'O'
			turn = 0
		}
		results = buttons.map(element => element.innerHTML)
		if (results.filter(Boolean).length >= 4) {
			checkWin()
		}
	}
})

reset.onclick = function () {
	turn = 0
	buttons.forEach(element => element.innerHTML = "")
	reset.classList.add('none')
}