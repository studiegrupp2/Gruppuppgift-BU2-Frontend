import { useEffect, useState } from 'react';
import { fetchAllProducts } from '../api/fetchdata';
import { AddToCart } from '../api/fetchdata';
import { Link, useLocation, useNavigate } from 'react-router-dom';

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
  
    

    // const goToProduct = () => {
    //     navigate(`/item/${product.id}`, {data: product}), product={product};
    //     console.log(product);
    // }
    //const dataToPass = { title : product.title, description : product.description};

    return (
        <Link to={`/item/${product.id}`}>
        <li key={product.id} className='border-gray-900 border-4'>
            <h1>{product.title}</h1>
            <img width={200} src={product.thumbnail} alt="Thumbnail"></img>
            <p>{product.description}</p>
            <p>{product.color}</p>
            <p>{product.price}</p>
            <p>{product.averageRating}</p>
            {product.reviews.map((review) => (
                <div key={review.id} >
                    <p>{review.inputName}</p>
                    <p>{review.inputReview}</p>
                </div>
            ))}
            <button onClick={(e) => addItem(product.id)}>Add To Cart</button>
        </li>
        </Link>
    )
}