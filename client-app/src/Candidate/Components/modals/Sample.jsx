import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import  axios from 'axios'
import { updateAbout } from '../../../utils/Constants'
import { useSelector, useDispatch } from 'react-redux'
import { changeCandidateProfile } from '../../../Redux/candidateProfileReducer'


export default function Sample({ onClose, about, keySkills }) {
  const dispatch = useDispatch()

  const [open, setOpen] = useState(true)
  const cancelButtonRef = useRef(null)
  const [error, setError] = useState("")
  const [skills, setSkills] = useState(keySkills);
  const [newabout, setAbout] = useState(about);

  const [newSkill, setNewSkill] = useState('')
  const handleAddSkill = () => {
    if (newSkill) {
      setSkills(prevState => [...prevState, newSkill]);
      setNewSkill('')
    }
  };

  const handleRemoveSkill = (index) => {
    const updatedSkills = skills.filter((skill, i) => i !== index);
    setSkills(updatedSkills);
  }

  const handleClose = () => {
    setOpen(false);
    onClose();
  }
  const handleSubmit = () => {
    console.log(newabout, skills);
    const body = {
      about: newabout,
      key_skills: skills
    }

    axios.patch(updateAbout, body).then(res => {
      
      dispatch(changeCandidateProfile(res.data.updatedUser))
      setOpen(false);
      onClose();
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
            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">

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
                        value={newabout}
                        onChange={(e) => setAbout(e.target.value)}
                        // onChange={formik.handleChange}
                        // onBlur={formik.handleBlur}
                        // className={
                        //     formik.touched.about && formik.errors.about
                        //         ? 'validation-false'
                        //         : 'validation-true'
                        // } 
                        className=' validation-true h-36'
                      />
                      {/* {formik.touched.about && formik.errors.about ? (
                            <p className="mt-1 text-xs font-medium text-red-500">
                                {formik.errors.about}
                            </p>
                        ) : null} */}
                    </div>


                    <div className=''>
                      <label
                        className="text-gray-700 text-sm"
                        htmlFor="skill"
                      >
                        Add Skills
                      </label>
                      <input
                        id="skills"
                        type="text"
                        name='key_skills'
                        value={newSkill}
                        onChange={(e) => setNewSkill(e.target.value)}
                        // onChange={formik.handleChange}
                        // onBlur={formik.handleBlur}
                        // className={
                        //   formik.touched.key_skills && formik.errors.key_skills
                        //     ? 'validation-false'
                        //     : 'validation-true'
                        // }
                        className='validation-true'

                      />
                      {/* {formik.touched.key_skills && formik.errors.key_skills ? (
                        <p className="mt-1 text-xs font-medium text-red-500">
                          {formik.errors.key_skills}
                        </p>
                      ) : null} */}

                      <button
                        type="button"
                        onClick={handleAddSkill}
                        className="inline-block rounded border-2 border-green-600 px-5 text-xs font-medium uppercase leading-normal text-green-600 transition duration-150 ease-in-out hover:border-black hover:bg-green-600 hover:bg-opacity-10 hover:text-black focus:border-success-600 focus:text-success-600 focus:outline-none focus:ring-0 active:border-success-700 active:text-success-700"
                        data-te-ripple-init>
                        Add
                      </button>
                      {skills.map((skill, index) => (
                        <span key={index} className="inline-block border-1 rounded-full bg-lightBlue px-3 py-1 text-xs font-medium text-black border-gray-600  mr-2 mb-2">
                          {skill}
                          <button onClick={() => handleRemoveSkill(index)} className="ml-2 text-xs font-medium text-red-600">X</button>
                        </span>
                      ))}


                    </div></div>
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
