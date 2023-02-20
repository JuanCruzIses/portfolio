import '../css/footer.css'
import {FaLinkedin} from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'

function Footer(){
    return(
        <footer>
                <div className='footer-container-buttons'>
                    <p>Contacto</p>
                    <a rel="noopener noreferrer" target={'_blank'} href='https://www.linkedin.com/in/juan-cruz-ises/?originalSubdomain=ar'>
                       <button  className='footer-button'>
                            <FaLinkedin/>
                       </button>
                    </a>
                    <a  href='https://portfolio-red-mu-47.vercel.app/contact'>
                        <button className='footer-button'>
                            <MdEmail/>
                        </button>
                    </a>
                </div>
                <img className='logo-footer' src={require('../images/logo.png')}></img>
        </footer>
    )
}

export default Footer