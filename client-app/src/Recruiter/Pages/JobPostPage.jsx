import React from 'react'
import Footer from '../Components/Footer'
import NavBar from '../Components/NavBar'
import PostAJob from '../Components/PostAJob/PostAJob'

function JobPostPage() {
  return (
    <div className='bg-lightBlue'>
        <NavBar/>
        <PostAJob/>
        <Footer/>
    </div>
  )
}

export default JobPostPage