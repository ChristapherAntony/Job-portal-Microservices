import React from 'react'
import Card from './Card'


function Jobs({ jobs }) {
    console.log(jobs,"from jobs card");
    return (
        <div className="lg:col-span-8 md:col-span-6">
            <div className="grid grid-cols-1 gap-[30px]">
                {jobs.map((data, index) => <Card data={data} index={index} />)}
            </div>
            {/*end grid job card*/}
            <div className="grid md:grid-cols-12 grid-cols-1 mt-8">
                <div className="md:col-span-12 text-center">
                    <nav aria-label="Page navigation example">
                        <ul className="inline-flex items-center -space-x-px">
                            <li>
                                <a
                                    href="job-list-four.html#"
                                    className="w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 bg-white  ltr:rounded-l-3xl rtl:rounded-r-3xl hover:text-white border border-gray-100  hover:border-blue-600  hover:bg-blue-600 "
                                >
                                    <i className="uil uil-angle-left text-[20px] rtl:rotate-180 rtl:-mt-1" />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="job-list-four.html#"
                                    className="w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white  border border-gray-100  hover:border-blue-600  hover:bg-blue-600 "
                                >
                                    1
                                </a>
                            </li>
                            <li>
                                <a
                                    href="job-list-four.html#"
                                    className="w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white  border border-gray-100  hover:border-blue-600  hover:bg-blue-600 "
                                >
                                    1
                                </a>
                            </li>
                            <li>
                                <a
                                    href="job-list-four.html#"
                                    className="w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white  border border-gray-100  hover:border-blue-600  hover:bg-blue-600 "
                                >
                                    1
                                </a>
                            </li>
                            <li>
                                <a
                                    href="job-list-four.html#"
                                    className="w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white  border border-gray-100  hover:border-blue-600  hover:bg-blue-600 "
                                >
                                    1
                                </a>
                            </li>

                            <li>
                                <a
                                    href="job-list-four.html#"
                                    className="w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 bg-white  ltr:rounded-r-3xl rtl:rounded-l-3xl hover:text-white border border-gray-100  hover:border-blue-600  hover:bg-blue-600 "
                                >
                                    <i className="uil uil-angle-right text-[20px] rtl:rotate-180 rtl:-mt-1" />
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                {/*end col*/}
            </div>
            {/*end grid Pagination*/}
        </div>
    )
}

export default Jobs