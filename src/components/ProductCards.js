import { useEffect, useState } from 'react';
import { fetchAllProducts } from '../api/fetchdata';
import { AddToCart } from '../api/fetchdata';
import { Link, useNavigate } from 'react-router-dom';

export default function ProductCards({ product }) {

    const [productId, setProductId] = useState(0);


    useEffect(() => {
        setProductId(product.id);
    }, [])

    const addItem = (id) => {

        setProductId(id);
        AddToCart(productId);
        console.log("added product with id " + productId + " to cart");
    }

    // const navigate = useNavigate();
    
    // const  goToProduct = () => {
    //    let path = `/item/${product.id}`;
    //    navigate(path,);
    // }
     
        
  

    return (
        <div className='max-w-xs rounded overflow-hidden shadow-lg' >
            <Link to={`/item/${product.id}`} className='mt-2 m-2'>
                <li key={product.id}  >
                    <div >
                    <img className="object-cover w-full h-full" src={product.thumbnail} alt="Thumbnail"/>

                    </div>
                    <div >
                        <div >{product.title}</div>
                        <p >{product.description}</p>
                        <p>{product.color}</p>

                    </div>
                    <div >
                        <p >{product.price} SEK</p>
                        <button onClick={(e) => addItem(product.id)}  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Add To Cart</button>

                        {/* <p>{product.averageRating}</p> */}
                    </div>
                </li>

            </Link>
        </div>
    )
}