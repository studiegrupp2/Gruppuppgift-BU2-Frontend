import { useEffect, useState } from "react";
import { deleteProduct, getAllOrders, updateProduct } from "../api/adminFetch";
import { CreateProduct } from "./AdminCreateProduct";
import { DeleteProduct } from "./AdminDeleteProduct";
import { UpdateProduct } from "./AdminUpdateProduct";
import { Orders } from "./AdminGetOrders";
import { Link } from "react-router-dom";

export function AdminView() {


    return (
        <nav>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
            <Link to="/adminCreateProduct"><button className="md:p-4 py-2 block hover:text-purple-400">Create Product</button></Link>
            <Link to="/adminUpdateProduct"><button className="md:p-4 py-2 block hover:text-purple-400">Update Product</button></Link>
            <Link to="/adminDeleteProduct"><button className="md:p-4 py-2 block hover:text-purple-400">Delete Product</button></Link>
            <Link to="/adminOrders"><button className="md:p-4 py-2 block hover:text-purple-400">Show all Orders</button></Link>

            {/* <CreateProduct />
            <DeleteProduct />
            <UpdateProduct />
            <Orders /> */}
        </div>
            </div>
 
        </nav>
    )
}


// export function CreateProduct() {
//     const [inputs, setInputs] = useState({});
//     const [result, setResult] = useState(null);
//     const [idInput, setIdInput] = useState();
//     const [image, setImage] = useState(false);
//     const [updateIdInput, setUpdateIdInput] = useState();


//     const [productDetails, setProductDetails] = useState({
//         title: "",
//         description: "",
//         category: "",
//         size: "",
//         color: "",
//         price: "",
//         thumbnail: ""
//     })
//     const [updateProductDetails, setUpdateProductDetails] = useState({

//         title: "",
//         description: "",
//         category: "",
//         size: "",
//         color: "",
//         price: "",
//         thumbnail: ""
//     })

//     //create product from inputs
//     const changeHandler = (e) => {
//         setProductDetails({ ...productDetails, [e.target.name]: e.target.value })
//     }
//     //update product from inputs


//     const AddProduct = async () => {
//         console.log(productDetails)
//         let responseData;
//         let product = productDetails;

//         await fetch("http://localhost:5000/manager/create",
//             {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                     Authorization: "Bearer " + localStorage.getItem("token"),
//                 },
//                 body: JSON.stringify(product),
//             }).then((resp) => {
//                 if (resp.status !== 200) {
//                     alert("Failed to add product");
//                 }
//                 else {
//                     alert("Product added");
//                 }
//             })
//     }

//     return (


//         <div className='w-fit p-6 rounded overflow-hidden shadow-lg'>
//             <h1 className="font-bold">Create a new product</h1>
//             <div>
//                 <p>add a title</p>
//                 <input value={productDetails.name} onChange={changeHandler} type="text" name="title" placeholder="add title" />
//             </div>
//             <div>
//                 <p>description</p>
//                 <input value={productDetails.description} onChange={changeHandler} type="text" name="description" placeholder="enter description" />
//             </div>
//             <div>
//                 <p>category</p>
//                 <select value={productDetails.category} onChange={changeHandler} name="category">
//                     <option value="Skor">Skor</option>
//                     <option value="T-shirt">T-shirt</option>
//                     <option value="Byxor">Byxor</option>
//                     <option value="Ytterkläder">Ytterkläder</option>
//                     <option value="Strumpor">Strumpor</option>
//                 </select>
//             </div>
//             <div>
//                 <p>Size</p>
//                 <input value={productDetails.size} onChange={changeHandler} type="text" name="size" placeholder="enter size" />
//             </div>
//             <div>
//                 <p>price</p>
//                 <input value={productDetails.price} onChange={changeHandler} type="text" name="price" placeholder="enter price" />
//             </div>
//             <div>
//                 <p>color</p>
//                 <input value={productDetails.color} onChange={changeHandler} type="text" name="color" placeholder="enter color" />
//             </div>
//             <div>
//                 <p>Add image url</p>
//                 <input value={productDetails.thumbnail} onChange={changeHandler} name="thumbnail" />
//             </div>
//             <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded self-end float-end" onClick={() => { AddProduct() }}>ADD PRODUCT</button>
//         </div>
//     )



// }

// export function DeleteProduct() {
//     const [idInput, setIdInput] = useState();

//     return (
//         <div className='max-w-xs rounded overflow-hidden shadow-lg mt-5'>
//             <h1 className="font-bold">Delete product</h1>
//             <input placeholder="type id for product" value={idInput} onChange={(e) => setIdInput(Number(e.target.value))} />
//             <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded self-end float-end" onClick={() => deleteProduct(idInput)}>Delete</button>
//         </div>

//     )

// }
// export function UpdateProduct() {
//     const [updateIdInput, setUpdateIdInput] = useState();

//     const [updateProductDetails, setUpdateProductDetails] = useState({

//         title: "",
//         description: "",
//         category: "",
//         size: "",
//         color: "",
//         price: "",
//         thumbnail: ""
//     })
//     const updateProductHandler = (e) => {
//         setUpdateProductDetails({ ...updateProductDetails, [e.target.name]: e.target.value })
//     }


//     const handleUpdate = () => {
//         try {
//             updateProduct(
//                 updateProductDetails, updateIdInput
//             );

//         } catch (error) {
//             alert("error", error.message)
//         }
//     }

//     return (
//         <div className='w-fit p-6 rounded overflow-hidden shadow-lg'>
//             <h1 className="font-bold">Update Product</h1>
//             <div>
//                 <p>Enter product Id</p>
//                 <input placeholder="type id for product" value={updateIdInput} onChange={(e) => setUpdateIdInput(Number(e.target.value))} />
//             </div>
//             <div>
//                 <p>add a title</p>
//                 <input value={updateProductDetails.name} onChange={updateProductHandler} type="text" name="title" placeholder="add title" />
//             </div>
//             <div>
//                 <p>description</p>
//                 <input value={updateProductDetails.description} onChange={updateProductHandler} type="text" name="description" placeholder="enter description" />
//             </div>
//             <div>
//                 <p>category</p>
//                 <select value={updateProductDetails.category} onChange={updateProductHandler} name="category">
//                     <option value="" disabled selected>Category</option>
//                     <option value="Skor">Skor</option>
//                     <option value="T-shirt">T-shirt</option>
//                     <option value="Byxor">Byxor</option>
//                     <option value="Ytterkläder">Ytterkläder</option>
//                     <option value="Strumpor">Strumpor</option>

//                 </select>
//             </div>
//             <div>
//                 <p>Size</p>
//                 <input value={updateProductDetails.size} onChange={updateProductHandler} type="text" name="size" placeholder="enter size" />
//             </div>
//             <div>
//                 <p>price</p>
//                 <input value={updateProductDetails.price} onChange={updateProductHandler} type="text" name="price" placeholder="enter price" />
//             </div>
//             <div>
//                 <p>color</p>
//                 <input value={updateProductDetails.color} onChange={updateProductHandler} type="text" name="color" placeholder="enter color" />
//             </div>
//             <div>
//                 <p>Add image url</p>
//                 <input value={updateProductDetails.thumbnail} onChange={updateProductHandler} name="thumbnail" />
//             </div>
//             <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded self-end float-end" onClick={() => handleUpdate()}>Update Product</button>
//         </div>

//     )
// }
// export function Orders() {
//     const [allOrders, setAllOrders] = useState([]);

//     useEffect(() => {
//         getAllOrders().then((allOrderData) => setAllOrders(allOrderData));
//     }, []);

//     console.log(allOrders)
//     return (
//         <div className="flex-col justify-center mt-10">
//             <h1 className="font-bold">All Orders</h1>
//             <ul className="w-64 min-h-80 max-h-96  overflow-y-scroll no-scrollbar mt-10">
//                 {allOrders.map((orders) => (

//                     <li className="m-1">

//                         <p> <span className="font-bold">User:</span> {orders.userEmail}</p>
//                         <p> <span className="font-bold">Order Date: </span>{orders.orderDate}</p>
//                         <p> <span className="font-bold">Total Price:</span> {orders.totalOrderPrice}</p>

//                     </li>

//                 ))}
//             </ul>
//         </div>
//     )
// }