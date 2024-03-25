import { useState } from "react";
import { deleteProduct } from "../api/adminFetch";
import { Link } from "react-router-dom";

export function DeleteProduct() {
    const [idInput, setIdInput] = useState();

    return (
        <div className=" mx-20">

            <div className='w-auto p-6 rounded-lg overflow-hidden shadow-lg bg-white flex flex-col'>
            <Link to="/admin" ><h1 className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded self-start float-start"> Go Back</h1></Link>


                <h1 className="font-bold text-2xl mb-4">Delete product</h1>
                <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"placeholder="type id for product" value={idInput} onChange={(e) => setIdInput(Number(e.target.value))} />
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded self-end float-end" onClick={() => deleteProduct(idInput)}>Delete</button>
            </div>
        </div>

    )

}
