import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import EditPenButton from '../../buttons/EditPenButton'
import AddExperience from '../../modals/AddExperience/AddExperience'
import Delete from '../../modals/Delete'
function WorkExperience() {
  const profile = useSelector((state) => state.candidateprofile)
  

  const [showModal, setShowModal] = useState(false);
  const handleClickAdd = () => {
    setShowModal(true);
  };
  const [showModalDel, setShowModalDel] = useState(false);
  const handleClickEdit = () => {
    setShowModalDel(true);
  };





  const handleClose = () => {
    setShowModal(false);
    setShowModalDel(false)
  };

  const dispatch = useDispatch()
  return (
    <div className='bg-white rounded-md px-5 py-5'>
      <div class="relative">
        <h1 className='pro-h-right'>Work Experience</h1>
        <span class="absolute top-0 right-0 text-blue-400 font-bold hover:text-lightDarkBlue cursor-pointer" onClick={handleClickAdd}>
          add +
        </span>
      </div>
      {showModal && <AddExperience onClose={handleClose} />}
      <hr className="h-px my-4 bg-gray-200 border-0" />

      {profile.work_experience.length ? (
        profile.work_experience && profile.work_experience.map((exp, index) => {
          return (
            <div key={index} className='grid grid-cols-12'>
              <div className=" col-span-1 flex justify-center ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                </svg>

              </div>

              <div className="details col-span-11  pro-text space-y-2">
                <div class="relative">
                  <h1 className='font-bold'>{exp.designation}</h1>
                  <span class="absolute top-0 right-0" onClick={handleClickEdit}>
                    <EditPenButton />
                    {showModalDel && <Delete onClose={handleClose} id={exp._id} />}
                  </span>
                </div>

                <span>{exp.company_name}</span>  <span>{exp.location}</span>
                {exp.current_status ? (
                  <div>
                    <p>{exp.start_date} to present</p>
                    <p className='text-black'>Notice Period :<span className='text-myGray'>{exp.notice_period}</span> </p>
                  </div>
                ) : (
                  <div>
                    <p>{exp.start_date} to {exp.end_date}</p>
                  </div>
                )}
                <p>{exp.job_description}</p>
              </div>
            </div>
          );
        })
      ) : (
        <p className='text-gray-500'>Add information about the courses and certifications you've completed.</p>
      )}








    </div>
  )
}

export default WorkExperience