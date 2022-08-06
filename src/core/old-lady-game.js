import { GAME_STATE, VICTORY_CASES } from './constansts'

export const updatePositions = (position, positions, currentPlayer) =>
  positions.map((value, index) => (index === position ? currentPlayer : value))

export const getGameState = positions => {
  if (getWinnerPlayer(positions)) return GAME_STATE.WINNER
  if (verifyGameOver(positions)) return GAME_STATE.TIE
  return GAME_STATE.PROGRESS
}

export const getWinnerPlayer = positions => {
  return VICTORY_CASES.reduce((accum, victoryCase) => {
    const hasWinner =
      positions[victoryCase[0]] === positions[victoryCase[1]] &&
      positions[victoryCase[0]] === positions[victoryCase[2]] &&
      positions[victoryCase[0]] !== ''

    if (hasWinner) {
      accum = positions[victoryCase[0]]
    }

    return accum
  }, '')
}

const verifyGameOver = positions => !positions.includes('')
