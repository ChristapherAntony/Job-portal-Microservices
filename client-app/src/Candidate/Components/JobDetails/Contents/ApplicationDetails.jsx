import React, { useEffect, useState } from 'react'
import { getJobApplication } from '../../../../utils/Constants';
import axios from "axios";
function ApplicationDetails({ jobId }) {
    const [application, setApplication] = useState({})

    const getApplicationDetails = () => {
        axios.get((getJobApplication(jobId))).then((response) => {
            console.log(response.data);
            const formattedApplication = {
                ...response.data,
                application_date: new Date(response.data.application_date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }),
                skillTest_lastDate: new Date(response.data.skillTest_lastDate).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })

            };
            console.log(formattedApplication);
            setApplication(formattedApplication);
        }).catch((err) => {

        });
    }



    //need to get application details to display the processing stage to get application we use our job id and current use id to find tehe application
    useEffect(() => {
        getApplicationDetails()

    }, [])

    const userEmail = 'christapher012@gmail.com'
    return (
        <>
            <h5 className="text-lg font-semibold text-blue-700 py-2">Application Details</h5>
            <ol className="relative text-gray-500 border-l border-gray-200 ">
                {application.application_status === 'pending' &&
                    <li className="mb-10 ml-6">
                        <span className="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -left-4 ring-4 ring-white  ">
                            <svg
                                aria-hidden="true"
                                className="w-5 h-5 text-green-500 "
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </span>
                        <h3 className="font-medium leading-tight">Applied</h3>
                        <p className="text-sm">Applied on :{application.application_date}</p>
                    </li>
                }
                {application.skillTest_date ? (
                    <li className="mb-10 ml-6">
                        <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -left-4 ring-4 ring-white  ">
                            <svg
                                aria-hidden="true"
                                className="w-5 h-5 text-green-500 "
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </span>
                        <h3 className="font-medium leading-tight">Skill Test</h3>
                        <p className="text-sm">Date : {
                            new Date(application.skillTest_date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
                        }</p>
                        <p>Please check your <span className='text-textBlue' > <a href={`mailto:${userEmail}`}>email</a></span> and submit the test before  <span className='text-textBlue'>{application.skillTest_lastDate}</span> </p>
                    </li>
                ) : (
                    <li className="mb-10 ml-6">
                        <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -left-4 ring-4 ring-white  ">
                            <svg
                                aria-hidden="true"
                                className="w-5 h-5 text-gray-500 "
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </span>
                        <h3 className="font-medium leading-tight">Skill Test</h3>
                        <p></p>
                    </li>
                )

                }
                {application.skillTest_submitted_date ? (
                    <li className="mb-10 ml-6">
                        <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -left-4 ring-4 ring-white  ">
                            <svg
                                aria-hidden="true"
                                className="w-5 h-5 text-green-500 "
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                                <path
                                    fillRule="evenodd"
                                    d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </span>
                        <h3 className="font-medium leading-tight">Skill Test Completed</h3>
                        <p className="text-sm">Date : {
                            new Date(application.skillTest_submitted_date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
                        }</p>
                        <p>You have successfully completed your skill test </p>
                    </li>
                ) : (
                    <li className="mb-10 ml-6">
                        <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -left-4 ring-4 ring-white  ">
                            <svg
                                aria-hidden="true"
                                className="w-5 h-5 text-gray-500 "
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                                <path
                                    fillRule="evenodd"
                                    d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </span>
                        <h3 className="font-medium leading-tight">Skill Test Completed</h3>
                    </li>
                )

                }

                <li className="ml-6">
                    <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -left-4 ring-4 ring-white  ">
                        <svg
                            aria-hidden="true"
                            className="w-5 h-5 text-gray-500 "
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                            <path
                                fillRule="evenodd"
                                d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </span>
                    <h3 className="font-medium leading-tight">Confirmation</h3>
                    <p className="text-sm">Step details here</p>
                </li>

            </ol>

        </>
    )
}

export default ApplicationDetails