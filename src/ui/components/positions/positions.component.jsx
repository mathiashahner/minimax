import './positions.style.css'

const Position = ({ value }) => {
  return (
    <li className='position'>
      {value == 'X' && <div className='X'></div>}
      {value == 'O' && <div className='O'></div>}
    </li>
  )
}

export const Positions = ({ game }) => {
  return (
    <ul className='positions-list'>
      {game.map(value => (
        <Position value={value} />
      ))}
    </ul>
  )
}
