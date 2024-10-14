import React from 'react';
import { sales } from '../constants';

import { add } from '../store/cartSlice';
import { useDispatch } from 'react-redux';

const Sale = () => {

  const dispatch = useDispatch();
  const addToCart = (product) => {
    dispatch(add(product))
  }


  return (
    <section className="py-8 px-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-green-600">Flash Sale</h1>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
          View all
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {sales.map((item) => (
          <div
            key={item.heading}
            className=" bg-gray-100 w-[270px] h-[322px] border rounded-lg p-4 flex flex-col items-center"
          >
            <img src={item.imgURL} alt={item.heading} className="w-32 h-32 object-cover mb-4 rounded" />
            <h1 className="text-lg font-semibold text-gray-800">{item.heading}</h1>
            <p className="text-gray-600">Quantity: {item.quantity}</p>
            <p className="text-red-500 font-bold">{item.price}</p>
            <p className="line-through text-gray-400">{item.orignalPrice}</p>
            <button className="mt-4 bg-green-500 text-white px-4 py-2
             rounded hover:bg-green-600 transition duration-300"
             onClick={ () => addToCart(item)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Sale;
