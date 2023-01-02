import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slices/authSlice'

const reducer = {
    auth: authReducer
}

export const store = configureStore({
    reducer,
    devTools: process.env.NODE_ENV !== 'production',
})

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch