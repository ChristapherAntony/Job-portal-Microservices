import React from 'react'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { changeCandidateProfile } from '../../../../Redux/candidateProfileReducer'

function About() {
  const profile = useSelector((state) => state.candidateprofile)
  const dispatch = useDispatch()
  console.log(profile, "from about");
  return (
    <div className="w-full max-w-sm px-4 py-3 bg-white rounded-md shadow-md ">
      <div>
        <h1 className="mt-2 text-lg font-semibold text-gray-800 ">
          About
        </h1>
        <p className="mt-2 text-sm pro-text ">
          {profile.about}
        </p>
      </div>
      <hr />
      <div>
        <h1 className="mt-2 col-span-4 text-lg font-semibold text-gray-800 ">
          Skills
        </h1>
        <div className='grid grid-cols-4 container'>
          {profile.key_skills && profile.key_skills.map((skill, index) => (

            <span key={index} className="bg-lightBlue col-span-1 font-medium rounded-full text-sm my-1 text-center">
              {skill}
            </span>
          )
          
          )}
        </div>
      </div>
    </div>
  )
}

export default About
