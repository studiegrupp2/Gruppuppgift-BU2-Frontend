import { useEffect, useState } from 'react';
import { fetchAllProducts } from '../api/fetchdata';
import { AddToCart } from '../api/fetchdata';
import { Link, useNavigate } from 'react-router-dom';
import { loggedInState } from '../App';
import { useRecoilState } from 'recoil';

export default function ProductCards({ product, loggedIn, setLoggedIn}) {

    const [productId, setProductId] = useState(0);
    // const [loggedIn, setLoggedIn] = useRecoilState(loggedInState);


    useEffect(() => {
        setProductId(product.id);
    }, [])
    console.log(loggedIn);
    const addItem = (id) => {
        if (loggedIn == true){
            setProductId(id);
            AddToCart(productId);
            console.log("added product with id " + productId + " to cart");
        }
        else {
            goToSignIn();
        } 
    }
  
    const navigate = useNavigate();

    const  goToSignIn = () => {
       let path = "/signin";
       navigate(path);
    }

    return (
        <div className='max-w-xs rounded overflow-hidden shadow-lg mt-10' >
            <li key={product.id} className='mt-2 m-6 p-4 flex flex-col h-full justify-between' >
                <Link to={`/item/${product.id}`} >
                        <div className="flex flex-column">
                            <img className="object-full" src={product.thumbnail} alt="Thumbnail" />
                        </div>
                        <div className="justify">
                            <p>{product.title}</p>
                            <p className='font-light'>{product.description}</p>
                            <p>{product.color}</p>
                            <p className='font-bold'>{product.price} SEK</p>
                        </div>
                </Link>
                <footer>
                    <button onClick={(e) => addItem(product.id)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded self-end float-end">Add To Cart</button>{/* ska bara vara synlig om man är inloggad */}
                </footer>
            </li>
        </div>
    )
}

