
import React from 'react'
import { Carousel1 } from '../assets/images'
import { BrandsGrid, CandidateCarousel, Footer, NavBar, SearchBox } from '../Components/index'


function HomePage() {
  return (
    <div>
      <NavBar />
      <CandidateCarousel />
      
      <SearchBox />
      <BrandsGrid />
      <Footer />
    </div>

  )
}

export default HomePage