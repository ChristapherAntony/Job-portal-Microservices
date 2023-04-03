import React from 'react'
import { Footer, NavBar } from '../Components'
import MyJobs from '../Components/MyJobs/MyJobs'

function MyJobsPage() {
  return (
    <div className='bg-lightBlue'>
        <NavBar/>
        <MyJobs/>
        <Footer/>
    </div>
  )
}

export default MyJobsPage