import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: {},
    token: '',
    connected: false,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        changeUserCredentials(state, action) {
            state.credentials = action.payload
        },
        logout(state) {
            state.credentials = ''
            state.token = ''
            state.connected = false
        },
        login(state, action) {
            state.connected = true
            state.token = action.payload
        },
        setUser(state, action) {
            state.user = action.payload
        },
        emptyData(state) {
            state.user = {}
            state.token = ''
            state.connected = false
        },
    },
})

// selectors
export const getAuthConnected = (state) => state.auth.connected
export const getAuthToken = (state) => state.auth.token
export const getUserInfos = (state) => state.auth.user

//actions
export const { changeUserCredentials, login, logout, setUser, emptyData } =
    authSlice.actions

//reducers
export const authReducer = authSlice.reducer
