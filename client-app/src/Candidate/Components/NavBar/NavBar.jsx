
import { Fragment } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'
import Logo from '../Logo/Logo'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import React, { useEffect, useState } from 'react'
import { currentUser, signOut } from '../../../utils/Constants';
import { APPLIED_JOBS } from '../../../utils/ConstantRoutes';



{/* <div className='right'>
                <button style={{ cursor: 'pointer' }} onClick={() => navigate('/candidate/signin')}  className='btn'>Register</button>
                <button style={{ cursor: 'pointer' }} onClick={() => navigate('/candidate/signin')} className='btn'>Sign In</button>
            </div> */}


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}



function NavBar() {
    const navigate = useNavigate();
    const [user, setUser] = useState(false)

    const [isOpen, setIsOpen] = useState(false);
    const logout = () => {
        axios.post(signOut).then(res => {
            navigate('/')
        }).catch(err => {
            console.log(err.response.data.errors[0].msg);
        })
    }

    useEffect(() => {
        document.title = "Careerconnect-landing page"
        axios
            .get(currentUser)
            .then((res) => {
                setUser(true)
            })
            .catch((err) => {
                setUser(false)
            });

    }, [logout])



    return (
        <nav className="relative bg-white shadow dark:bg-gray-800">
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
                                className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
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
                            'absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center',
                        ].join(' ')}
                    >
                        {user ? (
                            <>
                                <div className="flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-8">
                                    <Link to={'/jobfeed'} className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">Jobs </Link>
                                    <Link to={'/job-details'} className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">Companies</Link>
                                    <Link to={APPLIED_JOBS} className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">My jobs</Link>
                                    <a href="#" className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">Experts</a>


                                </div>
                                <div className="flex items-center mt-4 lg:mt-0">
                                    <button
                                        className="hidden mx-4 text-gray-600 transition-colors duration-300 transform lg:block dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-400 focus:text-gray-700 dark:focus:text-gray-400 focus:outline-none"
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
                                 
                                    <Menu as="div" className="relative ml-3 hidden lg:block">
                                        <div>
                                            <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                                <span className="sr-only">Open user menu</span>
                                                <img
                                                    className="h-8 w-8 rounded-full"
                                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                    alt=""
                                                />
                                            </Menu.Button>
                                        </div>
                                        <Transition
                                            as={Fragment}
                                            enter="transition ease-out duration-100"
                                            enterFrom="transform opacity-0 scale-95"
                                            enterTo="transform opacity-100 scale-100"
                                            leave="transition ease-in duration-75"
                                            leaveFrom="transform opacity-100 scale-100"
                                            leaveTo="transform opacity-0 scale-95"
                                        >
                                            <Menu.Items className="absolute  right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <Link

                                                            to={'/candidate/profile'}
                                                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                        >
                                                            Your Profile
                                                        </Link>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <div

                                                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                        >
                                                            Settings
                                                        </div>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <div
                                                            onClick={logout}
                                                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                        >
                                                            Sign out
                                                        </div>
                                                    )}
                                                </Menu.Item>
                                            </Menu.Items>

                                        </Transition>
                                    </Menu>
                                </div>

                            </>
                        ) : (



                            <div className='flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-8'>
                                <button onClick={() => navigate('/candidate/signin')} className=' text-white px-2 lg:font-bold'>For Candidate</button>
                                <button onClick={() => navigate('/recruiter/signin')} className=' text-white px-2 lg:font-bold'>For Recruiter</button>
                            </div>
                        )}





                    </div>




                </div>

            </div>
        </nav>

    )
}

export default NavBar
