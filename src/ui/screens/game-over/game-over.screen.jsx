import './game-over.style.css'

import { Modal } from '../../components'

export const GameOverScreen = ({ message, restartGame }) => {
  return (
    <Modal>
      <h1>FIM DE JOGO!</h1>
      <p>{message}</p>

      <button className='game-over-btn' onClick={restartGame}>
        JOGAR NOVAMENTE
      </button>
    </Modal>
  )
}

//defaultProps
