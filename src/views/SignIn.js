import { useState } from "react";
import { register } from "../api/fetchdata";
import { useNavigate } from "react-router-dom";

export function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    
    const navigateHome = () => {
       let path = "/";
       navigate(path);
    }
    const login = (e) => {
        e.preventDefault();
        fetch("http://localhost:5000/login", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        }).then((res) => res.json()).then((res) => {
            console.log(res);
            localStorage.setItem("token", res.accessToken);

            if (res.status !== 200){ 
                console.log("login failed") 
            }
            navigateHome();
        })

    }

    return (
        <>
            <h1>Login</h1>
            <form>
                <label >Email</label>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <label >Password</label>
                <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit" onClick={login}>Log in</button>
            </form>
        </>
    )
}