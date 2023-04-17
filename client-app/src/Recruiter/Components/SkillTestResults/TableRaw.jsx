import React from 'react'
import { useNavigate } from 'react-router-dom'

function TableRaw({ data, index }) {
    const navigate = useNavigate()

    const candidate = data?.candidate
    const handleClick = () => {

    }
    return (
        <tr key={index} className='cursor-pointer' onClick={handleClick}>
            <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                {index}
            </td>
            <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                {candidate.user_name}
            </td>
            <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                {data?.job?.job_title}
            </td>
            <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-blue-100/60 ">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                    <h2 className="text-sm font-normal text-blue-500">
                        {data.application_status}
                    </h2>
                </div>
            </td>
            <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                {new Date(data.skillTest_submitted_date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}

            </td>
            <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                {data.percentage_obtained}
            </td>

            {data.is_passed ? (
                <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                    <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-blue-100/60 ">
                        <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                        <h2 className="text-sm font-normal text-green-500">
                            Passed
                        </h2>
                    </div>
                </td>
            ) : (
                <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                    <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-red-100/60 ">
                        <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                        <h2 className="text-sm font-normal text-red-500">
                            Faild
                        </h2>
                    </div>
                </td>
            )}

            <td className="px-4 py-4 text-sm whitespace-nowrap">
                <div className="inline-flex rounded-md shadow-sm " role="group">
                    <button
                        type="button"

                        
                        className="text-green-600 inline-flex items-center px-2 py-1 text-sm font-medium  bg-transparent  border  rounded-l-lg hover:bg-green-100   "
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 ">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Shortlist
                    </button>

                    <button
                        type="button"
                        className="text-red-600 inline-flex items-center px-2 py-1 text-sm font-medium  bg-transparent border rounded-r-md hover:bg-red-100 "
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Reject
                    </button>
                </div>

            </td>
        </tr>
    )
}

export default TableRaw