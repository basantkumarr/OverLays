import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from 'react';
import Header from './Header';
import Home from './pages/Home';
import Footer from './Footer';
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Contact from "./pages/Contact";
import About from "./pages/About";
import All from "./pages/All";
import ProductCard from "./Components/ProductCard";
import Admin from './pages/Admin';
import Tshirt from './pages/Tshirt';
import Jacket from './pages/Jacket';
import Jogger from './pages/Jogger';
import Women from './pages/Women';
import Cart from './pages/Cart';
import Logdata from './pages/Logdata';
import Passkey from './pages/Passkey';
import Update from './pages/update';
import Updata from './pages/Updata';

function App() {
  const [cart, setCart] = useState([]);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
          <Route path='/shop' element={<All />} />
          <Route path='/tshirt' element={<Tshirt />} />
          <Route path='/jacket' element={<Jacket />} />
          <Route path='/jogger' element={<Jogger />} />
          <Route path='/women' element={<Women />} />
          <Route path='/product/:productid' element={<ProductCard cart={cart} setCart={setCart} />} />
          <Route path='/adminn' element={<Admin />} />
          <Route path='/cart' element={<Cart cart={cart} />} />
          <Route path='/logdata' element={<Logdata />} />
          <Route path='/passkey' element={<Passkey />} />
          <Route path='/update' element={<Update />} />
          <Route path='/updata/:productid' element={<Updata />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
