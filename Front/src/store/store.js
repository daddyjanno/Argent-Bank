import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { authSlice } from './authSlice'
import { apiSlice } from './apiSlice'

const state = {}

const store = configureStore({
    preloadedState: state,
    reducer: combineReducers({
        auth: authSlice.reducer,
        [apiSlice.reducerPath]: apiSlice.reducer,
    }),
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
})

export default store
