
import React, { useState, useEffect } from 'react';
import Spinner from "../components/Spinner";
import { FaTools } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "Enhance",
    desc: "Plataforma de servicio en entrenamiento físico y nutrición.",
    stack: "REACT | NextJs | Tailwind | WhatsApp | Looker Studio",
    img: require('../images/logo-enhance.png'),
    url: "https://enhance-trainning.vercel.app/",
    alt: "logo-enhance"
  },
  {
    id: 2,
    title: "Galeria de arte - Institute Chicago",
    desc: "Desafío técnico replica de galería de arte",
    stack: "REACT | NextJs | APIs | Tailwind | TypeScript | Shadcn",
    img: require('../images/Art_Institute_of_Chicago_Logo.png'),
    url: "https://challenge-banza-sigma.vercel.app/",
    alt: "logo-artGallery"
  },
  {
    id: 3,
    title: "Reparto Alegría",
    desc: "Ecommerce de productos organicos",
    stack: "REACT | NextJs | APIs | MongoDB | NodeJs | EXPRESS | RD",
    img: require('../images/logoRA.png'),
    url: "https://reparto-alegria.vercel.app/",
    alt: "logo-repartoAlegria"
  },
  {
    id: 4,
    title: "Tout",
    desc: "Página web de tipo catálogo para el muestreo de muebles",
    stack: "NextJs | NodeJs | RD | Bootstrap",
    img: require('../images/logo-tout.png'),
    url: "https://tout.vercel.app/",
    alt: "logo-tout"
  },
  {
    id: 5,
    title: "Roll & Co.",
    desc: "Página web orientada a la venta de productos gastronomicos",
    stack: "REACT | APIs | MySQL | NodeJs | Express | RD",
    img: require('../images/logo_roll.jpg'),
    url: "https://rollandco.vercel.app/",
    alt: "logo-rollandco"
  },
  {
    id: 6,
    title: "Sombrero loco",
    desc: "Proyecto integrador curso Full Stack | E-commerce",
    stack: "HTML | CSS | Javascript | Mysql | EXPRESS | RD | MVC | Middlewares",
    img: require('../images/logo-sombrero.png'),
    url: "https://sombrereroloco.onrender.com/",
    alt: "logo-sombreroloco"
  },
  {
    id: 7,
    title: "Mapear",
    desc: "Aplicación mobile orientada al turismo nacional",
    stack: "REACT | APIs | MySQL | NodeJs | EXPRESS | MOBILE APPLICATION DESIGN",
    img: require('../images/logo-mapear.jpg'),
    url: "https://mapear-frontend.vercel.app/",
    alt: "logo-mapear"
  }
];

function ProjectsSection() {
  const [toggleExpandModal, setToggleExpandModal] = useState(false);
  const [modalId, setModalId] = useState(null);
  const [visibleModals, setVisibleModals] = useState(Array(projects.length).fill(false));

  function toggleModal(e) {
    setModalId(Number(e.target.id));
    setToggleExpandModal((prev) => !prev);
  }

  useEffect(() => {
    function handleScroll() {
      const elements = document.getElementsByClassName('project-modal');
      const screenHeight = window.innerHeight;
      const newVisible = Array(projects.length).fill(false);
      for (let i = 0; i < elements.length; i++) {
        if (elements[i].getBoundingClientRect().top < screenHeight) {
          newVisible[i] = true;
        }
      }
      setVisibleModals(newVisible);
    }
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id='proyectos' className='projects-section'>
      <h4 className='title-projects-section'>Mis trabajos</h4>
      <h6 className='subtitle-projects-section'>A continuación, comparto algunos proyectos que he desarrollado</h6>
      <div className='container-projectsModal'>
        {projects.map((project, idx) => (
          <div
            key={project.id}
            onClick={toggleModal}
            className={`project-modal scroll-content ${visibleModals[idx] ? 'visible' : 'fadeTop'} ${toggleExpandModal && modalId === project.id ? 'expandModal' : ''}`}
          >
            <img
              alt={project.alt}
              className='image-project-modal mapear'
              src={project.img}
            />
            <div id={project.id} className='shadow-box'></div>
            <div className='overlay'>
              <h6 className='title-project-modal'>{project.title}</h6>
              <p className='p-project-modal'>{project.desc}</p>
              <p className='p-project-modal'>{project.stack}</p>
              <a
                className='a-project-modal'
                rel="noopener noreferrer"
                target={'_blank'}
                href={project.url}
              >
                <button className='button-project-modal'>Sitio web</button>
              </a>
            </div>
          </div>
        ))}
        <div className={`project-modal scroll-content projects-in-progress ${visibleModals[projects.length] ? 'visible' : 'fadeTop'}`}>
          <FaTools />
          <h6>Proyecto en construccion...</h6>
          <Spinner className='image-project-modal mapear' />
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;