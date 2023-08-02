
import { configureStore } from '@reduxjs/toolkit'
import username from './slice/username.slices'
export default configureStore({
    reducer: {
        username
    }
})
