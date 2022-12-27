import React, { useState } from "react";

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(email);

        fetch("http://localhost:5000/login", {
            method:"POST",
            crossDomain:true,
            headers:{
                "Content-Type":"application/json",
                Accept:"application/json",
                "Access-Control-Allow-Origin":"*",
            },
            body:JSON.stringify({
                email,
                password:pass
            }),
        }).then((res)=>res.json())
        .then((data)=>{
            console.log(data,"userRegister")
            if(data.status =="ok"){
                alert("login successful")
                window.localStorage.setItem("token",data.data)
                window.location.href = "./profile"
            }
        })
    }

    return (
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="loginForm" onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="abcd@gmail.com" id="email" name="email"/>

                <label htmlFor="password">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password"/>

                <button type="submit">Log in</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here</button>
        </div>
        
    );
}