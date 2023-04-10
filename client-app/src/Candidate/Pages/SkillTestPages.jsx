import React from 'react'
import { Footer, NavBar } from '../Components'
import { useParams } from 'react-router-dom'
import Questions from '../Components/SkillTest/Questions';

function SkillTestPages() {
   

    return (
        <div>
            <NavBar />
            {/* <p>dsdsad{testId} and appid {applicationId}</p> */}
            <Questions />
            <Footer />
        </div>
    )
}

export default SkillTestPages