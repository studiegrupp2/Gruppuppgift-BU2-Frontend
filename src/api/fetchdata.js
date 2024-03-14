export const fetchAllProducts = async () => {
    let result = await fetch("http://localhost:5000/store/products");
    return await result.json();
}

export const getCartItems = async () => {
    let result = await fetch("http://localhost:5000/store/cart");
    return await result.json();
}

export const AddToCart = async (productId) => {
    const options = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
        }
    };
    const response = await fetch(`http://localhost:5000/store/product/{productId}/cart`);
    const result = await response.json();
    return result;
}

// export const register = (email, password) => {
//     fetch("http://localhost:5000/register", {
//         mode: 'cors',
//   credentials: 'include',
//         method: 'POST',
//         headers: {'Content-Type':'application/json'},
//         body: JSON.stringify({ email, password}),
//     }).then((res) => res.json());
// }

