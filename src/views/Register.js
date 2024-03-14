import { useState } from "react";
import { register } from "../api/fetchdata";

export function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const register = () => {
        fetch("http://localhost:5000/register", {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({ email, password}),
        }).then((res) => res.json());}
    
    
    return (
        <>
            <h1>Register</h1>
            <form>
                <label >Email</label>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <label >Password</label>
                <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <button type="submit" onClick={register}>Register</button>
            </form>
        </>
    )
}