import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../assets/argentBankLogo.png'
import { useDispatch, useSelector } from 'react-redux'
import { getAuthConnected, logout } from '../features/auth/authSlice'
import { emptyUserData, getUserData } from '../features/user/userSlice'

function Header() {
    const dispatch = useDispatch()
    const firstName = useSelector(getUserData).firstName
    const connected = useSelector(getAuthConnected)

    const handleLogOut = () => {
        dispatch(logout())
        dispatch(emptyUserData())
    }

    return (
        <nav className="main-nav">
            <Link className="main-nav-logo" to="/">
                <img
                    className="main-nav-logo-image"
                    src={Logo}
                    alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </Link>
            <div>
                {!connected && (
                    <NavLink className="main-nav-item" to="/login">
                        <i className="fa fa-user-circle" aria-hidden="true"></i>
                        Sign In
                    </NavLink>
                )}
                {connected && (
                    <>
                        <NavLink className="main-nav-item" to="/profile">
                            <i className="fa fa-user-circle"></i>
                            {firstName}
                        </NavLink>
                        <NavLink
                            className="main-nav-item"
                            to="/"
                            onClick={handleLogOut}
                        >
                            <i
                                className="fa fa-sign-out"
                                aria-hidden="true"
                            ></i>
                            Sign out
                        </NavLink>
                    </>
                )}
            </div>
        </nav>
    )
}

export default Header
