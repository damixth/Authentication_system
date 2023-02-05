import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLogin } from '../hooks/useLogin'

export const Login = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const { login, error, isLoading } = useLogin()

    const handleSubmit = async (e) =>{
        e.preventDefault();
        console.log(email);

        await login(email, pass);

    }

    return (
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="loginForm" onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} 
                type="email" placeholder="abcd@gmail.com" id="email" name="email"/>

                <label htmlFor="password">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} 
                type="password" placeholder="********" id="password" name="password"/>

                <button type="submit" disabled={isLoading}>Log in</button>
                {error && <div className='error'>{error}</div>}
            </form>
            <button className="link-btn">
                <Link to="/register" style={{ margin: '0.5rem 0', color: 'white', textDecoration: 'underline'}}>
                    Don't have an account? Register here</Link>
            </button> 
        </div>
        
    );
}