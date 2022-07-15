import { GAME_STATE, VICTORY_CASES } from './constansts'

export const updatePositions = (position, positions, currentPlayer) =>
  positions.map((value, index) => (index === position ? currentPlayer : value))

export const togglePlayer = currentPlayer => (currentPlayer === 'X' ? 'O' : 'X')

export const getGameState = positions => {
  if (verifyWinner(positions)) return GAME_STATE.WINNER
  if (verifyGameOver(positions)) return GAME_STATE.TIE
  return GAME_STATE.PROGRESS
}

const verifyGameOver = positions => !positions.includes('')

const verifyWinner = positions => {
  return VICTORY_CASES.reduce((accum, victoryCase) => {
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
