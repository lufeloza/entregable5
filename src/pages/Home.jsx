import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

const Home = () => {

    return(

        <main>
            <h1>HOME</h1>
            <Container>
            <Link to="/characters">
                <button>Ir al listado de personajes</button>
            </Link>
                <Row>
                    <Col>Nombre de Usuario</Col>                   
                </Row>
            </Container>
        </main>
    )
}

export default Home