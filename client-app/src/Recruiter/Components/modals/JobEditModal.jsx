
import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useFormik } from 'formik';
import validationSchema from '../PostAJob/validation'
import { updateJob } from '../../../utils/Constants'
import { toast } from 'react-toastify';

export default function JobEditModal({ jobData, onClose, onUpdate }) {
   
    const cancelButtonRef = useRef(null)
    const handleClose = () => {
        setOpen(false);
        onClose();
        onUpdate()
    }


    const [open, setOpen] = useState(true)
    const [error, setError] = useState(null)
    const navigate = useNavigate();
    //for handling skills array in skills input
    const [skills, setSkills] = useState(jobData?.skills_required);
    const handleRemoveSkill = (index) => {
        const updatedSkills = skills.filter((skill, i) => i !== index);
        setSkills(updatedSkills);
    }
    const handleAddSkill = () => {
        const skillInput = document.getElementById('skills');
        const newSkill = skillInput.value.toLowerCase();
        if (newSkill) {
            setSkills(prevState => [...prevState, newSkill]);
            skillInput.value = '';
        }
    }
    //for handling education array in education input
    const [education, setEducation] = useState(jobData?.education_required);
    const handleRemoveEducation = (index) => {
        const updatedEducation = education.filter((education, i) => i !== index);
        setEducation(updatedEducation);
    }
    const handleAddEducation = () => {
        const educationInput = document.getElementById('education');
        const newEducation = educationInput.value.toLowerCase();
        if (newEducation) {
            setEducation(prevState => [...prevState, newEducation]);
            educationInput.value = '';
        }
    }


    const formik = useFormik({
        initialValues: {
            job_title: jobData.job_title,
            available_positions: jobData.available_positions,
            skills_required: "", ///
            education_required: "", //
            experience_required: jobData.experience_required,
            location: jobData.location,
            base_salary: jobData.base_salary,
            employment_type: jobData.employment_type,
            deadline: jobData.deadline,
            job_description: jobData.job_description,
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            values.skills_required = skills;
            values.education_required = education;
            axios.put(updateJob(jobData._id), values).then(res => {
                console.log(res);
                toast.success('Updated..', {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    })
                handleClose()
            }).catch((err) => {
                console.log(err);
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

                                <section className="max-w-4xl p-2 mx-auto bg-white rounded-xl shadow-md m-10">
                                    <h2 className="text-lg font-semibold text-gray-700 capitalize">
                                        Update Job
                                    </h2>
                                    <form onSubmit={formik.handleSubmit}>
                                        <div className="grid grid-cols-1 gap-y-0 gap-x-5 mt-0 sm:grid-cols-2 p-5">
                                            <div>
                                                <label className="text-gray-700 text-sm" htmlFor="job_title">
                                                    Job Title
                                                </label>
                                                <input
                                                    id="job_title"
                                                    type="text"
                                                    name="job_title"
                                                    placeholder='Eg. Web Developer, Acountant'
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.job_title}
                                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                                                />
                                                {formik.touched.job_title && formik.errors.job_title ? (
                                                    <div className="text-red-500 text-sm">{formik.errors.job_title}</div>
                                                ) : null}
                                            </div>
                                            <div>
                                                <label className="text-gray-700 text-sm" htmlFor="username">
                                                    Number of posts
                                                </label>
                                                <input
                                                    id="available_positions"
                                                    type='number'
                                                    name="available_positions"
                                                    placeholder='Enter number of posts'
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.available_positions}
                                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                                                />
                                                {formik.touched.available_positions && formik.errors.available_positions ? (
                                                    <div className="text-red-500 text-sm">{formik.errors.available_positions}</div>
                                                ) : null}
                                            </div>

                                            <div className=''>
                                                <label
                                                    className="text-gray-700 text-sm"
                                                    htmlFor="skill"
                                                >
                                                    Skills required
                                                </label>
                                                <input
                                                    id="skills"
                                                    type="text"
                                                    name="skills_required"
                                                    //value={formik.values.skills_required}
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    className={
                                                        formik.touched.skills_required && formik.errors.skills_required
                                                            ? 'validation-false'
                                                            : 'validation-true'
                                                    }
                                                />
                                                {formik.touched.skills_required && formik.errors.skills_required ? (
                                                    <p className="mt-1 text-xs font-medium text-red-500">
                                                        {formik.errors.skills_required}
                                                    </p>
                                                ) : null}


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

                                            </div>
                                            <div className=''>
                                                <label
                                                    className="text-gray-700 text-sm"
                                                    htmlFor="skill"
                                                >
                                                    Education Required
                                                </label>
                                                <input
                                                    id="education"
                                                    type="text"
                                                    name="education_required"
                                                    //value={formik.values.education_required}
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    className={
                                                        formik.touched.education_required && formik.errors.education_required
                                                            ? 'validation-false'
                                                            : 'validation-true'
                                                    }
                                                />
                                                {formik.touched.education_required && formik.errors.education_required ? (
                                                    <p className="mt-1 text-xs font-medium text-red-500">
                                                        {formik.errors.education_required}
                                                    </p>
                                                ) : null}

                                                <button
                                                    type="button"
                                                    onClick={handleAddEducation}
                                                    className="inline-block rounded border-2 border-green-600 px-5 text-xs font-medium uppercase leading-normal text-green-600 transition duration-150 ease-in-out hover:border-black hover:bg-green-600 hover:bg-opacity-10 hover:text-black focus:border-success-600 focus:text-success-600 focus:outline-none focus:ring-0 active:border-success-700 active:text-success-700"
                                                    data-te-ripple-init>
                                                    Add
                                                </button>
                                                {education.map((data, index) => (
                                                    <span key={index} className="inline-block border-1 rounded-full bg-lightBlue px-3 py-1 text-xs font-medium text-black border-gray-600  mr-2 mb-2">
                                                        {data}
                                                        <button onClick={() => handleRemoveEducation(index)} className="ml-2 text-xs font-medium text-red-600">X</button>
                                                    </span>
                                                ))}

                                            </div>

                                            <div>
                                                <label className="text-gray-700 text-sm" htmlFor="experience_required">
                                                    Experience
                                                </label>
                                                <input
                                                    id="experience_required"
                                                    type="text"
                                                    name="experience_required"
                                                    placeholder='Experience'
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.experience_required}
                                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                                                />
                                                {formik.touched.experience_required && formik.errors.experience_required ? (
                                                    <div className="text-red-500 text-sm">{formik.errors.experience_required}</div>
                                                ) : null}
                                            </div>
                                            <div>
                                                <label className="text-gray-700 text-sm" htmlFor="username">
                                                    Location
                                                </label>
                                                <input
                                                    id="location"
                                                    name="location"
                                                    placeholder='Job location'
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.location}
                                                    type="text"
                                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                                                />
                                                {formik.touched.location && formik.errors.location ? (
                                                    <div className="text-red-500 text-sm">{formik.errors.location}</div>
                                                ) : null}
                                            </div>
                                            <div>
                                                <label className="text-gray-700 text-sm" htmlFor="base_salary">
                                                    Base salary
                                                </label>
                                                <input
                                                    id="base_salary"
                                                    type="number"
                                                    name="base_salary"
                                                    placeholder='Salary'
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.base_salary}
                                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                                                />
                                                {formik.touched.base_salary && formik.errors.base_salary ? (
                                                    <div className="text-red-500 text-sm">{formik.errors.base_salary}</div>
                                                ) : null}
                                            </div>
                                            <div>
                                                <label className="text-gray-700 text-sm" htmlFor="employment_type">
                                                    Job type
                                                </label>
                                                <input
                                                    id="employment_type"
                                                    name="employment_type"
                                                    placeholder='Type of employment'
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.employment_type}
                                                    type="text"
                                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                                                />
                                                {formik.touched.employment_type && formik.errors.employment_type ? (
                                                    <div className="text-red-500 text-sm">{formik.errors.employment_type}</div>
                                                ) : null}
                                            </div>
                                            <div>
                                                <label className="text-gray-700 text-sm" htmlFor="deadline">
                                                    Job Expiry
                                                </label>
                                                <input
                                                    id="deadline"
                                                    name="deadline"
                                                    placeholder='Job validity'
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.deadline}
                                                    type="date"
                                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                                                />
                                                {formik.touched.deadline && formik.errors.deadline ? (
                                                    <div className="text-red-500 text-sm">{formik.errors.deadline}</div>
                                                ) : null}
                                            </div>
                                        </div>
                                        <div className=' col-span-2 p-5'>
                                            <label className="block text-sm text-gray-500">Job Description</label>
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

                                        <div className="flex justify-end mt-1">
                                            <button type="submit" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                                              Update
                                            </button>
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
