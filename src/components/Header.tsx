import Logo from '../images/Badge.png'

const Header = () => {
  return (
    <>
      <div className='logoContainer'>
        <img src={Logo} alt='Logo' />
      </div>
      <h1>Upgrade to Riddey PRO and boost productivity!</h1>
      <p className='subheading'>
        Pellentesque porttitor euismod ante, accumsan consequat purus!
      </p>
    </>
  )
}

export default Header
