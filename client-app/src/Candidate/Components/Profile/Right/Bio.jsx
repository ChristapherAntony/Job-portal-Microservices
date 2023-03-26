import React, { useState } from 'react'
import EditPenButton from '../../buttons/EditPenButton'
import BioModal from '../../modals/BioModal'
import { useSelector, useDispatch } from 'react-redux'



function Bio() {
  const profile = useSelector((state) => state.candidateprofile)

  const [showModal, setShowModal] = useState(false);
  const handleClick = () => {
    setShowModal(true);
  };
  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div className='bg-white rounded-md px-5 py-5'>
      <div class="relative">
        <h1 className='pro-h-right'>Bio</h1>
        <span class="absolute top-0 right-0" onClick={handleClick}>
          <EditPenButton />
        </span>
      </div>
      {/* show this modal on editpenbutton click */}
      {showModal && <BioModal onClose={handleClose} bio={profile.bio} />}
      <hr className="h-px my-4 bg-gray-200 border-0" />
      <p className='text-myGray '>{profile.bio}</p>

    </div>
  )
}

export default Bio