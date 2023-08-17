import '../css/header.css'
import {MdEmail} from 'react-icons/md'
import 'animate.css';
import { Link } from 'react-router-dom';

function Header(){
    return(
        <header className='header'>
            <Link to='/'>
                <img id='header' className='logo scale-up-center animate_animated animate__flipInX' src={require('../images/logo.png')}></img>
            </Link>
            <Link to='/contact' className='contact-button'>
                Contactar
            <button> 
                <MdEmail/>
            </button>
            </Link>
        </header>
    )
}

export default Header