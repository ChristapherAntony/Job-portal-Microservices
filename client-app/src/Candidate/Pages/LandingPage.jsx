
import React, { useEffect, useState } from 'react'
import Footer from '../Components/Footer/Footer'
import BrandsGrid from '../Components/Landing/BrandsGrid'
import Hero from '../Components/Landing/Hero'
import SearchBox from '../Components/Landing/SearchBox'
import Recruiter from '../Components/Landing/small-box/Recruiter'
import SmallBox from '../Components/Landing/SmallBox'
import NavBar from '../Components/NavBar/NavBar'


function LandingPage() {

  useEffect(() => {
    document.title = "Careerconnect-landing page"
  }, [])
  return (
    <div className='bg-lightBlue overflow-hidden'>
      <NavBar />
      <Hero/>

      <SearchBox/>
     
      <SmallBox/>
      <BrandsGrid/>

      <Footer/>

    </div>

  )
}

export default LandingPage