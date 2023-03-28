import Card from "./Card";
import Filter from "./Filter";
import Jobs from "./Jobs";

import './css/styles.css'
import { useEffect, useState } from "react";
import axios from "axios";
// import './css/tailwind.min.css'



// const jobs=[

//     {
//         "_id": "641be0870479dcae1180c05a",
//         "recruiter": {
//             "company_description": "Acme Corporation is a leading provider of widgets and gadgets.",
//             "company_email": "info@acme.com",
//             "company_logo": "https://res.cloudinary.com/dprxebwil/image/upload/v1679337624/Recruiter/recruiter-81yPxXSJ3TL._SL1500_.jpg.jpg",
//             "company_name": "Acme Corporation",
//             "company_website": "https://www.acme.com",
//             "current_position": "Software Developer",
//             "email": "amal@gmail.com",
//             "phone_number": "9446655318",
//             "user_name": "John Doe"
//         },
//         "job_title": "Accountant",
//         "available_positions": 12,
//         "job_description": "We are seeking a highly skilled and detail-oriented accountant to join our team. The successful candidate will be responsible for maintaining financial records and ensuring compliance with tax laws and regulations. The ideal candidate will have a strong understanding of accounting principles and be able to communicate financial information to both internal and external stakeholders.",
//         "skills_required": [
//             "tally",
//             "ms word"
//         ],
//         "experience_required": "1 year",
//         "education_required": [
//             "bcom","mcom",
//         ],
//         "location": "Mumbai",
//         "employment_type": "full time",
//         "base_salary": 25000,
//         "deadline": "2023-04-30T00:00:00.000Z",
//         "created_at": "2023-03-23T05:15:51.419Z",
//         "updated_at": "2023-03-23T05:15:51.419Z",
//         "__v": 0
//     }


// ]




// const productsRepeated = jobs.flatMap(product => Array(20).fill(product));






export default function JobFeed() {

    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        axios.get('/api/v1/jobs').then(response => {
            setJobs(response.data);
        }).catch(error => {
            console.log(error);
        });

    }, [])


    return (
        <div className="outer1">
            <section className="relative  md:py-10 py-16">
                <div className="mycontainer ">
                    <div className="grid bg-white  rounded-xl md:grid-cols-12 grid-cols-1 gap-[30px]">
                        <Filter />
                        <Jobs jobs={jobs} />
                    </div>
                </div>


            </section>
            {/*end section*/}


        </div>
    );
}
