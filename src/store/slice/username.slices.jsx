import { createSlice } from '@reduxjs/toolkit';

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const usernameSlice = createSlice({
        name: 'username', // este es el nombre con el que se importa donde se necesite
    initialState: '' ,
    reducers: {
        
        
        setUsername : (state, action) =>{
            console.log(action)
            return action.payload
        }
    }
})

export const {setUsername} = usernameSlice.actions;

export default usernameSlice.reducer;
