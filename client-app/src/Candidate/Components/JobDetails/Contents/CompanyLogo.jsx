import React from 'react'
import LineSkeleton from '../../Skeleton/LineSkeleton'
import { useSelector } from 'react-redux'

function CompanyLogo({ data }) {
    const isLoading = useSelector(state => state.loading)

    return (

        <div className="p-6 shadow  rounded-md bg-white  sticky top-20">
            {isLoading ? (
                <LineSkeleton count={5} />
            ) : (
                <>
                    <img
                        src={data?.recruiter?.company_logo}
                        className="rounded-full h-28 w-28 p-4 bg-white  shadow "
                        alt=""
                    />
                    <div className="md:ltr:ml-4 md:rtl:mr-4 mt-4 sp">
                        <h5 className="text-xl font-semibold">{data.job_title}</h5>
                        <div className="mt-1 space-x-3">
                            <span className="text-slate-400 font-medium ltr:mr-2 rtl:ml-2 inline-block">
                                <i className="uil uil-building text-[18px] text-emerald-600 ltr:mr-1 rtl:ml-1" />{" "}
                                {data.recruiter?.company_name}
                            </span>
                            <span className="text-slate-400 font-medium ltr:mr-2 rtl:ml-2 inline-block">
                                <i className="uil uil-map-marker text-[18px] text-emerald-600 ltr:mr-1 rtl:ml-1" />{" "}
                                {data.location}
                            </span>
                        </div>
                    </div>

                </>

            )}

        </div>
    )
}

export default CompanyLogo