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
        <main className="mx-auto flex min-h-screen w-full items-center justify-center  ">
            <section className="flex w-[60rem] flex-col space-y-10 items-center justify-center">
                <div className=" flex-col items-center justify-center">
                    <h1 className="text-center text-4xl font-medium">Register </h1>
                    <form className=" md:p-12" onSubmit={register}>
                        <label className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">Email</label>
                        <input type="email" id="email" placeholder="Email" className="bg-gray-200 rounded pl-12 py-2 md:py-4 focus:outline-none w-full" value={email} onChange={(e) => setEmail(e.target.value)} required />

                        <label className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">Password</label>
                        <input type="password" id="password" placeholder="password" className="bg-gray-200 rounded pl-12 py-2 md:py-4 focus:outline-none w-full" value={password} onChange={(e) => setPassword(e.target.value)} required />

                        <button type="submit" className="bg-gradient-to-b from-gray-700 to-gray-900 font-medium p-2 md:p-4 text-white uppercase w-full rounded">Sign Up</button>
                    </form>
                </div>
            </section>
        </main>
    )
}

