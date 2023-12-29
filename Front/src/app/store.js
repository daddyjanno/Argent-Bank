import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { authSlice } from '../features/auth/authSlice'
import { userSlice } from '../features/user/userSlice'

const state = {}

const store = configureStore({
    preloadedState: state,
    reducer: combineReducers({
        auth: authSlice.reducer,
        user: userSlice.reducer,
    }),
})

export default store
