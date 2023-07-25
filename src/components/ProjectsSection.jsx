import React, { useState, useEffect} from 'react';

function ProjectsSection (){
    const [pasoModal0, setPasoModal0] = useState(false)
    const [pasoModal1, setPasoModal1] = useState(false)
    const [pasoModal2, setPasoModal2] = useState(false)

    window.addEventListener('scroll', function()  {
        let elements = document.getElementsByClassName('project-modal');
        let screenSize = window.innerHeight;
        
        for(let i = 0; i < elements.length; i++){
            if(elements[0].getBoundingClientRect().top < screenSize) {
                setPasoModal0(true)
                } else{
                    setPasoModal0(false)
                    }
                }
            if(elements[1].getBoundingClientRect().top < screenSize) {
                setPasoModal1(true)
            } else{
                setPasoModal1(false)
            }
            if(elements[2].getBoundingClientRect().top < screenSize) {
                setPasoModal2(true)
            } else{
                setPasoModal2(false)
            }
        });  

    return(
        <section className='projects-section'>
                <h4 className='title-projects-section'>Mis trabajos</h4>
                <h6 className='subtitle-projects-section'>Les comparto algunos proyectos que he desarrollado</h6>
                
                <div className={`project-modal ${pasoModal0 == true ? 'visible' : 'fadeTop'}`}>
                    <img alt='logo-rollandco' className='image-project-modal rollandco' src={require('../images/logo_roll.jpg')}></img>
                    <div className='overlay'>
                        <h7 className='title-project-modal'>Roll & Co.</h7>
                        <p className='p-project-modal'>Página web orientada a la venta de productos gastronomicos</p>
                        <a className='a-project-modal' rel="noopener noreferrer" target={'_blank'} href='https://rollandco.vercel.app/'>
                            <button className='button-project-modal'>Sitio web</button>
                        </a>
                    </div>
                </div>
                <div className={`project-modal scroll-content ${pasoModal1 == true ? 'visible' : 'fadeTop'}`}>
                    <img alt='logo-sombreroloco' className='image-project-modal sombrero' src={require('../images/logo-sombrero.png')}></img>
                    <div className='overlay'>
                        <h7 className='title-project-modal'>Sombrero loco</h7>
                        <p className='p-project-modal'>Página web orientada a la venta de libros</p>
                        <a className='a-project-modal' rel="noopener noreferrer" target={'_blank'} href='https://sombrereroloco.onrender.com/'>
                            <button className='button-project-modal'>Sitio web </button>
                        </a>    
                    </div>
                </div>
                <div className={`project-modal scroll-content ${pasoModal2 == true ? 'visible' : 'fadeTop'}`}>
                    <img alt='logo-mapear' className='image-project-modal mapear' src={require('../images/logo-mapear.jpg')}></img>
                    <div className='overlay'>
                        <h7 className='title-project-modal'>Mapear</h7>
                        <p className='p-project-modal'>Página web orientada al turismo nacional<br></br> <b>Version Mobile 1.0</b></p>
                        <a className='a-project-modal' rel="noopener noreferrer" target={'_blank'} href='https://mapear-y8ds.onrender.com/home'>
                            <button className='button-project-modal'>Sitio web</button>
                        </a>
                    </div>
                </div>
                <div className={`project-modal scroll-content ${pasoModal2 == true ? 'visible' : 'fadeTop'}`}>
                    <img alt='logo-mapear' className='image-project-modal mapear' src={require('../images/logo-mapear.jpg')}></img>
                    <div className='overlay'>
                        <h7 className='title-project-modal'>Mapear</h7>
                        <p className='p-project-modal'>Página web orientada al turismo nacional<br></br> <b>Version Mobile 2.0</b></p>
                        <a className='a-project-modal' rel="noopener noreferrer" target={'_blank'} href='https://mapear-frontend.vercel.app/'>
                            <button className='button-project-modal'>Sitio web</button>
                        </a>
                    </div>
                </div>
            </section>
    )
}

export default ProjectsSection