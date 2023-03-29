import React from 'react'
import Footer from '../Components/Footer'
import NavBar from '../Components/NavBar'
import Applications from '../Components/ViewJobApplication/Applications'
import JobDetails from '../Components/ViewJobApplication/JobDetails'

function ViewJobApplication() {
    return (
        <div>
            <NavBar />  
            <JobDetails/>
            <Applications/>

            <Footer />
        </div>
    )
}

export default ViewJobApplication