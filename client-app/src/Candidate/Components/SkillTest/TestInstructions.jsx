import React, { useEffect, useState } from 'react';
import background from './assets/index';
import axios from 'axios';
import { TAKE_SKILL_TEST } from '../../../utils/Constants';
import { useNavigate, useParams } from 'react-router-dom';
function TestInstructions() {
    const { applicationId } = useParams();
    const [skillTest, setSkillTest] = useState()
    const [time, setTime] = useState()
    const navigate=useNavigate()

    const fetchTestQuestions = (applicationId) => {
        axios.get(TAKE_SKILL_TEST(applicationId)).then((response) => {
            setSkillTest(response.data.skillTest)

            setTime(response.data.skillTest.time_per_question * response.data.skillTest.questions.length)
            console.log(response)
        }).catch((err) => {
            console.log(err)
        });
    }
    useEffect(() => {
        fetchTestQuestions(applicationId)
    }, [])

    const handleStart=()=>{
        navigate(`/candidate/start-test/${applicationId}`)
    }
    return (
        <main className="overflow-hidden">
            <div
                className="bg-cover bg-center md:h-screen py-10  md:p-20"
                style={{ backgroundImage: `url(${background})` }}
            >
                <div className="md:w-4/6 bg-white m-auto p-3 md:p-12  rounded-xl">
                    <div className='header  md:flex justify-between pb-4 md:pb-10'>
                        <h3 className='text-xl font-bold'>{skillTest?.test_title}</h3>
                        <div>
                            <span>Total Time: <span className='text-red-600'>{Math.floor(time / 60000)} minutes</span> </span> <br />
                            <span>No of Questions:{skillTest?.questions?.length} </span>
                        </div>

                    </div>
                    <div>
                        <h5 className="text-base font-semibold mt-6">Description</h5>
                        <p className="text-slate-400 mt-1">
                            {skillTest?.description}
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem iure nulla fugiat ducimus vel magni cupiditate excepturi. Rem quibusdam ipsum quaerat adipisci, cumque quam unde ut quas, beatae, excepturi ad. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut sequi laudantium illum nihil odio reiciendis dolorem dolorum corrupti sit repudiandae, dignissimos expedita mollitia. Illo quos quo quas nobis unde amet?
                        </p>
                    </div>

                    <div>
                        <h5 className="text-base font-semibold mt-6">
                            Instructions{" "}
                        </h5>

                        <ul className="list-none">
                            {skillTest?.instructions.map((data, index) => (

                                <li key={index} className="text-slate-400 mt-2">
                                    <i className=" text-emerald-600 ltr:mr-1 rtl:ml-1" >* </i>
                                    {data}
                                </li>
                            ))}
                            <li className="text-slate-400 mt-2">
                                <i className=" text-emerald-600 ltr:mr-1 rtl:ml-1" >* </i>
                                Make sure you have a reliable internet connection and a quiet place to take the test.
                            </li>
                            <li className="text-slate-400 mt-2">
                                <i className=" text-emerald-600 ltr:mr-1 rtl:ml-1" >* </i>
                                Read each question and all of the possible answers before selecting an answer.
                            </li>
                            <li className="text-slate-400 mt-2">
                                <i className=" text-emerald-600 ltr:mr-1 rtl:ml-1" >* </i>
                                There is only one correct answer for each question.
                            </li>
                            <li className="text-slate-400 mt-2">
                                <i className=" text-emerald-600 ltr:mr-1 rtl:ml-1" >* </i>
                                This test is designed to be taken in one sitting without interruption. If you refresh or switch tabs during the test, your progress will be lost, and you will not be able to complete the test
                            </li>
                            <li className="text-slate-400 mt-2">
                                <i className=" text-emerald-600 ltr:mr-1 rtl:ml-1" >* </i>
                                Once you begin the test, do not refresh the page or open any new tabs until you have completed the test.                            </li>
                        </ul>
                    </div>

                    <div className='mt-10 flex justify-center'>
                        <button 
                        onClick={()=>navigate('/candidate')}
                        type="button" class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-1 text-center mr-2 mb-2">Cancel</button>
                        <button
                        onClick={handleStart}
                        type="button" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-1 text-center mr-2 mb-2">Start</button>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default TestInstructions
