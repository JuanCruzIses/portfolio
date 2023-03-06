import React, { useState, useEffect} from 'react';
import ListGroupWithHeaderExample from './SkillCards'



function SkillsSection (){
  const [paso, setPaso] = useState(false)

  window.addEventListener('scroll', function()  {
      let element = document.getElementById('scroll-content');
      let screenSize = window.innerHeight;
      
        if(element.getBoundingClientRect().top < screenSize) {
          setPaso(true)
        } else{
          setPaso(false)
        }
      });
    
    return(
      <section className='skills-section'>
                <div className='background-color'></div>
                <div id='scroll-content' className='container-ilustracion-img'>
                    <img alt='ilustracion-grafica' className={`ilustracion-img ${paso == true ? 'visible' : 'fadeTop'}`} src={require('../images/ilustracion.png')}></img>
                </div>
                <ListGroupWithHeaderExample></ListGroupWithHeaderExample>    
        </section>
    )
}

export default SkillsSection