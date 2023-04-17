import React, { useEffect, useState } from 'react'
import axios from 'axios'
import TableRaw from './TableRaw';
import { SKILL_TEST_RESULT, getJobTitleForRecruiter } from '../../../utils/Constants';
import TableSkeleton from '../../../Candidate/Components/Skeleton/TableSkeleton';
import { event } from 'jquery';
import Pagination from '../../../Candidate/Components/Pagination/Pagination';
import TablePagination from '../../../Candidate/Components/Pagination/TablePagination';
import { useSelector } from 'react-redux';

function SkillTestResult() {
    const [loading, SetLoading] = useState(false)
    const refreshStatus = useSelector(state => state.componentrefresh)
    const [job_id, setJob_id] = useState('')
    const [titles, setTitles] = useState([])
    const [results, setResults] = useState([])
    // const pageNumber = match.params.pageNumber || 1;
    const pageNumber = 1;
    const [page, setPage] = useState(pageNumber);
    const [pages, setPages] = useState(1);


    const handleStatusChange = (value) => {
        if (!value) value = ''
        setJob_id(value)
        getTestResults(value)
    }

    const getTestResults = (value) => {
        SetLoading(true)
        axios.get(`${SKILL_TEST_RESULT(value)}&page=${1}&limit=${10}`).then((response) => {
            setResults(response.data.data)
            setPages(response.data.pages)
            SetLoading(false)
        }).catch((err) => {
            console.log(err.response.data.errors[0].msg);
            SetLoading(false)
        });
    }

    const getJobTitle = () => {
        axios.get(getJobTitleForRecruiter).then((response) => {
            // console.log(response.data,'title');
            setTitles(response.data)
        }).catch((err) => {
            console.log(err.response.data.errors[0].msg);
        });
    }


    useEffect(() => {
        getTestResults('')
        getJobTitle()
    }, [page,refreshStatus])

    return (
        <section className="container  h-screen  md:w-5/6 px-4 mx-auto">
            <div className="flex items-center mt-3 gap-x-3">
                <h2 className="text-lg font-medium text-gray-800 ">
                    Skill Test Results
                </h2>
            </div>
            <div className="text-gray-800 mb-10 mt-3 "> <span>Posted jobs </span>
                <select className='border bg-white w-52' value={job_id} onChange={(e) => handleStatusChange(e.target.value)}>
                    <option value=''  >View All</option>
                    {titles?.map((data, index) => (
                        <option key={index} value={data._id}>{data.job_title}</option>
                    ))}
                </select>
            </div>

            {loading ? (
                <TableSkeleton rows={10} />
            ) : (
                <div>
                    <div className="flex flex-col mt-6">
                        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                                <div className="overflow-hidden border border-gray-200  md:rounded-lg">
                                    <table className="min-w-full divide-y divide-gray-200 ">
                                        <thead className="bg-gray-50 ">
                                            <tr>
                                                <th
                                                    scope="col"
                                                    className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 "
                                                >
                                                    <span>No.</span>
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 "
                                                >
                                                    <div className="flex items-center gap-x-3">
                                                        <span>Name</span>
                                                    </div>
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 "
                                                >
                                                    <button className="flex items-center gap-x-2">
                                                        <span>Role</span>
                                                    </button>
                                                </th>
                                                {/* <th
                                                    scope="col"
                                                    className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 "
                                                >
                                                    <button className="flex items-center gap-x-2">
                                                        <span>Status</span>

                                                    </button>
                                                </th> */}

                                                <th
                                                    scope="col"
                                                    className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 "
                                                >
                                                    Submitted on
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 "
                                                >
                                                    Results
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 "
                                                >

                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 "
                                                >
                                                    Action
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200  ">
                                            {results?.map((data, index) => {
                                                index++
                                                return (

                                                    <TableRaw data={data} index={index} />
                                                )

                                            })}


                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="flex items-center justify-between mt-6">
                        <a
                            href="#"
                            className="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100   "
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-5 h-5 rtl:-scale-x-100"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                                />
                            </svg>
                            <span>previous</span>
                        </a>
                        <div className="items-center hidden lg:flex gap-x-3">
                            <a
                                href="#"
                                className="px-2 py-1 text-sm text-blue-500 rounded-md  bg-blue-100/60"
                            >
                                1
                            </a>

                            <a
                                href="#"
                                className="px-2 py-1 text-sm text-gray-500 rounded-md   hover:bg-gray-100"
                            >
                                ...
                            </a>

                        </div>
                        <a
                            href="#"
                            className="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100   "
                        >
                            <span>Next</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-5 h-5 rtl:-scale-x-100"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                />
                            </svg>
                        </a>
                    </div> */}
                    <TablePagination page={page} pages={pages} changePage={setPage} />
                    {/* <Pagination page={page} pages={pages} changePage={setPage} /> */}
                </div>
            )}

        </section>

    )
}

export default SkillTestResult