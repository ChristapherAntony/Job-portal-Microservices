import React, { useState } from 'react'
import CloseSVG from './Btn/CloseSVG'
import OpenSVG from './Btn/OpenSVG'

function FAQ() {
    const [openA, setOpenA] = useState(false)
    const [openB, setOpenB] = useState(false)
    const [openC, setOpenC] = useState(false)
    const [openD, setOpenD] = useState(false)
    const [openE, setOpenE] = useState(false)



    return (
        <section className="bg-white rounded-xl ">
            <div className="container max-w-4xl px-6 py-10 mx-auto">
                <h1 className="text-2xl font-semibold text-center text-gray-800 lg:text-3xl ">
                    Frequently asked questions
                </h1>
                <div className="mt-12 space-y-8">
                    <div className="border-2 border-gray-100 rounded-lg ">
                        <button
                            onClick={() => { setOpenA(!openA) }}
                            className="flex items-center justify-between w-full p-8">
                            <h1 className="font-semibold text-gray-700 ">
                                How i can apply for a job ?
                            </h1>
                            {openA ? <CloseSVG /> : <OpenSVG />}

                        </button>
                        <hr className="border-gray-200 " />
                        {openA &&
                            <p className="p-8 text-sm text-gray-500 ">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
                                eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum
                                laboriosam recusandae facere dolorum veniam quia pariatur obcaecati
                                illo ducimus?
                            </p>}

                    </div>


                    <div className="border-2 border-gray-100 rounded-lg ">
                        <button onClick={() => { setOpenB(!openB) }} className="flex items-center justify-between w-full p-8">
                            <h1 className="font-semibold text-gray-700 ">
                                Is the cost of the appoinment covered by private health insurance?
                            </h1>
                            {openB ? <CloseSVG /> : <OpenSVG />}
                        </button>
                        <hr className="border-gray-200 " />
                        {openB &&
                            <p className="p-8 text-sm text-gray-500 ">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
                                eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum
                                laboriosam recusandae facere dolorum veniam quia pariatur obcaecati
                                illo ducimus?
                            </p>}

                    </div>
                    <div className="border-2 border-gray-100 rounded-lg ">
                        <button onClick={() => { setOpenC(!openC) }} className="flex items-center justify-between w-full p-8">
                            <h1 className="font-semibold text-gray-700 ">
                                Do i need a referral?
                            </h1>
                            {openC ? <CloseSVG /> : <OpenSVG />}
                        </button>
                        {openC &&
                            <p className="p-8 text-sm text-gray-500 ">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
                                eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum
                                laboriosam recusandae facere dolorum veniam quia pariatur obcaecati
                                illo ducimus?
                            </p>}
                    </div>
                    <div className="border-2 border-gray-100 rounded-lg ">
                        <button onClick={() => { setOpenD(!openD) }} className="flex items-center justify-between w-full p-8">
                            <h1 className="font-semibold text-gray-700 ">
                                What are your opening house?
                            </h1>
                            {openD ? <CloseSVG /> : <OpenSVG />}
                        </button>
                        {openD &&
                            <p className="p-8 text-sm text-gray-500 ">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
                                eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum
                                laboriosam recusandae facere dolorum veniam quia pariatur obcaecati
                                illo ducimus?
                            </p>}
                    </div>
                    <div className="border-2 border-gray-100 rounded-lg ">
                        <button onClick={() => { setOpenE(!openE) }} className="flex items-center justify-between w-full p-8">
                            <h1 className="font-semibold text-gray-700 ">
                                What can i expect at my first consultation?
                            </h1>
                            {openE ? <CloseSVG /> : <OpenSVG />}
                        </button>
                        {openE &&
                            <p className="p-8 text-sm text-gray-500 ">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
                                eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum
                                laboriosam recusandae facere dolorum veniam quia pariatur obcaecati
                                illo ducimus?
                            </p>}
                    </div>
                </div>
            </div>




        </section>

    )
}

export default FAQ