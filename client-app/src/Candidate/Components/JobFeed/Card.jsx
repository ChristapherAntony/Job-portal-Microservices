import React from 'react'

import moment from 'moment'



function Card({ data }) {



    const jobPostedDate = moment(data.created_at);
    const currentDate = moment();

    const daysAgo = currentDate.diff(jobPostedDate, 'days');
    const formattedDate = jobPostedDate.fromNow(); // E.g. "2 days ago"

    return (
        <div className="group relative overflow-hidden bg-white shadow hover:shadow-md  hover:-mt-2 rounded-md transition-all duration-500 h-fit">
            <div className="p-6">
                <div className="flex items-center">
                    <div className="w-14 h-14 min-w-[56px] flex items-center justify-center bg-white  rounded-md">
                        <img
                            src={data.recruiter.company_logo}
                            className="h-8 w-8"
                            alt=""
                        />
                    </div>
                    <div className="ltr:ml-3 rtl:mr-3">
                        <a
                            href="job-detail-three.html"
                            className="inline-block text-[16px] font-semibold hover:text-emerald-600 transition-all duration-500 ltr:mr-1 rtl:ml-1"
                        >
                            {data.job_title}
                        </a>
                        <span className="inline-block text-sm px-2 text-slate-400">
                            {formattedDate}
                        </span>
                        <div className='space-x-3'>
                            <span className="bg-emerald-600/10 inline-block text-emerald-600 text-xs px-2.5 py-0.5 font-semibold rounded-full ltr:mr-1 rtl:ml-1">
                                {data.employment_type}
                            </span>
                            <span className="text-sm font-medium inline-block ltr:mr-1 rtl:ml-1">
                                JobOpening:{" "}
                                <span className="text-slate-400">{data.available_positions}</span>
                            </span>
                            <span className="text-sm font-medium inline-block ltr:mr-1 rtl:ml-1">
                                Base salary:{" "}
                                <span className="text-slate-400">₹ {data.base_salary}</span>
                            </span>
                        </div>
                    </div>
                </div>
                <p className="text-slate-400 py-3">
                    {data.job_description}
                </p>
                <div>
                    {data.skills_required.map((data, index) => {
                        return (
                            <span key={index} className="bg-slate-100 inline-block text-slate-900 text-xs px-2.5 py-0.5 font-semibold rounded-full ltr:mr-1 rtl:ml-1">
                                {data}
                            </span>
                        )
                    })}


                </div>
            </div>
            <div className="px-6 py-2 bg-slate-50  flex justify-between items-center">
                <div className='space-x-2'>
                    <span className="inline-block ltr:mr-1 rtl:ml-1 font-semibold">
                        <i className="mdi mdi-check-decagram mdi-18px text-blue-500 ltr:mr-1 rtl:ml-1" />
                        {data.recruiter.company_name}
                    </span>
                    {/* <ul className="list-none inline-block ltr:mr-1 rtl:ml-1 text-yellow-400">
                        <li className="inline">
                            <i className="mdi mdi-star text-lg" />
                        </li>
                        <li className="inline">
                            <i className="mdi mdi-star text-lg" />
                        </li>
                        <li className="inline">
                            <i className="mdi mdi-star text-lg" />
                        </li>
                        <li className="inline">
                            <i className="mdi mdi-star text-lg" />
                        </li>
                        <li className="inline">
                            <i className="mdi mdi-star text-lg" />
                        </li>
                    </ul> */}
                    <span className="inline-block ltr:mr-1 rtl:ml-1 text-slate-400">
                        <i className="uil uil-map-marker text-[18px] text-slate-900  ltr:mr-1 rtl:ml-1" />
                        {data.location}
                    </span>
                </div>
                <a
                    href="job-apply.html"
                    className="btn btn-sm rounded-md bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white ltr:md:ml-2 rtl:md:mr-2 w-full md:w-auto"
                >
                    Apply Now
                </a>
            </div>
            <a
                href="job-list-four.html"
                className="btn btn-icon rounded-full bg-emerald-600/5 hover:bg-emerald-600 border-emerald-600/10 hover:border-emerald-600 text-emerald-600 hover:text-white absolute top-0 right-0 m-3"
            >  bookmark
                <i data-feather="bookmark" className="h-4 w-4" />
            </a>
        </div>
    )
}

export default Card