import { useEffect, useState } from 'react';
//import { fetchAllProducts } from '../api/fetchdata';
import { AddToCart } from '../api/fetchdata';
import ProductCards from '../components/ProductCards';


export function Home({data, loggedIn, setLoggedIn,}) {
    

    // console.log(data);
    return (
        <div>
            {data.length === 0 ?
                <p>loading</p> : (
                <ul>
                    {data.map((product) => (
                        <ProductCards key={product.id} product={product} loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
                    ))}
                </ul>)}
        </div>
    )
}
