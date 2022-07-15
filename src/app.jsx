import './app.css'

import { Positions } from './ui/components'

const App = () => {
  return (
    <div className='container'>
      <header className='header'>
        <h1>Jogo da Velha</h1>
        <h2>Algoritmo Minimax</h2>
      </header>

      <div className='game-vertical '>
        <div className='game-horizontal'>
          <Positions />
        </div>
      </div>
    </div>
  )
}

export default App
