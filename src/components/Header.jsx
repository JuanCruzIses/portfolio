import '../css/header.css'
import {MdEmail} from 'react-icons/md'
import 'animate.css';

function Header(){
    return(
        <header className='header'>
            <a href='/'>
                <img id='header' className='logo scale-up-center animate_animated animate__flipInX' src={require('../images/logo.png')}></img>
            </a>
            <a href='/contact' className='contact-button'>
                Contactar
            <button> 
                <MdEmail/>
            </button>
            </a>
        </header>
    )
}

export default Header