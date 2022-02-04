/*-------------------------------- Constants --------------------------------*/

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
console.log(allSquare)

const h2Message = document.getElementById('message')

const resetBtn = document.getElementById('reset')


/*----------------------------- Event Listeners -----------------------------*/
// allSquare.addEventListener('click', handleClick)


/*-------------------------------- Functions --------------------------------*/


function init(){
  
  boardArray = [null, null, null, null, null, null, null, null, null,]
  resetBtn.setAttribute("hidden", true)
  playerX = 1
  playerO = -1
  square = []
  isWinner = null
  h2Message = 

	    // This represents that there is no winner or tie yet. 
	    // The winner variable will hold the player value (1 or -1) if there's a winner. 
	    // The winner will hold a 'T' if there's a tie.
	  // 3.2.4) Render those state variables to the page by calling a render function.
    render()
}

function handleClick(evt){
  console.log(evt)
}


function render(){
// 3.3.1) Loop over the board array (which represents the squares on the page), and for each iteration:
for(let i = 0; i < boardArray.length; i++){
  if (boardArray[i] === 1){
    square[i].textComment = "X"
  } else if (boardArray[i] === -1){
    square[i].textComment = "O"
  } else {boardArray[i] === null}
  square[i] = null
}
console.log(boardArray)



// const squareIndex = squares.findIndex()

//  allSquare.forEach(square => square.addEventListener('click', handleClick))

 
// ⭐️allSquare.addEventListener('click', function(evt){
  // allSquare.forEach(function(square){
  //   if (square === 1) {
  //     square.innerHTML = 'X'
  //   } else if (square === -1) {
  //     square.innerHTML = 'O'
  //   } else { square = null}

  // })
  // console.log(allSquare)

// })⭐️


}