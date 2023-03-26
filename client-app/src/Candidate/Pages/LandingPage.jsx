
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import Footer from '../Components/Footer/Footer'
import BrandsGrid from '../Components/Landing/BrandsGrid'
import Hero from '../Components/Landing/Hero'
import SearchBox from '../Components/Landing/SearchBox'
import Recruiter from '../Components/Landing/small-box/Recruiter'
import SmallBox from '../Components/Landing/SmallBox'
import NavBar from '../Components/NavBar/NavBar'


function LandingPage() {
  const navigate = useNavigate()
  useEffect(() => {
    document.title = "Careerconnect-landing page"

    axios.get("/api/v1/auth/current").then((res) => {
      if (res.data.role === 'candidate') {
        navigate('/candidate')
      } else if (res.data.role === 'admin') {
        navigate('/admin/home')
      } else if (res.data.role === 'recruiter') {
        navigate('/recruiter')
      }
    })

  }, [])
  return (
    <div className='bg-lightBlue overflow-hidden'>
      <NavBar />
      <Hero />
      {/* <SearchBox /> */}

      <SmallBox />
      <BrandsGrid />

      <Footer />

    </div>

  )
}

export default LandingPage