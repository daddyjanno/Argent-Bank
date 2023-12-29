import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { getAuthConnected } from '../../store/authSlice'

const ProtectedRoute = ({ children }) => {
    const isAuth = useSelector(getAuthConnected)

    if (!isAuth) {
        return <Navigate to="/login" replace />
    }

    return children
}

export default ProtectedRoute
