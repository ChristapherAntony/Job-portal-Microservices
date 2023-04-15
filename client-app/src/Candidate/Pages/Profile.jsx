import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { getProfile } from '../../utils/Constants';
import { Footer, NavBar } from '../Components/index'
import { About, CV, ProfilePic, SocialProfiles } from '../Components/Profile/Left/index'
import { Bio, CourseAndCertification, Education, Language, Personal, WorkExperience } from '../Components/Profile/Right/index'
import { useSelector, useDispatch } from 'react-redux'
import { changeCandidateProfile } from '../../Redux/candidateProfileReducer';
import Spinner from '../Components/Spinner';
import { changeLoading } from '../../Redux/loadingReducer';
function Profile() {

  const dispatch = useDispatch()
 


  useEffect(() => {
   dispatch(changeLoading(true))
    axios.get(getProfile)
      .then(response => {
        console.log(response, "test")
        dispatch(changeCandidateProfile(response.data))
        dispatch(changeLoading(false))
      })
      .catch(error => {
        dispatch(changeLoading(false))
        console.error(error);
       
      });

  }, [dispatch]);


  return (
    
    <div className='bg-lightBlue'>
      <NavBar />
        <div className='container w-4/5 m-5 mx-auto bg-lightBlue gap-2  grid grid-cols-1 md:grid-cols-12 '>
          <div  className='bg-lightBlue  md:col-span-4 space-y-5  '>
            <ProfilePic  />
            <About />
            <CV />
          </div>
          <div className='bg-lightBlue  md:col-span-8 grid gap-5 '>

            <Bio />
            <Personal />
            <WorkExperience />
            <Education />
            <CourseAndCertification />
            {/* <Language/> */}

          </div>

        </div>

      <Footer />
    </div>
  )
}

export default Profile