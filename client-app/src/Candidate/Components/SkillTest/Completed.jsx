import React, { useEffect, useState } from 'react';
import background from './assets/index';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { errorTost, successTost } from '../modals/tost';
function Completed() {

    const navigate = useNavigate()

    const handleSubmit = () => {
        console.log(applicationId, 'id=====================');
        axios.post().then((response) => {

            navigate('/candidate')
        }).catch((err) => {
            console.log('catch');
            // errorTost()
        })

    }





    useEffect(() => {

    }, [])

    return (
        <main className="overflow-hidden">
            <div
                className="bg-cover bg-center md:h-screen py-10  md:p-20"
                style={{ backgroundImage: `url(${background})` }}
            >
                <div className="md:w-4/6 bg-white m-auto p-3 md:p-12  rounded-xl">


                    <div className='text-center' >
                        <h1  className='font-bold text-center py-4'>Assessment Test Completed</h1>
                        <p className='leading-relaxed text-sm'>Thank you for taking the time to complete our skill assessment test. Your submission has been received and will be reviewed shortly.
                            You can expect to hear back from us within one business day regarding your performance and whether you have passed to the next stage of the recruitment process.
                        </p>
                        <p className='text-sm'>If you have any concerns or questions, please do not hesitate to contact us at <span className='text-blue-600'>careerconnect@gmail.com</span> .</p>

                        <button onClick={() => navigate('/candidate')} type="button" class="text-white bg-gradient-to-r m-auto  from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-1 my-5 text-center  mr-2 mb-2">Back to home</button>
                    </div>

                </div>
            </div>
        </main>
    )
}

export default Completed
