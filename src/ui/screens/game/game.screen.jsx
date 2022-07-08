import './game.style.css'

import { Positions } from '../../components'

export const GameScreen = () => {
  const game = ['X', 'X', 'X', 'O', 'X', 'O', 'X', 'X', 'O']

  return (
    <div className='game-vertical '>
      <div className='game-horizontal'>
        <Positions game={game} />
      </div>
    </div>
  )
}
