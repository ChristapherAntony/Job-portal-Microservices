import React from 'react'

function InfoBox( {title,data}) {
    return (
        <li className="inline-flex items-center py-2 px-4 bg-white ltr:mr-2 rtl:ml-2 my-1 shadow  rounded-md">
            <i data-feather="user-check" className="h-5 w-5" />
            <div className="ltr:ml-4 rtl:mr-4">
                <p className="font-medium">{title}:</p>
                <span className="text-blue-600 font-medium text-sm">
                    {data}
                </span>
            </div>
        </li>
    )
}

export default InfoBox