import axios from 'axios'
import React from 'react'
import { applyJob } from '../../../../utils/Constants'
import InfoBox from './Boxes/InfoBox'
import Duties from './Duties'
import JobDescription from './JobDescription'
import SkillsAndQulifications from './SkillsAndQulification'
import ApplicationDetails from './ApplicationDetails'


function Description({ data }) {


    const date = new Date(data.created_at);
    const options = { day: 'numeric', month: 'short', year: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-US', options)
        .replace(/\b(\d{1,2})\b/g, (match) => match + (["th", "st", "nd", "rd"][+match > 0 && (+match < 4 || +match > 20) && +match % 10] || "th"));



    const apply = (id) => {
        axios.post(applyJob(id)).then((res) => {
            Swal.fire(
                'Applied!',
                'success'
            )
        }).catch((err) => {
            console.log(err.response.data.errors[0].msg,);
            Swal.fire({
                title: 'Oops...',
                text: err.response.data.errors[0].msg,
            })
        })
    }



    const handleApply = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Apply'
        }).then((result) => {
            if (result.isConfirmed) {
                apply(id)
            }
        })

    }


    return (
        <div>
            <div>
                <h5 className="text-lg font-semibold">{data.job_title}</h5>
                {data.hasApplied ? (
                    <p className='text-blue-600 font-bold'>Applied</p>
                ) : (
                    <div onClick={() => handleApply(data._id)} className="mt-5 cursor-pointer">
                        <a
                            className="btn rounded-md text-sm p-1 bg-blue-600 hover:bg-blue-700 border-blue-600 hover:border-blue-700 text-white ltr:md:ml-2 rtl:md:mr-2 w-full md:w-auto"
                        >
                            Apply Now
                        </a>
                    </div>
                )}
            </div>













            <ul className="list-none mt-5 space-x-2">
                <InfoBox title={'Employee Type'} data={data.employment_type} />
                <InfoBox title={'Location'} data={data.location} />
                <InfoBox title={'Job Type'} data={data.job_title} />
                <InfoBox title={'Experience'} data={data.experience_required} />
                {/* <InfoBox title={'Qualifications'} data={'MCA'} /> */}
                <InfoBox title={'Salary'} data={data.base_salary} />
                <InfoBox title={'Date posted'} data={formattedDate} />

            </ul>

            {data.hasApplied && <ApplicationDetails jobId={data._id}/>}


            <JobDescription data={data.job_description} />
            <Duties />
            <SkillsAndQulifications skills={data.skills_required} qualifications={data.education_required} />
            {data.hasApplied ? (
                null
            ) : (
                <div onClick={() => handleApply(data._id)} className="mt-5 cursor-pointer">
                    <a
                        className="btn rounded-md text-sm p-1 bg-blue-600 hover:bg-blue-700 border-blue-600 hover:border-blue-700 text-white ltr:md:ml-2 rtl:md:mr-2 w-full md:w-auto"
                    >
                        Apply Now
                    </a>
                </div>
            )}


        </div>
    )
}

export default Description