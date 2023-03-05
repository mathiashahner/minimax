import './app.css'

import { useState } from 'react'
import { GameOverScreen } from './ui/screens'
import { Header, Game } from './ui/components'
import { INITIAL_GAME, GAME_STATE } from './core'

const App = () => {
  const [game, setGame] = useState(INITIAL_GAME)

  return (
    <div className='container'>
      <Header />
      <Game game={game} setGame={setGame} />

      {game.gameState !== GAME_STATE.PROGRESS && <GameOverScreen game={game} setGame={setGame} />}
    </div>
  )
}

export default App
