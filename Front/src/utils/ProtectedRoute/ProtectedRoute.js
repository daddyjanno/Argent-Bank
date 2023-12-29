import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { getAuthConnected } from '../../features/auth/authSlice'

const ProtectedRoute = ({ children }) => {
    const isAuth = useSelector(getAuthConnected)
    console.log(isAuth)

    if (!isAuth) {
        return <Navigate to="/login" replace />
    }

    return children
}

export default ProtectedRoute
