import { useEffect, useState } from "react";
import { BuyItemsInCart } from "../api/fetchdata";
import { CartCard } from "../components/CartCard";


export function UserOrderComplete() {
    const [userOrder, setUserOrder] = useState([]);
    // const [loading, setLoading] = useState(true)

    // useEffect(() => {
    //     let ignore = false;
    //     fetchStuff().then(res => {
    //       if (!ignore) setResult(res)
    //     })
    //     return () => { ignore = true }
    //   }, [])

    useEffect(() => {
        BuyItemsInCart().then((orderData) => setUserOrder(orderData));
        // setLoading(false);
        // let ignore = false;
        // BuyItemsInCart().then((orderData) => {
        //     if (!ignore) setUserOrder(orderData) 
        // })
        // return () => { ignore = true } 
    }, [])

    // if (loading){
    //     return <p>loading order ...</p>
    // }
    console.log(userOrder);
    return (
        <div className="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
            <h1 className="flex items-center justify-center text-3xl p-2">Your order is completed!</h1>
            {userOrder.length === 0 ? (
                <p>loading order ...</p>) : (
                <div className="flex flex-col justify-start items-start dark:bg-gray-400 bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
                    {userOrder.order.map((item) => (
                        <div className="mt-4 md:mt-6 flex flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full">
                            <div key={item.product.id} className="pb-4 md:pb-8 w-full md:w-40">
                                <img className="w-full hidden md:block" width={50} src={item.product.thumbnail} />
                            </div>
                            <div className="border-b border-gray-200 md:flex-row flex flex  items-start w-full pb-8 space-y-4 md:space-y-0 justify-between">
                                <p className="text-xl dark:text-white xl:text-2xl font-semibold leading-6 text-gray-800">{item.product.title}</p>
                                <p className="text-base dark:text-white xl:text-lg leading-6">{item.product.price} SEK</p>
                            </div>
                        </div>
                    ))}
                    <div className="justify-end">
                    <p className="text-base dark:text-white font-semibold leading-4 text-gray-800 justify-end">Total Price: {userOrder.total} SEK</p>
                    </div>
                </div>
            )}
        </div>
    )
}