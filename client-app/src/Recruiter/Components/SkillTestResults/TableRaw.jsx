import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import ResponseWithComment from '../modals/ResponseWithComment';
function TableRaw({ data, index }) {
    console.log(data,'index',index);
    const [modalReject, setModalReject] = useState(false)
    const [modalAccept, setModalAccept] = useState(false)
    const navigate = useNavigate()

    const candidate = data?.candidate
    const handleClick = (id) => {
        alert(id)
    }



    return (
        <tr key={index} className='' >
            <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                {index}
            </td>
            <td onClick={() => handleClick(candidate._id)} className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap cursor-pointer">
                {candidate.user_name}
            </td>
            <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                {data?.job?.job_title}
            </td>
            {/* <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-blue-100/60 ">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                    <h2 className="text-sm font-normal text-blue-500">
                        {data.application_status}
                    </h2>
                </div>
            </td> */}
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
                {data.rejected_date || data.accepted_date ? (
                    <>
                        {data.accepted_date && <span className='text-green-700'>Shortlisted</span>}
                        {data.rejected_date && <span className='text-red-700'>Rejected</span>}
                    </>

                ) : (
                    <div className="inline-flex rounded-md shadow-sm " role="group">
                        <button
                            type="button"
                            onClick={() => setModalAccept(true)}
                            className="text-green-600 inline-flex items-center px-2 py-1 text-sm font-medium  bg-transparent  border  rounded-l-lg hover:bg-green-100   "
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 ">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Shortlist
                        </button>
                        {modalAccept && <ResponseWithComment context={'accept'} id={data._id} onClose={() => setModalAccept(false)} />}
                        <button
                            type="button"
                            onClick={() => setModalReject(true)}
                            className="text-red-600 inline-flex items-center px-2 py-1 text-sm font-medium  bg-transparent border rounded-r-md hover:bg-red-100 "
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Reject
                        </button>

                        {modalReject && <ResponseWithComment context={'reject'} id={data._id} onClose={() => setModalReject(false)} />}

                    </div >
                )
                }


            </td >
        </tr >
    )
}

export default TableRaw