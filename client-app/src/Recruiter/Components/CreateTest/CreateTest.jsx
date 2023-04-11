
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import axios from 'axios';
import validationSchema from './validation';
import { addNewTest } from '../../../utils/Constants';
import AddInstructions from './Modals/AddInstructions';
import AddQuestions from './Modals/AddQuestions';
import Delete from './Modals/Delete';
import { VIEW_SKILLTEST_TABLE } from '../../../utils/ConstantRoutes';

function CreateTest() {
    const navigate = useNavigate();

    const [error, setError] = useState('')
    const [showModalOne, setShowModalOne] = useState(false);
    const [showModalTwo, setShowModalTwo] = useState(false);
    const [showModalDelete, setShowModalDelete] = useState(false);




    const [instructions, setInstructions] = useState([])
    const [questions, setQuestions] = useState([]) //array of objects
    const addData = (data) => {
        setInstructions(prevInstructions => [...prevInstructions, data])
    }
    const handleRemove = (index) => {
        setInstructions(prevInstructions => prevInstructions.filter((_, i) => i !== index));
    }

    const addQuestion = (data) => {
        console.log(data);
        setQuestions([...questions, data]);
    }
    const handleRemoveQuestion = (index) => {
        setQuestions(prev => prev.filter((_, i) => i !== index));
    }




    const formik = useFormik({
        initialValues: {
            test_title: 'Example Test',
            time_per_question: '60000',
            pass_percentage: '60',
            description: 'This is an example test Read each question carefully before answering',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            const body = {
                test_title: values.test_title,
                time_per_question: values.time_per_question,
                pass_percentage: values.pass_percentage,
                description: values.description,
                instructions: instructions,
                questions: questions
            };



            console.log(body, 'body-------======');
            axios.post(addNewTest, body).then((response) => {
                toast.success('Success', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                navigate(VIEW_SKILLTEST_TABLE)
            }).catch((err) => {
                console.log(err);
                setError(err.response.data.errors[0].msg); // Set the error state
                setTimeout(() => {
                    setError(null);
                }, 8000);
            })


        },
    });




    return (
        <section className="max-w-4xl p-6 mx-auto bg-white rounded-xl shadow-md m-10">
            <h2 className="text-lg font-semibold text-gray-700 capitalize">

            </h2>
            <form onSubmit={formik.handleSubmit}>


                <div className="grid grid-cols-1 gap-y-1 gap-x-5 mt-4 sm:grid-cols-2 p-5">
                    <div>
                        <label className="text-gray-700 text-sm" htmlFor="username">
                            Test Name
                        </label>
                        <input
                            id="test_title"
                            name="test_title"
                            type="text"
                            value={formik.values.test_title}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className={
                                formik.touched.test_title && formik.errors.test_title
                                    ? 'validation-false'
                                    : 'validation-true'
                            }
                        />
                        {formik.touched.test_title && formik.errors.test_title ? (
                            <p className="mt-1 text-xs font-medium text-red-500">
                                {formik.errors.test_title}
                            </p>
                        ) : null}
                    </div>
                    <div className='grid grid-cols-2 space-x-2'>
                        <div>
                            <label className="text-gray-700 text-sm" >
                                Time per question millisecond
                            </label>
                            <input
                                id="time_per_question"
                                type="number"
                                name='time_per_question'
                                value={formik.values.time_per_question}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className={
                                    formik.touched.time_per_question && formik.errors.time_per_question
                                        ? 'validation-false'
                                        : 'validation-true'
                                }
                            />
                            {formik.touched.time_per_question && formik.errors.time_per_question ? (
                                <p className="mt-1 text-xs font-medium text-red-500">
                                    {formik.errors.time_per_question}
                                </p>
                            ) : null}
                        </div>
                        <div>
                            <label className="text-gray-700 text-sm" >
                                Pass Percentage
                            </label>
                            <input
                                id="pass_percentage"
                                type="number"
                                name='pass_percentage'
                                value={formik.values.pass_percentage}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className={
                                    formik.touched.pass_percentage && formik.errors.pass_percentage
                                        ? 'validation-false'
                                        : 'validation-true'
                                }
                            />
                            {formik.touched.pass_percentage && formik.errors.pass_percentage ? (
                                <p className="mt-1 text-xs font-medium text-red-500">
                                    {formik.errors.pass_percentage}
                                </p>
                            ) : null}
                        </div>
                    </div>





                </div>
                <div className=' col-span-2 p-5'>
                    <div>
                        <label className="block text-sm text-gray-500">Test description </label>
                        <textarea
                            name='description' placeholder="Add a description about this test."
                            id="description"
                            value={formik.values.description}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className={
                                formik.touched.description && formik.errors.description
                                    ? 'validation-false'
                                    : 'validation-true'
                            }
                        ></textarea>
                        {formik.touched.description && formik.errors.description ? (
                            <p className="mt-1 text-xs font-medium text-red-500">
                                {formik.errors.description}
                            </p>
                        ) : null}
                    </div>
                    <div>
                        <label className="block text-base text-gray-500 py-3">Add instructions </label>
                        <button onClick={() => { setShowModalOne(true) }} type='button' className='pb-2 text-green-700 font-bold'>
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span className="ml-1">Add</span>
                            </div>
                        </button>
                        <ol className="list-decimal text-xm space-y-2">
                            {instructions.length > 0 ? (
                                instructions.map((data, index) => (
                                    <div className='flex justify-between'>
                                        <li key={index}>{data}</li>
                                        <button type='button' onClick={() => handleRemove(index)} className='text-red-400'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>

                                        </button>
                                    </div>

                                ))
                            ) : (
                                <p>You can add instructions here</p>
                            )}
                        </ol>
                        {showModalOne && <AddInstructions onClose={() => setShowModalOne(false)} addData={addData} />}
                    </div>

                    <div>
                        <label className="block text-base text-gray-500 py-3">Add Questions </label>
                        <button onClick={() => { setShowModalTwo(true) }} type='button' className='pb-2 text-green-700 font-bold'>
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span className="ml-1">Add</span>
                            </div>
                        </button>
                        <ol className="list-decimal text-xm space-y-2">
                            {questions.length > 0 ? (
                                questions.map((data, index) => (
                                    <div key={index} className='pt-4'>
                                        <div className='flex justify-between'>
                                            <li >{data.question}</li>
                                            <button type='button' onClick={() => setShowModalDelete(true)} className='text-red-400'>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>

                                            </button>
                                        </div>
                                        {showModalDelete && <Delete onClose={() => setShowModalDelete(false)} handleRemoveQuestion={handleRemoveQuestion} index={index} />}
                                        <div className='space-x-4 text-sm text-gray-700'>
                                            <span className=''>Option A : {data.optionA}</span>   <span>Option B : {data.optionA}</span> <span>Option C : {data.optionC}</span>   <span>Option D : {data.optionD}</span>
                                        </div >
                                        <div className='text-sm text-gray-700'>Correct Answer: {data.answer}</div>
                                    </div>
                                ))
                            ) : (
                                <p>You can add questions here</p>
                            )}
                        </ol>
                        {showModalTwo && <AddQuestions onClose={() => setShowModalTwo(false)} addQuestion={addQuestion} />}
                    </div>
                </div>
                {error && (
                    <p className='text-red-500'>
                        {error}
                    </p>
                )}
                <div className="flex justify-end mt-6">
                    <button type="submit" className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                        Submit
                    </button>
                </div>
            </form>

        </section>

    )
}

export default CreateTest