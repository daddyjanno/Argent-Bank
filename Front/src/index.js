import React from 'react'
import { createRoot } from 'react-dom/client'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import '../src/styles/main.css'
import { Provider } from 'react-redux'
import store from './app/store'
import Header from './layout/Header'
import Homepage from './pages/Homepage'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Footer from './layout/Footer'
import PageNotFound from './pages/PageNotFound'
import ProtectedRoute from './utils/ProtectedRoute/ProtectedRoute'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
    <React.StrictMode>
        <Router>
            <Provider store={store}>
                <Header />
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/login" element={<Login />} />
                    <Route
                        path="/profile"
                        element={
                            <ProtectedRoute>
                                <Profile />
                            </ProtectedRoute>
                        }
                    />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
                <Footer />
            </Provider>
        </Router>
    </React.StrictMode>
)
