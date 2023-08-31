import '../css/header.css'
import {MdEmail, MdOutlineWork} from 'react-icons/md'
import 'animate.css';
import { Link } from 'react-router-dom';

function Header(){
    return(
        <header className='header'>
            <Link to='/'>
                <img id='header' className='logo scale-up-center animate_animated animate__flipInX' src={require('../images/logo.png')}></img>
            </Link>
            <div className='container-buttons'>
            <a id='buttonProyecto' href="#proyectos" className='contact-button'> 
                Proyectos
                <button>
                    <MdOutlineWork/>
                </button>
            </a>
            <Link to='/contact' className='contact-button'>
                Contactar
                <button> 
                    <MdEmail/>
                </button>
            </Link>
            </div>
        </header>
    )
}

export default Header