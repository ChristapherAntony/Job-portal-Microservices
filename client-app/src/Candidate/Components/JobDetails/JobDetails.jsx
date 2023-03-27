import React from 'react'
import './css/styles.css'
function JobDetails() {
    return (
        <div className='outer'>
            <section className="bg-slate-50  md:py-24 py-16">
                <div className="mycontainer mt-10">
                    <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
                        <div className="lg:col-span-4 md:col-span-6">
                            <div className="p-6 shadow  rounded-md bg-white  sticky top-20">
                                <img
                                    src="assets/images/company/lenovo-logo.png"
                                    className="rounded-full h-28 w-28 p-4 bg-white  shadow "
                                    alt=""
                                />
                                <div className="md:ltr:ml-4 md:rtl:mr-4 mt-4">
                                    <h5 className="text-xl font-semibold">Back-End Developer</h5>
                                    <div className="mt-1">
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
                        </div>
                        {/*end col*/}
                        <div className="lg:col-span-8 md:col-span-6">
                            <h5 className="text-lg font-semibold">Job Information:</h5>
                            <ul className="list-none mt-5">
                                <li className="inline-flex items-center py-2 px-4 bg-white ltr:mr-2 rtl:ml-2 my-1 shadow  rounded-md">
                                    <i data-feather="user-check" className="h-5 w-5" />
                                    <div className="ltr:ml-4 rtl:mr-4">
                                        <p className="font-medium">Employee Type:</p>
                                        <span className="text-emerald-600 font-medium text-sm">
                                            Full Time
                                        </span>
                                    </div>
                                </li>
                                <li className="inline-flex items-center py-2 px-4 bg-white ltr:mr-2 rtl:ml-2 my-1 shadow  rounded-md">
                                    <i data-feather="map-pin" className="h-5 w-5" />
                                    <div className="ltr:ml-4 rtl:mr-4">
                                        <p className="font-medium">Location:</p>
                                        <span className="text-emerald-600 font-medium text-sm">
                                            Beijing, China
                                        </span>
                                    </div>
                                </li>
                                <li className="inline-flex items-center py-2 px-4 bg-white ltr:mr-2 rtl:ml-2 my-1 shadow  rounded-md">
                                    <i data-feather="monitor" className="h-5 w-5" />
                                    <div className="ltr:ml-4 rtl:mr-4">
                                        <p className="font-medium">Job Type:</p>
                                        <span className="text-emerald-600 font-medium text-sm">
                                            Back-end Developer
                                        </span>
                                    </div>
                                </li>
                                <li className="inline-flex items-center py-2 px-4 bg-white ltr:mr-2 rtl:ml-2 my-1 shadow  rounded-md">
                                    <i data-feather="briefcase" className="h-5 w-5" />
                                    <div className="ltr:ml-4 rtl:mr-4">
                                        <p className="font-medium">Experience:</p>
                                        <span className="text-emerald-600 font-medium text-sm">
                                            2+ years
                                        </span>
                                    </div>
                                </li>
                                <li className="inline-flex items-center py-2 px-4 bg-white ltr:mr-2 rtl:ml-2 my-1 shadow  rounded-md">
                                    <i data-feather="book" className="h-5 w-5" />
                                    <div className="ltr:ml-4 rtl:mr-4">
                                        <p className="font-medium">Qualifications:</p>
                                        <span className="text-emerald-600 font-medium text-sm">MCA</span>
                                    </div>
                                </li>
                                <li className="inline-flex items-center py-2 px-4 bg-white ltr:mr-2 rtl:ml-2 my-1 shadow  rounded-md">
                                    <i data-feather="dollar-sign" className="h-5 w-5" />
                                    <div className="ltr:ml-4 rtl:mr-4">
                                        <p className="font-medium">Salary:</p>
                                        <span className="text-emerald-600 font-medium text-sm">
                                            $4000 - $4500
                                        </span>
                                    </div>
                                </li>
                                <li className="inline-flex items-center py-2 px-4 bg-white ltr:mr-2 rtl:ml-2 my-1 shadow  rounded-md">
                                    <i data-feather="clock" className="h-5 w-5" />
                                    <div className="ltr:ml-4 rtl:mr-4">
                                        <p className="font-medium">Date posted:</p>
                                        <span className="text-emerald-600 font-medium text-sm">
                                            28th Feb, 2023
                                        </span>
                                    </div>
                                </li>
                            </ul>
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
                                Responsibilities and Duties:{" "}
                            </h5>
                            <p className="text-slate-400 mt-4">
                                It sometimes makes sense to select texts containing the various
                                letters and symbols specific to the output language.
                            </p>
                            <ul className="list-none">
                                <li className="text-slate-400 mt-2">
                                    <i className="uil uil-arrow-right text-emerald-600 ltr:mr-1 rtl:ml-1" />
                                    Participate in requirements analysis
                                </li>
                                <li className="text-slate-400 mt-2">
                                    <i className="uil uil-arrow-right text-emerald-600 ltr:mr-1 rtl:ml-1" />
                                    Write clean, scalable code using C# and .NET frameworks
                                </li>
                                <li className="text-slate-400 mt-2">
                                    <i className="uil uil-arrow-right text-emerald-600 ltr:mr-1 rtl:ml-1" />
                                    Test and deploy applications and systems
                                </li>
                                <li className="text-slate-400 mt-2">
                                    <i className="uil uil-arrow-right text-emerald-600 ltr:mr-1 rtl:ml-1" />
                                    Revise, update, refactor and debug code
                                </li>
                                <li className="text-slate-400 mt-2">
                                    <i className="uil uil-arrow-right text-emerald-600 ltr:mr-1 rtl:ml-1" />
                                    Improve existing software
                                </li>
                                <li className="text-slate-400 mt-2">
                                    <i className="uil uil-arrow-right text-emerald-600 ltr:mr-1 rtl:ml-1" />
                                    Develop documentation throughout the software development life cycle
                                    (SDLC)
                                </li>
                                <li className="text-slate-400 mt-2">
                                    <i className="uil uil-arrow-right text-emerald-600 ltr:mr-1 rtl:ml-1" />
                                    Serve as an expert on applications and provide technical support
                                </li>
                            </ul>
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
                    </div>
                    {/*end grid*/}
                </div>
                {/*end container*/}
                <div className="container lg:mt-24 mt-16">
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h3 className="mb-4 md:text-[26px] md:leading-normal text-2xl leading-normal font-semibold">
                            Related Vacancies
                        </h3>
                        <p className="text-slate-400  max-w-xl mx-auto">
                            Search all the open positions on the web. Get your own personalized
                            salary estimate. Read reviews on over 30000+ companies worldwide.
                        </p>
                    </div>
                    {/*end grid*/}
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 mt-8 gap-[30px]">
                        <div className="group shadow  p-6 rounded-md bg-white ">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <div className="w-14 h-14 flex items-center justify-center bg-white  shadow  rounded-md">
                                        <img
                                            src="assets/images/company/facebook-logo.png"
                                            className="h-8 w-8"
                                            alt=""
                                        />
                                    </div>
                                    <div className="ltr:ml-3 rtl:mr-3">
                                        <a
                                            href="employer-detail.html"
                                            className="block text-[16px] font-semibold hover:text-emerald-600 transition-all duration-500"
                                        >
                                            Facebook
                                        </a>
                                        <span className="block text-sm text-slate-400">2 days ago</span>
                                    </div>
                                </div>
                                <span className="bg-emerald-600/10 group-hover:bg-emerald-600 inline-block text-emerald-600 group-hover:text-white text-xs px-2.5 py-0.5 font-semibold rounded-full transition-all duration-500">
                                    Full Time
                                </span>
                            </div>
                            <div className="mt-6">
                                <a
                                    href="job-detail-one.html"
                                    className="text-lg hover:text-emerald-600 font-semibold transition-all duration-500"
                                >
                                    Web Designer / Developer
                                </a>
                                <h6 className="text-base font-medium">
                                    <i className="uil uil-map-marker" /> Australia
                                </h6>
                            </div>
                            <div className="mt-6">
                                <div className="w-full bg-gray-100  rounded-full h-[6px]">
                                    <div
                                        className="bg-emerald-600 h-[6px] rounded-full"
                                        style={{ width: "55%" }}
                                    />
                                </div>
                                <div className="mt-2">
                                    <span className="text-slate-400 text-sm">
                                        <span className="text-slate-900  font-semibold inline-block">
                                            21 applied
                                        </span>{" "}
                                        of 40 vacancy
                                    </span>
                                </div>
                            </div>
                        </div>
                        {/*end content*/}
                        <div className="group shadow  p-6 rounded-md bg-white ">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <div className="w-14 h-14 flex items-center justify-center bg-white  shadow  rounded-md">
                                        <img
                                            src="assets/images/company/google-logo.png"
                                            className="h-8 w-8"
                                            alt=""
                                        />
                                    </div>
                                    <div className="ltr:ml-3 rtl:mr-3">
                                        <a
                                            href="employer-detail.html"
                                            className="block text-[16px] font-semibold hover:text-emerald-600 transition-all duration-500"
                                        >
                                            Google
                                        </a>
                                        <span className="block text-sm text-slate-400">2 days ago</span>
                                    </div>
                                </div>
                                <span className="bg-emerald-600/10 group-hover:bg-emerald-600 inline-block text-emerald-600 group-hover:text-white text-xs px-2.5 py-0.5 font-semibold rounded-full transition-all duration-500">
                                    Part Time
                                </span>
                            </div>
                            <div className="mt-6">
                                <a
                                    href="job-detail-one.html"
                                    className="text-lg hover:text-emerald-600 font-semibold transition-all duration-500"
                                >
                                    Marketing Director
                                </a>
                                <h6 className="text-base font-medium">
                                    <i className="uil uil-map-marker" /> USA
                                </h6>
                            </div>
                            <div className="mt-6">
                                <div className="w-full bg-gray-100  rounded-full h-[6px]">
                                    <div
                                        className="bg-emerald-600 h-[6px] rounded-full"
                                        style={{ width: "55%" }}
                                    />
                                </div>
                                <div className="mt-2">
                                    <span className="text-slate-400 text-sm">
                                        <span className="text-slate-900  font-semibold inline-block">
                                            21 applied
                                        </span>{" "}
                                        of 40 vacancy
                                    </span>
                                </div>
                            </div>
                        </div>
                        {/*end content*/}
                        <div className="group shadow  p-6 rounded-md bg-white ">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <div className="w-14 h-14 flex items-center justify-center bg-white  shadow  rounded-md">
                                        <img
                                            src="assets/images/company/android.png"
                                            className="h-8 w-8"
                                            alt=""
                                        />
                                    </div>
                                    <div className="ltr:ml-3 rtl:mr-3">
                                        <a
                                            href="employer-detail.html"
                                            className="block text-[16px] font-semibold hover:text-emerald-600 transition-all duration-500"
                                        >
                                            Android
                                        </a>
                                        <span className="block text-sm text-slate-400">2 days ago</span>
                                    </div>
                                </div>
                                <span className="bg-emerald-600/10 group-hover:bg-emerald-600 inline-block text-emerald-600 group-hover:text-white text-xs px-2.5 py-0.5 font-semibold rounded-full transition-all duration-500">
                                    Remote
                                </span>
                            </div>
                            <div className="mt-6">
                                <a
                                    href="job-detail-one.html"
                                    className="text-lg hover:text-emerald-600 font-semibold transition-all duration-500"
                                >
                                    Application Developer
                                </a>
                                <h6 className="text-base font-medium">
                                    <i className="uil uil-map-marker" /> China
                                </h6>
                            </div>
                            <div className="mt-6">
                                <div className="w-full bg-gray-100  rounded-full h-[6px]">
                                    <div
                                        className="bg-emerald-600 h-[6px] rounded-full"
                                        style={{ width: "55%" }}
                                    />
                                </div>
                                <div className="mt-2">
                                    <span className="text-slate-400 text-sm">
                                        <span className="text-slate-900  font-semibold inline-block">
                                            21 applied
                                        </span>{" "}
                                        of 40 vacancy
                                    </span>
                                </div>
                            </div>
                        </div>
                        {/*end content*/}
                    </div>
                    {/*end grid*/}
                </div>
                {/*end container*/}
                <div className="container-fluid md:mt-24 mt-16">
                    <div className="container">
                        <div className="grid grid-cols-1">
                            <div className="relative overflow-hidden lg:px-8 px-6 py-10 rounded-xl shadow-lg ">
                                <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                                    <div className="lg:col-span-8 md:col-span-7">
                                        <div className="ltr:md:text-left rtl:md:text-right text-center relative z-1">
                                            <h3 className="text-2xl font-semibold text-black  mb-4">
                                                Explore a job now!
                                            </h3>
                                            <p className="text-slate-400 max-w-xl">
                                                Search all the open positions on the web. Get your own
                                                personalized salary estimate. Read reviews on over 30000+
                                                companies worldwide.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="lg:col-span-4 md:col-span-5">
                                        <div className="ltr:text-right rtl:text-left relative z-1">
                                            <a
                                                href="employer-detail.html"
                                                className="btn bg-emerald-600 hover:bg-emerald-700 border-emerald-600  text-white rounded-md"
                                            >
                                                Apply Now
                                            </a>
                                            <a
                                                href="aboutus.html"
                                                className="btn bg-emerald-600/5 hover:bg-emerald-600 border-emerald-600/10 hover:border-emerald-600 text-emerald-600 hover:text-white rounded-md ltr:ml-2 rtl:mr-2"
                                            >
                                                Learn More
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute -top-5 ltr:-left-5 rtl:-right-5">
                                    <div className="uil uil-envelope lg:text-[150px] text-7xl text-black/5 /5 ltr:-rotate-45 rtl:rotate-45" />
                                </div>
                                <div className="absolute -bottom-5 ltr:-right-5 rtl:-left-5">
                                    <div className="uil uil-pen lg:text-[150px] text-7xl text-black/5 /5 rtl:-rotate-90" />
                                </div>
                            </div>
                        </div>
                        {/*end grid*/}
                    </div>
                    {/*end container*/}
                </div>
                {/*end container*/}
            </section>
        </div>


    )
}

export default JobDetails