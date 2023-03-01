import Header from '../components/Header'
import Footer from '../components/Footer'
import '../css/home.css'
import ListGroupWithHeaderExample from '../components/SkillCards'


function Home() {
    return (
        <>
            <Header />
            <div>
                <div className='container-images'>
                    <img alt='banner' className='banner-img' src={require('../images/banner.jpg')}></img>
                    <img alt='retrato-juancruzises' className='retrato-img scale-up-center' src={require('../images/retrato.jpg')}></img>
                </div>
                <section className='presentation'>
                    <h1>Juan Cruz Ises</h1>
                    <h3>DESARROLLADOR WEB FULL STACK</h3>
                </section>
            </div>
            <div className='container-aboutme'>
                <p className='about-me'>A partir del año 2021 decidí realizar un cambio en mi vida e introducirme de lleno en el mundo de la programación, descubriendo así una nueva pasión. <br></br>
                Desde entonces forme mi aprendizaje a través de distintas instituciones educativas (Digital House y UTN), como así también, aprendiendo de forma autodidacta y de colegas de gran experiencia. Gracias a esto logre desarrollar una formación llena de herramientas que me permiten llevar adelante distintos tipos de proyectos, aportando de mi creatividad y ganas de innovar.
                </p>
            </div>
            <div className='background-color'></div>
            <div className='container-ilustracion-img'>
                <img alt='ilustracion-grafica' className='ilustracion-img' src={require('../images/ilustracion.png')}></img>
            </div>
            <ListGroupWithHeaderExample></ListGroupWithHeaderExample>
            <section className='projects-section'>
                <h4 className='title-projects-section'>Mis trabajos</h4>
                <h6 className='subtitle-projects-section'>Les comparto algunos proyectos que he desarrollado</h6>
                
                <div className='project-modal'>
                    <img alt='logo-rollandco' className='image-project-modal rollandco' src={require('../images/logo_roll.jpg')}></img>
                    <div className='overlay'>
                        <h8 className='title-project-modal'>Roll & Co.</h8>
                        <p className='p-project-modal'>Página web orientada a la venta de productos gastronomicos</p>
                        <a className='a-project-modal' rel="noopener noreferrer" target={'_blank'} href='https://rollandco.vercel.app/'>
                            <button className='button-project-modal'>Sitio web</button>
                        </a>
                    </div>
                </div>
                <div className='project-modal'>
                    <img alt='logo-sombreroloco' className='image-project-modal sombrero' src={require('../images/logo-sombrero.png')}></img>
                    <div className='overlay'>
                        <h8 className='title-project-modal'>Sombrero loco</h8>
                        <p className='p-project-modal'>Página web orientada a la venta de libros</p>
                        <a className='a-project-modal' rel="noopener noreferrer" target={'_blank'} href='https://sombrereroloco.onrender.com/'>
                            <button className='button-project-modal'>Sitio web </button>
                        </a>    
                    </div>
                </div>
                <div className='project-modal'>
                    <img alt='logo-mapear' className='image-project-modal mapear' src={require('../images/logo-mapear.jpg')}></img>
                    <div className='overlay'>
                        <h8 className='title-project-modal'>Mapear</h8>
                        <p className='p-project-modal'>Página web orientada al turismo nacional<br></br> <b>Version Mobile</b></p>
                        <a className='a-project-modal' rel="noopener noreferrer" target={'_blank'} href='https://mapear-y8ds.onrender.com/home'>
                            <button className='button-project-modal'>Sitio web</button>
                        </a>
                    </div>
                </div>

            </section>
            <Footer />
        </>
    )
}

export default Home