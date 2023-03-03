import ListGroupWithHeaderExample from './SkillCards'

function SkillsSection (){
    return(
        <section className='skills-section'>
                <div className='background-color'></div>
                <div className='container-ilustracion-img'>
                    <img alt='ilustracion-grafica' className='ilustracion-img' src={require('../images/ilustracion.png')}></img>
                </div>
                <ListGroupWithHeaderExample></ListGroupWithHeaderExample>
            </section>
    )
}

export default SkillsSection