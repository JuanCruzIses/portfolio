import '../css/footer.css'
import {FaLinkedin} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
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
                    <a  href='https://juancruzises-portfolio.vercel.app/contact'>
                        <button className='footer-button'>
                            <MdEmail/>
                        </button>
                    </a>
                    <a rel="noopener noreferrer" target={'_blank'} href='https://github.com/JuanCruzIses'>
                       <button  className='footer-button'>
                            <FaGithub/>
                       </button>
                    </a>
                </div>
                <div className='footer-container'>
                    <div>
                        <span className='footer-container-title'>JUAN CRUZ ISES</span><br></br>
                        <span>Programador Web Full Stack</span>
                    </div>
                    <div>
                        <span className='footer-container-title'>INFO DE CONTACTO</span><br></br>
                        <span><b>Email:</b> juancruzises@gmail.com</span><br></br>
                    </div>
                </div>
                <div className='copyright'>
                    <p className='copyright-p'>© 2023 | Portfolio - Juan cruz Ises </p>
                </div>
        </footer>
    )
}

export default Footer