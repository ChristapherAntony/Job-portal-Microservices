
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
import BoltLoader from '../../Admin/Components/BoltLoader/Boltloader'


function LandingPage() {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setLoading(true)
    axios.get("/api/v1/auth/current").then((res) => {
      if (res.data.role === 'candidate') {
        navigate('/candidate')

      } else if (res.data.role === 'admin') {
        navigate('/admin/home')

      } else if (res.data.role === 'recruiter') {
        navigate('/recruiter')

      }
      setLoading(false)
    }).catch((err) => {
      setLoading(false)
    })
  }, [])
  return (
    <div>
      {loading ? (
        <BoltLoader />
      ) : (
        <div className='bg-lightBlue overflow-hidden'>
          <NavBar />
          <Hero />
          <SmallBox />
          <BrandsGrid />
          <Footer />
        </div>
      )}
    </div>


  );

}

export default LandingPage