import { useSelector, useDispatch } from 'react-redux';
import   setUsername  from '../store/slice/username.slices';
import { useState } from 'react';
import username from '../store/slice/username.slices'

const User =()=>{
    const username = useSelector((state) =>state.username)

    const dispatch = useDispatch()
    
    const handleSetName =() =>{
      
      dispatch(setUsername(name))
    }
    
    const [name, setName] = useState ('')
   
    return(
        <main>
            <h1>Bienvenido: {username}</h1>
            <input type="text" 
            value={name} 
            onChange={e => setName(e.target.value)}/>
            <button onClick={handleSetName} >Ingresar Nombre</button>
        </main>  

    )
}

export default User