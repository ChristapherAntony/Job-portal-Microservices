import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { placeKeySearch, jobKeySearch } from '../../../utils/Constants';
import { useSelector, useDispatch } from 'react-redux';
import { changeSearchKey } from '../../../Redux/searchKeyReducer';
import { useNavigate } from 'react-router-dom';
//samle
function SearchBox() {
    const searchKey = useSelector(state => state.searchkey);
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [jobKey, setJobKey] = useState('')
    const [locationKey, setLocationKey] = useState('')

    const [jobSuggestion, setJobSuggestion] = useState([])
    const [locationSuggestion, setLocationSuggestion] = useState([])
    const searchJob = (e) => {
        let key = e.target.value
        setJobKey(key)
        axios.get(jobKeySearch(key)).then((response) => {
            setJobSuggestion(response.data.jobTitles)
        }).catch((error) => {
            console.log(error);
        })
    }

    const searchLocation = (e) => {
        let key = e.target.value
        setLocationKey(key)
        axios.get(placeKeySearch(key)).then((response) => {
            console.log();
            setLocationSuggestion(response.data.jobLocation)
        }).catch((error) => {
            console.log(error);
        })



    }
    const handleSearch = () => {
        setJobSuggestion([])
        setLocationSuggestion([])
        dispatch(changeSearchKey({ jobKey, locationKey }))
        // setJobKey('')
        // setLocationKey('')
        navigate('/jobfeed')
    }



    return (
        <>
            {/* component */}
            <div className="">

                <div className="flex py-2 md:w-4/6 border border-blue-300 md:space-x-10 mt-10 bg-white rounded-full m-auto justify-center ">

                    <div className="flex  border-gray-300    items-center p-2 ">
                        <div className='flex' >
                            <svg
                                className="fill-current text-gray-800 mr-2 w-6 h-6"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width={24}
                                height={24}
                            >
                                <path
                                    className="heroicon-ui"
                                    d="M12 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm9 11a1 1 0 0 1-2 0v-2a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v2a1 1 0 0 1-2 0v-2a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v2z"
                                />
                            </svg>
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Job Title or keyword"
                                    value={jobKey}
                                    onChange={searchJob}
                                    className="bg-white max-w-full focus:outline-none text-gray-700" />
                                {jobSuggestion.length > 0 &&
                                    <div className="absolute w-full z-10 bg-white shadow-md rounded-lg mt-2">
                                        <ul className="py-2">
                                            {jobSuggestion.map((data, index) => (
                                                <li
                                                    onClick={() => {
                                                        setJobKey(data);
                                                        setJobSuggestion([])
                                                    }}
                                                    key={index} className="px-4 py-2 hover:bg-gray-100">{data}</li>
                                            ))}
                                        </ul>
                                    </div>
                                }




                            </div>
                        </div>
                    </div>
                    <div className="flex  border-gray-300   items-center p-2 ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Location"
                                value={locationKey}
                                className=" max-w-full focus:outline-none text-gray-700"
                                onChange={searchLocation} />
                            {locationSuggestion.length > 0 &&
                                <div className="absolute w-full z-10 bg-white shadow-md rounded-lg mt-2">
                                    <ul className="py-2">
                                        {locationSuggestion.map((data, index) => (
                                            <li
                                                onClick={() => {
                                                    setLocationKey(data);
                                                    setLocationSuggestion([])
                                                }}
                                                key={index} className="px-4 py-2 hover:bg-gray-100">{data}</li>
                                        ))}
                                    </ul>
                                </div>
                            }
                        </div>
                    </div>
                    {/* <button
                        type="submit"
                        onClick={handleSearch}
                        className="px-5 ml-2 text-sm font-medium text-white  bg-lightDarkBlue rounded-lg border border-gray-700 hover:bg-gray-800  "
                    >
                        <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                        </svg>
                        <span className="sr-only">Search</span>
                    </button> */}
                    <button onClick={handleSearch} type="submit" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium  text-sm px-7 py-1.5 rounded-full text-center mr-2 mb-2">
                        <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                        </svg>
                    </button>


                </div>





            </div>
        </>

    )
}

export default SearchBox