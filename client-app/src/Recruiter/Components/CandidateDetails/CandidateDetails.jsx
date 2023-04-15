


import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { APPLICATION_REJECT, APPLICATION_SKILLTEST, APPLICATION_STATUS, CANDIDATE_PROFILE, getApplicatons, skillTestList } from '../../../utils/Constants'
import './css/styles.css'


function CandidateDetails() {

    const { candidateId, applicationId } = useParams()
    const [candidate, setCandidate] = useState({})
    const [tests, setTests] = useState([])
    const [application, setApplication] = useState({})
    const [refresh, setRefresh] = useState(false)

    const getCandidateProfile = () => {
        axios.get(CANDIDATE_PROFILE(candidateId)).then((response) => {
            setCandidate(response.data)
            setRefresh(false)
            console.log(candidate);
        }).catch((error) => {
            console.log(error);
        })
    }
    const getSkillTest = () => {
        axios.get(skillTestList).then(response => {
            setTests(response.data.skillTests)
            console.log(tests);
        }).catch(error => {
            console.error(error);
        });
    }
    const getApplicaitonStatus = () => {
        axios.get(APPLICATION_STATUS(applicationId)).then((response) => {
            console.log(response.data.currentApplication, '@@@@@@@@@@@@@');
            setApplication(response.data.currentApplication)
        }).catch((error) => {
            console.log(error.response.data.errors[0].msg);
        })
    }



    useEffect(() => {
        console.log('api call for refersh useeffect');
        getCandidateProfile()
        getApplicaitonStatus()
        getSkillTest()
    }, [refresh])


    function downloadFile() {
        const url = candidate?.curriculum_vitae;
        const fileName = 'file.pdf';
        fetch(url)
            .then(response => response.blob())
            .then(blob => {
                const link = document.createElement('a');
                link.href = window.URL.createObjectURL(blob);
                link.download = fileName;
                link.click();
            });
    }

    const [first, setfirst] = useState(false)
    const [testId, setTestId] = useState('')
    const handleChange = (value) => {
        if (value !== 'Choose') {
            setfirst(true)
            setTestId(value)
        } else {
            setfirst(false)

        }
    }
    const handleGiveSkillTest = () => {
        axios.post(APPLICATION_SKILLTEST(applicationId, testId)).then((response) => {
            setRefresh(true)
            setfirst(false)
        }).catch((error) => {
            console.log(error);
        })
    }
    const handleReject = () => {
        axios.post(APPLICATION_REJECT(applicationId)).then((response) => {
            setRefresh(true)
        }).catch((error) => {
            console.log(error.response.data.errors[0].msg);
        })
    }

    return (
        <div>
            <section className="relative lg:mt-10 mt-[74px]">
                <div className="lg:mycontainer container-fluid">
                    <div className="relative shrink-0">
                        <img
                            src={'https://res.cloudinary.com/dprxebwil/image/upload/v1680191278/bg4_kaaj0b.jpg'}
                            className="h-64 w-full object-cover lg:rounded-xl shadow "
                            alt=""
                        />
                    </div>
                    <div className="md:flex ltr:ml-4 rtl:mr-4 -mt-12">
                        <div className="md:w-full">
                            <div className="relative flex items-end">
                                <img
                                    src={candidate?.profile_image}
                                    className="h-28 w-28 rounded-full shadow  ring-4 ring-slate-50"
                                    alt=""
                                />
                                <div className="ltr:ml-4 rtl:mr-4">
                                    <h5 className="text-lg font-semibold">{candidate?.user_name}</h5>
                                    <p className="text-slate-400">{candidate?.about}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*end */}
            </section>

            <section className="relative mt-12 md:pb-24 pb-16">
                <div className="mycontainer">
                    <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
                        <div className="lg:col-span-8 md:col-span-7">
                            <h5 className="text-xl font-semibold">{candidate?.user_name}</h5>
                            <p className="text-slate-400 mt-4">
                                {candidate?.bio}
                            </p>

                            <h4 className="mt-6 text-xl font-semibold">Skills :</h4>
                            <div className="grid lg:grid-cols-2 grid-cols-1 mt-6 gap-6">
                                {candidate.key_skills?.map((skill) => {
                                    return (
                                        <div className="flex justify-between mb-2">
                                            <span className="text-blue-600">{skill}</span>
                                        </div>
                                    )
                                })}
                            </div>

                            <div>
                                <h4 className="mt-6 text-xl font-semibold">Experience :</h4>
                                {candidate?.work_experience?.map((exp, index) => {
                                    return (
                                        <div key={index} className="flex mt-6">
                                            <div className="ltr:ml-4 rtl:mr-4">
                                                <h5 className="text-lg font-medium mb-0">{exp.designation}</h5>
                                                <span className="text-slate-400 company-university">
                                                    {exp.location}
                                                </span><br />
                                                {exp.current_status ? (
                                                    <span>
                                                        <span>{exp.start_date}</span> to  <span>Currentnly working here</span>
                                                    </span>
                                                ) : (
                                                    <div>
                                                        <span>{exp.start_date}</span>  to       <span>{exp.end_date}</span>
                                                    </div>

                                                )}

                                                <p className="text-slate-400 mt-2 mb-0">
                                                    {exp.job_description} .{" "}
                                                </p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>


                            <div>
                                <h4 className="mt-6 text-xl font-semibold">Educational Details:</h4>
                                <hr className="h-px my-4 bg-gray-200 border-0" />

                                {
                                    candidate?.education?.map((edu, index) => {
                                        return (
                                            <div key={index} className='grid grid-cols-12 my-5'>
                                                <div className=" col-span-1 flex justify-center ">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                                                    </svg>
                                                </div>

                                                <div className="details col-span-11  pro-text space-y-2">
                                                    <div class="relative">
                                                        <h1 className='font-bold'>{edu.qualification}</h1>

                                                    </div>
                                                    <span>{edu.specialization}</span>
                                                    <p>{edu.institute}</p>
                                                </div>
                                            </div>
                                        );
                                    })

                                }
                            </div>

                            <div>
                                <h4 className="mt-6 text-xl font-semibold">Courses & Certifications:</h4>
                                <hr className="h-px my-4 bg-gray-200 border-0" />

                                {candidate?.courseAnd_certification?.map((data, index) => {
                                    return (
                                        <div key={index} className='grid grid-cols-12 my-5'>
                                            <div className=" col-span-1 flex justify-center ">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                                                </svg>
                                            </div>

                                            <div className="details col-span-11  pro-text space-y-2">
                                                <div class="relative">
                                                    <h1 className='font-bold'>{data.certificate}</h1>

                                                </div>
                                                <p>{data.issued_by}</p>
                                            </div>
                                        </div>
                                    );
                                })
                                }
                            </div>
                        </div>

                        <div className="lg:col-span-4 md:col-span-5">
                            <div className="bg-slate-50  rounded-md shadow  p-6  top-20">
                                <h5 className="text-lg font-semibold">Action</h5>
                                {application.application_status === 'rejected' ? (
                                    <p>Application status: <span className='text-red-600 font-semibold'>{application.application_status}</span> </p>
                                ) : (
                                    <p>Application status: <span className=' font-semibold'>{application.application_status}</span> </p>

                                )}


                                <ol className="relative text-gray-500 border-l border-gray-200 py-3 ">

                                    {application.application_date &&
                                        <li className="mb-10 ml-6">
                                            <span className="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -left-4 ring-4 ring-white  ">
                                                <svg
                                                    aria-hidden="true"
                                                    className="w-5 h-5 text-green-500 "
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </span>
                                            <h3 className="font-medium leading-tight">Applied</h3>
                                            <p className="text-sm">{ new Date(application.application_date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</p>
                                        </li>
                                    }


                                    {application.skillTest_date ? (

                                        <li className="mb-10 ml-6">
                                            <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -left-4 ring-4 ring-white  ">
                                                <svg
                                                    aria-hidden="true" F
                                                    className="w-5 h-5 text-green-500 "
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </span>
                                            <h3 className="font-medium leading-tight">Skill test given</h3>
                                            <p className="text-sm">{ new Date(application.skillTest_date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</p>
                                        </li>


                                    ) : (
                                        <>
                                            {application.application_status === 'pending' ? (
                                                <div>
                                                    Give Skill Test
                                                    <select
                                                        id="countries"
                                                        onChange={(e) => handleChange(e.target.value)}
                                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                                                    >
                                                        <option selected="">Choose </option>
                                                        {tests?.map((data, index) => (
                                                            <option key={index} value={data._id}>{data.test_title}</option>
                                                        ))}
                                                    </select>


                                                </div>
                                            ) : (
                                                null
                                            )}
                                        </>
                                    )}
                                    {application.skillTest_submitted_date &&
                                        <li className="mb-10 ml-6">
                                            <span className="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -left-4 ring-4 ring-white  ">
                                                <svg
                                                    aria-hidden="true"
                                                    className="w-5 h-5 text-green-500 "
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </span>
                                            <h3 className="font-medium leading-tight">Test Submitted</h3>
                                            <p className="text-sm">{ new Date(application.skillTest_submitted_date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</p>
                                        </li>
                                    }
                                    < br />
                                    <div className='flex justify-between'>
                                        {application.application_status !== 'rejected' && application.application_status !== 'accepted' &&
                                            <button onClick={handleReject} type="button" class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-1 text-center mr-2 mb-2">Reject</button>

                                        }
                                        {first ? (
                                            <button onClick={handleGiveSkillTest} type="button" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-1 text-center mr-2 mb-2">Send </button>

                                        ) : (null)}
                                    </div>



                                </ol>


                            </div>
                            <div className="bg-slate-50  rounded-md shadow  p-6 sticky top-20">
                                <h5 className="text-lg font-semibold">Personal Detail:</h5>
                                <ul className="list-none mt-4">
                                    <li className="flex justify-between mt-3 items-center font-medium">
                                        <span>
                                            <i
                                                data-feather="mail"
                                                className="h-4 w-4 text-slate-400 ltr:mr-3 rtl:ml-3 inline"
                                            />
                                            <span className="text-slate-400 ltr:mr-3 rtl:ml-3">
                                                Email :
                                            </span>
                                        </span>
                                        <span>{candidate?.email}</span>
                                    </li>
                                    <li className="flex justify-between mt-3 items-center font-medium">
                                        <span>
                                            <i
                                                data-feather="gift"
                                                className="h-4 w-4 text-slate-400 ltr:mr-3 rtl:ml-3 inline"
                                            />
                                            <span className="text-slate-400 ltr:mr-3 rtl:ml-3">
                                                D.O.B. :
                                            </span>
                                        </span>
                                        <span>{candidate?.date_of_birth}</span>
                                    </li>
                                    <li className="flex justify-between mt-3 items-center font-medium">
                                        <span>
                                            <i
                                                data-feather="home"
                                                className="h-4 w-4 text-slate-400 ltr:mr-3 rtl:ml-3 inline"
                                            />
                                            <span className="text-slate-400 ltr:mr-3 rtl:ml-3">
                                                Address :
                                            </span>
                                        </span>

                                        <span>{candidate?.address?.street}</span>

                                    </li>
                                    <li className="flex justify-between mt-3 items-center font-medium">
                                        <span>
                                            <i
                                                data-feather="map-pin"
                                                className="h-4 w-4 text-slate-400 ltr:mr-3 rtl:ml-3 inline"
                                            />
                                            <span className="text-slate-400 ltr:mr-3 rtl:ml-3">City :</span>
                                        </span>
                                        <span>{candidate?.address?.city}</span>
                                    </li>
                                    <li className="flex justify-between mt-3 items-center font-medium">
                                        <span>
                                            <i
                                                data-feather="globe"
                                                className="h-4 w-4 text-slate-400 ltr:mr-3 rtl:ml-3 inline"
                                            />
                                            <span className="text-slate-400 ltr:mr-3 rtl:ml-3">
                                                Country :
                                            </span>
                                        </span>
                                        <span>{candidate?.address?.country}</span>
                                    </li>
                                    <li className="flex justify-between mt-3 items-center font-medium">
                                        <span>
                                            <i
                                                data-feather="server"
                                                className="h-4 w-4 text-slate-400 ltr:mr-3 rtl:ml-3 inline"
                                            />
                                            <span className="text-slate-400 ltr:mr-3 rtl:ml-3">
                                                Postal Code :
                                            </span>
                                        </span>
                                        <span>{candidate?.address?.pin_code}</span>
                                    </li>
                                    <li className="flex justify-between mt-3 items-center font-medium">
                                        <span>
                                            <i
                                                data-feather="phone"
                                                className="h-4 w-4 text-slate-400 ltr:mr-3 rtl:ml-3 inline"
                                            />
                                            <span className="text-slate-400 ltr:mr-3 rtl:ml-3">
                                                Mobile :
                                            </span>
                                        </span>
                                        <span>{candidate?.phone_number}</span>
                                    </li>

                                    <li className="mt-3 w-full bg-white p-3 rounded-md shadow ">
                                        <div className="flex items-center mb-3">
                                            <i
                                                data-feather="file-text"
                                                className="h-8 w-8 text-slate-400"
                                            />
                                            <span className="font-medium ltr:ml-2 rtl:mr-2">
                                                Curriculum Vitae
                                            </span>
                                        </div>
                                        <a onClick={downloadFile}

                                            className="btn bg-blue-600 cursor-pointer hover:bg-blue-700 border-blue-600  text-white rounded-md w-full"
                                            download=""
                                        >
                                            <i className="uil uil-file-download-alt" /> Download CV
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>

                </div>
            </section >

        </div >





    )
}

export default CandidateDetails