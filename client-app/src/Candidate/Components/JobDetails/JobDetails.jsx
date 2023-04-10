import React, { useEffect, useState } from 'react'
import CompanyDetails from './Contents/CompanyDetails'
import CompanyLogo from './Contents/CompanyLogo'
import './css/styles.css'
import Description from './Contents/Description'
import RelatedVacancies from './Contents/RelatedVacancies'
import RecruiterDetails from './Contents/RecruiterDetails'
import { useNavigate, useParams } from 'react-router-dom'
import { jobDetails } from '../../../utils/Constants'
import axios from 'axios'



function JobDetails() {
    const navigate = useNavigate()
    const [job, setJob] = useState({})
    const { id } = useParams();

    const [refresh, setRefresh] = useState(false);
    const handleRefresh = () => {
        setRefresh(!refresh);
    }

    useEffect(() => {
        axios.get(jobDetails(id)).then((response) => {
            setJob(response.data)
        }).catch((err) => {
            console.log(err);
        })
    }, [id,refresh])

    return (

        <div className='outer'>
            <section className="bg-lightBlue  md:py-15 py-6 ">
                {job._id &&
                    <div className=''>
                        <div className="mycontainer mt-10 ">
                            <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px] bg-white rounded-2xl p-5">
                                <div className="lg:col-span-4 md:col-span-6 space-y-5">
                                    <CompanyLogo data={job} />
                                    <CompanyDetails data={job} />
                                    <RecruiterDetails data={job} />
                                </div>
                                {/*end col*/}
                                <div className="lg:col-span-8 md:col-span-6">
                                    <Description data={job} handleRefresh={handleRefresh} />

                                </div>

                            </div>

                        </div>
                        {/* <RelatedVacancies /> */}

                    </div>
                }



            </section>
        </div>


    )
}

export default JobDetails