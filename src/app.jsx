import './app.css'

import { Positions } from './ui/components'

const App = () => {
  return (
    <div className='container'>
      <div className='game-vertical '>
        <div className='game-horizontal'>
          <Positions />
        </div>
      </div>
    </div>
  )
}

export default App
