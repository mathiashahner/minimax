export const GAME_STATE = {
  TIE: 'TIE',
  WINNER: 'WINNER',
  PROGRESS: 'PROGRESS',
}

export const INITIAL_GAME = {
  currentPlayer: 'X',
  gameState: GAME_STATE.PROGRESS,
  positions: ['', '', '', '', '', '', '', '', ''],
}

export const VICTORY_CASES = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 4, 6],
  [2, 5, 8],
  [3, 4, 5],
  [6, 7, 8],
]
