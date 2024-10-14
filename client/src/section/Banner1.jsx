import React from 'react';
import { Banner1Img } from '../assets/images';



const Banner1 = () => {
  return (
    <div className="flex items-center justify-center ">

<div className=" absolute mr-[38rem]">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
          Stay home & get <br></br> your daily need's
        </h1>
      </div>
      <img
        src={Banner1Img}
        alt="Banner"
        className="w-full h-[32rem]  rounded-md object-cover"
      />


      {/* //links */}




    </div>

    
  );
};

export default Banner1;
