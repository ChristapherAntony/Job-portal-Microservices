import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { useSelector, useDispatch } from 'react-redux'
import { changeCandidateProfile } from '../../../../Redux/candidateProfileReducer'
import axios from 'axios'
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { experienceAdd } from '../../../../utils/Constants';
import Swal from 'sweetalert2';


export default function AddExperience({ onClose }) {
    const dispatch = useDispatch()
    const [error, setError] = useState('')
    const [open, setOpen] = useState(true)
    const profile = useSelector((state) => state.candidateprofile)
    const cancelButtonRef = useRef(null)
    const handleClose = () => {
        setOpen(false);
        onClose();
    }

    const [currentStatus, setCurrentStatus] = useState(false);
    const formik = useFormik({
        initialValues: {
            designation: 'Software Engineer',
            company_name: 'ABC Company',
            current_status: currentStatus,
            location: 'Mumbai',
            start_date: '',
            notice_period: undefined,
            end_date: undefined,
            job_description: 'Responsible for designing and developing software applicationsResponsible for designing and developing software applicationsResponsible for designing and developing software applicationsResponsible for designing and developing software applications',
        },
        validationSchema: Yup.object({
            designation: Yup.string().required('Required'),
            company_name: Yup.string().required('Required'),
            current_status: Yup.string().required('Required'),
            location: Yup.string().required('Required'),
            start_date: Yup.string().required('Required'),
            notice_period: Yup.string().when('current_status', {
                is: false,
                then: Yup.string().required('Required'),
            }),
            end_date: Yup.string().when('current_status', {
                is: true,
                then: Yup.string().notRequired(),
            }),
            job_description: Yup.string().notRequired(),
        }),

        onSubmit: (values) => {
            values.current_status = currentStatus;
            axios.post(experienceAdd, values).then(res => {

                dispatch(changeCandidateProfile(res.data.user))
                setOpen(false);
                onClose();
                Swal.fire({
                    position: 'top-end',
                    text: 'Success',
                    showConfirmButton: false,
                    timer: 1500
                })
            }).catch((err) => {
                console.log("faild", err);
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
                                        Add work experience
                                    </h2>
                                    <form onSubmit={formik.handleSubmit}>
                                        <div className="grid grid-cols-1 gap-y-1 gap-x-5 mt-4 sm:grid-cols-2 p-5">
                                            <div>
                                                <label className="text-gray-700 text-sm" htmlFor="designation">
                                                    Designation
                                                </label>
                                                <input
                                                    id="designation"
                                                    type="text"
                                                    name="designation"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.designation}
                                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                                                />
                                                {formik.touched.designation && formik.errors.designation ? (
                                                    <div className="text-red-500 text-sm">{formik.errors.designation}</div>
                                                ) : null}
                                            </div>
                                            <div>
                                                <label className="text-gray-700 text-sm" htmlFor="username">
                                                    Company Name
                                                </label>
                                                <input
                                                    id="company_name"
                                                    name="company_name"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.company_name}
                                                    type="text"
                                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                                                />
                                                {formik.touched.company_name && formik.errors.company_name ? (
                                                    <div className="text-red-500 text-sm">{formik.errors.company_name}</div>
                                                ) : null}
                                            </div>

                                            <div>
                                                <label className="text-gray-700 text-sm" htmlFor="username">
                                                    Is this your current company?
                                                </label>
                                                <div className="flex">
                                                    <div className="flex items-center mr-4">
                                                        <input
                                                            id="inline-radio"
                                                            type="radio"
                                                            defaultValue=""
                                                            name="current_status"
                                                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                                                            onClick={() => { setCurrentStatus(true); }}
                                                        />
                                                        <label
                                                            htmlFor="inline-radio"
                                                            className="ml-2 text-sm font-medium text-gray-900"
                                                        >
                                                            Yes
                                                        </label>
                                                    </div>
                                                    <div className="flex items-center mr-4">
                                                        <input
                                                            id="inline-2-radio"
                                                            type="radio"
                                                            defaultValue=""
                                                            name="current_status"
                                                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500  focus:ring-2"
                                                            onClick={() => { setCurrentStatus(false); }}
                                                        />
                                                        <label
                                                            htmlFor="inline-2-radio"
                                                            className="ml-2 text-sm font-medium text-gray-900 "
                                                        >
                                                            No
                                                        </label>
                                                    </div>

                                                </div>

                                            </div>

                                            <div>
                                                <label
                                                    className="text-gray-700 text-sm"
                                                    htmlFor="Location"
                                                >
                                                    Location
                                                </label>
                                                <input
                                                    id="location"
                                                    name='location'
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.location}
                                                    type="location"
                                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                                                />
                                                {formik.touched.location && formik.errors.location ? (
                                                    <div className="text-red-500 text-sm">{formik.errors.location}</div>
                                                ) : null}
                                            </div>

                                            <div>
                                                <label
                                                    htmlFor="startDate"
                                                    className="block text-sm text-gray-500"
                                                >
                                                    Start Date
                                                </label>
                                                <input
                                                    type="date"
                                                    name='start_date'
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.start_date}
                                                    placeholder="John Doe"
                                                    className="block  mt-2 w-full placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                                                />
                                                {formik.touched.start_date && formik.errors.start_date ? (
                                                    <div className="text-red-500 text-sm">{formik.errors.start_date}</div>
                                                ) : null}
                                            </div>
                                            {currentStatus ? (
                                                <div>
                                                    <label
                                                        htmlFor="countries"
                                                        className="block mb-2 text-sm font-medium text-gray-900"
                                                    >
                                                        Notice Period
                                                    </label>
                                                    <select
                                                        id="countries"
                                                        name='notice_period'
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        value={formik.values.notice_period}
                                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                                                    >
                                                        <option selected="">Choose </option>
                                                        <option value="Serving Notice Period">Serving Notice Period</option>
                                                        <option value="Immediately available">Immediately available</option>
                                                        <option value="15 Days">15 Days</option>
                                                        <option value="30 days">30 days</option>
                                                        <option value="45 days">45 days</option>
                                                        <option value="Above 60 days">Above 60 days</option>
                                                    </select>
                                                    {formik.touched.notice_period && formik.errors.notice_period ? (
                                                        <div className="text-red-500 text-sm">{formik.errors.notice_period}</div>
                                                    ) : null}

                                                </div>



                                            ) : (
                                                <div>
                                                    <label
                                                        htmlFor="startDate"
                                                        className="block text-sm text-gray-500"
                                                    >
                                                        End Date
                                                    </label>
                                                    <input
                                                        type="date"
                                                        name='end_date'
                                                        placeholder="John Doe"
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        value={formik.values.end_date}
                                                        className="block  mt-2 w-full placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                                                    />

                                                    {formik.touched.end_date && formik.errors.end_date ? (
                                                        <div className="text-red-500 text-sm">{formik.errors.end_date}</div>
                                                    ) : null}
                                                </div>

                                            )}



                                        </div>
                                        <div className=' col-span-2 p-5'>
                                            <label for="Description" className="block text-sm text-gray-500">Job Description</label>

                                            <textarea
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.job_description} name='job_description' placeholder="Add you job and responsibilities" className="block  mt-2 w-full placeholder-gray-400/70rounded-lg border border-gray-200 bg-white px-4 h-32 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 "></textarea>

                                            <p className="mt-3 text-xs text-gray-400"> </p>
                                            {formik.touched.job_description && formik.errors.job_description ? (
                                                <div className="text-red-500 text-sm">{formik.errors.job_description}</div>
                                            ) : null}
                                        </div>
                                        {error && (
                                            <p className='text-red-500'>
                                                {error}
                                            </p>
                                        )}



                                        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                            <div className="flex justify-end mt-6">
                                                <button type="submit" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300  font-medium rounded-lg text-sm px-5 py-1 text-center mr-2 mb-2">
                                                    Add
                                                </button>
                                                <button type="button" onClick={handleClose} class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 shadow-lg shadow-red-500/50  font-medium rounded-lg text-sm px-5 py-1 text-center mr-2 mb-2">
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
