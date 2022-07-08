import './positions.style.css'

import { useState } from 'react'

const INITIAL_GAME = {
  hasWinner: false,
  currentPlayer: 'X',
  positions: ['', '', '', '', '', '', '', '', ''],
}

export const Positions = () => {
  const [game, setGame] = useState(INITIAL_GAME)

  const executeMove = position => {
    const positions = updatePositions(position)
    const currentPlayer = togglePlayer()
    const hasWinner = verifyWinner()

    setGame({ currentPlayer, positions, hasWinner })
  }

  const updatePositions = position =>
    game.positions.map((value, index) => (index === position ? game.currentPlayer : value))

  const togglePlayer = () => (game.currentPlayer == 'X' ? 'O' : 'X')

  const verifyWinner = () => verifySequence(1) || verifySequence(2) || verifySequence(3) || verifySequence(4)

  const verifySequence = interval => game.positions.forEach(position => false)

  return (
    <>
      {!!game.hasWinner && <h1>ACABOU!!!</h1>}

      <ul className='positions-list'>
        {game.positions.map((value, position) => (
          <li className='position' key={position} onClick={() => executeMove(position)}>
            {value == 'X' && <div className='X' />}
            {value == 'O' && <div className='O' />}
          </li>
        ))}
      </ul>
    </>
  )
}
