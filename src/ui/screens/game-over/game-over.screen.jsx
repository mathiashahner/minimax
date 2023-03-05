import './game-over.style.css'

import { Modal } from '../../components'
import { GAME_STATE, INITIAL_GAME } from '../../../core'

export const GameOverScreen = ({ game, setGame }) => {
  const restartGame = () => setGame(INITIAL_GAME)

  return (
    <Modal>
      {game.gameState === GAME_STATE.TIE ? <h1>XO TIE</h1> : <h1>{game.currentPlayer} WINNER</h1>}

      <button className='game-over-btn' onClick={restartGame}>
        PLAY AGAIN
      </button>
    </Modal>
  )
}
