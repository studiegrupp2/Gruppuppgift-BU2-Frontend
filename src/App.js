import './App.css';
import Nav from './components/Nav';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Cart } from './views/Cart';
import { Categories } from './views/Categories';
import { Register } from './views/Register';
import { SignIn } from './views/SignIn';
import { Home } from './views/Home';

function App() {


  // console.log(data[7].thumbnail);
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route index element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="categories" element={<Categories />} />
          <Route path="register" element={<Register />} />
          <Route path="signin" element={<SignIn />} />

        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
