import { Link } from "react-router-dom"
import axios from 'axios';
import { useState, useEffect } from "react"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Pokemon from "../components/Pokemon";

const characters = ()=>{
    const [charactersList, setCharactersList] = useState([])
    
    useEffect(() =>{  
          axios
            .get('https://pokeapi.co/api/v2/pokemon') 
            .then(resp => {
              
              setCharactersList(resp.data.results)
            })
            .catch(error => console.error(error))
    },[])    
    return(
        <main>
            <h1>PERSONAJES</h1>
            <Link to="/">Ir a Home</Link>
            <Link to="/">
                <button>Ir a la pagina principal</button>
            </Link>
            <Container>
                <Row xs={1} md={2} lg={3}>
                    {
                        charactersList?.map(character => (
                            
                                <Col>
                                    
                                    <Pokemon key={character.url} url={character.url} />
                                    
                                </Col> 
                            
                        ))
                    
                    }  
                </Row>        
            </Container>      
                   
            
        </main>
    )
}

export default characters

