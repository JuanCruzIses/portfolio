import React, { useState} from 'react';
import Spinner from "../components/Spinner"
import {FaTools} from "react-icons/fa"

function ProjectsSection (){
    const [toggleExpandModal, setToggleExpandModal] = useState(false)
    const [modalId, setModalId] = useState(Number)
    const [pasoModal0, setPasoModal0] = useState(false)
    const [pasoModal1, setPasoModal1] = useState(false)
    const [pasoModal2, setPasoModal2] = useState(false)
    const [pasoModal3, setPasoModal3] = useState(false)
    const [pasoModal4, setPasoModal4] = useState(false)
    const [pasoModal5, setPasoModal5] = useState(false)


    function toggleModal(e){
        setModalId(e.target.id)
        !toggleExpandModal ? setToggleExpandModal(!toggleExpandModal) : setToggleExpandModal(!toggleExpandModal)
    }

    window.addEventListener('scroll', function()  {
        let elements = document.getElementsByClassName('project-modal');
        let screenHeight = window.innerHeight;


        for(let i = 0; i < elements.length; i++){
            switch(i){
                case 0:
                    elements[i].getBoundingClientRect().top < screenHeight ?
                        setPasoModal0(true)
                    :
                       setPasoModal0(false)
                    break;
                case 1:
                    elements[i].getBoundingClientRect().top < screenHeight ?
                    setPasoModal1(true)
                :
                   setPasoModal1(false)
                    break;
                case 2:
                    elements[i].getBoundingClientRect().top < screenHeight ?
                    setPasoModal2(true)
                :
                   setPasoModal2(false)
                break    
                case 3:
                    elements[i].getBoundingClientRect().top < screenHeight ?
                    setPasoModal3(true)
                :
                   setPasoModal3(false)
                break    
                case 4:
                    elements[i].getBoundingClientRect().top < screenHeight ?
                    setPasoModal4(true)
                :
                   setPasoModal4(false)
                break
                case 5:
                    elements[i].getBoundingClientRect().top < screenHeight ?
                    setPasoModal5(true)
                :
                   setPasoModal5(false)
                break        
            }
        }   
    });  

    return(
        <section id='proyectos' className='projects-section'>
                <h4 className='title-projects-section'>Mis trabajos</h4>
                <h6 className='subtitle-projects-section'>A continuación, comparto algunos proyectos que he desarrollado</h6>
                <div className='container-projectsModal'>
                    <div onClick={toggleModal} className={`project-modal scroll-content ${pasoModal0 == true ? 'visible' : 'fadeTop'} ${toggleExpandModal && modalId == 1 ? 'expandModal' : ''}`}>
                        <img alt='logo-repartoAlegria' className='image-project-modal mapear' src={require('../images/logoRA.png')}></img>
                        <div id='1' className='shadow-box'></div>
                        <div className='overlay'>
                            <h6 className='title-project-modal'>Reparto Alegría</h6>
                            <p className='p-project-modal'>Ecommerce de productos organicos</p>
                            <p className='p-project-modal'>REACT | NextJs | APIs | MongoDB | NodeJs | EXPRESS | RD</p>
                            <a className='a-project-modal' rel="noopener noreferrer" target={'_blank'} href='https://reparto-alegria.vercel.app/'>
                                <button className='button-project-modal'>Sitio web</button>
                            </a>
                        </div>
                    </div>
                    <div onClick={toggleModal} className={`project-modal scroll-content ${pasoModal1 == true ? 'visible' : 'fadeTop'} ${toggleExpandModal && modalId == 2 ? 'expandModal' : ''}`}>
                        <img alt='logo-mapear' className='image-project-modal mapear' src={require('../images/logo-mapear.jpg')}></img>
                        <div id='2' className='shadow-box'></div>
                        <div className='overlay'>
                            <h6 className='title-project-modal'>Mapear</h6>
                            <p className='p-project-modal'>Aplicación mobile orientada al turismo nacional</p>
                            <p className='p-project-modal'>REACT | APIs | MySQL | NodeJs | EXPRESS | MOBILE APPLICATION DESIGN</p>
                            <a className='a-project-modal' rel="noopener noreferrer" target={'_blank'} href='https://mapear-frontend.vercel.app/'>
                                <button className='button-project-modal'>Sitio web</button>
                            </a>
                        </div>
                    </div>
                    <div onClick={toggleModal} className={`project-modal ${pasoModal2 == true ? 'visible' : 'fadeTop'} ${toggleExpandModal && modalId == 3 ? 'expandModal' : ''}`}>
                        <img alt='logo-rollandco' className='image-project-modal rollandco' src={require('../images/logo_roll.jpg')}></img>
                        <div id='3' className='shadow-box'></div>
                        <div className='overlay'>
                            <h6 className='title-project-modal'>Roll & Co.</h6>
                            <p className='p-project-modal'>Página web orientada a la venta de productos gastronomicos</p>
                            <p className='p-project-modal'>REACT | APIs | MySQL | NodeJs | Express | RD</p>
                            <a className='a-project-modal' rel="noopener noreferrer" target={'_blank'} href='https://rollandco.vercel.app/'>
                                <button className='button-project-modal'>Sitio web</button>
                            </a>
                        </div>
                    </div>
                    <div onClick={toggleModal} className={`project-modal scroll-content ${pasoModal3 == true ? 'visible' : 'fadeTop'} ${toggleExpandModal && modalId == 4 ? 'expandModal' : ''}`}>
                        <img alt='logo-sombreroloco' className='image-project-modal sombrero' src={require('../images/logo-sombrero.png')}></img>
                        <div id='4' className='shadow-box'></div>
                        <div className='overlay'>
                            <h6 className='title-project-modal'>Sombrero loco</h6>
                            <p className='p-project-modal'>Proyecto integrador curso Full Stack | E-commerce</p>
                            <p className='p-project-modal'>HTML | CSS | Javascript | Mysql | EXPRESS | RD | MVC | Middlewares</p>
                            <a className='a-project-modal' rel="noopener noreferrer" target={'_blank'} href='https://sombrereroloco.onrender.com/'>
                                <button className='button-project-modal'>Sitio web </button>
                            </a>    
                        </div>
                    </div>
                   
                    <div onClick={toggleModal} className={`project-modal scroll-content ${pasoModal4 == true ? 'visible' : 'fadeTop'} ${toggleExpandModal && modalId == 5 ? 'expandModal' : ''}`}>
                        <img alt='logo-mapear' className='image-project-modal mapear' src={require('../images/logo-tout.png')}></img>
                        <div id='5' className='shadow-box'></div>
                        <div className='overlay'>
                            <h6 className='title-project-modal'>Tout</h6>
                            <p className='p-project-modal'>Página web de tipo catálogo para el muestreo de muebles</p>
                            <p className='p-project-modal'>NextJs | NodeJs | RD | Bootstrap</p>
                            <a className='a-project-modal' rel="noopener noreferrer" target={'_blank'} href='https://tout.vercel.app/'>
                                <button className='button-project-modal'>Sitio web</button>
                            </a>
                        </div>
                    </div>
                    <div className={`project-modal scroll-content projects-in-progress ${pasoModal5 == true ? 'visible' : 'fadeTop'}`}>
                        <FaTools/>
                        <h6>Proyecto en construccion...</h6>
                        <Spinner className='image-project-modal mapear'/>
                    </div>
                </div>
            </section>
    )
}

export default ProjectsSection