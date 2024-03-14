import { useEffect, useState } from 'react';
import { fetchAllProducts } from '../api/fetchdata';
import { AddToCart } from '../api/fetchdata';


export function Home() {
    const [data, setData] = useState([]);
    

    useEffect(() => {
        fetchAllProducts().then(setData)
    }, []);
    console.log(data);

    

    return (
        <div>
            <div>
                {data.length === 0 ?
                    <p>loading</p> :
                    (
                        <ul>
                            {data.map((product) => (
                                <li class='border-gray-900 border-4'>

                                    <h1>{product.title}</h1>
                                    <img width={200} src={product.thumbnail} alt="Thumbnail"></img>

                                    <p>{product.description}</p>
                                    <p>{product.color}</p>
                                    <p>{product.price}</p>
                                    {product.reviews.map((review) => (
                                        <div>
                                            <p>{review.inputName}</p>
                                            <p>{review.inputReview}</p>
                                        </div>
                                    ))}
                                    <button onClick={() => AddToCart(product.Id)}>Add to cart</button>
                                </li>
                            ))}
                        </ul>
                    )}
            </div>
        </div>

    )
}
