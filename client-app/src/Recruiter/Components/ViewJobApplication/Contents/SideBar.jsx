import React from 'react'

function SideBar({ jobData }) {



    const date = new Date(jobData?.created_at);
    const formattedDate = date.toLocaleDateString();
    return (
        <div className="shadow  rounded-md bg-white  sticky top-20">
            <div className="p-6">
                <h5 className="text-lg font-semibold">Job Information</h5>
            </div>
            <div className="p-6 border-t border-slate-100 ">
                <ul className="list-none">
                    <li className="flex items-center">
                        <i data-feather="user-check" className="h-5 w-5" />
                        <div className="ltr:ml-4 rtl:mr-4">
                            <p className="font-medium">Employee Type:</p>
                            <span className="text-blue-600 font-medium text-sm">
                                {jobData?.employment_type}
                            </span>
                        </div>
                    </li>
                    <li className="flex items-center mt-3">
                        <i data-feather="map-pin" className="h-5 w-5" />
                        <div className="ltr:ml-4 rtl:mr-4">
                            <p className="font-medium">Location:</p>
                            <span className="text-blue-600 font-medium text-sm">
                                {jobData?.location}
                            </span>
                        </div>
                    </li>
                    <li className="flex items-center mt-3">
                        <i data-feather="monitor" className="h-5 w-5" />
                        <div className="ltr:ml-4 rtl:mr-4">
                            <p className="font-medium">Job Type:</p>
                            <span className="text-blue-600 font-medium text-sm">
                                {jobData?.job_title}
                            </span>
                        </div>
                    </li>
                    <li className="flex items-center mt-3">
                        <i data-feather="briefcase" className="h-5 w-5" />
                        <div className="ltr:ml-4 rtl:mr-4">
                            <p className="font-medium">Experience:</p>
                            <span className="text-blue-600 font-medium text-sm">
                                {jobData?.experience_required}
                            </span>
                        </div>
                    </li>
                    <li className="flex items-center mt-3">
                        <i data-feather="book" className="h-5 w-5" />
                        <div className="ltr:ml-4 rtl:mr-4">
                            <p className="font-medium">Opening:</p>
                            <span className="text-blue-600 font-medium text-sm">
                                {jobData?.available_positions}
                            </span>
                        </div>
                    </li>
                    <li className="flex items-center mt-3">
                        <i data-feather="dollar-sign" className="h-5 w-5" />
                        <div className="ltr:ml-4 rtl:mr-4">
                            <p className="font-medium">Salary:</p>
                            <span className="text-blue-600 font-medium text-sm">
                                {jobData?.base_salary}
                            </span>
                        </div>
                    </li>
                    <li className="flex items-center mt-3">
                        <i data-feather="clock" className="h-5 w-5" />
                        <div className="ltr:ml-4 rtl:mr-4">
                            <p className="font-medium">Date posted:</p>
                            <span className="text-blue-600 font-medium text-sm">
                                {formattedDate}
                            </span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default SideBar