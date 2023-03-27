import React from 'react'
import { Footer, NavBar } from '../Components'
import JobDetails from '../Components/JobDetails/JobDetails'

function JobDetailsPage() {
  return (
    <div>
        <NavBar/>
        <JobDetails/>
        <Footer/>
    </div>
  )
}

export default JobDetailsPage