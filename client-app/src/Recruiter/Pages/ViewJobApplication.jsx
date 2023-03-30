import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getApplicatons } from '../../utils/Constants'
import Footer from '../Components/Footer'
import NavBar from '../Components/NavBar'
import Applications from '../Components/ViewJobApplication/Applications'
import JobDetails from '../Components/ViewJobApplication/JobDetails'

function ViewJobApplication() {
    const { id } = useParams()
    const [response, setResponse] = useState({})

    const fetchData = () => {
        axios.get(getApplicatons(id)).then((res) => {
            setResponse(res.data)
        }).catch((err) => {
            console.log(err);
        })
    }



    useEffect(() => {
        fetchData()
    }, [])



    return (
        <div>
            <NavBar />

            <JobDetails onUpdate={fetchData} jobData={response.job} recruiter={response.recruiter} />
            <Applications applications={response.applications} />

            <Footer />
        </div>
    )
}

export default ViewJobApplication
