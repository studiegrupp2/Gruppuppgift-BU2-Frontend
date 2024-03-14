import { useState, useEffect } from 'react';
import '../App.css';
import { Routes, Route, Link, Outlet } from "react-router-dom";
import { getCartItems } from '../api/fetchdata';

export default function Nav() {

    const [cart, setCart] = useState([]);
    const [cartAmount, setCartAmount] = useState();

    useEffect(() => {
        getCartItems().then(setCart)
    }, []);
    console.log(cart);

    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/cart">Cart</Link></li>
                <li><Link to="/categories">Categories</Link></li>
                <li><Link to="register">Register</Link></li>
                <li><Link to="/signin">Sign In</Link></li>
            </ul>
            {/* {cart.map((item) => (
                <div>
                 <p>{item.title}</p>
                </div> 
            ))} */}
            <div id="cards-container">

            </div>

        </nav>
    )



}