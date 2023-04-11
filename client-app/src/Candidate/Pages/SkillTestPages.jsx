import React from 'react'
import { Footer, NavBar } from '../Components'
import { useParams } from 'react-router-dom'
import Questions from '../Components/SkillTest/Questions';
import TestInstructions from '../Components/SkillTest/TestInstructions';

function SkillTestPages() {
   

    return (
        <div>
            {/* <NavBar /> */}
            {/* <p>dsdsad{testId} and appid {applicationId}</p> */}
            <TestInstructions />
            {/* <Footer /> */}
        </div>
    )
}

export default SkillTestPages