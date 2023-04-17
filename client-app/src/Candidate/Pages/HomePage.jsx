
import React from 'react'
import { Carousel1 } from '../assets/images'
import { BrandsGrid, CandidateCarousel, Footer, NavBar, SearchBox } from '../Components/index'
import Features from '../Components/Landing/Features'
import Features2 from '../Components/Landing/Features2'


function HomePage() {
  return (
    <div className='bg-lightBlue'>
      <NavBar />
      <CandidateCarousel />
      <div className='my-5 md:w-4/5 m-auto  space-y-5  '>
        
        <SearchBox />
        <BrandsGrid />
       
        <Features2/>
        <Features />
       
        
      </div>

      <Footer />
    </div>

  )
}

export default HomePage