import { useState } from "react";
import { updateProduct } from "../api/adminFetch";
import { Link } from "react-router-dom";

export function UpdateProduct() {
    const [updateIdInput, setUpdateIdInput] = useState();

    const [updateProductDetails, setUpdateProductDetails] = useState({

        title: "",
        description: "",
        category: "",
        size: "",
        color: "",
        price: "",
        thumbnail: ""
    })
    const updateProductHandler = (e) => {
        setUpdateProductDetails({ ...updateProductDetails, [e.target.name]: e.target.value })
    }


    const handleUpdate = () => {
        try {
            updateProduct(
                updateProductDetails, updateIdInput
            );
            alert("Product Updated!")
        } catch (error) {
            alert("error", error.message)
        }
    }

    return (
        <div className=" mx-20">


            <div className='w-auto p-6 rounded-lg overflow-hidden shadow-lg bg-white flex flex-col'>

                <Link to="/admin" ><h1 className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded self-start float-start"> Go Back</h1></Link>

                <h1 className="font-bold text-2xl mb-4">Update Product</h1>
                <div className="mb-4">
                    <p className="block text-gray-700 text-sm font-bold mb-2">Enter product Id</p>
                    <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  placeholder="type id for product" value={updateIdInput} onChange={(e) => setUpdateIdInput(Number(e.target.value))} />
                </div>
                <div className="mb-4">
                    <p className="block text-gray-700 text-sm font-bold mb-2">Add a title</p>
                    <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={updateProductDetails.name} onChange={updateProductHandler} type="text" name="title" placeholder="add title" />
                </div>
                <div className="mb-4">
                    <p className="block text-gray-700 text-sm font-bold mb-2">Description</p>
                    <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={updateProductDetails.description} onChange={updateProductHandler} type="text" name="description" placeholder="enter description" />
                </div>
                <div className="mb-4">
                    <p className="block text-gray-700 text-sm font-bold mb-2">Category</p>
                    <select className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  value={updateProductDetails.category} onChange={updateProductHandler} name="category">
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
                    <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  value={updateProductDetails.size} onChange={updateProductHandler} type="text" name="size" placeholder="enter size" />
                </div>
                <div className="mb-4">
                    <p className="block text-gray-700 text-sm font-bold mb-2">Price</p>
                    <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={updateProductDetails.price} onChange={updateProductHandler} type="text" name="price" placeholder="enter price" />
                </div>
                <div className="mb-4">
                    <p className="block text-gray-700 text-sm font-bold mb-2">Color</p>
                    <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={updateProductDetails.color} onChange={updateProductHandler} type="text" name="color" placeholder="enter color" />
                </div>
                <div className="mb-4">
                    <p className="block text-gray-700 text-sm font-bold mb-2">Add image url</p>
                    <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={updateProductDetails.thumbnail} onChange={updateProductHandler} name="thumbnail" />
                </div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded self-end float-end" onClick={() => handleUpdate()}>Update Product</button>
            </div>
        </div>

    )
}