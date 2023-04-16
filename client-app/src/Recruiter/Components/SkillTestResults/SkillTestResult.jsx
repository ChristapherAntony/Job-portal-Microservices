import React, { useState } from 'react'
import TableRaw from './TableRaw';

function SkillTestResult({ applications }) {
    const [status, setStatus] = useState('pending')

    const handleStatusChange=()=>{
        
    }

    return (
        <section className="container   md:w-5/6 px-4 mx-auto">
            <div className="flex items-center gap-x-3">
                <h2 className="text-lg font-medium text-gray-800 ">
                    Skill Test Results
                </h2>
                <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full  ">
                    {applications?.length} applications
                </span>
                <div className="datatable-header"> <span>Application Status </span>
                    <select value={status} onChange={handleStatusChange}>
                        <option value="pending">Pending</option>
                        <option value="accepted">Accepted</option>
                        <option value="rejected">Rejected</option>
                    </select>
                </div>
            </div>
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
                                            <button className="flex items-center gap-x-2">
                                                <input
                                                    type="checkbox"
                                                    className="text-blue-500 border-gray-300 rounded   "
                                                />
                                                <span>No.</span>
                                            </button>
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
                                        <th
                                            scope="col"
                                            className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 "
                                        >
                                            <button className="flex items-center gap-x-2">
                                                <span>Test</span>

                                            </button>
                                        </th>

                                        <th
                                            scope="col"
                                            className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 "
                                        >
                                            Result
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 "
                                        >
                                            Action
                                        </th>
                                        <th scope="col" className="relative py-3.5 px-4">
                                            <span className="sr-only">Edit</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200  ">
                                    {applications?.map((data, index) => {
                                        return (
                                            <TableRaw key={index} data={data} />
                                        )

                                    })}


                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-between mt-6">
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
                        2
                    </a>
                    <a
                        href="#"
                        className="px-2 py-1 text-sm text-gray-500 rounded-md   hover:bg-gray-100"
                    >
                        3
                    </a>
                    <a
                        href="#"
                        className="px-2 py-1 text-sm text-gray-500 rounded-md   hover:bg-gray-100"
                    >
                        ...
                    </a>
                    <a
                        href="#"
                        className="px-2 py-1 text-sm text-gray-500 rounded-md   hover:bg-gray-100"
                    >
                        12
                    </a>
                    <a
                        href="#"
                        className="px-2 py-1 text-sm text-gray-500 rounded-md   hover:bg-gray-100"
                    >
                        13
                    </a>
                    <a
                        href="#"
                        className="px-2 py-1 text-sm text-gray-500 rounded-md   hover:bg-gray-100"
                    >
                        14
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
            </div>
        </section>

    )
}

export default SkillTestResult