import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { jobPosted } from '../../utils/Constants';
import { useNavigate } from 'react-router-dom';
import { VIEW_APPLICATOIONS } from '../../utils/ConstantRoutes';
function Jobs() {
    const [jobs, setJobs] = useState([])
    const navigate = useNavigate()

    const handleClick = (id) => {
        navigate(VIEW_APPLICATOIONS(id))
    }

    useEffect(() => {
        axios.get(jobPosted)
            .then(response => {
                setJobs(response.data)
                console.log(response, "response");
            })
            .catch(error => {
                console.error(error);
            });

    }, []);

    return (
        <div className='p-10 min-h-[500px]'>
            <section className="container px-4 mx-auto ">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <div>
                        <div className="flex items-center gap-x-3">
                            <h2 className="text-lg font-medium text-gray-800">
                                Jobs and Responses
                            </h2>
                            {/* <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full ">
                                240 vendors
                            </span> */}
                        </div>
                        <p className="mt-1 text-sm text-gray-500">
                            These are the jobs that you posted .
                        </p>
                    </div>

                </div>
                <div className="mt-6 mb-6 md:flex md:items-center md:justify-between">
                    <div className="inline-flex overflow-hidden bg-white border divide-x rounded-lg  rtl:flex-row-reverse ">
                        {/* <button className="px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 bg-gray-100 sm:text-sm ">
                            View all
                        </button>
                        <button className="px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 sm:text-sm  hover:bg-gray-100">
                            Closed
                        </button>
                        <button className="px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 sm:text-sm  hover:bg-gray-100">
                            Expired
                        </button> */}
                    </div>
                    {/* <div className="relative flex items-center mt-4 md:mt-0">
                        <span className="absolute">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-5 h-5 mx-3 text-gray-400 "
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                                />
                            </svg>
                        </span>
                        <input
                            type="text"
                            placeholder="Search"
                            className="block w-full py-1.5 pr-5 text-gray-700 bg-white border border-gray-200 rounded-lg md:w-80 placeholder-gray-400/70 pl-11 rtl:pr-11 rtl:pl-5  focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div> */}
                    <div className="flex items-center mt-4 gap-x-3">

                        <button onClick={() => navigate('/recruiter/post-job')} className="flex items-center justify-center w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto gap-x-2 hover:bg-blue-600 ">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-5 h-5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                            <span>Add Job</span>
                        </button>
                    </div>
                </div>
                {jobs.length>0 ? (
                    <div className="flex flex-col mt-6">
                        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                                <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                                    <table className="min-w-full divide-y divide-gray-200 ">
                                        <thead className="bg-gray-50 ">
                                            <tr>
                                                <th
                                                    scope="col"
                                                    className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 "
                                                >
                                                    <button className="flex items-center gap-x-3 focus:outline-none">
                                                        <span>#</span>

                                                    </button>
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 "
                                                >
                                                    <button className="flex items-center gap-x-3 focus:outline-none">
                                                        <span>Job Title</span>

                                                    </button>
                                                </th>

                                                <th
                                                    scope="col"
                                                    className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 "
                                                >
                                                    Vacancy
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 "
                                                >
                                                    Applications
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 "
                                                >
                                                    Hired
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 "
                                                >
                                                    Rejected
                                                </th>



                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200 cursor-pointer " >
                                            {jobs?.map((jobs, index) => {
                                                return (
                                                    <tr key={index} onClick={() => handleClick(jobs._id)}>
                                                        <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                                                            {index}
                                                        </td>
                                                        <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                                                            {jobs.job_title}
                                                        </td>

                                                        <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                                                            {jobs.available_positions}
                                                        </td>
                                                        <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                                                            {jobs.number_applied}
                                                        </td>
                                                        <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                                                            {jobs.number_hired}
                                                        </td>
                                                        <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                                                            {jobs.number_rejected}
                                                        </td>

                                                    </tr>
                                                )

                                            })}



                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div>
                        <p class="mb-3 text-gray-800 dark:text-gray-400">
                            Welcome, recruiter! It looks like you haven't posted any jobs yet. Don't miss out on the opportunity to find top talent for your organization. By posting a job on our platform, you can attract qualified candidates and take the first step towards building a great team.
                        </p>
                        <p class="mb-3 text-gray-900 dark:text-gray-400">
                            Posting a job is easy. Simply click on the 'Add new' button to create your job post. Once your job is posted, our platform will notify you when a candidate applies, so you can start evaluating their qualifications and skills.
                        </p>
                    </div>
                )}


            </section>


        </div>
    )
}

export default Jobs