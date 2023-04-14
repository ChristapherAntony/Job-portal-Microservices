import React from 'react'
import LineSkeleton from '../../Skeleton/LineSkeleton'
import { useSelector } from 'react-redux'

function Duties() {
    const isLoading = useSelector(state => state.loading)

    return (
        <div>
            <h5 className="text-lg font-semibold mt-6">
                Responsibilities and Duties:{" "}
            </h5>
            {isLoading ? (
                <LineSkeleton count={10} />
            ) : (
                <>
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
                </>
            )}


        </div>
    )
}

export default Duties