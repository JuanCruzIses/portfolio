import '../css/footer.css'
import {FaLinkedin} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {MdEmail, MdPhone} from 'react-icons/md'


function Footer(){
    return(
        <footer>
                <div className='footer-container'>
                    <div>
                        <span className='footer-container-title'>JUAN CRUZ ISES</span><br></br>
                        <span>Programador Web Full Stack</span>
                    </div>
                    <div>
                        <span className='footer-container-title'>INFO DE CONTACTO</span><br></br>
                        <span><b><MdEmail/></b> juancruzises@gmail.com</span><br></br>
                        <span><b><MdPhone/></b>1123883960</span><br></br>
                    </div>
                </div>
                <div className='footer-container-buttons'>
                    <a rel="noopener noreferrer" target={'_blank'} href='https://www.linkedin.com/in/juan-cruz-ises/?originalSubdomain=ar'>
                       <button  className='footer-button'>
                            <FaLinkedin/>
                       </button>
                    </a>
                    <a rel="noopener noreferrer" target={'_blank'} href='https://github.com/JuanCruzIses'>
                       <button  className='footer-button'>
                            <FaGithub/>
                       </button>
                    </a>
                </div>
                <div className='copyright'>
                    <p className='copyright-p'>© {new Date().getFullYear()} | <img id='header' className='logo scale-up-center animate_animated animate__flipInX' src={require('../images/logo.png')}></img></p>
                    
                </div>
        </footer>
    )
}

export default Footer