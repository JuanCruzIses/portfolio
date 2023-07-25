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
                <p className='about-me'>En el año 2021, tomé la decisión de emprender un nuevo camino en mi vida y adentrarme en el apasionante mundo de la programación. Mi aprendizaje ha sido forjado a través de mi participación en la prestigiosa institución educativa Digital House, combinado con estudios autodidactas y el valioso intercambio de conocimientos con colegas de gran experiencia. Gracias a esta formación integral, he adquirido una amplia gama de habilidades y herramientas que me han permitido llevar a cabo diversos proyectos, aportando de mi creatividad y ganas de innovar. Estoy entusiasmado por seguir creciendo en este campo y contribuir con mis capacidades a nuevos desafíos.
</p>
            </div>
            <SkillsSection></SkillsSection>
            <ProjectsSection></ProjectsSection>
            <Footer />
        </>
    )
}

export default Home