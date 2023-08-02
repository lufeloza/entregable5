import axios from 'axios'
import { useState, useEffect } from 'react'
import { Card } from 'react-bootstrap'
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';

const Pokemon = ({ url }) => {

    const [ data, setData ] = useState({})

    useEffect(() => {
        
        axios
            .get(url)
            .then(resp => {
                setData(resp.data)
                console.log(resp.data)
            })
            .catch(error => console.error(error))

    }, [])


    return(

       <Link to={`/characters/${data.name}`}>
                
        <div className="card border-secondary mb-3" style={{'max-width': '20rem'}}>
            <div className="card-header"><h4 className="card-title">{data.name}</h4></div>
            <div className="card-body">
                <h4 className="card-title">Tipo {data.types?.[0].type?.name}</h4>
                <h4 className="card-title">Hp {data.stats?.[0].base_stat}</h4>
                <h4 className="card-title">{`${data.stats?.[1].stat?.name}: ${data.stats?.[1].base_stat}`}</h4>
                <h4 className="card-title">{`${data.stats?.[2].stat?.name}: ${data.stats?.[2].base_stat}`}</h4>
                <h4 className="card-title">{`${data.stats?.[5].stat?.name}: ${data.stats?.[5].base_stat}`}</h4>
                <div className='card-img' ><img style={{'width': 200}} src={data.sprites?.front_default} alt="" /></div>
            </div>
        </div>
        </Link>

    )
}

export default Pokemon

