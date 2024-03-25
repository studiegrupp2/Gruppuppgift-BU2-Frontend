import { useState } from "react";
import { register } from "../api/fetchdata";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { loggedInState } from "../App";

export function SignIn({loggedIn, setLoggedIn}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    //const loggedIn = useRecoilValue(loggedInState)
    //const [loggedIn, setLoggedIn] = useRecoilState(loggedInState);

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
                alert("login failed");
                return;
            }
            return res.json();
        }).then((res) => {
            console.log(res);
            localStorage.setItem("token", res.accessToken);
            localStorage.setItem("user", email);
            setLoggedIn(true);
            navigateHome();
        })
        console.log(loggedIn)
    }

    return (
        <main className="mx-auto flex min-h-screen w-full items-center justify-center  ">
            <section className="flex w-[60rem] flex-col space-y-10 items-center justify-center">
                <div className=" flex-col items-center justify-center">
                    <h1 className="text-center text-4xl font-medium">Sign In </h1>
                    <form className=" md:p-12" onSubmit={login}>
                        <label className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">Email</label>
                        <input type="email" placeholder="Email" className="bg-gray-200 rounded pl-12 py-2 md:py-4 focus:outline-none w-full" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        <label className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">Password</label>
                        <input type="password" placeholder="password" className="bg-gray-200 rounded pl-12 py-2 md:py-4 focus:outline-none w-full" value={password} onChange={(e) => setPassword(e.target.value)} required />
                        <button type="submit" className="bg-gradient-to-b from-gray-700 to-gray-900 font-medium p-2 md:p-4 text-white uppercase w-full rounded">Log in</button>
                    </form>
                    <div className="text-center text-lg">
                        <p className="text-center text-lg">Dont have an account yet?</p>
                        <button className="font-medium text-indigo-500 underline-offset-4 hover:underline text-center text-lg" onClick={(e) => navigateRegister()}>Sign up</button>
                    </div>
                </div>
            </section>
        </main>
    )
}


