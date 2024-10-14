// import React from 'react';
// import { aboutlinks } from '../constants';

// const AboutLinks = () => {
//   return (
//     <div className=' flex'>
//     {aboutlinks.map((item) => (
//       <div key={item.text}>
//         <img src={item.imgURL}/>

//         <h1>{item.heading}</h1>
//         <p>{item.text}</p>
//       </div>
//     ))}
//   </div>
//   )
// }

// export default AboutLinks





import React from 'react';
import { aboutlinks } from '../constants';

const AboutLinks = () => {
  return (
    <div className="flex flex-wrap justify-center gap-8 p-4 py-6">
      {aboutlinks.map((item) => (
        <div
          key={item.text}
          className="bg-white shadow-lg rounded-lg p-4 w-64 flex flex-col items-center text-center transition-transform transform hover:scale-105"
        >
          <img src={item.imgURL} alt={item.heading} className="w-18 h-18 object-cover rounded-full mb-4" />
          <h1 className="text-xl font-semibold mb-2">{item.heading}</h1>
          <p className="text-gray-600">{item.text}</p>
        </div>
      ))}
    </div>
  );
};

export default AboutLinks;
