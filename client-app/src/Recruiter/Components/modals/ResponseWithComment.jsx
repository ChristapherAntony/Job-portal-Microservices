import { Fragment, useEffect, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import axios from 'axios'
import { APPLICATION_ACCEPT, APPLICATION_REJECT, updateAbout } from '../../../utils/Constants'
import { useSelector, useDispatch } from 'react-redux'
import { changeCandidateProfile } from '../../../Redux/candidateProfileReducer'
import { toast } from 'react-toastify';
import { errorTost, successTost } from './tost'
import { componentRefresh } from '../../../Redux/componentRefreshReducer'

export default function ResponseWithComment({ context, id, onClose }) {
  const refreshStatus = useSelector(state => state.componentrefresh)

  const dispatch = useDispatch()
  const [comment, setComment] = useState('Thank you for your interest in this Position. We are pleased to inform you that you have been shortlisted for further consideration.');
  let URL=APPLICATION_ACCEPT(id);
  let title = 'Shortlist Applicant';
  if (context === 'reject') {
    title = 'Reject Applicant'
    URL = APPLICATION_REJECT(id)
  }
  console.log(id, "form modal");
  const [open, setOpen] = useState(true)
  const cancelButtonRef = useRef(null)
  const [error, setError] = useState("")

  useEffect(() => {


    if (context === 'reject') {
      setComment(`Thank you for taking the time to apply for this position. We appreciate your interest in our organization and the effort you put into your application. After careful consideration of your skills and experience, we have decided to move forward with other candidates whose qualifications more closely align with the requirements of the role. Please do not be discouraged as we received a large number of qualified applicants and the competition was fierce. We wish you all the best in your future job search and career endeavors.`)
    }

  }, [])




  const handleClose = () => {
    setOpen(false);
    onClose();
  }

  const handleSubmit = () => {
    const body = {
      candidateId: id,
      comment: comment
    }
    axios.post(URL, body).then((response) => {
      console.log(response.data);
      successTost('Success')
      dispatch(componentRefresh(!refreshStatus))
    }).catch((err) => {
      errorTost()
      console.log(err.response.data);
    });


    handleClose()
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
            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">

              <div className="">

                <div className="">
                  <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                    {title}
                  </Dialog.Title>
                  <div className="mt-2">
                    <div>
                      <label className="text-gray-700 text-sm" htmlFor="username">
                        Comment
                      </label>
                      <textarea
                        id="username"
                        name="about"
                        type="text"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        className=' validation-true h-36'
                      />

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
                  className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-lightDarkBlue text-base font-medium text-white hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 sm:text-sm disabled:opacity-50"
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
