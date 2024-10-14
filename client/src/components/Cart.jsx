



import React from 'react';
import { useSelector } from 'react-redux';

const Cart = () => {
  const productCart = useSelector((state) => state.cart);

  const cards = productCart.map((item) => (
    <div
      key={item.heading}
      className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center w-[280px] h-auto border border-gray-200 hover:shadow-xl transition-shadow duration-300"
    >
      <img
        src={item.imgURL}
        alt={item.heading}
        className="w-40 h-40 object-cover mb-4 rounded-md"
      />
      <h1 className="text-xl font-semibold text-gray-800 mb-2">{item.heading}</h1>
      <p className="text-gray-600 text-sm mb-2">Quantity: {item.quantity}</p>
      <p className="text-red-500 font-bold text-lg">{item.price}</p>
      <p className="line-through text-gray-400 text-sm mb-4">{item.orignalPrice}</p>
      <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors duration-300">
        Add to Cart
      </button>
    </div>
  ));

  return (
    <div className="container mx-auto my-16 px-4">
      <h1 className="text-4xl font-bold text-center mb-10">Your Cart</h1>
      <div className="flex flex-wrap justify-center gap-6">
        {cards}
      </div>
    </div>
  );
};

export default Cart;
