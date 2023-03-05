import './game.style.css'

import { useCallback, useEffect } from 'react'
import { updatePositions, getGameState, GAME_STATE, minimaxMove } from '../../../core'

export const Game = ({ game, setGame }) => {
  const executeMove = useCallback(
    position => {
      if (game.positions[position] === '') {
        const positions = updatePositions(position, game.positions, game.currentPlayer)
        const gameState = getGameState(positions)

        if (gameState === GAME_STATE.PROGRESS) {
          setGame({ ...game, currentPlayer: togglePlayer(game.currentPlayer), positions, gameState })
        } else {
          setGame({ ...game, currentPlayer: game.currentPlayer, positions, gameState })
        }
      }
    },
    [game]
  )

  useEffect(() => {
    if (game.currentPlayer === game.minimaxPlayer) {
      executeMove(minimaxMove(game.positions))
    }
  }, [game, executeMove])

  const togglePlayer = currentPlayer => (currentPlayer === 'X' ? 'O' : 'X')

  return (
    <div className='game-vertical '>
      <div className='game-horizontal'>
        <ul className='positions-list'>
          {game.positions.map((value, position) => (
            <li className='position' key={position} onClick={() => executeMove(position)}>
              {value === 'X' && <div className='X' />}
              {value === 'O' && <div className='O' />}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
