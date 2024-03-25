import { useEffect, useState } from "react";
import { getAllOrders } from "../api/adminFetch";
import { Link } from "react-router-dom";

export function Orders() {
    const [allOrders, setAllOrders] = useState([]);

    useEffect(() => {
        getAllOrders().then((allOrderData) => setAllOrders(allOrderData));
    }, []);

    console.log(allOrders)
    return (
        <div className=" mx-20">


            <div className='w-auto p-6 rounded-lg overflow-hidden shadow-lg bg-white flex flex-col'>
            <Link to="/admin" ><h1 className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded self-start float-start"> Go Back</h1></Link>

                <h1 className="font-bold text-2xl">All Orders</h1>
                <ul className="w-full min-h-80 h-screen overflow-y-scroll no-scrollbar">
                    {allOrders.map((orders) => (

                        <li className="m-1">

                            <p> <span className="font-bold">User:</span> {orders.userEmail}</p>
                            <p> <span className="font-bold">Order Date: </span>{orders.orderDate}</p>
                            <p> <span className="font-bold">Total Price:</span> {orders.totalOrderPrice}</p>

                        </li>

                    ))}
                </ul>
            </div>
        </div>
    )
}