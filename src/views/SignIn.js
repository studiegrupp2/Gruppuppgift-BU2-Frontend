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
    const navigateRegister = () => {
        let regPath = "/register";
        navigate(regPath);
    }
    const login = (e) => {
        e.preventDefault();
        fetch("http://localhost:5000/login", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        }).then((res) => {
            if (res.status !== 200) {
                console.log("login failed");
            }

            return res.json();
        }).then((res) => {
            console.log(res);
            localStorage.setItem("token", res.accessToken);


            navigateHome();
        })

    }

    return (
        <section >
            <div >
                <h1 >Sign In </h1>
                <form onSubmit={login}>
                    <label >Email</label>
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <label >Password</label>
                    <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    <button type="submit" >Log in</button>
                </form>
                <p>Dont have an account yet?</p><button onClick={(e) => navigateRegister()}>Sign up</button>

            </div>
        </section>
    )
}