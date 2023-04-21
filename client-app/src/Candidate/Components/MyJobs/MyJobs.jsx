import React, { useEffect } from 'react'
import './css/styles.css'
import { useState } from 'react'
import { appliedjobsList } from '../../../utils/Constants'
import axios from 'axios'
import { Link } from 'react-router-dom'
import LineSkeleton from '../Skeleton/LineSkeleton'
import { changeLoading } from '../../../Redux/loadingReducer'
import { useDispatch, useSelector } from 'react-redux'
import Pagination from '../Pagination/Pagination'
function MyJobs() {
    const [jobs, setjobs] = useState([])
    const dispatch = useDispatch()
    const isLoading = useSelector(state => state.loading)
    // const pageNumber = match.params.pageNumber || 1;
    const pageNumber = 1;
    const [page, setPage] = useState(pageNumber);
    const [pages, setPages] = useState(1);

    useEffect(() => {
        dispatch(changeLoading(true))
        axios.get(`${appliedjobsList}?page=${1}&limit=${8}`).then((response) => {
            console.log(response.data);
            setjobs(response.data.data)
            setPages(response.data.pages)
            console.log(pages,'pages');
            dispatch(changeLoading(false))
        }).catch((error) => {
            console.log(error.response.data.errors[0].msg);
            dispatch(changeLoading(false))
        })


    }, [page])


    return (

        <section className="relative -mt-[42px] md:pb-24 pb-16">
            <div className="mycontainer mt-10 h-screen">
                <h1 className='font-semibold py-5 text-lg' >Applied Jobs</h1>
                <div className="grid grid-cols-1 gap-[15px]  ">
                    {isLoading ? (
                        <div className='bg-white'>
                            <LineSkeleton count={20} />
                        </div>

                    ) : (
                        <>
                            {jobs.length > 0 ? (
                                jobs.map((data, index) => (
                                    <div key={index} className="group bg-white relative overflow-hidden md:flex justify-between items-center rounded shadow hover:shadow-md  transition-all duration-500 p-3">
                                        <div className="flex items-center">
                                            <div className="w-14 h-14 flex items-center justify-center bg-white  shadow  rounded-md">
                                                <img
                                                    src={data.job.recruiter.company_logo}
                                                    className="h-8 w-8"
                                                    alt=""
                                                />
                                            </div>
                                            <Link
                                                to={`/candidate/job-details/${data.job._id}`}
                                                className="text-lg hover:text-blue-600 font-semibold transition-all duration-500 ltr:ml-3 rtl:mr-3 min-w-[180px]"
                                            >
                                                {data.job.job_title}
                                            </Link>
                                        </div>
                                        <div className="md:block flex justify-between md:mt-0 mt-4">
                                            <span className="block">
                                                <span className="bg-blue-600/10 inline-block text-blue-600 text-xs px-2.5 py-0.5 font-semibold rounded-full">
                                                    {data.job.employment_type}
                                                </span>
                                            </span>
                                            <span className="block text-slate-400 text-sm md:mt-1 mt-0">
                                                <i className="uil uil-clock" /> 20th Feb 2023
                                            </span>
                                        </div>
                                        <div className="md:block flex justify-between md:mt-0 mt-2">
                                            <span className="text-slate-400">
                                                <i className="uil uil-map-marker" /> {data.job.location}
                                            </span>
                                            <span className="block font-semibold md:mt-1 mt-0">
                                                {data.job.recruiter.company_name}
                                            </span>
                                        </div>
                                        <div className="md:mt-0 mt-4">

                                            <Link
                                               
                                                to={`/candidate/job-details/${data.job._id}`}
                                                className="btn rounded-md bg-blue-600 hover:bg-blue-700 border-blue-600 hover:border-blue-700 text-white ltr:md:ml-2 rtl:md:mr-2 w-full p-2 text-sm md:w-auto"
                                            >
                                                View Details
                                            </Link>
                                        </div>
                                    </div>
                                ))

                            ) : (
                                <section className="bg-white mt-32">
                                    <div className="container flex flex-col items-center px-4 py-12 mx-auto text-center">
                                        <h2 className="text-2xl font-bold tracking-tight text-gray-800 xl:text-3xl ">
                                            You have not applied for any job.
                                        </h2>
                                        <p className="block max-w-4xl mt-4 text-gray-500 ">
                                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse iure
                                            tenetur commodi ipsam error voluptate magni. Adipisci repudiandae ullam
                                            commodi iusto reprehenderit suscipit facere voluptatem, eaque maiores
                                            minima. Neque, officiis.
                                        </p>
                                        <div className="mt-6">

                                            <Link
                                                to={'/jobfeed'}
                                                className="inline-flex items-center justify-center w-full px-4 py-2.5 mt-4 overflow-hidden text-sm text-white transition-colors duration-300 bg-blue-600 rounded-lg shadow sm:w-auto sm:mx-2 sm:mt-0 hover:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                                </svg>

                                                <span className="mx-2">Apply now</span>
                                            </Link>
                                        </div>
                                    </div>
                                </section>

                            )
                            }
                        </>
                    )}
                    <Pagination page={page} pages={pages} changePage={setPage} />
                </div >

            </div >

        </section >

    )
}

export default MyJobs