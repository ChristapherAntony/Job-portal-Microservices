


import { Link, useNavigate } from 'react-router-dom'
import Logo from './Logo/Logo'

import React, { useEffect, useState } from 'react'
import { currentUser, signOut } from '../../utils/Constants';
import axios from  'axios'
import { VIEW_SKILLTEST_TABLE} from '../../utils/ConstantRoutes';

{/* <div className='right'>
                <button style={{ cursor: 'pointer' }} onClick={() => navigate('/candidate/signin')}  className='btn'>Register</button>
                <button style={{ cursor: 'pointer' }} onClick={() => navigate('/candidate/signin')} className='btn'>Sign In</button>
            </div> */}


function NavBar() {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    const [user, setUser] = useState(false)


    const logout = () => {
        console.log("btn ");
        axios.post(signOut).then(res => {
            console.log(res);
            navigate('/')
        }).catch(err => {
            console.log(err.response.data.errors[0].msg);
        })
    }

    useEffect(() => {
        axios.get(currentUser).then((res) => {
            setUser(true)
        }).catch((err) => {
            setUser(false)
        });

    }, [logout])


    return (
        <nav className="relative bg-white shadow ">
            <div className="container px-6 py-4 mx-auto">
                <div className="lg:flex lg:items-center lg:justify-between">
                    <div className="flex items-center justify-between">
                        <div style={{ cursor: 'pointer' }} onClick={() => navigate(`/`)} >
                            {/* <img className="w-auto h-6 sm:h-7" src="https://merakiui.com/images/full-logo.svg" alt="" /> */}
                            <Logo />
                        </div>

                        {/* Mobile menu button */}
                        <div className="flex lg:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                type="button"
                                className="text-gray-500  hover:text-gray-600  focus:outline-none focus:text-gray-600"
                                aria-label="toggle menu"
                            >
                                {!isOpen ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                )}
                            </button>
                        </div>



                    </div>

                    {/*  Mobile Menu open: "block", Menu closed: "hidden" */}
                    <div
                        x-cloak="true"
                        className={[
                            isOpen ? 'translate-x-0 opacity-100' : 'opacity-0 -translate-x-full',
                            'absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white  lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center',
                        ].join(' ')}
                    >

                        {user ? (
                            <>
                                <div className="flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-8">
                                    <Link to={'/recruiter'} className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0  hover:bg-gray-100 ">Home </Link>
                                    <Link to={'#'} className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0  hover:bg-gray-100 ">Hire</Link>
                                    <Link to={VIEW_SKILLTEST_TABLE} className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0  hover:bg-gray-100 ">Skill test</Link>
                                    <button onClick={logout} className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0  hover:bg-gray-100 ">Logout</button>
                                    {/* <a href="#" className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0  hover:bg-gray-100 ">Experts</a> */}


                                </div>
                                <div className="flex items-center mt-4 lg:mt-0">
                                    <button
                                        className="hidden mx-4 text-gray-600 transition-colors duration-300 transform lg:block hover:text-gray-700  focus:text-gray-700  focus:outline-none"
                                        aria-label="show notifications"
                                    >
                                        <svg
                                            className="w-6 h-6"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M15 17H20L18.5951 15.5951C18.2141 15.2141 18 14.6973 18 14.1585V11C18 8.38757 16.3304 6.16509 14 5.34142V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V5.34142C7.66962 6.16509 6 8.38757 6 11V14.1585C6 14.6973 5.78595 15.2141 5.40493 15.5951L4 17H9M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </button>
                                    <button
                                        type="button"
                                        className="flex items-center focus:outline-none"
                                        aria-label="toggle profile dropdown"
                                    >
                                        <div style={{ cursor: 'pointer' }} onClick={() => navigate(``)} className="w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full">
                                            <img
                                                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                                                className="object-cover w-full h-full"
                                                alt="avatar"
                                            />
                                        </div>
                                        <h3 className="mx-2 text-gray-700  lg:hidden">
                                            Khatab wedaa
                                        </h3>
                                    </button>
                                </div>
                            </>
                        ) : (
                            null
                        )}



                    </div>




                </div>

            </div>
            {user ? (
                <div className=" hidden lg:block pl-20  bg-lightDarkBlue shadow px-6  mx-auto">

                    <Link to={'/recruiter/jobs'} className="px-3  mx-3 text-white  rounded-md lg:mb-3 pb-2  ">Jobs & Response  </Link>
                    <Link to={''} className="px-3  mx-3 text-white  rounded-md lg:mb-3 pb-2  ">Post a Job </Link>
                    <Link to={'/recruiter/skill-test/results'} className="px-3  mx-3 text-white  rounded-md lg:mb-3 pb-2  ">Test results</Link>
                    <Link to={''} className="px-3  mx-3 text-white  rounded-md lg:mb-3 pb-2  ">Interviews</Link>




                </div>
            ) : (
                null
            )}

        </nav>


    )
}

export default NavBar
