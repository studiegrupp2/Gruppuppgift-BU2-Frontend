import { useEffect, useState } from 'react';
//import { fetchAllProducts } from '../api/fetchdata';
import { AddToCart } from '../api/fetchdata';
import ProductCards from '../components/ProductCards';


export function Home({data}) {


    // const addItemToCart = (product) => {
    //     setCart([...cart, { product: product, amount: 1 }]);
    //   };
    
    console.log(data);
    return (
        <div>
            {data.length === 0 ?
                <p>loading</p> : (
                <ul>
                    {data.map((product) => (
                        <ProductCards key={product.id} product={product} />
                    ))}
                </ul>)}

        </div>
    )
}
