const victoryCases = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 4, 6],
  [2, 5, 8],
  [3, 4, 5],
  [6, 7, 8],
]

export const updatePositions = (position, positions, currentPlayer) =>
  positions.map((value, index) => (index === position ? currentPlayer : value))

export const togglePlayer = currentPlayer => (currentPlayer === 'X' ? 'O' : 'X')

export const getGameState = positions => verifyGameOver(positions) || verifyWinner(positions)

const verifyGameOver = positions => !positions.includes('')

const verifyWinner = positions => {
  return victoryCases.reduce((accum, victoryCase) => {
    const hasWinner =
      positions[victoryCase[0]] === positions[victoryCase[1]] &&
      positions[victoryCase[0]] === positions[victoryCase[2]] &&
      positions[victoryCase[0]] !== ''

    if (hasWinner) {
      accum = true
    }

    return accum
  }, false)
}
