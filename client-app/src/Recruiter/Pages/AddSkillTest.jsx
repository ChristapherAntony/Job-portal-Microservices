import React from 'react'
import CreateTest from '../Components/CreateTest/CreateTest'
import Footer from '../Components/Footer'
import NavBar from '../Components/NavBar'

function AddSkillTest() {
    return (
        <div className='bg-lightBlue'>
            <NavBar />
            <CreateTest/>
            <Footer />
        </div>
    )
}

export default AddSkillTest