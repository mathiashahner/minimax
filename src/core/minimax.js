import { getWinnerPlayer, updatePositions } from './tic-tac-toe'

export const minimaxMove = positions => {
  const result = getEmptyPositions(positions).map(position => {
    const newPositionsO = updatePositions(position, positions, 'O')

    const moves = getEmptyPositions(newPositionsO).map(position => {
      const newPositionsX = updatePositions(position, newPositionsO, 'X')
      const winnerPlayer = getWinnerPlayer(newPositionsX)

      if (winnerPlayer === 'O') return { position, result: 1 }
      if (winnerPlayer === 'X') return { position, result: -1 }
      return { position, result: 0 }
    })

    return getBestMove(moves)
  })

  return getBestMove(result).position
}

const getEmptyPositions = positions => {
  return positions
    .map((position, index) => (position === '' ? index : -1))
    .filter(position => position !== -1)
}

const getBestMove = moves => {
  return moves.reduce((accum, move) => {
    if (!accum || move.result < accum.result) {
      accum = move
    }

    return accum
  }, false)
}
