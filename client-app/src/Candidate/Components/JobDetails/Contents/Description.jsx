import React from 'react'
import InfoBox from './Boxes/InfoBox'
import Duties from './Duties'
import JobDescription from './JobDescription'
import SkillsAndQulifications from './SkillsAndQulifications'

function Description({ data }) {

   
    const date = new Date(data.created_at);
    const options = { day: 'numeric', month: 'short', year: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-US', options)
    .replace(/\b(\d{1,2})\b/g, (match) => match + (["th", "st", "nd", "rd"][+match > 0 && (+match < 4 || +match > 20) && +match % 10] || "th"));
     


    return (
        <div>
            <div>
                <h5 className="text-lg font-semibold">{data.job_title}</h5>
                <div className="mt-5">
                <a href="job-apply.html"
                    className="btn rounded-md text-sm p-1 bg-blue-600 hover:bg-blue-700 border-blue-600 hover:border-blue-700 text-white ltr:md:ml-2 rtl:md:mr-2 w-full md:w-auto"
                >
                    Apply Now
                </a>
            </div>
                <ul className="list-none mt-5 space-x-2">
                    <InfoBox title={'Employee Type'} data={data.employment_type} />
                    <InfoBox title={'Location'} data={data.location} />
                    <InfoBox title={'Job Type'} data={data.job_title} />
                    <InfoBox title={'Experience'} data={data.experience_required} />
                    <InfoBox title={'Qualifications'} data={'MCA'} />
                    <InfoBox title={'Salary'} data={data.base_salary} />
                    <InfoBox title={'Date posted'} data={formattedDate} />

                </ul>
            </div>
            <JobDescription data={data.job_description}/>
            <Duties />
            <SkillsAndQulifications skills={data.skills_required} qualifications={data.education_required} />
            <div className="mt-5">
                <a
                    href="job-apply.html"
                    className="btn rounded-md text-sm p-1 bg-blue-600 hover:bg-blue-700 border-blue-600 hover:border-blue-700 text-white ltr:md:ml-2 rtl:md:mr-2 w-full md:w-auto"
                >
                    Apply Now
                </a>
            </div>

        </div>
    )
}

export default Description