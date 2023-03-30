import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import axios from 'axios'
import { updateBio } from '../../../utils/Constants'
import { useDispatch } from 'react-redux'
import { changeCandidateProfile } from '../../../Redux/candidateProfileReducer'
import {  toast } from 'react-toastify';

export default function BioModal({ onClose, bio }) {
  const dispatch = useDispatch()

  const [open, setOpen] = useState(true)
  const cancelButtonRef = useRef(null)
  const [error, setError] = useState("")
  const [newBio, setNewBio] = useState(bio);


  const handleClose = () => {
    setOpen(false);
    onClose();
  }
  const handleSubmit = () => {
    axios.patch(updateBio, { bio: newBio }).then(res => {
      console.log(res);
      dispatch(changeCandidateProfile(res.data.updatedUser))
      setOpen(false);
      onClose();
      toast.success('Success.', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
    }).catch((err) => {
      console.log(err.response.data.errors[0].msg);
      setError(err.response.data.errors[0].msg); // Set the error state
      setTimeout(() => {
        setError(null);
      }, 8000);
    })




  }


  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        initialFocus={cancelButtonRef}
        onClose={handleClose}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" />
          </Transition.Child>

          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
            &#8203;
          </span>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:w-3/5 w-screen sm:p-6">

              <div className="">

                <div className="">
                  <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                    update About
                  </Dialog.Title>
                  <div className="mt-2">
                    <div>
                      <label className="text-gray-700 text-sm" htmlFor="username">
                        About
                      </label>
                      <textarea
                        id="username"
                        name="about"
                        type="text"
                        value={newBio}
                        onChange={(e) => setNewBio(e.target.value)}
                        // onChange={formik.handleChange}
                        // onBlur={formik.handleBlur}
                        // className={
                        //     formik.touched.about && formik.errors.about
                        //         ? 'validation-false'
                        //         : 'validation-true'
                        // } 
                        className=' validation-true h-52'
                      />
                      {/* {formik.touched.about && formik.errors.about ? (
                            <p className="mt-1 text-xs font-medium text-red-500">
                                {formik.errors.about}
                            </p>
                        ) : null} */}
                    </div>


                  </div>
                </div>
              </div>
              {error && (
                <p className='text-red-500'>
                  {error}
                </p>
              )}
              <div className="mt-5 sm:mt-6">
                <button
                  type="button"
                  className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-lightDarkBlue text-base font-medium text-white hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400sm:text-sm disabled:opacity-50"
                  onClick={handleSubmit}
                // disabled={isProcessing}
                >
                  Update
                </button>
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm disabled:opacity-50"
                  onClick={handleClose}
                // disabled={isProcessing}
                // ref={cancelButtonRef}
                >
                  Cancel
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>

      </Dialog>
    </Transition.Root >)
}
