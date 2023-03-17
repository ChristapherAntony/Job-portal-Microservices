
import { Button, Container } from '@mui/material'
import React, { useEffect } from 'react'
import Footer from '../../Components/Footer/Footer'

import NavBar from '../../Components/NavBar/NavBar'
// import './LandingPage.scss'

function LandingPage() {
  useEffect(()=>{
    document.title ="Career connect-landing page"
  },[])
  return (
    <div className='landing' >
      <Container 
      maxWidth='xl'
      >

    <Button>test</Button>
      </Container>


      {/* <NavBar />
      
   
   


      <Footer /> */}

    </div>
  )
}

export default LandingPage