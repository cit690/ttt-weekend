/*-------------------------------- Constants --------------------------------*/
const players = {
  '1': {
    name: '',
    score: 0
  },
  '-1': {
    name: '',
    score: 0
  }
};

const winningCombos = [
  {combo1: [sq0, sq1, sq2]},
  {combo2: [sq0, sq4, sq8]},
  {combo3: [sq0, sq3, sq6]},
  {combo4: [sq1, sq4, sq7]},
  {combo5: [sq2, sq4, sq6]},
  {combo6: [sq2, sq5, sq8]},
  {combo7: [sq3, sq4, sq5]},
  {combo8: [sq6, sq7, sq8]}
]

/*---------------------------- Variables (state) ----------------------------*/


let turn
let winner 


/*------------------------ Cached Element References ------------------------*/
const allSquare = Array.from(document.querySelectorAll('.square'))

const h2Message = document.getElementById('message')

const resetBtn = document.getElementById('reset')


/*----------------------------- Event Listeners -----------------------------*/
document.querySelector('div').addEventListener('click', handleClick)


function handleClick(evt){
  evt.target.id = ""
  console.log(evt)
}

 
// }
/*-------------------------------- Functions --------------------------------*/


function init(){
  
  boardArray = [null, null, null, null, null, null, null, null, null]
  resetBtn.setAttribute("hidden", true)
  playerX = 1
  playerO = -1
  turn = 1
  square = []
  isWinner = null
  isTie = 'T'
  h2Message.textContent = ""

	    // This represents that there is no winner or tie yet. 
	    // The winner variable will hold the player value (1 or -1) if there's a winner. 
	    // The winner will hold a 'T' if there's a tie.
	  // 3.2.4) Render those state variables to the page by calling a render function.
    render()
}
init()



function render(){
// 3.3.1) Loop over the board array (which represents the squares on the page), and for each iteration:
boardArray.forEach((square, i)=>{
  if (square === 1){
    allSquare[i].textContent = "X"
    allSquare[i].style.color = 'yellow'
  } else if (square === -1){
    allSquare[i].textContent = "O"
    allSquare[i].style.color = 'purple'
  } else {square === null
    allSquare[i].textContent = ""}
})



if(isWinner !== null){
  h2Message.textContent = `Game still in process, ${1 || -1} goes next`
} else if (isWinner = 'T'){
  h2Message.textContent = `It's a tie!`
  h2Message.style.color = '#2ec4b6'
} else {
  h2Message.textContent = `Congrats ${1 || -1}! You win!`
}

}


function getWinner(winner) {
const winner = winningCombos.reduce(function(){

})
}