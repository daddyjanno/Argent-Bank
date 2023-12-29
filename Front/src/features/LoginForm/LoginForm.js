import React, { useEffect, useState } from 'react'
import Loader from '../../utils/Loader/Loader'
import { useLazyGetTokenQuery } from '../../store/apiSlice'
import { useDispatch } from 'react-redux'
import { login } from '../../store/authSlice'
import { useNavigate } from 'react-router-dom'

function LoginForm() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    // get infos in the local storage
    const localStorageEmail = localStorage.getItem('email')
    const localStoragePassword = localStorage.getItem('password')

    // local state
    const [credentials, setCredentials] = useState({
        email: localStorageEmail || '',
        password: localStoragePassword || '',
    })
    const [rememberMe, setRememberMe] = useState(false)

    // getting functions from custom hook created by RTK Query
    const [getToken, getTokenResult] = useLazyGetTokenQuery()

    useEffect(() => {
        if (getTokenResult.isSuccess) {
            dispatch(login(getTokenResult.data))
            navigate('/profile')
        }
    }, [dispatch, getTokenResult.isSuccess, getTokenResult.data, navigate])

    // logic to display error message if credentials are invalid, or if API is down
    let content
    // when loading, display the Loader component
    if (getTokenResult.isLoading) {
        content = <Loader />
    }
    // if failed to fetch, display the following message
    else if (getTokenResult.error?.error) {
        content = <span>API error</span>
    }
    // if login or password are incorect, display the following message
    else if (getTokenResult.error) {
        content = <span>Invalid Login or Password</span>
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (rememberMe) {
            localStorage.setItem('email', credentials.email)
            localStorage.setItem('password', credentials.password)
        } else {
            localStorage.removeItem('email')
            localStorage.removeItem('password')
        }
        getToken(credentials)
    }

    const handleChange = (event) => {
        setCredentials({
            ...credentials,
            [event.target.name]: event.target.value,
        })
    }

    const handleRememberMe = () => {
        setRememberMe(!rememberMe)
    }

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <div className="input-wrapper">
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    id="username"
                    name="email"
                    autoFocus
                    value={credentials.email}
                    onChange={(e) => handleChange(e)}
                />
            </div>
            <div className="input-wrapper">
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={credentials.password}
                    onChange={(e) => handleChange(e)}
                />
            </div>
            <div className="input-remember">
                <input
                    type="checkbox"
                    id="remember-me"
                    checked={rememberMe}
                    onChange={handleRememberMe}
                />
                <label htmlFor="remember-me">Remember me</label>
            </div>
            <button className="sign-in-button">Sign In</button>
            <span className="errorMessage">{content}</span>
        </form>
    )
}

export default LoginForm
