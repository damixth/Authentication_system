import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useRegister } from '../hooks/useRegister'

export const Register = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const { signup, error, isLoading} = useRegister();

    const handleSubmit = async (e) =>{
        e.preventDefault();
        console.log(email, name, pass);

        await signup(name, email, pass);

    }

    return (
        <div className="auth-form-container">
            <h2>Register</h2>
            <form className="registerForm" onSubmit={handleSubmit}>
                <label htmlFor="name">Full Name</label>
                <input value={name} onChange={(e) => setName(e.target.value)} name="name" id="name" placeholder="full name"/>

                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="abcd@gmail.com" id="email" name="email"/>

                <label htmlFor="password">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password"/>

                <button disabled={isLoading} type="submit">Register</button>
                {error && <div className='error'>{error}</div>}
            </form>
            <button className="link-btn">
                <Link to="/login" style={{ color: 'white', textDecoration: 'underline'}}>
                Already have an account? Login here.</Link>
            </button> 
        </div>
    )
}