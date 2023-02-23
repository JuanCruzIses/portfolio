import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import '../css/skillCards.css'

function ListGroupWithHeaderExample() {
    return (
        <Card className='card-container'>
            <Card.Header className='title-card'>Developer Skills</Card.Header>

            <ListGroup variant="flush">
                <ListGroup.Item className='list-group first'>
                    <img className='card-title' src={require('../images/frontend.jpg')}></img>
                    <ul>

                        <li>REACT</li>
                        <li>HTML / CSS</li>
                        <li>RESPONSIVE DESIGN</li>
                        <li>TEMPLATE EJS</li>
                        <li>JQUERY</li>
                        <li>BOOTSTRAP</li>
                    </ul>
                </ListGroup.Item>
                <ListGroup.Item className='list-group'>
                    <img className='card-title' src={require('../images/backend.jpg')}></img>
                    <ul>
                        <li>NODE JS</li>
                        <li>TYPESCRIPT</li>
                        <li>JAVASCRIPT</li>
                        <li>MVC</li>
                        <li>MYSQL</li>
                        <li>MONGO DB</li>
                        <li>SEQUELIZE</li>
                        <li>APIS</li>
                        <li>EXPRESS</li>
                    </ul>
                </ListGroup.Item>
            </ListGroup>
        </Card>
    );
}

export default ListGroupWithHeaderExample;