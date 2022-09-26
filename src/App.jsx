import { useState } from 'react'

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

    setBoard(prevBoard => {
      return {
        ...prevBoard,
        [gridSpace]: "X"
      }
    })
  }

  const grids = (rowsIndex) => {
    const gridsArray = []
    for (let index = 0; index < 3; index++) {
      const gridArray = getGrid(rowsIndex, index)
      const grid = gridArray[0]

      gridsArray.push(
        <div 
          className="board--grid"
          onClick={()=>handleClick(gridArray)}
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

  return (
    <div className="App">
      <nav>
        <h1>Tic Tac Toe</h1>
      </nav>
      <div className="board">
        {rows()}
      </div>
      <footer>
        <a href="">github</a>
      </footer>
    </div>
  )
}

export default App
