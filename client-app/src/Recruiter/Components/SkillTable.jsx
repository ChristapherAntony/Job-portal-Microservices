import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { deleteTest, skillTestList } from '../../utils/Constants';
import { useNavigate } from 'react-router-dom';
import { VIEW_SKILLTEST_ADD, VIEW_SKILLTEST_DETAILS } from '../../utils/ConstantRoutes';
import Delete from './modals/Delete';
import { errorTost, successTost } from './modals/tost';
function SkillTable() {
    const [tests, setTests] = useState([])
    const navigate = useNavigate()
    const [showDelete, setShowDelete] = useState(false)
    const [confirm, setConfirm] = useState(false)
    const handleClick = (id) => {
        navigate(VIEW_SKILLTEST_DETAILS(id))
    }
    const handleDelete = (id) => {
        axios.delete(deleteTest(id)).then((response) => {
            successTost('Deleted', 10)
        }).catch((error) => {
            console.log(error);
            errorTost(error.response.data.errors[0].msg)
        })
    }



    useEffect(() => {
        axios.get(skillTestList)
            .then(response => {
                setTests(response.data.skillTests)
            })
            .catch(error => {
                console.error(error);
            });

    }, [handleDelete]);

    return (
        <div className='p-10 min-h-[500px]'>
            <section className="container px-4 mx-auto ">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <div>
                        <div className="flex items-center gap-x-3">
                            <h2 className="text-lg font-medium text-gray-800">
                                Skill Assessment tests
                            </h2>
                            {/* <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full ">
                                240 vendors
                            </span> */}
                        </div>
                        <p className="mt-1 text-sm text-gray-500">
                            These are the assessment test that you added.
                        </p>
                    </div>

                </div>
                <div className="mt-6 md:flex md:items-center md:justify-between">
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

                        <button onClick={() => navigate(VIEW_SKILLTEST_ADD)} className="flex items-center justify-center w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto gap-x-2 hover:bg-blue-600 ">
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
                            <span>Add New</span>
                        </button>
                    </div>
                </div>
                <div className="flex flex-col mt-6">
                    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">

                            {tests.length > 0 ? (
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
                                                    className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 "
                                                >
                                                    <button className="flex items-center gap-x-3 focus:outline-none">
                                                        <span>Total Questions</span>

                                                    </button>
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 "
                                                >
                                                    <button className="flex items-center gap-x-3 focus:outline-none">
                                                        <span>Test Timme</span>

                                                    </button>
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 "
                                                >
                                                    <button className="flex items-center gap-x-3 focus:outline-none">
                                                        <span></span>

                                                    </button>
                                                </th>







                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200  " >
                                            {tests && tests.map((test, index) => {
                                                const time = test.total_questions * test.time_per_question
                                                return (
                                                    <tr key={index} >
                                                        <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                                                            {index}
                                                        </td>
                                                        <td
                                                            onClick={() => handleClick(test._id)}
                                                            className="px-4 py-4 text-sm text-gray-500 cursor-pointer whitespace-nowrap">
                                                            {test.test_title}
                                                        </td>
                                                        <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                                                            {test.total_questions}
                                                        </td>
                                                        <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                                                            {time} minutes
                                                        </td>
                                                        <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                                                            <button type='button' onClick={() => setShowDelete(true)}>
                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-red-600">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                                                </svg>
                                                            </button>
                                                            {showDelete && <Delete onClose={() => setShowDelete(false)} id={test._id} confirm={handleDelete} />}

                                                        </td>


                                                    </tr>
                                                )

                                            })}



                                        </tbody>
                                    </table>
                                </div>

                            ) : (
                                <div>
                                    <p class="mb-3 text-gray-800 dark:text-gray-400">
                                        Sorry, we couldn't find any skill tests associated with your account. It seems like you haven't added any skill tests yet. Skill tests are a great way to evaluate the abilities of potential candidates, so why not create one now?
                                    </p>
                                    <p class="mb-3 text-gray-900 dark:text-gray-400">
                                        You can create a new skill test by clicking on the 'Add new' button . Once you've created a skill test, you can assign it to specific job postings and invite candidates to take the test. This will help you make better hiring decisions and ensure that your team is composed of the most talented individuals.
                                    </p>
                                </div>
                            )}




                        </div>
                    </div>
                </div>

            </section>


        </div>
    )
}

export default SkillTable