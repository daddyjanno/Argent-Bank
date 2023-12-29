import React from 'react'
// import AuthForm from '../features/auth/AuthForm'
import LoginForm from '../features/LoginForm/LoginForm'

function Login() {
    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                {/* <AuthForm /> */}
                <LoginForm />
            </section>
        </main>
    )
}

export default Login
