import { useEffect, useState } from "react"
import {  getCartItems } from "../api/fetchdata"
import { CartCard } from "../components/CartCard";


export function Cart() {
    const [userCart, setUserCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        getCartItems()
            .then((cartData) => setUserCart(cartData))
    }, []);


    console.log(userCart)
 


    return (
        <div className="mt-2">

            {userCart.length === 0 ? (
                <p>loading cart ...</p>) : (
                <div >
                    <h1 className="text-2xl font-bold mb-4">Your Cart Items</h1>
                    <ul className="divide-y divide-gray-200">
                        {userCart.cart.map((item) => (
                            <CartCard key={item.id} item={item}/>
                            // <li key={item.product.id }className="flex items-center py-4">
                            //     <img width={100} src={item.product.thumbnail} alt="product thumbnail" className="w-16 h-16 mr-4"/>
                            //     <div className="flex-1">
                            //     <p className="text-lg font-semibold">{item.product.title} </p>
                            //     <p>Price: {item.product.price} :-</p>
                            //     <p>Amount: {item.quantity} </p>
                            //     <p>Total Price: {item.totalPrice} :-</p>
                            //     <button onClick={() => handleDelete(item.product.id)} className='bg-red-800'>Remove Item</button>
                            //     </div>
                            // </li>
                        ))}
                    </ul>
                    <h2 className="flex flex-col items-center">Total: {userCart.total}</h2>
                </div>
            )}
        </div>
    );
}        