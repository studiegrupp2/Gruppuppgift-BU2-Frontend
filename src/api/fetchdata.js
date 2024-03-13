export const fetchAllProducts = async () => {
    let result = await fetch("http://localhost:5000/store/products");
    return await result.json();
}