import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Features from '../pages/Feature';
import Carousel from './Carousel';

const ProductCard = ({ cart, setCart }) => {
  const { productid } = useParams();
  const [product, setProduct] = useState(null);
  const [count, setCount] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  
  axios.defaults.withCredentials = true;
  
  const cartClick = (product) => {
    const existingProduct = cart.find(item => item._id === product._id);
    if (existingProduct) {
      setCart(cart.map(item =>
        item._id === product._id
          ? { ...item, quantity: item.quantity + count }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: count }]);
    }
    setCount(1); // Reset count after adding to cart
    navigate('/cart'); // Navigate to the cart page
  };

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(prevCount => Math.max(1, prevCount - 1));

  useEffect(() => {
    axios.get(`https://over-lays-server.vercel.app/collection/${productid}`, {
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    })
      .then(response => {
        setProduct(response.data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching product data:', err);
        setError(err);
        setLoading(false);
      });
  }, [productid]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading product data.</div>;
  }

  return (
    <div className="container col-xxl-8 px-4 py-5">
      <div className="text-center underline text-slate-800 py-2 text-4xl font-semibold">
        Product Detail
      </div>
      {product && (
        <div key={product._id} className="row flex-lg-row justify-center align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src={product.img}
              alt={product.name}
              className="d-block mx-lg-auto img-fluid"
              width="450"
              height="500"
              loading="lazy"
            />
          </div>
          <div className="col-lg-6">
            <h2 className="font-semibold">OVERLAYS CLOTHING</h2>
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">{product.name}</h1>
            <p className="lead text-4xl">${product.price} <span className="text-xl">M.R.P</span></p>
            <p>(incl. of all taxes)</p>
            <br /><br />

            <h2 className="text-3xl font-semibold">Quantity:</h2>
            <div style={{ textAlign: 'center', marginTop: '10px' }} className="flex justify-center items-center">
              <button style={{ margin: '5px', padding: '0px 40px', fontSize: '30px', cursor: 'pointer', border: '2px solid black' }} onClick={decrement}>-</button>
              <h1 className="text-5xl mx-4">{count}</h1>
              <button style={{ margin: '5px', padding: '0px 40px', fontSize: '30px', cursor: 'pointer', border: '2px solid black' }} onClick={increment}>+</button>
            </div>

            <div className="d-grid gap-2 mt-4">
              <button type="button" key={product._id} onClick={() => cartClick(product)} className="btn btn-dark btn-lg px-4 me-md-2">Add to cart</button>
            </div>
          </div>
        </div>
      )}

      <div className="underline all text-slate-800 py-4 text-3xl font-semibold">
        Size Chart:-
      </div>
      <div className="container flex-col sm:flex-row flex justify-center">
        <img src="https://cdn.shopify.com/s/files/1/0566/0839/1368/files/TshirtRelaxed_480x480.png?v=1680203851" width="350" alt="size chart" />
        <img src="https://cdn.shopify.com/s/files/1/0566/0839/1368/files/IMG_4511_jpeg.jpg?v=1714108405" width="350" alt="size chart" />
        <img src="https://cdn.shopify.com/s/files/1/0566/0839/1368/files/sizechart_01_480x480.jpg?v=1699099430" width="350" alt="size chart" />
      </div>
      <div className="underline all text-slate-800 py-4 text-3xl font-semibold">
        Some other products:-
      </div>
      {product && <Carousel category={product.category} />}
      <Features />
    </div>
  );
};

export default ProductCard;
