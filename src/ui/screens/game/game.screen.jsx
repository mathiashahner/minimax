import './game.style.css'

import { Positions } from '../../components'

export const GameScreen = () => {
  return (
    <div className='game-vertical '>
      <div className='game-horizontal'>
        <Positions />
      </div>
    </div>
  )
}
