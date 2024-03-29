import React from 'react'
import Footer from '../Components/Footer'
import NavBar from '../Components/NavBar'

import QuickProfile from '../Components/QuickProfile/QuickProfile'

function QuickProfileRecruiter() {
  return (
    <div className='bg-lightBlue'>
        <NavBar/>
        <QuickProfile/>
        <Footer/>
    </div>
  )
}

export default QuickProfileRecruiter