import React from 'react'
import { useNavigate } from 'react-router-dom';
import { candidateImage, recruiterImage } from '../../assets/images'
import Candidate from './small-box/Candidate'
import Recruiter from './small-box/Recruiter'

function SmallBox() {
    const navigate = useNavigate();
    return (

        <section className="bg-white">
            <div className="container px-6 py-10 mx-auto w-3/4 ">
                <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl">
                    Please Register <br /> {" "}
                    <span className="underline decoration-blue-500">here</span>
                </h1>
                <p className="mt-4 text-gray-500 xl:mt-6">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum quam
                    voluptatibus
                </p>
                <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2   ">
                    <div className="p-8 space-y-3 border-2 border-blue-400 rounded-xl">
                        <span className="inline-block text-blue-500">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-8 h-8"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
                                />
                            </svg>
                        </span>
                        <h1 className="text-xl font-semibold text-gray-700 capitalize">
                            Are you Looking for a job?
                        </h1>
                        <p className="text-gray-500">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab
                            nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                        </p>

                        <button style={{ cursor: 'pointer' }} onClick={() => navigate('/candidate/signup')} type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Sign up</button>

                    </div>
                    <div className="p-8 space-y-3 border-2 border-blue-400 rounded-xl">
                        <span className="inline-block text-blue-500">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-8 h-8"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
                                />
                            </svg>
                        </span>
                        <h1 className="text-xl font-semibold text-gray-700 capitalize">
                            For employer
                        </h1>
                        <p className="text-gray-500">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab
                            nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                        </p>

                        <button style={{ cursor: 'pointer' }} onClick={() => navigate('/recruiter/signin')} type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Find here</button>


                    </div>

                </div>
            </div>
        </section>


    )
}

export default SmallBox