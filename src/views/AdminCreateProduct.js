import { useState } from "react";
import { Link } from "react-router-dom";

export function CreateProduct() {
    const [inputs, setInputs] = useState({});
    const [result, setResult] = useState(null);
    const [idInput, setIdInput] = useState();
    const [image, setImage] = useState(false);
    const [updateIdInput, setUpdateIdInput] = useState();


    const [productDetails, setProductDetails] = useState({
        title: "",
        description: "",
        category: "",
        size: "",
        color: "",
        price: "",
        thumbnail: ""
    })
    const [updateProductDetails, setUpdateProductDetails] = useState({

        title: "",
        description: "",
        category: "",
        size: "",
        color: "",
        price: "",
        thumbnail: ""
    })

    //create product from inputs
    const changeHandler = (e) => {
        setProductDetails({ ...productDetails, [e.target.name]: e.target.value })
    }
    //update product from inputs


    const AddProduct = async () => {
        console.log(productDetails)
        let responseData;
        let product = productDetails;

        await fetch("http://localhost:5000/manager/create",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + localStorage.getItem("token"),
                },
                body: JSON.stringify(product),
            }).then((resp) => {
                if (resp.status !== 200) {
                    alert("Failed to add product");
                }
                else {
                    alert("Product added");
                }
            })
    }

    return (

        <div className=" mx-20">


            <div className='w-auto p-6 rounded-lg overflow-hidden shadow-lg bg-white flex flex-col'>
            <Link to="/admin" ><h1 className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded self-start float-start"> Go Back</h1></Link>

                <h1 className="font-bold text-2xl mb-4">Create a new product</h1>
                <div className="mb-4">
                    <p className="block text-gray-700 text-sm font-bold mb-2">Add a title</p>
                    <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={productDetails.name} onChange={changeHandler} type="text" name="title" placeholder="add title" />
                </div>
                <div className="mb-4">
                    <p className="block text-gray-700 text-sm font-bold mb-2">Description</p>
                    <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"value={productDetails.description} onChange={changeHandler} type="text" name="description" placeholder="enter description" />
                </div>
                <div className="mb-4">
                    <p className="block text-gray-700 text-sm font-bold mb-2">Category</p>
                    <select className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"value={productDetails.category} onChange={changeHandler} name="category">
                        <option value="" disabled selected>Category</option>
                        <option value="Skor">Skor</option>
                        <option value="T-shirt">T-shirt</option>
                        <option value="Byxor">Byxor</option>
                        <option value="Ytterkläder">Ytterkläder</option>
                        <option value="Strumpor">Strumpor</option>
                    </select>
                </div>
                <div className="mb-4">
                    <p className="block text-gray-700 text-sm font-bold mb-2">Size</p>
                    <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"value={productDetails.size} onChange={changeHandler} type="text" name="size" placeholder="enter size" />
                </div>
                <div className="mb-4">
                    <p className="block text-gray-700 text-sm font-bold mb-2">Price</p>
                    <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"value={productDetails.price} onChange={changeHandler} type="text" name="price" placeholder="enter price" />
                </div>
                <div className="mb-4">
                    <p className="block text-gray-700 text-sm font-bold mb-2">Color</p>
                    <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"value={productDetails.color} onChange={changeHandler} type="text" name="color" placeholder="enter color" />
                </div>
                <div className="mb-4">
                    <p className="block text-gray-700 text-sm font-bold mb-2">Add image url</p>
                    <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"value={productDetails.thumbnail} onChange={changeHandler} name="thumbnail" />
                </div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded self-end float-end" onClick={() => { AddProduct() }}>ADD PRODUCT</button>
            </div>
        </div>
    )



}
