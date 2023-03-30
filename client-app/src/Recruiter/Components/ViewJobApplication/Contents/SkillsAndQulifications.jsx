import React from 'react'

function SkillsAndQulifications({ skills, qualifications }) {
    return (
        <div>
            <h5 className="text-lg font-semibold mt-6">
                Required Skills and Qualifications:{" "}
            </h5>
            <p className="text-slate-400 mt-4">

            </p>
            <ul className="myList">
                {skills?.map((skill, index) => {
                    return (
                        <li key={index} className="text-slate-600 mt-2">
                            <i className="uil uil-arrow-right text-blue-600 ltr:mr-1 rtl:ml-1" />
                            {skill}
                        </li>
                    )

                })}


            </ul>
            <ul className="myList">
                {qualifications?.map((data, index) => {
                    return (
                        <li key={index} className="text-slate-600 mt-2">
                            <i className="uil uil-arrow-right text-blue-600 ltr:mr-1 rtl:ml-1" />
                            {data}
                        </li>
                    )

                })}


            </ul>

        </div>
    )
}

export default SkillsAndQulifications