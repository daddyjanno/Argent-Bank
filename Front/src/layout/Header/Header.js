import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../../assets/argentBankLogo.png'
import { useDispatch, useSelector } from 'react-redux'
import {
    emptyData,
    getAuthConnected,
    getUserInfos,
    logout,
} from '../../store/authSlice'

function Header() {
    const dispatch = useDispatch()
    const connected = useSelector(getAuthConnected)
    const user = useSelector(getUserInfos)

    const handleLogOut = () => {
        dispatch(logout())
        dispatch(emptyData())
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
                        <i className="fa fa-user-circle"></i>
                        Sign In
                    </NavLink>
                )}
                {connected && (
                    <>
                        <NavLink className="main-nav-item" to="/profile">
                            <i className="fa fa-user-circle"></i>
                            {user.firstName}
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
