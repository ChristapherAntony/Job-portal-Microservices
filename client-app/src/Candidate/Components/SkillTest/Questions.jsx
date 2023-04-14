import React, { useEffect, useState } from 'react';
import background from './assets/index';
import axios from 'axios';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { START_SKILL_TEST, SUBMIT_TEST, TAKE_SKILL_TEST } from '../../../utils/Constants';
import { errorTost, successTost } from '../modals/tost';
import { TEST_COMPLETED } from '../../../utils/ConstantRoutes';
function Questions() {

    const navigate = useNavigate()
    const { applicationId } = useParams();
    const [skillTest, setSkillTest] = useState({})
    const [currentIndex, setCurrentIndex] = useState(0);
    const [answers, setAnswers] = useState([])
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [timeRemaining, setTimeRemaining] = useState(100000);

    const [error, setError] = useState(null)

    const location = useLocation();
    const currentQuestion = skillTest.test_title ? skillTest.questions[currentIndex] : null;
    const currentQuestionId = skillTest.test_title ? skillTest.questions[currentIndex]?._id : null;

    const fetchTestQuestions = (applicationId) => {
        console.log('fetching data from backend--------------');
        axios.post(START_SKILL_TEST(applicationId)).then((response) => {
            setSkillTest(response.data.skillTest)
            const examTime = response.data.skillTest.time_per_question * response.data.skillTest.questions?.length
            setTimeRemaining(examTime)
            setError(null)
        }).catch((err) => {
            console.log(err);
            setError(err.response.data.errors[0].msg)
        });
    }

    const handleOptionChange = (event) => {
        const questionId = currentQuestion._id;
        const selectedAns = event.target.value;
        // find if the answer object already exists for the current question
        const index = answers.findIndex(answer => answer.questionId === questionId);

        if (index === -1) {
            // if the answer object doesn't exist, create a new one and add it to the state
            setAnswers([...answers, { questionId, selectedAns }]);
        } else {
            // if the answer object already exists, update the selected answer value
            const updatedAnswers = [...answers];
            updatedAnswers[index].selectedAns = selectedAns;
            setAnswers(updatedAnswers);
        }

    };


    const handleNext = () => {
        setCurrentIndex(currentIndex + 1);
    }
    const handleBack = () => {
        setCurrentIndex(currentIndex - 1);
    }

    const handleSubmit = () => {
        console.log(applicationId, 'id1111111111')
        axios.post(SUBMIT_TEST(applicationId), answers).then((response) => {
          
            successTost('success')
            navigate(TEST_COMPLETED(applicationId))
        }).catch((err) => {
            console.log('catchwwwwwwwwwww');
            errorTost()
        })

    }
    useEffect(() => {
        const selectedAns = answers.find(item => item.questionId === currentQuestionId)?.selectedAns;
        setSelectedAnswer(selectedAns);
    }, [handleOptionChange]);
    useEffect(() => {
        if (timeRemaining > 0) {
            const timerId = setTimeout(() => {
                setTimeRemaining(timeRemaining - 1000);
            }, 1000);
            return () => clearTimeout(timerId);
        } else {
            handleSubmit();
        }
    }, [timeRemaining]);
    useEffect(() => {
        fetchTestQuestions(applicationId)
    }, [])

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60000);
        const seconds = Math.floor((time % 60000) / 1000);
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }

    return (
        <main className="overflow-hidden">
            <div
                className="bg-cover bg-center md:h-screen py-10  md:p-20"
                style={{ backgroundImage: `url(${background})` }}
            >
                <div className="md:w-4/6 bg-white m-auto p-3 md:p-12  rounded-xl">

                    {error ? (
                        <div>
                            <h1>Sorry..</h1>
                            <p>{error}</p>

                            <button onClick={() => navigate('/candidate')} type="button" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Back to home</button>

                        </div>
                    ) : (
                        <div>
                            <div className='header  md:flex justify-between pb-4 md:pb-10'>
                                <h3 className='text-xl font-bold'>{skillTest.test_title}</h3>
                                <div>

                                    <span>Time remains: <span className='text-red-600'>{formatTime(timeRemaining)}</span> </span> <br />

                                    <span>Question :{currentIndex + 1}/{skillTest?.questions?.length} </span>
                                </div>

                            </div>

                            <div>
                                <div className="font-bold text-xl  mb-5">
                                    <span> Q.{currentIndex + 1}</span> {currentQuestion?.question}
                                </div>

                                {/* form */}
                                <div className="">
                                    <fieldset id="step1" className="  space-y-5">
                                        <label className="block">
                                            <div className="border h-10 rounded-lg flex items-center md:w-1/2 p-5 border-stone-300 cursor-pointer">
                                                { /* The input element is moved outside of the div */}
                                                <input
                                                    type="radio"
                                                    name="opt1"
                                                    value={currentQuestion?.optionA}
                                                    checked={selectedAnswer === currentQuestion?.optionA}
                                                    onChange={handleOptionChange}
                                                />
                                                <span>{currentQuestion?.optionA}</span>
                                            </div>
                                        </label>
                                        <label className="block">
                                            <div className="border h-10 rounded-lg flex items-center md:w-1/2 p-5 border-stone-300  cursor-pointer ">
                                                <input
                                                    type="radio"
                                                    name="opt1"
                                                    value={currentQuestion?.optionB}
                                                    checked={selectedAnswer === currentQuestion?.optionB}
                                                    onChange={handleOptionChange}
                                                />
                                                <label>{currentQuestion?.optionB}</label>
                                            </div>
                                        </label>
                                        <label className="block" >
                                            <div className="border h-10 rounded-lg flex items-center md:w-1/2 p-5 border-stone-300  cursor-pointer">
                                                <input
                                                    type="radio"
                                                    name="opt1"
                                                    value={currentQuestion?.optionC}
                                                    checked={selectedAnswer === currentQuestion?.optionC}
                                                    onChange={handleOptionChange}
                                                />
                                                <label>{currentQuestion?.optionC}</label>
                                            </div>
                                        </label>
                                        <label className="block" >
                                            <div className=" border h-10 rounded-lg flex items-center md:w-1/2 p-5 border-stone-300 cursor-pointer">
                                                <input
                                                    type="radio"
                                                    name="opt1"
                                                    value={currentQuestion?.optionD}
                                                    checked={selectedAnswer === currentQuestion?.optionD}
                                                    onChange={handleOptionChange}
                                                />
                                                <label>{currentQuestion?.optionD}</label>
                                            </div>
                                        </label>



                                    </fieldset>
                                </div>
                            </div>

                            {/* next and back buttons */}
                            <div className="flex justify-between pt-5">
                                {currentIndex > 0 ? (
                                    <button type="button"
                                        onClick={handleBack}
                                        className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                                    >
                                        Back
                                    </button>
                                ) : (
                                    <button></button>
                                )

                                }
                                {currentIndex < skillTest?.questions?.length - 1 ?
                                    <button type="button"
                                        onClick={handleNext}
                                        className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                                    >
                                        Next
                                    </button>
                                    :
                                    <button type="button"
                                        onClick={handleSubmit}
                                        className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                                    >
                                        Submit
                                    </button>
                                }
                            </div>
                        </div>
                    )}




                </div>
            </div>
        </main>
    )
}

export default Questions
