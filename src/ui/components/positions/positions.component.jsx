import './positions.style.css'

import { useState } from 'react'
import { togglePlayer, updatePositions, getGameState } from '../../../core'

const INITIAL_GAME = {
  currentPlayer: 'X',
  positions: ['', '', '', '', '', '', '', '', ''],
}

export const Positions = () => {
  const [game, setGame] = useState(INITIAL_GAME)

  const executeMove = position => {
    const positions = updatePositions(position, game.positions, game.currentPlayer)
    const currentPlayer = togglePlayer(game.currentPlayer)

    setGame({ currentPlayer, positions })
  }

  return (
    <>
      {!!getGameState(game.positions) && <h1>ACABOU!!!</h1>}

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
