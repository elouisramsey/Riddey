import { IButton } from 'types'
import './style.css'

const Button = ({ children, disabled, onClick }: IButton) => {
  return (
    <button
      aria-label='increase count'
      aria-disabled={disabled}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button
