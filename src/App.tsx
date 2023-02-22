import BoardsContainer from 'components/BoardsContainer'
import './App.css'
import Logo from './images/Badge.png'

function App() {
  return (
    <main>
      <div className='logoContainer'>
        <img src={Logo} alt='Logo' />
      </div>
      <h1>Upgrade to Riddey PRO and boost productivity!</h1>
      <p className='subheading'>
        Pellentesque porttitor euismod ante, accumsan consequat purus!
      </p>
      <BoardsContainer />
    </main>
  )
}

export default App
