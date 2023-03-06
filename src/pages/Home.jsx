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
                <p className='about-me'>A partir del año 2021 decidí introducirme en el mundo de la programación y desde entonces forme mi aprendizaje a través de distintas instituciones educativas (Digital House y UTN), como así también, aprendiendo de forma autodidacta y de colegas de gran experiencia. Gracias a esto logre incorporar multiples herramientas que me permiten llevar adelante distintos tipos de proyectos, aportando de mi creatividad, ganas de innovar y de continuar aprendiendo.
                </p>
            </div>
            <SkillsSection></SkillsSection>
            <ProjectsSection></ProjectsSection>
            <Footer />
        </>
    )
}

export default Home