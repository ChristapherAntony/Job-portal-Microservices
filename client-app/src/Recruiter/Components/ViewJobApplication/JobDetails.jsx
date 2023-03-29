import React from 'react'
import './css/styles.css'


function JobDetails() {
    return (
        <div>
            <section className="bg-slate-50  md:py-10 py-8">
                <div className="mycontainer mt-10">
                    <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
                        <div className="lg:col-span-8 md:col-span-6">
                            <div className="md:flex items-center p-6 shadow  rounded-md bg-white ">
                                <img
                                    src="assets/images/company/lenovo-logo.png"
                                    className="rounded-full h-28 w-28 p-4 bg-white  shadow "
                                    alt=""
                                />
                                <div className="md:ltr:ml-4 md:rtl:mr-4 md:mt-0 mt-6">
                                    <h5 className="text-xl font-semibold">Back-End Developer</h5>
                                    <div className="mt-2">
                                        <span className="text-slate-400 font-medium ltr:mr-2 rtl:ml-2 inline-block">
                                            <i className="uil uil-building text-[18px] text-emerald-600 ltr:mr-1 rtl:ml-1" />{" "}
                                            Lenovo pvt. ltd.
                                        </span>
                                        <span className="text-slate-400 font-medium ltr:mr-2 rtl:ml-2 inline-block">
                                            <i className="uil uil-map-marker text-[18px] text-emerald-600 ltr:mr-1 rtl:ml-1" />{" "}
                                            Beijing, China
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <h5 className="text-lg font-semibold mt-6">Job Description:</h5>
                            <p className="text-slate-400 mt-4">
                                One disadvantage of Lorum Ipsum is that in Latin certain letters
                                appear more frequently than others - which creates a distinct visual
                                impression. Moreover, in Latin only words at the beginning of
                                sentences are capitalized.
                            </p>
                            <p className="text-slate-400 mt-4">
                                This means that Lorem Ipsum cannot accurately represent, for example,
                                German, in which all nouns are capitalized. Thus, Lorem Ipsum has only
                                limited suitability as a visual filler for German texts. If the fill
                                text is intended to illustrate the characteristics of different
                                typefaces.
                            </p>
                            <p className="text-slate-400 mt-4">
                                It sometimes makes sense to select texts containing the various
                                letters and symbols specific to the output language.
                            </p>
                           
                            <h5 className="text-lg font-semibold mt-6">
                                Required Experience, Skills and Qualifications:{" "}
                            </h5>
                            <p className="text-slate-400 mt-4">
                                It sometimes makes sense to select texts containing the various
                                letters and symbols specific to the output language.
                            </p>
                            <ul className="list-none">
                                <li className="text-slate-400 mt-2">
                                    <i className="uil uil-arrow-right text-emerald-600 ltr:mr-1 rtl:ml-1" />
                                    Proven experience as a .NET Developer or Application Developer
                                </li>
                                <li className="text-slate-400 mt-2">
                                    <i className="uil uil-arrow-right text-emerald-600 ltr:mr-1 rtl:ml-1" />
                                    good understanding of SQL and Relational Databases, specifically
                                    Microsoft SQL Server.
                                </li>
                                <li className="text-slate-400 mt-2">
                                    <i className="uil uil-arrow-right text-emerald-600 ltr:mr-1 rtl:ml-1" />
                                    Experience designing, developing and creating RESTful web services
                                    and APIs
                                </li>
                                <li className="text-slate-400 mt-2">
                                    <i className="uil uil-arrow-right text-emerald-600 ltr:mr-1 rtl:ml-1" />
                                    Basic know how of Agile process and practices
                                </li>
                                <li className="text-slate-400 mt-2">
                                    <i className="uil uil-arrow-right text-emerald-600 ltr:mr-1 rtl:ml-1" />
                                    Good understanding of object-oriented programming.
                                </li>
                                <li className="text-slate-400 mt-2">
                                    <i className="uil uil-arrow-right text-emerald-600 ltr:mr-1 rtl:ml-1" />
                                    Good understanding of concurrent programming.
                                </li>
                                <li className="text-slate-400 mt-2">
                                    <i className="uil uil-arrow-right text-emerald-600 ltr:mr-1 rtl:ml-1" />
                                    Sound knowledge of application architecture and design.
                                </li>
                                <li className="text-slate-400 mt-2">
                                    <i className="uil uil-arrow-right text-emerald-600 ltr:mr-1 rtl:ml-1" />
                                    Excellent problem solving and analytical skills
                                </li>
                            </ul>
                            <div className="mt-5">
                                <a
                                    href="job-apply.html"
                                    className="btn rounded-md bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white ltr:md:ml-2 rtl:md:mr-2 w-full md:w-auto"
                                >
                                    Apply Now
                                </a>
                            </div>
                        </div>
                        {/*end col*/}
                        <div className="lg:col-span-4 md:col-span-6">
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
                                                <span className="text-emerald-600 font-medium text-sm">
                                                    Full Time
                                                </span>
                                            </div>
                                        </li>
                                        <li className="flex items-center mt-3">
                                            <i data-feather="map-pin" className="h-5 w-5" />
                                            <div className="ltr:ml-4 rtl:mr-4">
                                                <p className="font-medium">Location:</p>
                                                <span className="text-emerald-600 font-medium text-sm">
                                                    Beijing, China
                                                </span>
                                            </div>
                                        </li>
                                        <li className="flex items-center mt-3">
                                            <i data-feather="monitor" className="h-5 w-5" />
                                            <div className="ltr:ml-4 rtl:mr-4">
                                                <p className="font-medium">Job Type:</p>
                                                <span className="text-emerald-600 font-medium text-sm">
                                                    Back-end Developer
                                                </span>
                                            </div>
                                        </li>
                                        <li className="flex items-center mt-3">
                                            <i data-feather="briefcase" className="h-5 w-5" />
                                            <div className="ltr:ml-4 rtl:mr-4">
                                                <p className="font-medium">Experience:</p>
                                                <span className="text-emerald-600 font-medium text-sm">
                                                    2+ years
                                                </span>
                                            </div>
                                        </li>
                                        <li className="flex items-center mt-3">
                                            <i data-feather="book" className="h-5 w-5" />
                                            <div className="ltr:ml-4 rtl:mr-4">
                                                <p className="font-medium">Qualifications:</p>
                                                <span className="text-emerald-600 font-medium text-sm">
                                                    MCA
                                                </span>
                                            </div>
                                        </li>
                                        <li className="flex items-center mt-3">
                                            <i data-feather="dollar-sign" className="h-5 w-5" />
                                            <div className="ltr:ml-4 rtl:mr-4">
                                                <p className="font-medium">Salary:</p>
                                                <span className="text-emerald-600 font-medium text-sm">
                                                    $4000 - $4500
                                                </span>
                                            </div>
                                        </li>
                                        <li className="flex items-center mt-3">
                                            <i data-feather="clock" className="h-5 w-5" />
                                            <div className="ltr:ml-4 rtl:mr-4">
                                                <p className="font-medium">Date posted:</p>
                                                <span className="text-emerald-600 font-medium text-sm">
                                                    28th Feb, 2023
                                                </span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/*end col*/}
                    </div>
                    {/*end grid*/}
                </div>
            </section>

        </div>
    )
}

export default JobDetails