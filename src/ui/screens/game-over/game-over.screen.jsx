import './game-over.style.css'

import { Modal } from '../../components'

export const GameOverScreen = ({ winner, restartGame }) => {
  return (
    <Modal>
      <h1>GAME OVER!</h1>

      {!!winner ? <p>{winner} WINNER</p> : <p>TIE</p>}

      <button className='game-over-btn' onClick={restartGame}>
        PLAY AGAIN
      </button>
    </Modal>
  )
}

GameOverScreen.defaultProps = {
  winner: '',
}
