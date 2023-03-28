import React from 'react'

function RelatedVacancies() {
    return (
        <div className="mycontainer lg:mt-24 mt-16">
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
                                    className="block text-[16px] font-semibold hover:text-blue-600 transition-all duration-500"
                                >
                                    Facebook
                                </a>
                                <span className="block text-sm text-slate-400">2 days ago</span>
                            </div>
                        </div>
                        <span className="bg-blue-600/10 group-hover:bg-blue-600 inline-block text-blue-600 group-hover:text-white text-xs px-2.5 py-0.5 font-semibold rounded-full transition-all duration-500">
                            Full Time
                        </span>
                    </div>
                    <div className="mt-6">
                        <a
                            href="job-detail-one.html"
                            className="text-lg hover:text-blue-600 font-semibold transition-all duration-500"
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
                                className="bg-blue-600 h-[6px] rounded-full"
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
                                    className="block text-[16px] font-semibold hover:text-blue-600 transition-all duration-500"
                                >
                                    Google
                                </a>
                                <span className="block text-sm text-slate-400">2 days ago</span>
                            </div>
                        </div>
                        <span className="bg-blue-600/10 group-hover:bg-blue-600 inline-block text-blue-600 group-hover:text-white text-xs px-2.5 py-0.5 font-semibold rounded-full transition-all duration-500">
                            Part Time
                        </span>
                    </div>
                    <div className="mt-6">
                        <a
                            href="job-detail-one.html"
                            className="text-lg hover:text-blue-600 font-semibold transition-all duration-500"
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
                                className="bg-blue-600 h-[6px] rounded-full"
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
                                    className="block text-[16px] font-semibold hover:text-blue-600 transition-all duration-500"
                                >
                                    Android
                                </a>
                                <span className="block text-sm text-slate-400">2 days ago</span>
                            </div>
                        </div>
                        <span className="bg-blue-600/10 group-hover:bg-blue-600 inline-block text-blue-600 group-hover:text-white text-xs px-2.5 py-0.5 font-semibold rounded-full transition-all duration-500">
                            Remote
                        </span>
                    </div>
                    <div className="mt-6">
                        <a
                            href="job-detail-one.html"
                            className="text-lg hover:text-blue-600 font-semibold transition-all duration-500"
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
                                className="bg-blue-600 h-[6px] rounded-full"
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
    )
}

export default RelatedVacancies