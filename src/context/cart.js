import { createContext, useState, useEffect } from 'react'

export const CartContext = createContext()


export const CartProvider = ({ children }) => {
}

const [cartItems, setCartItems] = useState([])