import './App.css';
import Nav from './components/Nav';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Cart } from './views/Cart';
import { Categories } from './views/Categories';
import { Register } from './views/Register';
import { SignIn } from './views/SignIn';
import { Home } from './views/Home';
import ProductItemView from './views/ProductItemView';
import ProductCards from './components/ProductCards';
import { useEffect, useState } from 'react';
import { fetchAllProducts } from './api/fetchdata';
import { RecoilRoot, atom, selector, useRecoilState, useRecoilValue } from 'recoil';
import { UserOrderComplete } from './views/UserOrderComplete';
import { AdminView } from './views/AdminView';
import { CreateProduct } from './views/AdminCreateProduct';
import { UpdateProduct } from './views/AdminUpdateProduct';
import { DeleteProduct } from './views/AdminDeleteProduct';
import { Orders } from './views/AdminGetOrders';


function App() {
  const [data, setData] = useState([]);
  const [product, setProduct] = useState();
  const [loggedIn, setLoggedIn] = useState();
  // const [auth, setAuth] = useState();
  const [userName, setUserName] = useState();
  const [category, setCategory] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    setUserName(localStorage.getItem("user"));
    setTimeout(() => {

    }, 10);
    if (token){
      setLoggedIn(true);
      }
    else {
      setLoggedIn(false);
    }
  }, [])


  console.log(loggedIn);
  console.log(userName);
  useEffect(() => {
    fetchAllProducts().then(setData)
  }, []);

  return (
    <>
      <BrowserRouter>
        <Nav loggedIn={loggedIn} setLoggedIn={setLoggedIn} userName={userName} setUserName={setUserName} category={category} setCategory={setCategory}/>
        <Routes>
          <Route index element={<Home loggedIn={loggedIn} setLoggedIn={setLoggedIn} data={data} setProduct={setProduct}/>} />
          <Route path="cart" element={<Cart data={data}/>} />
          <Route path="categories/:category" element={<Categories data={data} category={category}/>}/>
          <Route path="register" element={<Register />} /> 
          <Route path="signin" element={<SignIn loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
          <Route path="item/:id" element={<ProductItemView data={data} setData={setData} loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>}/>
          <Route path="userOrder" element={<UserOrderComplete />} />
          <Route path="admin" element={<AdminView />} />
          <Route path="adminCreateProduct" element={<CreateProduct />} />
          <Route path="adminUpdateProduct" element={<UpdateProduct />} />
          <Route path="adminDeleteProduct" element={<DeleteProduct />} />
          <Route path="adminOrders" element={<Orders />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;


