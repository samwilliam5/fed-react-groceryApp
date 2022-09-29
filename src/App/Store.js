import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../Feauters/Userslice'

export default configureStore({
    reducer: {
        user: userReducer
    },
});