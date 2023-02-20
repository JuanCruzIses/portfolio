import '../css/header.css'

function Header(){
    return(
        <header className='header'>
            <a href='/'>
                <img className='logo scale-up-center' src={require('../images/logo.png')}></img>
            </a>
            <a href='/contact'>
            <button className='contact-button'>
                Contactar
            </button>
            </a>
        </header>
    )
}

export default Header