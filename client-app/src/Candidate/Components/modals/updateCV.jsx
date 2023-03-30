import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import axios from 'axios'
import { toast } from 'react-toastify';
import { changeCandidateProfile } from '../../../Redux/candidateProfileReducer'
import { useDispatch } from 'react-redux'
import { updateCV } from '../../../utils/Constants'

export default function UpdateCV({ onClose, cv }) {
    const dispatch = useDispatch()
    const [open, setOpen] = useState(true)
    const cancelButtonRef = useRef(null)
    const [error, setError] = useState("")
    const [pdf, setPdf] = useState(null);

    const handleFileChangePdf = (event) => {
        const selectedFile = event.target.files[0];
        setPdf(selectedFile)
        console.log(pdf);
    };


    const handleClose = () => {
        setOpen(false);
        onClose();
    }
    const handleSubmit = () => {
        console.log('submi')
        const formData = new FormData();
        formData.append('curriculum_vitae', pdf);
        if (!pdf) {
            setError('please choose a file'); // Set the error state
            setTimeout(() => {
                setError(null);
            }, 8000);
        } else {
            const uploadPromise = new Promise((resolve, reject) => {
                axios.patch(updateCV, formData).then(res => {
                    dispatch(changeCandidateProfile(res.data.user));
                    resolve(res.data);
                }).catch((err) => {
                    console.log(err.response.data.errors[0].msg);
                    reject(err.response.data.errors[0].msg);
                });
            });
    
            toast.promise(uploadPromise, {
                pending: 'Uploading file...',
                success: 'File uploaded successfully.',
                error: 'An error occurred while uploading the file.'
            });
    
            uploadPromise.then(() => {
                setOpen(false);
                onClose();
            }).catch((error) => {
                setError(error); // Set the error state
                setTimeout(() => {
                    setError(null);
                }, 8000);
            });
        }
    };
    

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
                                        Upload CV
                                    </Dialog.Title>

                                    <div>
                                        <label className="block text-sm  text-gray-700"></label>

                                        <input
                                            name='curriculum_vitae' type="file"
                                            onChange={(event) => { handleFileChangePdf(event); }}
                                            accept="application/pdf"
                                            className='validation-true'
                                        />
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
