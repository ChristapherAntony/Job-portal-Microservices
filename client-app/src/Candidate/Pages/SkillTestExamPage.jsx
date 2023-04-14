import React from 'react'
import { Footer, NavBar } from '../Components'
import { useParams } from 'react-router-dom'
import Questions from '../Components/SkillTest/Questions';
import TestInstructions from '../Components/SkillTest/TestInstructions';

function SkillTestExamPage() {
   

    return (
        <div>
            {/* <NavBar /> */}
            {/* <p>dsdsad{testId} and appid {applicationId}</p> */}
            <Questions />
            {/* <Footer /> */}
        </div>
    )
}

export default SkillTestExamPage