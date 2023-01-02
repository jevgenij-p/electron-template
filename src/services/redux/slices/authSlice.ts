import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { AppState } from '../store'
import * as storage from '../../utils/storage'

export type AuthState = {
    userName: string | null
    role: string | null
    token: string | null
    isAuthorized?: boolean
    remember: boolean
}

const initialState: AuthState = {
    userName: storage.getItem('userName'),
    role: storage.getItem('role'),
    token: storage.getItem('token'),
    isAuthorized: storage.getItem('token') != null,
    remember: false
}

const emptyState: AuthState = {
    userName: null,
    role: null,
    token: null,
    isAuthorized: false,
    remember: false
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
      login: (state, action: PayloadAction<AuthState>) => {
        const newState = action.payload
        if (newState !== undefined) {
            newState.isAuthorized = (newState.token) ? true : false
            storage.setItem('userName', newState.userName, newState.remember)
            storage.setItem('role', newState.role, newState.remember)
            storage.setItem('token', newState.token, newState.remember)
            Object.assign(state, newState)
            console.log(`auth reducer. login ${state.userName}`)
        }
      },
      logout: (state) => {
        storage.removeItems(['userName', 'role', 'token'])
        Object.assign(state, emptyState)
        console.log(`auth reducer. logout ${state.userName}`)
      },
    },
  })

  export const { login, logout } = authSlice.actions

  export const isAuthorized = (state: AppState) => state.auth.isAuthorized

  export default authSlice.reducer