import React from 'react'
import { Footer, NavBar } from '../Components/index'
import { About, CV, ProfilePic, SocialProfiles } from '../Components/Profile/Left/index'
import { Bio, CourseAndCertification, Education, Language, Personal, WorkExperience } from '../Components/Profile/Right/index'

function Profile() {
  return (
    <div className='bg-lightBlue'>
        <NavBar/>
        <div className='container w-4/5 m-5 mx-auto bg-lightBlue  grid grid-cols-1 md:grid-cols-12 gap-5'>
          
            <div className='bg-slate-400  md:col-span-4 '>

              <ProfilePic/>
              <About/>
              <CV/>
              <SocialProfiles/>

            </div>
            <div className='bg-lightBlue  md:col-span-8 grid gap-5 '>

              <Bio/>
              <Personal/>
              <WorkExperience/>
              <Education/>
              <CourseAndCertification/>
              <Language/>

            </div>

        </div>
        <Footer/>
    </div>
  )
}

export default Profile