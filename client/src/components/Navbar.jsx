// import React from 'react'
// import { Link } from 'react-router-dom'
// import { Logo } from '../assets/images'
// import { navLinks } from '../constants'

// const Navbar = () => {
//   return (
//     <header className='px-24 py-10 w-full h-32 fixed top-0 left-0 bg-white z-10 border-b border-gray-200'>
//         <nav  className='flex justify-center items-center flex-row'>
//             <Link to="/" >
//             <img
//             src= {Logo}
//             alt='logo'
//             width={260}
//             height={80} 
//             />
//             </Link>

//             <button
//           className="inline-flex items-center p-2 ml-3 text-gray-500 rounded-lg md:hidden hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200"
//           aria-controls="navbarScroll"
//           aria-expanded="false"
//         >
//           <span className="sr-only">Open main menu</span>
//           {/* Add hamburger icon here for mobile menu */}
//         </button>

//             <ul className='flex-1 flex justify-center items-center gap-16 text-regal-sky-blue text-base font-gilmer font-[550]'>
//                 {navLinks.map((item) => (
//                         <li key={item.label}>
//                         <a href={item.href} onClick={() => window.location.href = item.href}>
//                           {item.label}
//                         </a>
//                       </li>
//                 ))}
//             </ul>



//             <form className="flex items-center mt-4 md:mt-0 justify-center mr-7">
//             <input
//               type="search"
//               placeholder="Search"
//               className="px-4 py-2 border border-gray-300 rounded-l-md 
//               focus:outline-none focus:ring-2 focus:ring-blue-500"
//               aria-label="Search"
//             />
//                </form>


//             <Link to="/cart">
//               <button className="ml-2 px-4 py-2 border border-blue-500 bg-blue-500
//                text-white rounded-r-md hover:bg-blue-600 
//                focus:outline-none focus:ring-2 focus:ring-blue-500">
//                 My Cart 
//               </button>
//             </Link>
       
//         </nav>
//     </header>
//   )
// }

// export default Navbar








import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../assets/images';
import { navLinks } from '../constants';
import { useSelector } from 'react-redux';

const Navbar = () => {

  const cartProducts = useSelector(state => state.cart);
  return (
    <header className='px-4 py-4 w-full fixed top-0 left-0 bg-white z-10
     border-b border-gray-200'>
      <nav className='flex justify-between items-center'>
        <Link to="/">
          <img
            src={Logo}
            alt='logo'
            className=" w-48 h-[50px]" 
          />
        </Link>

        <button
          className="inline-flex items-center p-2 ml-3 text-gray-500 rounded-lg md:hidden hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbarScroll"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          {/* Add hamburger icon here for mobile menu */}
        </button>

        <ul className='hidden md:flex flex-1 justify-center items-center
         gap-10  text-xl  font-medium'>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a href={item.href} onClick={() => window.location.href = item.href}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center space-x-2">


            <form className="hidden md:flex items-center">
            <input
              type="search"
              placeholder="What are you looking for..."
              className="w-[16rem] px-4 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 ease-in-out transform hover:scale-105"
              aria-label="Search"
            />
          </form>

          <Link to="/cart">
            <button className="px-3 py-1 border border-blue-500 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
              My Cart {cartProducts.length }
            </button>
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
