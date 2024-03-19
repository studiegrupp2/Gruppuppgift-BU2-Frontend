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


function App() {
  const [data, setData] = useState([]);
  const [product, setProduct] = useState();
    
    useEffect(() => {
        fetchAllProducts().then(setData)
    }, []);

  return (
    
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route index element={<Home  data={data} setProduct={setProduct}/>} />
          <Route path="cart" element={<Cart data={data}/>} />
          <Route path="categories" element={<Categories />} />
          <Route path="register" element={<Register />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="item/:id" element={<ProductItemView data={data} product={product}/>}/>
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
