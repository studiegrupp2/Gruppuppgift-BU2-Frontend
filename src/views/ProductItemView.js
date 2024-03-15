import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom';

function ProductItemView({ data }) {

    const { id } = useParams();
    console.log(id);
    let ourId = Number(id);
    // const { state } = props.location;
    // const { title, description } = state;
    console.log(data[0]);

    const [product, setProduct] = useState({})
    // for (let i = 0; i < data.lenght; i++) {

    //     if (data[i].id === ourId) {
    //         setProduct(data[i])
    //     }
    // }


    useEffect(() => {
        data.map((prod) => {
            if (prod.id === ourId) {
                setProduct(prod)
            }
        })
    }, [])
    console.log(product);

    return (


        <li key={product.id} className='border-gray-900 border-4'>
            <h1>{product.title}</h1>
            <img width={200} src={product.thumbnail} alt="Thumbnail"></img>
            <p>{product.description}</p>
            <p>{product.color}</p>
            <p>{product.price}</p>
            <p>{product.averageRating}</p>
            {/* {product.reviews.map((review) => (
                <div key={review.id} >
                    <p>{review.inputName}</p>
                    <p>{review.inputReview}</p>
                </div>
            ))} */}
        </li>

    )
}

export default ProductItemView
