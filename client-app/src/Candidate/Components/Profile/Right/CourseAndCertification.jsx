import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import EditPenButton from '../../buttons/EditPenButton'
import AddCertification from '../../modals/AddCertification'
import Delete from '../../modals/Delete'
function CourseAndCertification() {
  const profile = useSelector((state) => state.candidateprofile)
  const show = profile.courseAnd_certification?.length > 0

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
        <h1 className='pro-h-right'>Courses & Certifications</h1>
        <span class="absolute top-0 right-0 text-blue-400 font-bold hover:text-lightDarkBlue cursor-pointer" onClick={handleClickAdd}>
          add +
        </span>
      </div>
      {showModal && <AddCertification onClose={handleClose} />}
      <hr className="h-px my-4 bg-gray-200 border-0" />

      {show ? (
        profile.courseAnd_certification && profile.courseAnd_certification.map((data, index) => {
          return (
            <div key={index} className='grid grid-cols-12 my-5'>
              <div className=" col-span-1 flex justify-center ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                </svg>
              </div>

              <div className="details col-span-11  pro-text space-y-2">
                <div class="relative">
                  <h1 className='font-bold'>{data.certificate}</h1>
                  <span class="absolute top-0 right-0" onClick={handleClickEdit}>
                    <EditPenButton />
                    {showModalDel && <Delete onClose={handleClose} context={'courseAnd_certification'} id={data._id} />}
                  </span>
                </div>
                <p>{data.issued_by}</p>
              </div>
            </div>
          );
        })
      ) : (
        <p className='text-gray-500'>Add information about the course and certificatiosns you have.</p>
      )}








    </div>
  )
}

export default CourseAndCertification