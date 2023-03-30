import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { useSelector, useDispatch } from 'react-redux'
import { changeCandidateProfile } from '../../../Redux/candidateProfileReducer'
import axios from 'axios'
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2';
import { certificationAdd } from '../../../utils/Constants'
import {  toast } from 'react-toastify';

export default function AddCertification({ onClose }) {
    const dispatch = useDispatch()
    const [error, setError] = useState('')
    const [open, setOpen] = useState(true)
    const cancelButtonRef = useRef(null)

    const handleClose = () => {
        setOpen(false);
        onClose();
    }

    const formik = useFormik({
        initialValues: {
            certificate: 'MERN Stack',
            issued_by: 'ZYZ Group of Tech',
        },
        validationSchema: Yup.object({
            certificate: Yup.string().required('Required'),
            issued_by: Yup.string().required('Required'),
        }),

        onSubmit: (values) => {
            axios.post(certificationAdd, values).then(res => {
                dispatch(changeCandidateProfile(res.data.user))
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
                console.log(err);
                console.log(err.response.data.errors[0].msg);
                setError(err.response.data.errors[0].msg); // Set the error state
                setTimeout(() => {
                    setError(null);
                }, 8000);
            })

        },
    });




    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog
                as="div"
                className="relative z-10"
                initialFocus={cancelButtonRef}
                onClose={handleClose}
            >
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">

                                <section className="max-w-4xl p-6 mx-auto bg-white rounded-xl shadow-md m-10">
                                    <h2 className="text-lg font-semibold text-gray-700 capitalize">
                                        Add Course and certifaction details
                                    </h2>
                                    <form onSubmit={formik.handleSubmit}>
                                        <div className="grid grid-cols-1 gap-y-1 gap-x-5 mt-4 sm:grid-cols-2 p-5">
                                            <div>
                                                <label className="text-gray-700 text-sm" htmlFor="qualification">
                                                    Name of certificate
                                                </label>
                                                <input
                                                    id="certificate"
                                                    type="certificate"
                                                    name="certificate"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.certificate}
                                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                                                />
                                                {formik.touched.certificate && formik.errors.certificate ? (
                                                    <div className="text-red-500 text-sm">{formik.errors.certificate}</div>
                                                ) : null}
                                            </div>
                                            <div>
                                                <label className="text-gray-700 text-sm" htmlFor="username">
                                                    Issued by
                                                </label>
                                                <input
                                                    id="issued_by"
                                                    name="issued_by"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.issued_by}
                                                    type="text"
                                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                                                />
                                                {formik.touched.issued_by && formik.errors.issued_by ? (
                                                    <div className="text-red-500 text-sm">{formik.errors.issued_by}</div>
                                                ) : null}
                                            </div>
                                        </div>

                                        {error && (
                                            <p className='text-red-500'>
                                                {error}
                                            </p>
                                        )}



                                        <div className=" px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                            <div className="flex justify-end mt-6">
                                                <button type="submit" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300  font-medium rounded-lg text-sm px-5 py-0 text-center mr-2 mb-2">
                                                    Add
                                                </button>
                                                <button type="button" onClick={handleClose} class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300  shadow-lg shadow-red-500/50   font-medium rounded-lg text-sm px-5 py-1 text-center mr-2 mb-2">
                                                    cancel
                                                </button>



                                            </div>

                                        </div>
                                    </form>


                                </section>


                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}
