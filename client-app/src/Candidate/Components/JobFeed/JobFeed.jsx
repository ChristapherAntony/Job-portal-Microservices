import Card from "./Card";
import Filter from "./Filter";
import Jobs from "./Jobs";

import './css/styles.css'
import { useEffect, useState } from "react";
import axios from "axios";
// import './css/tailwind.min.css'

import { useDispatch, useSelector } from 'react-redux'
import { changeSearchKey } from "../../../Redux/searchKeyReducer";


export default function JobFeed() {
    const searchKey = useSelector(state => state.searchkey);
    const { jobKey, locationKey, companyKey, employmentType } = searchKey
    const dispatch = useDispatch();

    const handleReset = () => {
        dispatch(changeSearchKey({ jobKey: '', locationKey: '', companyKey: '', employmentType: '' }));
    }

    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        axios.get(`/api/v1/jobs?jobKey=${jobKey}&locationKey=${locationKey}&companyKey=${companyKey}&employmentType=${employmentType}`).then(response => {
            setJobs(response.data);
        }).catch(error => {
            console.log(error);
        });

    }, [searchKey])


    return (
        <div className="outer1">

            <section className="relative  md:py-10 py-16">

                <div className="mycontainer ">
                    <div className="flex justify-between">
                        <div>
                            Filter Applied :

                            {searchKey.jobKey &&
                                <span className="inline-block border-1 rounded-full bg-white px-3 py-1 text-xs font-medium text-black border-gray-600  mr-2 mb-2">
                                    {searchKey.jobKey}
                                    <button onClick={() => { dispatch(changeSearchKey({ jobKey: '' })) }} className="ml-2 text-xs font-medium text-red-600">X</button>
                                </span>
                            }
                            {searchKey.locationKey &&
                                <span className="inline-block border-1 rounded-full bg-white px-3 py-1 text-xs font-medium text-black border-gray-600  mr-2 mb-2">
                                    {searchKey.locationKey}
                                    <button onClick={() => { dispatch(changeSearchKey({ locationKey: '' })) }} className="ml-2 text-xs font-medium text-red-600">X</button>
                                </span>
                            }
                            {searchKey.companyKey &&
                                <span className="inline-block border-1 rounded-full bg-white px-3 py-1 text-xs font-medium text-black border-gray-600  mr-2 mb-2">
                                    {searchKey.companyKey}
                                    <button onClick={() => { dispatch(changeSearchKey({ companyKey: '' })) }} className="ml-2 text-xs font-medium text-red-600">X</button>
                                </span>
                            }
                            {searchKey.employmentType &&
                                <span className="inline-block border-1 rounded-full bg-white px-3 py-1 text-xs font-medium text-black border-gray-600  mr-2 mb-2">
                                    {searchKey.employmentType}
                                    <button onClick={() => { dispatch(changeSearchKey({ employmentType: '' })) }} className="ml-2 text-xs font-medium text-red-600">X</button>
                                </span>
                            }

                        </div>
                        <div>
                            <button onClick={handleReset} type="button" class="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-1 mr-2 mb-2">
                                Reset
                            </button>


                        </div>
                    </div>

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
