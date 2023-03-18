import React from 'react'
import { heroImage } from '../../assets/images'

function Hero() {
    return (
        <div className="bg-white ">
            <div className="container md:px-24 py-5 mx-auto">
                <div className="items-center lg:flex">
                    <div className="w-full  lg:w-1/2  z-40 " >
                        <div className="px-5">
                            <h1 className="text-6xl font-extrabold  text-gray-800lg:text-4xl">
                                Get The <span className="text-blue-500 ">Right Job</span> <br />
                                You Deserve


                            </h1>
                            <p className="mt-3 text-gray-600 ">
                                1100 jobs listed here ! Your dream job is waiting...
                            </p>

                        </div>
                    </div>
                    <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2  ">
                        <img
                            className="w-full h-full lg:max-w-3xl"
                            src={heroImage}
                            alt="Catalogue-pana.svg"
                        />
                    </div>
                </div>
            </div>
        </div>




    )
}

export default Hero