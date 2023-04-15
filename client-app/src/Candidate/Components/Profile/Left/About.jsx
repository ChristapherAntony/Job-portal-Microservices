import React, { useState } from 'react'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { changeCandidateProfile } from '../../../../Redux/candidateProfileReducer'
import Sample from '../../modals/Sample'
import EditPenButton from '../../buttons/EditPenButton'
import LineSkeleton from '../../Skeleton/LineSkeleton'

function About() {
  const isLoading = useSelector(state => state.loading)

  const profile = useSelector((state) => state.candidateprofile)

  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };



  return (
    <div className="w-full max-w-sm px-4 py-3 bg-white rounded-md shadow-md ">
      <div>
        <div class="relative">
          <h1 class="mt-2 text-lg font-semibold text-gray-800">About</h1>
          <span class="absolute top-0 right-0" onClick={handleClick}>
            <EditPenButton />
          </span>
        </div>


        {showModal && <Sample onClose={handleClose} keySkills={profile.key_skills} about={profile.about} />}
        <p className="mt-2 text-sm pro-text ">
          {isLoading ? (
            <LineSkeleton count={2} />
          ) : (
            profile.about
          )}

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
