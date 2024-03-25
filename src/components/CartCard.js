import { useEffect, useState } from "react";
import { DeleteProductInCart, getCartItems } from "../api/fetchdata";

export function CartCard({ item }) {
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

            <li key={item.product.id} className="flex items-center py-4">
                <img width={100} src={item.product.thumbnail} alt="product thumbnail" className="w-16 h-16 mr-4" />
                <div className="flex-1">
                    <p className="text-lg font-semibold">{item.product.title} </p>
                    <p>Price: {item.product.price} :-</p>
                    <p>Amount: {item.quantity} </p>
                    <p>Total Price: {item.totalPrice} :-</p>
                    <button onClick={() => handleDelete(item.product.id)} className=''>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="30" viewBox="0 0 64 64">
                            <path d="M 28 6 C 25.791 6 24 7.791 24 10 L 24 12 L 23.599609 12 L 10 14 L 10 17 L 54 17 L 54 14 L 40.400391 12 L 40 12 L 40 10 C 40 7.791 38.209 6 36 6 L 28 6 z M 28 10 L 36 10 L 36 12 L 28 12 L 28 10 z M 12 19 L 14.701172 52.322266 C 14.869172 54.399266 16.605453 56 18.689453 56 L 45.3125 56 C 47.3965 56 49.129828 54.401219 49.298828 52.324219 L 51.923828 20 L 12 19 z M 20 26 C 21.105 26 22 26.895 22 28 L 22 51 L 19 51 L 18 28 C 18 26.895 18.895 26 20 26 z M 32 26 C 33.657 26 35 27.343 35 29 L 35 51 L 29 51 L 29 29 C 29 27.343 30.343 26 32 26 z M 44 26 C 45.105 26 46 26.895 46 28 L 45 51 L 42 51 L 42 28 C 42 26.895 42.895 26 44 26 z"></path>
                        </svg>
                    </button>
                </div>
            </li>

        </ul>
    )
}