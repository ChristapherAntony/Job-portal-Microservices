import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { skillTestDetails } from '../../utils/Constants';

function SkillTestDetails() {
    const [skillTests, setSkillTests] = useState();
    const { id } = useParams()

    useEffect(() => {
        axios.get(skillTestDetails(id)).then((response) => {
            console.log(response.data.skillTest.test_title);
            setSkillTests(response.data.skillTest)
            // setSkillQuestions
        }).catch((error) => {
            console.log(error);
        })
    }, []);


    return (
        <section className="max-w-4xl p-6 mx-auto bg-white rounded-xl shadow-md m-10">
            <h2 className="text-lg font-semibold text-gray-700 capitalize">
            </h2>
            <div>
                <div className="grid grid-cols-1 gap-y-1 gap-x-5 mt-4 sm:grid-cols-2 p-5">
                    <div>
                        <label className="text-gray-700 text-sm" htmlFor="username">
                            Test Name
                        </label>
                        <div
                            id="test_title"
                            name="test_title"
                            type="text"

                            className={'validation-true border-none'}
                        >
                         {skillTests?.test_title}
                        </div>

                    </div>
                    <div className='grid grid-cols-2 space-x-2'>
                        <div>
                            <label className="text-gray-700 text-sm" >
                                Time per question in sec
                            </label>
                            <div
                                id="time_per_question"
                                type="number"
                                name='time_per_question'

                                className={'validation-true border-none'}
                            >
                             {skillTests?.time_per_question}
                            </div>

                        </div>
                        <div>
                            <label className="text-gray-700 text-sm" >
                                Pass Percentage
                            </label>
                            <div
                                id="pass_percentage"
                                type="number"
                                name='pass_percentage'

                                className={'validation-true border-none'}
                            >
                            {skillTests?.pass_percentage}
                            </div>

                        </div>
                    </div>
                </div>
                <div className=' col-span-2 p-5'>
                    <div>
                        <p className="block text-sm text-gray-500">Test description </p>
                        <div
                            name='description' placeholder="Add a description about this test."
                            id="description"

                            className={'validation-true border-none'}
                        >
                            {skillTests?.description}
                        </div>

                    </div>
                    <div>
                        <label className="block text-lg font-bold py-3">Instructions </label>

                        <ol className="list-decimal text-xm space-y-2">
                            {
                                skillTests?.instructions.map((data, index) => (
                                    <div className='flex justify-between'>
                                        <li key={index}>{data}</li>
                                    </div>

                                ))
                            }
                        </ol>
                    </div>

                    <div>
                        <label className="block text-lg font-bold py-3"> Questions </label>
                        <ol className="list-decimal text-xm space-y-2">
                            {skillTests?.questions &&
                                skillTests?.questions.map((question, index) => (
                                    <div key={index} className='pt-4'>
                                        <div className='flex justify-between'>
                                            <li>{question.question}</li>
                                        </div>
                                        <div className='space-x-4 text-sm text-gray-700'>
                                            <span className=''>Option A : {question.optionA}</span>
                                            <span>Option B : {question.optionB}</span>
                                            <span>Option C : {question.optionC}</span>
                                            <span>Option D : {question.optionD}</span>
                                        </div>
                                        <div className='text-sm text-gray-700'>
                                            Correct Answer: {question.correctAnswer}
                                        </div>
                                    </div>
                                ))}
                        </ol>
                    </div>
                </div>

                <div className="flex justify-end mt-6">
                    <button
                    onClick={()=>history.back()}
                    type="button" className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                        back
                    </button>
                </div>
            </div>

        </section>
    )
}

export default SkillTestDetails