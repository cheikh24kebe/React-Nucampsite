import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from '../features/user/userSlice';
import { campsitesReducer } from '../features/campsites/campsitesSlice';

export const store = configureStore({
    reducer: {
        user: userReducer,
        campsites: campsitesReducer
    }
});
