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
  const [gameStuck, setGameStuck] = useState(false)
  const [winner, setWinner] = useState("")
  const [cpuEnabled, setCpuEnabled] = useState(false)


  // Checks to see if the game has been won
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
    const stuck = [
      board.gridOne, board.gridTwo, board.gridThree, board.gridFour, board.gridFive, 
      board.gridSix, board.gridSeven, board.gridEight, board.gridNine
    ].every(e => {
      if (e !== "" && gameWon === false) {
        return true
      }
    })

    if (rowOne || rowTwo || rowThree || columnOne || 
        columnTwo || columnThree || diagonalOne || diagonalTwo) {
      setGameWon(true)
      if (currentPlayer === "X" && !gameWon) {
        setWinner("O")
      } else if (currentPlayer === "O" && !gameWon) {
        setWinner("X")
      }
    } else if (stuck) {
      setGameStuck(true)
    } else {
      cpuPlay()
    }
  }, [board])


  //CPU
  const cpuPlay = () => {
    if (cpuEnabled && !gameWon && currentPlayer === "O") {
      setTimeout(()=>{
        //First row
        if (board.gridOne === "" && board.gridTwo === "" && board.gridThree === "") {
          handleClick(["", "gridOne"])
        } else if (board.gridOne === "O" && board.gridTwo === "" && board.gridThree === "") {
          handleClick(["", "gridTwo"])
        } else if (board.gridOne === "O" && board.gridTwo === "O" && board.gridThree === "") {
          handleClick(["", "gridThree"])
        // Second row
        } else if (board.gridFour === "" && board.gridFive === "" && board.gridSix === "") {
          handleClick(["", "gridFour"])
        } else if (board.gridFour === "O" && board.gridFive === "" && board.gridSix === "") {
          handleClick(["", "gridFive"])
        } else if (board.gridFour === "O" && board.gridFive === "O" && board.gridSix === "") {
          handleClick(["", "gridSix"])
        // Third row
        } else if (board.gridSeven === "" && board.gridEight === "" && board.gridNine === "") {
          handleClick(["", "gridSeven"])
        } else if (board.gridSeven === "O" && board.gridEight === "" && board.gridNine === "") {
          handleClick(["", "gridEight"])
        } else if (board.gridSeven === "O" && board.gridEight === "O" && board.gridNine === "") {
          handleClick(["", "gridNine"])
        // First column
        } else if (board.gridOne === "" && board.gridFour === "" && board.gridSeven === "" || 
                   board.gridOne === "" && board.gridFour === "O" && board.gridSeven === "O" ||
                   board.gridOne === "" && board.gridFour === "O" && board.gridSeven === "") {
          handleClick(["", "gridOne"])
        } else if (board.gridOne === "O" && board.gridFour === "" && board.gridSeven === "") {
          handleClick(["", "gridFour"])
        } else if (board.gridOne === "O" && board.gridFour === "O" && board.gridSeven === "") {
          handleClick(["", "gridSeven"])
        // Second column
        } else if (board.gridTwo === "" && board.gridFive === "" && board.gridEight === "" ||
                   board.gridTwo === "" && board.gridFive === "O" && board.gridEight === "O" ||
                   board.gridTwo === "" && board.gridFive === "O" && board.gridEight === "") {
          handleClick(["", "gridTwo"])
        } else if (board.gridTwo === "O" && board.gridFive === "" && board.gridEight === "") {
          handleClick(["", "gridFive"])
        } else if (board.gridTwo === "O" && board.gridFive === "O" && board.gridEight === "") {
          handleClick(["", "gridEight"])
        // Third column
        } else if (board.gridThree === "" && board.gridSix === "" && board.gridNine === "" ||
                   board.gridThree === "" && board.gridSix === "O" && board.gridNine === "O" ||
                   board.gridThree === "" && board.gridSix === "O" && board.gridNine === "") {
          handleClick(["", "gridThree"])
        } else if (board.gridThree === "O" && board.gridSix === "" && board.gridNine === "") {
          handleClick(["", "gridSix"])
        } else if (board.gridThree === "O" && board.gridSix === "O" && board.gridNine === "") {
          handleClick(["", "gridNine"])
        // First diagonal
        } else if (board.gridOne === "" && board.gridFive === "" && board.gridNine === "" ||
                   board.gridOne === "" && board.gridFive === "O" && board.gridNine === "O" ||
                   board.gridOne === "" && board.gridFive === "O" && board.gridNine === "") {
          handleClick(["", "gridOne"])
        } else if (board.gridOne === "O" && board.gridFive === "" && board.gridNine === "") {
          handleClick(["", "gridFive"])
        } else if (board.gridOne === "O" && board.gridFive === "O" && board.gridNine === "") {
          handleClick(["", "gridNine"])
        // Second diagonal
        } else if (board.gridThree === "" && board.gridFive === "" && board.gridSeven === "" ||
                   board.gridThree === "" && board.gridFive === "O" && board.gridSeven === "O" ||
                   board.gridThree === "" && board.gridFive === "O" && board.gridSeven === "") {
          handleClick(["", "gridThree"])
        } else if (board.gridThree === "O" && board.gridFive === "" && board.gridSeven === "") {
          handleClick(["", "gridFive"])
        } else if (board.gridThree === "O" && board.gridFive === "O" && board.gridSeven === "") {
          handleClick(["", "gridSeven"])
        } else {
          let freeGrid = ""
          while (freeGrid === "") {
            const number = Math.floor(Math.random() * 9)
            const grid = Object.values(board)[number]
            if (grid === "") {
              freeGrid = Object.keys(board)[number]
            }
            console.log("infinite loop bruh")
          }
          handleClick(["", freeGrid])
        }
      }, 1000)
    }
  }

  //Resets the game
  useEffect(()=> {
    if (gameWon || gameStuck) {
      setTimeout(()=>{
        resetGame()
      }, 3000)
    }
  }, [gameWon, gameStuck])

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
          onClick={()=>{ if (!gameWon) {
            if (currentPlayer !== "O" && cpuEnabled) {
              handleClick(gridArray)
            } else if (!cpuEnabled) {
              handleClick(gridArray)
            }
          } }}
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
    setGameStuck(false)
  }

  const announcer = () => {
    if (gameWon) {
      return `Game over! ${winner} wins!`
    } else if (!gameWon && gameStuck) {
      return `Game over! Draw...`
    } else {
      return `${currentPlayer}'s turn`
    }
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
          {announcer()}
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
