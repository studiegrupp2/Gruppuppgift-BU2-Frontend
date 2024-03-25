import { useEffect, useState } from "react"
import { getCartItems } from "../api/fetchdata"
import { CartCard } from "../components/CartCard";
import { Link } from "react-router-dom";


export function Cart() {
    const [userCart, setUserCart] = useState([]);

    useEffect(() => {
        getCartItems()
            .then((cartData) => setUserCart(cartData))
        console.log(userCart)
    }, []);

    return (
        <div className="mt-2">
            {userCart.length === 0 ? (
                <p>Cart is empty ...</p>
            ) : (
                <div >
                    <h1 className="text-2xl font-bold mb-4">Your Cart Items</h1>
                    <ul className="divide-y divide-gray-200" >
                        {userCart.cart.map((item) => (
                            <CartCard key={item.product.id} item={item} />

                        ))}
                    </ul>
                    <h2 className="flex flex-col items-center">Total: {userCart.total} SEK</h2>
                    <Link to="/userOrder">
                        <button className="bg-gradient-to-b from-gray-700 to-gray-900 font-medium p-2 md:p-4 text-white uppercase w-full rounded">Buy Items</button>
                    </Link>
                </div>
            )}
        </div>
    );
}        