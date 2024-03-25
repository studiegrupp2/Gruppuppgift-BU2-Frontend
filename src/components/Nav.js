import { useState, useEffect } from 'react';
import '../App.css';
import { Routes, Route, Link, Outlet, useNavigate } from "react-router-dom";
import { getCartItems } from '../api/fetchdata';
import { SignOut } from './SignOut';
import { useRecoilState } from 'recoil';
import { loggedInState } from '../App';

export default function Nav({loggedIn, setLoggedIn, userName, setUserName, category, setCategory }) {

    const [cartAmount, setCartAmount] = useState();

    const [auth, setAuth] = useState();
    
    const navigate = useNavigate();

    const  goToCategory = (cat) => {
       let path = `/categories/${cat}`;
       navigate(path);
    }
  
    console.log(loggedIn)
    const handleSignOut = () => {
        SignOut();
        console.log("Signed Out");
        setLoggedIn(false);
        setUserName("")
    }

    const changeCategory = (cat) => {
        setCategory(cat);
        goToCategory(cat);
    }

    return (
        <nav className="
        flex flex-wrap
        items-center
        justify-between
        w-full
        py-4
        md:py-0
        px-4
        text-lg text-gray-700
        bg-white
        nav font-semibold text-lg
        sticky top-0
        shadow-md
        bg-opacity-0.5
        
      ">
            <div className="flex items-center w-full">
                <img width={150} src="./BU2-logo.png"/>
                <ul className="
                pt-4
                text-base text-gray-700
                w-full
                flex
                space-between 
                pt-0">
                    <li className="md:p-4 py-2 block hover:text-purple-400"><Link to="/">Home</Link></li>
                    <div className="md:p-4 py-2 block hover:text-purple-400">
                        <select
                        onChange={(e) => changeCategory(e.target.value)}>
                        <option value = "" disabled selected>Category</option> 
                        <option value = "Skor">Skor</option>
                        <option value = "T-shirt">T-shirt</option>
                        <option value = "Byxor">Byxor</option>
                        <option value = "Ytterkläder">Ytterkläder</option>
                        <option value = "Strumpor">Strumpor</option>
                        </select>
                    </div>
                    {loggedIn ?
                        <>
                            <li className="md:p-4 py-2 block hover:text-purple-400" onClick={() => { handleSignOut() }}>SignOut</li>
                            <li className="md:p-4 py-2 block hover:text-purple-400"><Link to="/cart"><svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M4.142 4L6.01 16.136A1.002 1.002 0 0 0 7.016 17H18a1 1 0 0 0 .958-.713l3-10A1 1 0 0 0 21 5H6.32l-.33-2.138a.993.993 0 0 0-.346-.627a.997.997 0 0 0-.66-.235H3a1 1 0 1 0 0 2zm3.716 11l-1.23-8h13.028l-2.4 8zM10 20a2 2 0 1 1-4 0a2 2 0 0 1 4 0m9 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0" /></svg></Link></li>
                        </>
                        :
                        <li className="md:p-4 py-2 block hover:text-purple-400 "><Link to="/signin">Sign In</Link></li>

                    }
                    {userName === "chef@hotmail.com" ?
                    <li className="md:p-4 py-2 block hover:text-purple-400"><Link to="/admin">AdminView</Link></li> : null}
                    {/* {loggedIn === true ?  <li className="md:p-4 py-2 block hover:text-purple-400 text-purple-500"><Link to="/userOrder">Orders</Link></li>: null} */}
                    {/* {loggedIn === true ? <li className="md:p-4 py-2 block hover:text-purple-400"><Link to="/cart"><svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" d="M4.142 4L6.01 16.136A1.002 1.002 0 0 0 7.016 17H18a1 1 0 0 0 .958-.713l3-10A1 1 0 0 0 21 5H6.32l-.33-2.138a.993.993 0 0 0-.346-.627a.997.997 0 0 0-.66-.235H3a1 1 0 1 0 0 2zm3.716 11l-1.23-8h13.028l-2.4 8zM10 20a2 2 0 1 1-4 0a2 2 0 0 1 4 0m9 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0" /></svg></Link></li> : null}*/}
                </ul>
            </div>
            <div>
            </div>

            <div id="cards-container">

            </div>

        </nav>
    )



}

