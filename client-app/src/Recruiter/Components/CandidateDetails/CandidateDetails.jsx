


import React from 'react'

function CandidateDetails() {
    return (
        <>
            <div className="container">
                <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
                    <div className="lg:col-span-8 md:col-span-7">
                        <h5 className="text-xl font-semibold">Calvin Carlo</h5>
                        <p className="text-slate-400 mt-4">
                            Obviously I'M Web Developer. Web Developer with over 3 years of
                            experience. Experienced with all stages of the development cycle for
                            dynamic web projects. The as opposed to using 'Content here, content
                            here', making it look like readable English.
                        </p>
                        <p className="text-slate-400 mt-4">
                            Data Structures and Algorithms are the heart of programming. Initially
                            most of the developers do not realize its importance but when you will
                            start your career in software development, you will find your code is
                            either taking too much time or taking too much space.
                        </p>
                        <h4 className="mt-6 text-xl font-semibold">Skills :</h4>
                        <div className="grid lg:grid-cols-2 grid-cols-1 mt-6 gap-6">
                            <div>
                                <div className="flex justify-between mb-2">
                                    <span className="text-slate-400">WordPress</span>
                                    <span className="text-slate-400">84%</span>
                                </div>
                                <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-[6px]">
                                    <div
                                        className="bg-emerald-600 h-[6px] rounded-full"
                                        style={{ width: "84%" }}
                                    />
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between mb-2">
                                    <span className="text-slate-400">JavaScript</span>
                                    <span className="text-slate-400">79%</span>
                                </div>
                                <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-[6px]">
                                    <div
                                        className="bg-emerald-600 h-[6px] rounded-full"
                                        style={{ width: "79%" }}
                                    />
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between mb-2">
                                    <span className="text-slate-400">HTML</span>
                                    <span className="text-slate-400">95%</span>
                                </div>
                                <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-[6px]">
                                    <div
                                        className="bg-emerald-600 h-[6px] rounded-full"
                                        style={{ width: "95%" }}
                                    />
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between mb-2">
                                    <span className="text-slate-400">Figma</span>
                                    <span className="text-slate-400">85%</span>
                                </div>
                                <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-[6px]">
                                    <div
                                        className="bg-emerald-600 h-[6px] rounded-full"
                                        style={{ width: "85%" }}
                                    />
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between mb-2">
                                    <span className="text-slate-400">Photoshop</span>
                                    <span className="text-slate-400">70%</span>
                                </div>
                                <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-[6px]">
                                    <div
                                        className="bg-emerald-600 h-[6px] rounded-full"
                                        style={{ width: "70%" }}
                                    />
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between mb-2">
                                    <span className="text-slate-400">Illustration</span>
                                    <span className="text-slate-400">65%</span>
                                </div>
                                <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-[6px]">
                                    <div
                                        className="bg-emerald-600 h-[6px] rounded-full"
                                        style={{ width: "65%" }}
                                    />
                                </div>
                            </div>
                        </div>
                        <h4 className="mt-6 text-xl font-semibold">Experience :</h4>
                        <div className="flex mt-6">
                            <div className="text-slate-400 font-semibold min-w-[80px] text-center">
                                <img
                                    src="assets/images/company/shree-logo.png"
                                    className="h-16 w-16 mx-auto mb-2 block"
                                    alt=""
                                />{" "}
                                2019-22
                            </div>
                            <div className="ltr:ml-4 rtl:mr-4">
                                <h5 className="text-lg font-medium mb-0">Full Stack Developer</h5>
                                <span className="text-slate-400 company-university">
                                    Shreethemes - India
                                </span>
                                <p className="text-slate-400 mt-2 mb-0">
                                    It seems that only fragments of the original text remain in the
                                    Lorem Ipsum texts used today. One may speculate that over the
                                    course of time certain letters were added or deleted at various
                                    positions within the text.{" "}
                                </p>
                            </div>
                        </div>
                        <div className="flex mt-6">
                            <div className="text-slate-400 font-semibold min-w-[80px] text-center">
                                <img
                                    src="assets/images/company/circle-logo.png"
                                    className="h-16 w-16 mx-auto mb-2 block"
                                    alt=""
                                />{" "}
                                2017-19
                            </div>
                            <div className="ltr:ml-4 rtl:mr-4">
                                <h5 className="text-lg font-medium mb-0">Back-end Developer</h5>
                                <span className="text-slate-400 company-university">
                                    CircleCI - U.S.A.
                                </span>
                                <p className="text-slate-400 mt-2 mb-0">
                                    It seems that only fragments of the original text remain in the
                                    Lorem Ipsum texts used today. One may speculate that over the
                                    course of time certain letters were added or deleted at various
                                    positions within the text.{" "}
                                </p>
                            </div>
                        </div>
                    </div>
                    {/*end col*/}
                    <div className="lg:col-span-4 md:col-span-5">
                        <div className="bg-slate-50 dark:bg-slate-800 rounded-md shadow dark:shadow-gray-700 p-6 sticky top-20">
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
                                    <span>thomas@mail.com</span>
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
                                    <span>31st Dec, 1996</span>
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
                                    <span>15 Razy street</span>
                                </li>
                                <li className="flex justify-between mt-3 items-center font-medium">
                                    <span>
                                        <i
                                            data-feather="map-pin"
                                            className="h-4 w-4 text-slate-400 ltr:mr-3 rtl:ml-3 inline"
                                        />
                                        <span className="text-slate-400 ltr:mr-3 rtl:ml-3">City :</span>
                                    </span>
                                    <span>London</span>
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
                                    <span>UK</span>
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
                                    <span>521452</span>
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
                                    <span>(+125) 1542-8452</span>
                                </li>
                                <li className="flex justify-between mt-3">
                                    <span className="text-slate-400 font-medium">Social:</span>
                                    <ul className="list-none ltr:text-right rtl:text-left">
                                        <li className="inline">
                                            <a
                                                href="https://dribbble.com/shreethemes"
                                                target="_blank"
                                                className="btn btn-icon btn-sm border-2 border-gray-200 dark:border-gray-700 rounded-md hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600 hover:text-white dark:text-white text-slate-400"
                                            >
                                                <i
                                                    className="uil uil-dribbble align-middle"
                                                    title="dribbble"
                                                />
                                            </a>
                                        </li>
                                        <li className="inline">
                                            <a
                                                href="https://www.behance.net/shreethemes"
                                                target="_blank"
                                                className="btn btn-icon btn-sm border-2 border-gray-200 dark:border-gray-700 rounded-md hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600 hover:text-white dark:text-white text-slate-400"
                                            >
                                                <i className="uil uil-behance" title="Behance" />
                                            </a>
                                        </li>
                                        <li className="inline">
                                            <a
                                                href="http://linkedin.com/company/shreethemes"
                                                target="_blank"
                                                className="btn btn-icon btn-sm border-2 border-gray-200 dark:border-gray-700 rounded-md hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600 hover:text-white dark:text-white text-slate-400"
                                            >
                                                <i className="uil uil-linkedin" title="Linkedin" />
                                            </a>
                                        </li>
                                        <li className="inline">
                                            <a
                                                href="https://www.facebook.com/shreethemes"
                                                target="_blank"
                                                className="btn btn-icon btn-sm border-2 border-gray-200 dark:border-gray-700 rounded-md hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600 hover:text-white dark:text-white text-slate-400"
                                            >
                                                <i
                                                    className="uil uil-facebook-f align-middle"
                                                    title="facebook"
                                                />
                                            </a>
                                        </li>
                                        <li className="inline">
                                            <a
                                                href="https://www.instagram.com/shreethemes/"
                                                target="_blank"
                                                className="btn btn-icon btn-sm border-2 border-gray-200 dark:border-gray-700 rounded-md hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600 hover:text-white dark:text-white text-slate-400"
                                            >
                                                <i
                                                    className="uil uil-instagram align-middle"
                                                    title="instagram"
                                                />
                                            </a>
                                        </li>
                                        <li className="inline">
                                            <a
                                                href="https://twitter.com/shreethemes"
                                                target="_blank"
                                                className="btn btn-icon btn-sm border-2 border-gray-200 dark:border-gray-700 rounded-md hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600 hover:text-white dark:text-white text-slate-400"
                                            >
                                                <i
                                                    className="uil uil-twitter align-middle"
                                                    title="twitter"
                                                />
                                            </a>
                                        </li>
                                        <li className="inline">
                                            <a
                                                href="mailto:support@shreethemes.in"
                                                className="btn btn-icon btn-sm border-2 border-gray-200 dark:border-gray-700 rounded-md hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600 hover:text-white dark:text-white text-slate-400"
                                            >
                                                <i
                                                    className="uil uil-envelope align-middle"
                                                    title="email"
                                                />
                                            </a>
                                        </li>
                                    </ul>
                                    {/*end icon*/}
                                </li>
                                <li className="mt-3 w-full bg-white p-3 rounded-md shadow dark:shadow-gray-700">
                                    <div className="flex items-center mb-3">
                                        <i
                                            data-feather="file-text"
                                            className="h-8 w-8 text-slate-400"
                                        />
                                        <span className="font-medium ltr:ml-2 rtl:mr-2">
                                            calvin-carlo-resume.pdf
                                        </span>
                                    </div>
                                    <a
                                        href="assets/images/calvin-carlo-resume.pdf"
                                        className="btn bg-emerald-600 hover:bg-emerald-700 border-emerald-600 dark:border-emerald-600 text-white rounded-md w-full"
                                        download=""
                                    >
                                        <i className="uil uil-file-download-alt" /> Download CV
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/*end col*/}
                </div>
                {/*end grid*/}
            </div>
            {/*end container*/}
        </>

    )
}

export default CandidateDetails