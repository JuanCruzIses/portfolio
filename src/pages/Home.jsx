import Header from '../components/Header'
import Footer from '../components/Footer'
import '../css/home.css'
import ListGroupWithHeaderExample from '../components/SkillCards'


function Home() {
    return (
        <>
            <Header />
            <div className='container-images'>
                <img className='banner-img' src={require('../images/banner.jpg')}></img>
                <img className='retrato-img scale-up-center' src={require('../images/retrato.jpg')}></img>
            </div>
            <section className='presentation'>
                <h1>Juan Cruz Ises</h1>
                <h3>DESARROLLADOR WEB FULL STACK</h3>
                <p className='about-me'>A partir del año 2021 decidí realizar un cambio en la dirección de mi vida y me introduje de lleno en el mundo de la programación, encontrando así, una nueva pasión. A partir del estudio en diversas instituciones educativas, estudio autodidacta y la charla con pares programadores, fui desarrollando una formación llena de herramientas, aportando de mi personalidad la creatividad y las ganas de innovar.</p>
            </section>
            <div className='background-color'></div>
            <img className='ilustracion-img' src={require('../images/ilustracion.png')}></img>
            <ListGroupWithHeaderExample></ListGroupWithHeaderExample>
            <section className='projects-section'>
                <h4 className='title-projects-section'>Mi trabajo reciente</h4>
                <h6 className='subtitle-projects-section'>Les comparto algunos proyectos que he desarrollado</h6>
                
                <div className='project-modal'>
                    <img className='image-project-modal rollandco' src={require('../images/logo_roll.jpg')}></img>
                    <div className='overlay'>
                        <h8 className='title-project-modal'>Roll & Co.</h8>
                        <p className='p-project-modal'>Página web orientada a la venta de productos gastronomicos</p>
                        <a className='a-project-modal' rel="noopener noreferrer" target={'_blank'} href='https://rollandco.vercel.app/'>
                            <button className='button-project-modal'>Sitio web</button>
                        </a>
                    </div>
                </div>
                <div className='project-modal'>
                    <img className='image-project-modal mapear' src={require('../images/logo-mapear.jpg')}></img>
                    <div className='overlay'>
                        <h8 className='title-project-modal'>Mapear</h8>
                        <p className='p-project-modal'>Página web orientada al turismo nacional</p>
                        <a className='a-project-modal' rel="noopener noreferrer" target={'_blank'} href=''>
                            <button className='button-project-modal'>Sitio web</button>
                        </a>
                    </div>
                </div>
                <div className='project-modal'>
                    <img className='image-project-modal sombrero' src={require('../images/logo-sombrero.png')}></img>
                    <div className='overlay'>
                        <h8 className='title-project-modal'>Sombrero loco</h8>
                        <p className='p-project-modal'>Página web orientada a la venta de libros</p>
                        <a className='a-project-modal' rel="noopener noreferrer" target={'_blank'} href=''>
                            <button className='button-project-modal'>Sitio web </button>
                        </a>    
                    </div>
                </div>

            </section>
            <Footer />
        </>
    )
}

export default Home