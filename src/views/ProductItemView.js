import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { AddToCart, PostRating, PostReview, fetchAllProducts } from '../api/fetchdata';
import { useRecoilState } from 'recoil';
import { loggedInState } from '../App';

function ProductItemView({ data, setData , loggedIn, setLoggedIn}) {
    const [inputReview, setInputReview] = useState("");
    const [userRating, setUserRating] = useState(0);
    const { id } = useParams();
    const [productId, setProductId] = useState(0);
    // const [loggedIn, setLoggedIn] = useRecoilState(loggedInState);

    const product = data.find(product => product.id === Number(id));

    useEffect(() => {
        setProductId(Number(id));
    }, [])

    
    console.log(id);
    console.log(productId);
    console.log(product);

    const addItem = (itemId) => {
        if (loggedIn == true) {
            setProductId(itemId);
            AddToCart(productId);
            console.log("added product with id " + productId + " to cart");
            console.log(product);
        }
        else {
            goToSignIn();
        }
    }

    const navigate = useNavigate();

    const goToSignIn = () => {
        let path = "/signin";
        navigate(path);
    }

    const postRating = (productId, userRating) => {

        if (loggedIn === true) {
            //e.preventDefault();
            PostRating(productId, userRating);
            console.log(product);
            window.location.reload();

        }
        else {
            alert("You must be signed in to post rating");
        }
    }

    const postReview = (productId, inputReview) => {
        if (loggedIn === true) {
            //e.preventDefault();
            PostReview(productId, inputReview);
            console.log(product);
            window.location.reload();
        }
        else {
            alert("You must be signed in to post rating");
        }
    }

    return (
        <>
            {product === undefined ? <p>Loading ...</p> : (
                <div className='w-fit max-h-screen flex flex m-auto' key={product.id} >
                   
                    <div className='rounded overflow-hidden shadow-lg m-5 p-5 '>
                        <h1 className='font-semibold'>{product.title}</h1>
                        <img width={400} src={product.thumbnail} alt="Thumbnail"></img>
                        <p className='text-sm font-light'>{product.description}</p>
                        <p>{product.color}</p>
                        <p className='font-semibold'>{product.price} SEK</p>
                        <p>{product.averageRating.toFixed(1)}</p>
                        <button onClick={(e) => addItem(product.id)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded self-end float-end">Add To Cart</button>
                    </div>

                    <div className='min-h-full flex flex-col pb-10 place-content-evenly -mr-30 mt-20 ml-10 p-4 '>
                        <div className='flex flex-col '>
                            <input type="number" id="rating" value={userRating} onChange={(e) => setUserRating(e.target.value)} />
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-sm py-1 px-1 rounded self-end float-end" type="submit" onClick={() => postRating(product.id, userRating)}>Add Rating</button>
                            <input type="text" id='review'
                            className='p-2 h-24'
                            placeholder='Write your review'
                            value={inputReview}
                            onChange={(e) => setInputReview(e.target.value)} />
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-small p-1 rounded self-end float-end" key={product.id} type="submit" onClick={() => postReview(product.id, inputReview)}>Post Review</button>
                        </div>
                        <div className=' min-h-80 max-h-80  overflow-y-scroll no-scrollbar mt-2'>
                            {product.reviews && Array.isArray(product.reviews) && product.reviews.map((review) => (
                                <div key={review.id} >
                                    <p className='text-sm font-light italic'>{review.inputName}</p>
                                    <p className='font-semibold'>{review.inputReview}</p>
                                </div>
                            ))}
                        </div>
                        <div className="">
                                
                        </div>
                    </div>

                </div>
            )}
        </>
    )
}

export default ProductItemView


// const [view, setView] = useState(
//     localStorage.getItem("token") !== null ? "main" : "login"
//   );