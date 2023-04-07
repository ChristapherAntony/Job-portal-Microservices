import React from 'react'
import { Footer, NavBar } from '../Components'
import { useLocation } from 'react-router-dom'

function SkillTestPages() {
    const queryParams = new URLSearchParams(location.search);
    const testId = queryParams.get("testId");
    const applicationId = queryParams.get("applicationId");
   
    return (
        <div>
            <NavBar />
            <p>dsdsad{testId} and appid {applicationId}</p>
            <Footer />
        </div>
    )
}

export default SkillTestPages