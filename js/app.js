/*-------------------------------- Constants --------------------------------*/
const players = {
  playerX: 1,
  playerO: -1
};


const winningCombos = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6]
]
console.log(winningCombos)
// const winningCombos = [
//   {combo1: [sq0, sq1, sq2]},
//   {combo2: [sq0, sq4, sq8]},
//   {combo3: [sq0, sq3, sq6]},
//   {combo4: [sq1, sq4, sq7]},
//   {combo5: [sq2, sq4, sq6]},
//   {combo6: [sq2, sq5, sq8]},
//   {combo7: [sq3, sq4, sq5]},
//   {combo8: [sq6, sq7, sq8]}
// ]
// console.log(winningCombos)
/*---------------------------- Variables (state) ----------------------------*/


let turn
let isWinner 


/*------------------------ Cached Element References ------------------------*/
const allSquare = document.querySelectorAll('.square')
console.log(allSquare)
const h2Message = document.getElementById('message')


const resetBtn = document.getElementById('reset')



/*----------------------------- Event Listeners -----------------------------*/
document.querySelector('.board').addEventListener('click', handleClick)



function handleClick(evt){
  let sqIdx = parseInt(evt.target.id.replace('sq', ''))
    if (boardArray[sqIdx] !== null){
      return
    }
    if(turn === 1){
    boardArray[sqIdx] = 1
    } else {
    boardArray[sqIdx] = -1}

    turn = turn * -1

    resetBtn.removeAttribute('hidden')
    render()

  }

  resetBtn.addEventListener('click', init)
  init()
/*-------------------------------- Functions --------------------------------*/


function init(){
  
  boardArray = [null, null, null, null, null, null, null, null, null]
  console.log(boardArray)
  resetBtn.setAttribute("hidden", true)
  turn = 1
  isWinner = null
  isTie = 'T'
  h2Message.textContent = "Let's play!"
  
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
      allSquare[i].style.color = '#2ec4b6'
    } else if (square === -1){
      allSquare[i].textContent = "O"
      allSquare[i].style.color = '#e71d36'
    } else { 
      allSquare[i].textContent = ""}
    })
    
    if(isWinner !== null){
      h2Message.textContent = `Game still in progress, ${turn === 1 ? 'X' : 'O'} goes next`
    } 
    else if (isWinner = isTie){
        h2Message.textContent = `It's a tie!`
      }
      else {
        h2Message.textContent = `Congrats ${turn === 1 ? 'X' : 'O'}! You win!`
      }
      
      // getWinner()
    }
    

    
    function getWinner() {
      for (let i = 0; i <winningCombos.length; i++){
        const a = winningCombos[i][0]
        const b = winningCombos[i][1]
        const c = winningCombos[i][2]

        if (boardArray[a]+boardArray[b]+boardArray[c] === 3){
          console.log('x wins')
          h2Message.textContent = `X wins!`
        }else if (boardArray[a]+boardArray[b]+boardArray[c] === -3){
          console.log('o wins')
          h2Message.textContent = `O wins!`
        } else{
          h2Message.textContent = `It's a tie!`
        }
      }
      
      render()
    }
      