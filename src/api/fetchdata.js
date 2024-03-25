export const fetchAllProducts = async () => {
    let result = await fetch("http://localhost:5000/store/products");
    return await result.json();
}

export const getCartItems = async () => {
    const options = {

        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
        }
    };
    let result = await fetch("http://localhost:5000/store/cart", options);
    return await result.json();


}

export const AddToCart = async (productId) => {

    const response = await fetch(`http://localhost:5000/store/product/${productId}/cart`,
        {

            "method": 'POST',
            "headers": {
                "Content-Type": "application/json",
                Authorization: "Bearer " + localStorage.getItem("token"),
            }
        });
    const result = await response.json();
    return result;
}

export const DeleteProductInCart = async (productId) => {

    const response = await fetch(`http://localhost:5000/store/product/${productId}/cart`,
        {

            "method": 'DELETE',
            "headers": {
                "Content-Type": "application/json",
                Authorization: "Bearer " + localStorage.getItem("token"),
            }
        });
    const result = await response.json();
    return result;
}

export const BuyItemsInCart = async () => {

    const response = await fetch("http://localhost:5000/store/product/cart/buy",
        {
            "method": 'PUT',
            "headers": {
                "Content-Type": "application/json",
                Authorization: "Bearer " + localStorage.getItem("token"),
            }
        });
    if (response.status !== 200) {
        console.log("cart empty");
        // return null;
    }
    const result = await response.json();
    return result;
}


export const updateProduct = async () => {
    const options = {

        method: 'PUT',
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
        }
    };
    if (options.status !== 200) {
        console.log("cart empty");
        // return null;
    }
    let result = await fetch("http://localhost:5000/store/product/cart/buy", options);
    return await options.json();


}
export const PostReview = async (productId, inputReview) => {

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
  
}

export const PostRating = async (productId, userRating) => {

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

   
}





// export const register = (email, password) => {
//     fetch("http://localhost:5000/register", {
//         method: 'POST',
//         headers: {'Content-Type':'application/json'},
//         body: JSON.stringify({ email, password}),
//     }).then((res) => res.json());
// }

//response.status