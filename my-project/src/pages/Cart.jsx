import React, { useState } from 'react';

const Cart = ({ cart }) => {
  const [quantities, setQuantities] = useState(cart.map(product => product.quantity));
 
  const handleQuantityChange = (index, newQuantity) => {
    const updatedQuantities = [...quantities];
    updatedQuantities[index] = newQuantity;
    setQuantities(updatedQuantities);
  };

  const subtotal = cart.reduce((acc, product, index) => acc + product.price * quantities[index], 0);

  return (
    <div className="container col-xxl-8 px-4 py-5">
      <h2 className="text-center underline text-slate-800 py-2 text-4xl font-semibold">
        Cart
      </h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="flex">
          <div className="flex-1">
            {cart.map((product, index) => (
              <div key={index} className="flex justify-between items-center py-2 border-b">
                <img src={product.img} alt={product.name} className="w-24 h-24 object-cover" />
                <div className="flex-1 px-4">
                  <h3 className="font-semibold">{product.name}</h3>
                  <p>Price: ${product.price}</p>
                  <div className="flex items-center">
                    <label htmlFor={`quantity-${index}`} className="mr-2">Quantity:</label>
                    <input
                      id={`quantity-${index}`}
                      type="number"
                      value={quantities[index]}
                      onChange={(e) => handleQuantityChange(index, parseInt(e.target.value))}
                      className="w-16 border px-2 py-1"
                      min="1"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex-none w-2/6 ml-10">
            <h3 className="text-2xl font-semibold">Subtotal:-</h3>
            <p className="text-7xl">${subtotal.toFixed(2)}</p>
            <button type="submit" className="btn mt-3 w-100 btn-dark"> Pay ${subtotal.toFixed(2)} </button>

          </div>

           
        </div>
      )}
    </div>
  );
};

export default Cart;
