import { ReactComponent as Graphics } from 'images/Graphics.svg'
import { IBoard } from 'types'
import './style.css'

const Board = ({ featureNumber }: IBoard) => {
  return (
    <li aria-label={featureNumber + ''} className='board'>
      <Graphics height={22} width={22} />
      <p className='boardItem'>
        <strong className='featureNumber'>Feature #{featureNumber}</strong> -
        Etiam convallis, nibh vitae dui risus
      </p>
    </li>
  )
}

export default Board
