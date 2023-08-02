import { useParams } from 'react-router-dom'
import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Pokemon from '../components/Pokemon'

const CharacterDetail = () => {

    //Devuelve un objeto cuyas propiedades son los parametros definidos para ruta y sus valores correspondientes son los valores dinamicos asignados
    const { id } = useParams() 
    const [character, setCharacter] = useState({})
    const navigate = useNavigate(); // () => {} 
    
    
    useEffect(() =>{
  
          axios
            .get(`https://pokeapi.co/api/v2/pokemon/${id}`) 
            .then(resp => {
              console.log(resp.data)
              setCharacter(resp.data)
            })
            .catch(error => {
                console.error(error)
                navigate("/not_found")})   
                   
    },[id])    
    return(
        <main>            
               <Pokemon key={`https://pokeapi.co/api/v2/pokemon/${id}`} url={`https://pokeapi.co/api/v2/pokemon/${id}`} />
        </main>
    )
}

export default CharacterDetail
