import React from 'react'
import Banner from '../Components/Banner'
import BestSellerbook from './BestSellerbook'
import FavBook from './FavBook'
import PromoBanner from './PromoBanner'
import OtherBooks from './OtherBooks'

const Home = () => {
  return (
    <div>
      <Banner/>
      <BestSellerbook/>
      <FavBook/>
      <PromoBanner/>
      <OtherBooks/>
    </div>
  )
}

export default Home