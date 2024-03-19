import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom';
import { AddToCart } from '../api/fetchdata';

function ProductItemView({ data, setProduct }) {
    const [inputReview, setInputReview] = useState("");
    const [userRating, setUserRating] = useState();
    const { id } = useParams();

    const product = data.find(product => product.id === Number(id));
    console.log(id);
    //let ourId = Number(id);
    console.log(product);

    // for (let i = 0; i < data.lenght; i++) {

    //     if (data[i].id === ourId) {
    //         setProduct(data[i])
    //     }
    // }

    const PostReview = async (productId) => {
        try {
            window.location.reload();
            const response = await fetch(`http://localhost:5000/store/product/${productId}`,
                {
                    "method": "POST",
                    "headers": {
                        "Content-Type": "application/json",
                        Authorization: "Bearer " + localStorage.getItem("token"),
                    },
                    body: JSON.stringify({ inputReview }),
                });
            const result = await response.json();
            return result;
        } catch (error) {
            console.error("Error posting review", error)
        }
    }

    const PostRating = async (productId) => {
        try {
        window.location.reload();

            const response = await fetch(`http://localhost:5000/store/product/${productId}/rating?userRating=${userRating}`,
                {
                    "method": "POST",
                    "headers": {
                        "Content-Type": "application/json",
                        Authorization: "Bearer " + localStorage.getItem("token"),
                    }
                });
            const result = await response.json();
            return result;

        } catch (error) {
            console.error("Error posting rating", error)
        }

    }

    // const addItem = (id) => {
    //     setProductId(id);
    //     AddToCart(productId);
    //     console.log("added product with id " + productId + " to cart");
    // }

    // useEffect(() => {
    //     setProductId(product.id);
    //     data.map((prod) => {
    //         if (prod.id === ourId) {
    //             setProduct(prod)
    //         }
    //     })
    // }, [])
    // console.log(product);

    return (
        <div class='w-64 '>
            <form onSubmit={(e) => { e.preventDefault(); PostRating(product.id) }}>
                <label>
                    <input type="number" id="rating" value={userRating} onChange={(e) => setUserRating(e.target.value)} />
                    <button type="submit">Add Rating</button>
                </label>
            </form>
            <li key={product.id} className='border-gray-900 border-4 '>
                <h1>{product.title}</h1>
                <img width={200} src={product.thumbnail} alt="Thumbnail"></img>
                <p>{product.description}</p>
                <p>{product.color}</p>
                <p>{product.price}</p>
                <p>{product.averageRating}</p>
                <button  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Add To Cart</button>
            </li>

            <div>
                <form onSubmit={(e) => { e.preventDefault(); PostReview(product.id) }}>
                    <label htmlfor="review">Post a Review:
                        <input type="text" id='review'
                            placeholder='Write your review'
                            value={inputReview}
                            onChange={(e) => setInputReview(e.target.value)} /></label>
                    <button type="submit">Post Review</button>
                </form>
                <div>
                    {/* Kollar om product.review finns sedan kollar om det är en array och om det är en array så mapar vi ut reviews */}
                    {product.reviews && Array.isArray(product.reviews) && product.reviews.map((review) => (
                        <div key={review.id} >
                            <p>{review.inputName}</p>
                            <p>{review.inputReview}</p>
                        </div>
                    ))}
                </div>
            </div>

        </div>

    )
}

export default ProductItemView
