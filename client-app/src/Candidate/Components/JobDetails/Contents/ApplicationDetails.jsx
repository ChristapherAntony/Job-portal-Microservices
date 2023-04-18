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
                {application.application_date &&
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




                {application.rejected_date || application.accepted_date ? (
                    <>
                        {application.accepted_date && <li className="ml-6">
                            <span className="absolute flex items-center justify-center w-8 h-8 bg-green-100 rounded-full -left-4 ring-4 ring-white  ">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-green-700">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                                </svg>

                            </span>
                            <h3 className="font-medium leading-tight">Short Listed</h3>
                            <p className="text-sm">Date : {
                                new Date(application.accepted_date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
                            }</p>
                            <p className="text-sm">{application.comment}</p>
                            <p className="text-sm text-blue-500">You will be contacted very soon.. Please check your email.</p>
                        </li>}
                        {application.rejected_date && <li className="ml-6">
                            <span className="absolute flex items-center justify-center w-8 h-8 bg-red-100 rounded-full -left-4 ring-4 ring-white  ">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-red-600">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                                </svg>

                            </span>
                            <h3 className="font-medium leading-tight">Rejected</h3>
                            <p className="text-sm">Date : {
                                new Date(application.rejected_date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
                            }</p>
                            <p className="text-sm">{application.comment}</p>
                        </li>}
                    </>
                ) : (
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
                )

                }



            </ol>

        </>
    )
}

export default ApplicationDetails