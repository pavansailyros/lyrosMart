import React from 'react'

import Banner1 from '../section/Banner1'
import Category from '../section/Category'
import Sale from '../section/Sale'
import BestProduct from '../section/BestProduct'
import Banner2 from '../section/Banner2'
import ExploreProducts from '../section/ExploreProducts'
import AboutLinks from '../section/AboutLinks'

const Home = () => {
  return (
    <div className=' w-full mx-auto my-12'>
        <Banner1 />
        <AboutLinks />
        <Category />
        <Sale />
        <hr />
        <BestProduct />
        <hr />
        <Banner2 />
        <ExploreProducts />
        <hr/>


       
    </div>
  )
}

export default Home