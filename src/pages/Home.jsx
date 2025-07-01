import React, { useState, useEffect} from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import ContainerImages from '../components/ContainerImages'
import SkillsSection from '../components/SkillsSection'
import ProjectsSection from '../components/ProjectsSection'
import '../css/home.css'

function Home() {
    return (
        <>
            <Header />
            <div>
                <ContainerImages/>
                <div className='separador'></div>
                <section className='presentation'>
                    <h1>Juan Cruz Ises</h1>
                    <h3>DESARROLLADOR WEB FULL STACK</h3>
                </section>
            </div>
            <div className='container-aboutme'>
                <p className='about-me'>
                    Soy estudiante de Gestión de Tecnología de la Información y Desarrollador Web Jr. con enfoque en front-end. Me desempeño en el ámbito educativo formando talentos digitales, mientras continuo perfeccionando mis habilidades a través de proyectos, formación continua y nuevos desafíos. Busco crecer profesionalmente en el sector IT, aportando compromiso, pensamiento analítico y creatividad en entornos colaborativos.
                </p>
            </div>
            {/* <SkillsSection></SkillsSection> */}
            <ProjectsSection></ProjectsSection>
            <Footer />
        </>
    )
}

export default Home