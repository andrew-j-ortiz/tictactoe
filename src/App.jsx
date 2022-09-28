import { useEffect, useState } from 'react'

function App() {
  const [board, setBoard] = useState({
    gridOne: "",
    gridTwo: "",
    gridThree: "",
    gridFour: "",
    gridFive: "",
    gridSix: "",
    gridSeven: "",
    gridEight: "",
    gridNine: ""
  })
  const [currentPlayer, setCurrentPlayer] = useState("X")
  const [gameWon, setGameWon] = useState(false)
  const [winner, setWinner] = useState("")
  const [cpuEnabled, setCpuEnabled] = useState(false)

  useEffect(()=>{
    const rowOne = [board.gridOne, board.gridTwo, board.gridThree].every(e => {
      if (e !== "" && e === board.gridOne) {
        return true
      }
    })
    const rowTwo = [board.gridFour, board.gridFive, board.gridSix].every(e => {
      if (e !== "" && e === board.gridFour) {
        return true
      }
    })
    const rowThree = [board.gridSeven, board.gridEight, board.gridNine].every(e => {
      if (e !== "" && e === board.gridSeven) {
        return true
      }
    })

    const columnOne = [board.gridOne, board.gridFour, board.gridSeven].every(e => {
      if (e !== "" && e === board.gridOne) {
        return true
      }
    })
    const columnTwo = [board.gridTwo, board.gridFive, board.gridEight].every(e => {
      if (e !== "" && e === board.gridTwo) {
        return true
      }
    })
    const columnThree = [board.gridThree, board.gridSix, board.gridNine].every(e => {
      if (e !== "" && e === board.gridThree) {
        return true
      }
    })

    const diagonalOne = [board.gridOne, board.gridFive, board.gridNine].every(e => {
      if (e !== "" && e === board.gridOne) {
        return true
      }
    })
    const diagonalTwo = [board.gridThree, board.gridFive, board.gridSeven].every(e => {
      if (e !== "" && e === board.gridThree) {
        return true
      }
    })

    if (rowOne || rowTwo || rowThree || columnOne || columnTwo || columnThree || diagonalOne || diagonalTwo) {
      setGameWon(true)
      if (currentPlayer === "X") {
        setWinner("O")
      } else if (currentPlayer === "O") {
        setWinner("X")
      }
    }
  }, [board])

  useEffect(()=> {
    if (gameWon) {
      setTimeout(()=>{
        resetGame()
      }, 3000)
    }
  }, [gameWon])

  const getGrid = (rowsIndex, index) => {
    let grid = ""
    let gridName = ""

    if (rowsIndex === 0 && index === 0) {
      grid = board.gridOne
      gridName = "gridOne"
    } else if (rowsIndex === 1 && index === 0) {
      grid = board.gridTwo
      gridName = "gridTwo"
    } else if (rowsIndex === 2 && index === 0) {
      grid = board.gridThree
      gridName = "gridThree"
    } else if (rowsIndex === 0 && index === 1) {
      grid = board.gridFour
      gridName = "gridFour"
    } else if (rowsIndex === 1 && index === 1 ) {
      grid = board.gridFive
      gridName = "gridFive"
    } else if (rowsIndex === 2 && index === 1) {
      grid = board.gridSix
      gridName = "gridSix"
    } else if (rowsIndex === 0 && index === 2) {
      grid = board.gridSeven
      gridName = "gridSeven"
    } else if (rowsIndex === 1 && index === 2) {
      grid = board.gridEight
      gridName = "gridEight"
    } else if (rowsIndex === 2 && index === 2) {
      grid = board.gridNine
      gridName = "gridNine"
    }
    return [grid, gridName]
  }

  const handleClick = (gridArray) => {
    const gridSpace = gridArray[1]

    if (gridArray[0] === "") {
      setBoard(prevBoard => {
        return {
          ...prevBoard,
          [gridSpace]: currentPlayer
        }
      })

      setCurrentPlayer(prevPlayer => {
        if (prevPlayer === "X") {
          return "O"
        } else if (prevPlayer === "O") {
          return "X"
        }
      })
    }

  }

  const grids = (rowsIndex) => {
    const gridsArray = []
    for (let index = 0; index < 3; index++) {
      const gridArray = getGrid(rowsIndex, index)
      const grid = gridArray[0]

      gridsArray.push(
        <div 
          className="board--grid"
          onClick={()=>{ if (!gameWon) {handleClick(gridArray)} }}
        >
          <p className="letter">
            {grid}
          </p>
        </div>
      )
    }
    return gridsArray
  }

  const rows = () => {
    const rowsArray = []
    for (let index = 0; index < 3; index++) {
      rowsArray.push(
        <div className="board--row">
          {grids(index)}
        </div>
      )
    }
    return rowsArray
  }

  const resetGame = () => {
    setBoard({
      gridOne: "",
      gridTwo: "",
      gridThree: "",
      gridFour: "",
      gridFive: "",
      gridSix: "",
      gridSeven: "",
      gridEight: "",
      gridNine: ""
    })
    setCurrentPlayer("X")
    setGameWon(false)
    setWinner("")
  }

  return (
    <div className="App">
      <nav>
        <h1 onClick={resetGame} className="nav-title">Tic Tac Toe</h1>
        <a 
          href="https://github.com/andrew-j-ortiz/tictactoe" 
          target="_blank" 
          className='nav-link'
        >source code</a>
      </nav>
      <div className="announcer">
        <h2>
          {
            gameWon ? `Game over! ${winner} wins!` : `${currentPlayer}'s turn`
          }
        </h2>
      </div>
      <div className="board">
        {rows()}
      </div>
      <div className='select'>
        <button 
          onClick={()=>setCpuEnabled(prevState => !prevState)}
          className={cpuEnabled ? "cpuEnabled" : ""}
        >CPU</button>
      </div>
      <footer>
        <a href="https://github.com/andrew-j-ortiz/tictactoe" target="_blank">github</a>
      </footer>
    </div>
  )
}

export default App
