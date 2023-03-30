


import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CANDIDATE_PROFILE } from '../../../utils/Constants'
import './css/styles.css'


function CandidateDetails() {
    const { id } = useParams()
    const [candidate, setCandidate] = useState({})
    useEffect(() => {
        axios.get(CANDIDATE_PROFILE(id)).then((response) => {
            setCandidate(response.data)
        }).then((error) => {
            console.log(error);
        })
    }, [])
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
    console.log(candidate);
    const work_experience = candidate?.work_experience
    console.log(work_experience);
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
                                <div>
                                    <div className="flex justify-between mb-2">
                                        <span className="text-slate-400">WordPress</span>
                                        <span className="text-slate-400">84%</span>
                                    </div>
                                    <div className="w-full bg-gray-100  rounded-full h-[6px]">
                                        <div
                                            className="bg-blue-600 h-[6px] rounded-full"
                                            style={{ width: "84%" }}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between mb-2">
                                        <span className="text-slate-400">JavaScript</span>
                                        <span className="text-slate-400">79%</span>
                                    </div>
                                    <div className="w-full bg-gray-100  rounded-full h-[6px]">
                                        <div
                                            className="bg-blue-600 h-[6px] rounded-full"
                                            style={{ width: "79%" }}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between mb-2">
                                        <span className="text-slate-400">HTML</span>
                                        <span className="text-slate-400">95%</span>
                                    </div>
                                    <div className="w-full bg-gray-100  rounded-full h-[6px]">
                                        <div
                                            className="bg-blue-600 h-[6px] rounded-full"
                                            style={{ width: "95%" }}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between mb-2">
                                        <span className="text-slate-400">Figma</span>
                                        <span className="text-slate-400">85%</span>
                                    </div>
                                    <div className="w-full bg-gray-100  rounded-full h-[6px]">
                                        <div
                                            className="bg-blue-600 h-[6px] rounded-full"
                                            style={{ width: "85%" }}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between mb-2">
                                        <span className="text-slate-400">Photoshop</span>
                                        <span className="text-slate-400">70%</span>
                                    </div>
                                    <div className="w-full bg-gray-100  rounded-full h-[6px]">
                                        <div
                                            className="bg-blue-600 h-[6px] rounded-full"
                                            style={{ width: "70%" }}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between mb-2">
                                        <span className="text-slate-400">Illustration</span>
                                        <span className="text-slate-400">65%</span>
                                    </div>
                                    <div className="w-full bg-gray-100  rounded-full h-[6px]">
                                        <div
                                            className="bg-blue-600 h-[6px] rounded-full"
                                            style={{ width: "65%" }}
                                        />
                                    </div>
                                </div>
                            </div>
                            <h4 className="mt-6 text-xl font-semibold">Experience :</h4>
                            {candidate?.work_experience?.map((exp, index) => {
                                { console.log(exp, 'exparaay------------------') }
                                return (
                                    <div key={index} className="flex mt-6">
                                        <div className="ltr:ml-4 rtl:mr-4">
                                            <h5 className="text-lg font-medium mb-0">{exp.designation}</h5>
                                            <span className="text-slate-400 company-university">
                                                {exp.location}
                                            </span><br />
                                            {exp.current_status ? (
                                                <span>
                                                    <span>{exp.start_date}</span> to  <span>till now</span>
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

                        <div className="lg:col-span-4 md:col-span-5">
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