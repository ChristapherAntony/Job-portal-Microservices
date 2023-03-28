import React from 'react'
import CompanyDetails from './Contents/CompanyDetails'
import CompanyLogo from './Contents/CompanyLogo'
import './css/styles.css'
import Description from './Contents/Description'
import RelatedVacancies from './Contents/RelatedVacancies'
import RecruiterDetails from './Contents/RecruiterDetails'

const job = {
    "_id": "641be0870479dcae1180c05a",
    "recruiter": {
        "company_description": "Acme Corporation is a leading provider of widgets and gadgets.",
        "company_email": "info@acme.com",
        "company_logo": "https://res.cloudinary.com/dprxebwil/image/upload/v1679337624/Recruiter/recruiter-81yPxXSJ3TL._SL1500_.jpg.jpg",
        "company_name": "Acme Corporation",
        "company_website": "https://www.acme.com",
        "current_position": "Software Developer",
        "company_location": "Bangalore",
        "company_country": "India",
        "company_state": "Karnadaka",
        "email": "amal@gmail.com",
        "phone_number": "9446655318",
        "user_name": "John Doe"
    },
    "job_title": "Accountant",
    "available_positions": 12,
    "job_description": "We are seeking a highly skilled and detail-oriented accountant to join our team. The successful candidate will be responsible for maintaining financial records and ensuring compliance with tax laws and regulations. The ideal candidate will have a strong understanding of accounting principles and be able to communicate financial information to both internal and external stakeholders.",
    "skills_required": [
        "tally",
        "ms word"
    ],
    "experience_required": "1 year",
    "education_required": [
        "bcom", "mcom"
    ],
    "location": "Mumbai",
    "employment_type": "full time",
    "base_salary": 25000,
    "deadline": "2023-04-30T00:00:00.000Z",
    "created_at": "2023-03-23T05:15:51.419Z",
    "updated_at": "2023-03-23T05:15:51.419Z",
    "__v": 0
}




function JobDetails() {

    return (
        <div className='outer'>
            <section className="bg-lightBlue  md:py-15 py-6 ">
                <div className=''>
                    <div className="mycontainer mt-10 ">
                        <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px] bg-white rounded-2xl p-5">
                            <div className="lg:col-span-4 md:col-span-6 space-y-5">
                                <CompanyLogo data={job} />
                                <CompanyDetails data={job} />
                                <RecruiterDetails data={job}  />
                            </div>
                            {/*end col*/}
                            <div className="lg:col-span-8 md:col-span-6">
                                <Description data={job} />

                            </div>

                        </div>

                    </div>
                    <RelatedVacancies />

                </div>


            </section>
        </div>


    )
}

export default JobDetails