import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import '../css/skillCards.css'

function ListGroupWithHeaderExample() {
    return (
        <Card className='card-container'>
            <Card.Header className='title-card'>Developer Skills</Card.Header>
            
            <ListGroup variant="flush">
                <ListGroup.Item className='list-group'>
                <img className='card-title' src={require('../images/frontend.jpg')}></img>
                    <p>REACT</p>
                    <p>HTML / CSS</p>
                    <p>TEMPLATE EJS</p>
                    <p>JQUERY</p>
                    <p>BOOTSTRAP</p>
                </ListGroup.Item>
                <ListGroup.Item className='list-group'>
                    <img className='card-title' src={require('../images/backend.jpg')}></img>
                    <p>NODE JS</p>
                    <p>TYPESCRIPT</p>
                    <p>JAVASCRIPT</p>
                    <p>MVC</p>
                    <p>MYSQL</p>
                    <p>MONGO DB</p>
                    <p>SEQUELIZE</p>
                    <p>APIS</p>
                    <p>EXPRESS</p>
                </ListGroup.Item>
            </ListGroup>
        </Card>
    );
}

export default ListGroupWithHeaderExample;