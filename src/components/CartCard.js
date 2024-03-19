import { useEffect, useState } from "react";
import { DeleteProductInCart, getCartItems } from "../api/fetchdata";

export function CartCard({item}){
    const [userCart, setUserCart] = useState([]);
    useEffect(() => {
        getCartItems()
            .then((cartData) => setUserCart(cartData.cart))
    }, []);

    const handleDelete = (itemInCartToDelete) => {
        DeleteProductInCart(itemInCartToDelete).then((newCartAmount) => setUserCart(newCartAmount))
        window.location.reload();
    }
    return (
        <ul className="divide-y divide-gray-200">

            <li key={item.product.id }className="flex items-center py-4">
                <img width={100} src={item.product.thumbnail} alt="product thumbnail" className="w-16 h-16 mr-4"/>
                <div className="flex-1">
                <p className="text-lg font-semibold">{item.product.title} </p>
                <p>Price: {item.product.price} :-</p>
                <p>Amount: {item.quantity} </p>
                <p>Total Price: {item.totalPrice} :-</p>
                <button onClick={() => handleDelete(item.product.id)} className='bg-red-800'>Remove Item</button>
                </div>
            </li>

    </ul>
    )
}