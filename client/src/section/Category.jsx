// import React from 'react';
// import { category } from '../constants';

// const Category = () => {
//   return (
//     <section className="py-8 ">
//       <div className="text-center mb-6">
//         <h1 className="text-3xl font-bold text-gray-800">Shop by Category</h1>
//       </div>

//       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 rounded-3xl">
//         {category.map((item) => (
//           <div key={item.imageUrl} className="flex flex-col items-center  p-4
//            ">
//             <img src={item.imageUrl} alt={item.name} 
//             width={120}
//             height={120}   className=" 
//             object-cover rounded-md mb-4" />
            
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Category;







// import React from 'react';
// import Slider from 'react-slick'; // Import the Slider component
// import "slick-carousel/slick/slick.css"; // Import slick styles
// import "slick-carousel/slick/slick-theme.css"; // Import slick theme styles
// import { category } from '../constants';

// const Category = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 300,
//     slidesToShow: 8, // Adjust this based on how many items you want visible at once
//     slidesToScroll: 1,
//     autoplaySpeed: 2000,
//     autoplay: true,
//     vertical: false, // Make sure this is set to false for horizontal sliding
//   };

//   return (
//     <div>
//       <h1 className='text-center text-2xl font-bold mt-6 mb-2'>Popular Categories</h1>
//       <Slider {...settings} className='m-4 overflow-hidden'>
//         {category.map((item) => (
//           <div key={item.imageUrl} className="flex flex-col items-center p-2"> {/* Changed padding from p-4 to p-2 */}
//             <img
//               src={item.imageUrl}
//               alt={item.name}
//               width={100}
//               height={100}
//               className="object-cover rounded-md mb-2" // Reduced margin-bottom for less gap between images
//             />
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default Category;




import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { category } from '../constants'; // Assuming 'category' is imported from your constants file

// Custom Arrow components for navigation
const PrevArrow = ({ onClick }) => (
  <div
    className="absolute left-0 z-10 cursor-pointer p-2  rounded-full transform -translate-y-1/2 top-1/2 hover:bg-gray-400"
    onClick={onClick}
  >
    ←
  </div>
);

const NextArrow = ({ onClick }) => (
  <div
    className="absolute right-0 z-10 cursor-pointer p-2 
    rounded-full transform -translate-y-1/2 top-1/2 hover:bg-gray-400"
    onClick={onClick}
  >
    →
  </div>
);

const Category = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 8, 
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    autoplay: true,
    prevArrow: <PrevArrow />, 
    nextArrow: <NextArrow />, 
  };

  return (
    <div>
      <h1 className='text-center text-2xl font-bold mt-6 mb-2'>Shop by Category</h1>
      <div className='relative'> {/* Wrapper for proper arrow positioning */}
        <Slider {...settings} className='m-4 overflow-hidden'>
          {category.map((item) => (
            <div key={item.imageUrl} className="flex flex-col items-center p-2"> {/* Adjusted padding */}
              <img
                src={item.imageUrl}
                alt={item.name}
                width={100}
                height={100}
                className="object-cover rounded-md mb-2" // Adjusted margin
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Category;
