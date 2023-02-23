import '../css/footer.css'
import {FaLinkedin} from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'

function Footer(){
    return(
        <footer>
                <div className='footer-container-buttons'>
                    <a rel="noopener noreferrer" target={'_blank'} href='https://www.linkedin.com/in/juan-cruz-ises/?originalSubdomain=ar'>
                       <button  className='footer-button'>
                            <FaLinkedin/>
                       </button>
                    </a>
                    <a href='#header'>
                        <img className='logo-footer' src={require('../images/logo.png')}></img>
                    </a>
                    <a  href='https://juancruzises-portfolio.vercel.app/contact'>
                        <button className='footer-button'>
                            <MdEmail/>
                        </button>
                    </a>
                </div>
                <div className='footer-container'>
                    <span className='footer-container-title'>JUAN CRUZ ISES</span><br></br>
                    <span>Programador Web Full Stack</span>
                </div>
                <div className='footer-container'>
                    <span className='footer-container-title'>INFO DE CONTACTO</span><br></br>
                    <span><b>E-mail:</b> juancruzises@gmail.com</span><br></br>
                    <span>CABA, Argentina</span>
                </div>
        </footer>
    )
}

export default Footer