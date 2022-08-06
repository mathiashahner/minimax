import './positions.style.css'

import { useCallback, useEffect, useState } from 'react'
import { GameOverScreen } from '../../screens'
import { updatePositions, getGameState, GAME_STATE, INITIAL_GAME, minimaxMove } from '../../../core'

export const Positions = () => {
  const [game, setGame] = useState(INITIAL_GAME)

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

  const restartGame = () => setGame(INITIAL_GAME)

  return (
    <>
      {game.gameState === GAME_STATE.TIE && <GameOverScreen restartGame={restartGame} />}

      {game.gameState === GAME_STATE.WINNER && (
        <GameOverScreen winner={game.currentPlayer} restartGame={restartGame} />
      )}

      <ul className='positions-list'>
        {game.positions.map((value, position) => (
          <li className='position' key={position} onClick={() => executeMove(position)}>
            {value === 'X' && <div className='X' />}
            {value === 'O' && <div className='O' />}
          </li>
        ))}
      </ul>
    </>
  )
}
