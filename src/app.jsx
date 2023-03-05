import './app.css'

import { useState } from 'react'
import { Header, Game } from './ui/components'
import { INITIAL_GAME, GAME_STATE } from './core'
import { GameOverScreen } from './ui/screens'

const App = () => {
  const [game, setGame] = useState(INITIAL_GAME)

  const restartGame = () => setGame(INITIAL_GAME)

  return (
    <div className='container'>
      <Header />
      <Game game={game} setGame={setGame} />

      {game.gameState === GAME_STATE.TIE && <GameOverScreen restartGame={restartGame} />}

      {game.gameState === GAME_STATE.WINNER && (
        <GameOverScreen winner={game.currentPlayer} restartGame={restartGame} />
      )}
    </div>
  )
}

export default App
