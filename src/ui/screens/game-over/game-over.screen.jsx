import './game-over.style.css'

import { Modal } from '../../components'

export const GameOverScreen = ({ winner, restartGame }) => {
  return (
    <Modal>
      <h1>FIM DE JOGO!</h1>

      {!!winner ? <p>O VENCEDOR É O JOGADOR {winner}</p> : <p>DEU VELHA</p>}

      <button className='game-over-btn' onClick={restartGame}>
        JOGAR NOVAMENTE
      </button>
    </Modal>
  )
}

GameOverScreen.defaultProps = {
  winner: '',
}
