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

        "method" : 'POST',
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