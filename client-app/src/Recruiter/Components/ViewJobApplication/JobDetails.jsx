import React from 'react'
import './css/styles.css'
import SideBar from './Contents/SideBar';
import SkillsAndQulifications from './Contents/SkillsAndQulifications';
import JobEditModal from '../modals/JobEditModal';
import { useSelector } from 'react-redux';

import {useState} from 'react' 

function JobDetails({ jobData, recruiter,  onUpdate }) {
    const [showModal, setShowModal] = useState(false);
    const handleClick = () => {
        setShowModal(true);
    };
    const handleClose = () => {
        setShowModal(false);
    };
    return (
        <div>
            <section className="bg-slate-50  md:py-10 py-8">
                <div className="mycontainer mt-10">
                    <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
                        <div className="lg:col-span-8 md:col-span-6">
                            <div>
                                <div className="md:flex items-center p-6 shadow  rounded-md bg-white ">
                                    <img
                                        src={recruiter?.company_logo}
                                        className="rounded-full h-28 w-28 p-4 bg-white  shadow "
                                        alt=""
                                    />
                                    <div className="md:ltr:ml-4 md:rtl:mr-4 md:mt-0 mt-6">
                                        <h5 className="text-xl font-semibold">{jobData?.job_title}</h5>
                                        <div className="mt-2 space-x-3">
                                            <span className="text-slate-400 font-medium ltr:mr-2 rtl:ml-2 inline-block">
                                                <i className="uil uil-building text-[18px] text-blue-600 ltr:mr-1 rtl:ml-1" />{" "}
                                                {recruiter?.company_name}
                                            </span>
                                            <span className="text-slate-400 font-medium ltr:mr-2 rtl:ml-2 inline-block">
                                                <i className="uil uil-map-marker text-[18px] text-blue-600 ltr:mr-1 rtl:ml-1" />{" "}
                                                {recruiter?.company_state}, {recruiter?.company_country}
                                            </span>
                                        </div>
                                    </div>

                                </div>

                                <button onClick={handleClick} type="button" class="float-right text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-1 text-center mr-2 mb-2">Edit</button>
                                {showModal && <JobEditModal onUpdate={onUpdate} jobData={jobData} onClose={handleClose} />}
                                <div>
                                    <h5 className="text-lg font-semibold mt-6">Job Description:</h5>
                                    <p className="text-slate-400 mt-4">
                                        {jobData?.job_description}
                                    </p>

                                </div>
                            </div>



                            <SkillsAndQulifications skills={jobData?.skills_required} qualifications={jobData?.education_required} />



                        </div>

                        <div className="lg:col-span-4 md:col-span-6">
                            <SideBar jobData={jobData} />
                        </div>

                    </div>
                    {/*end grid*/}
                </div>
            </section>

        </div>
    )
}

export default JobDetails