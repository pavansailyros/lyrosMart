// import React from 'react';
// import { Banner2Img } from '../assets/images';

// const Banner2 = () => {
//   return (
//     <div className="relative flex items-center justify-center
//      h-[32rem]  rounded-md overflow-hidden">
//       <img
//         src={Banner2Img}
//         alt="Banner"
//         className="w-full h-full object-cover rounded-md"
//       />
//       <div className="absolute left-8 md:left-16 p-4 bg-opacity-70 rounded-lg
//         max-w-sm">
//         <p className="text-sm font-semibold text-green-600">Free Delivery</p>
//         <h1 className="text-2xl md:text-4xl font-bold text-gray-800 my-2">35% Cashback !!</h1>
//         <h3 className="text-sm md:text-lg text-gray-700">Start your daily shopping with some organic foods</h3>
//       </div>
//     </div>
//   );
// }

// export default Banner2;






import React from 'react';
import { Banner2Img, Banner3Img } from '../assets/images';

const Cards = () => {
  return (
    <div className="flex flex-wrap justify-center gap-8 p-6">
      {/* Card 1 */}
      <div className="relative  rounded-lg  overflow-hidden w-auto h-64">
        <img
          src={Banner2Img}
          alt="Card Image"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0
         flex flex-col justify-center items-start p-4 ">
          <p className="text-sm font-semibold text-green-600">Free Delivery</p>
          <h1 className="text-2xl md:text-4xl font-bold text-gray-800 my-2">35% Cashback !!</h1>
          <h3 className="text-sm md:text-md text-green-900">Start your daily shopping 
            with some organic foods</h3>
        </div>
      </div>

      {/* Card 2 */}
      <div className="relative  rounded-lg  overflow-hidden w-auto h-64">
        <img
          src={Banner3Img}
          alt="Card Image"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0  flex flex-col justify-center items-start p-4">
          <p className="text-sm font-semibold text-green-600">Save Up To 20%</p>
          <h1 className="text-2xl md:text-4xl font-bold text-gray-800 my-2">Save Up To 20%</h1>
          <h3 className="text-sm md:text-md text-gray-700">Shop now and get amazing offers on organic products</h3>
        </div>
      </div>
    </div>
  );
}

export default Cards;
