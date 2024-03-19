import { useState } from "react";
import { register } from "../api/fetchdata";
import { useNavigate } from "react-router-dom";

export function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const navigateSignIn = () => {
        let path = "/signin";
        navigate(path);
    }

    const register = () => {
        fetch("http://localhost:5000/register", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        }).then((res) => res.json());
        navigateSignIn();
    }


    return (
        <>
            <h1>Register</h1>
            <form  onSubmit={register}>
                <label htmlFor="email">Email:
                    <input type="email" id="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </label>
                <label htmlFor="password">Password:
                    <input type="password" id="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </label>
                <button type="submit" >Register</button>
            </form>
        </>
    )
}