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
    <div className="container mx-auto px-4 py-5">
      <h2 className="text-center underline text-slate-800 py-2 text-4xl font-semibold">
        Cart
      </h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="flex flex-col lg:flex-row">
          <div className="flex-1 overflow-y-auto max-h-96 lg:max-h-full">
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
          <div className="flex-none w-full lg:w-2/6 lg:ml-10 mt-4 lg:mt-0">
            <h3 className="text-2xl font-semibold">Subtotal:</h3>
            <p className="text-3xl lg:text-7xl">${subtotal.toFixed(2)}</p>
            <button type="submit" className="btn mt-3 w-full btn-dark">Pay ${subtotal.toFixed(2)}</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
