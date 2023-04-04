import React, { useEffect, useState } from 'react'
import NavBar from '../Components/NavBar/NavBar'
import Footer from '../Components/Footer/Footer'
import JobFeed from '../Components/JobFeed/JobFeed'
import { SearchBox } from '../Components'




function JobFeedPage() {
  const reset=()=>{
    
  }
  return (
    <div className='bg-lightBlue'>
      <NavBar />  
      <SearchBox />
      <JobFeed  />
      <Footer />
    </div>
  )
}

export default JobFeedPage