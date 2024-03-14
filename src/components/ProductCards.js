import { useEffect, useState } from 'react';
import { fetchAllProducts } from '../api/fetchdata';
import { AddToCart } from '../api/fetchdata';


export default function ProductCards({product}) {
    
    const [productId, setProductId] = useState();
   
   useEffect(()=>{
    setProductId(product.id);
   },[])
    
    const addItem = (product) => {
        console.log(productId);
        AddToCart(productId);
    }

    return(
        <div>
            

            <li key={product.Id} className='border-gray-900 border-4'>

                <h1>{product.title}</h1>
                <img width={200} src={product.thumbnail} alt="Thumbnail"></img>

                <p>{product.description}</p>
                <p>{product.color}</p>
                <p>{product.price}</p>

                {/* {product.AverageRating.map((rating) => (
                    <div>
                        <p>{rating.rating}</p>
                    </div>
                ))}
                <p>{product.ratingList}</p> */}
                {product.reviews.map((review) => (
                    <div >
                        <p>{review.inputName}</p>
                        <p>{review.inputReview}</p>
                    </div>
                ))}
                <button onClick={() => AddToCart(productId)}>Add To Cart</button>
            </li>
    </div>
    )
}