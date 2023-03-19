import React from 'react'

function Personal() {
    return (
        <div className='bg-white rounded-md'>
            <h1>Personal Information</h1>
            <hr className="h-px my-8 bg-gray-200 border-0" />
            <div>
                <form>


                    <div className="grid grid-cols-1 gap-y-1 gap-x-5 mt-4 sm:grid-cols-2 p-5">
                        <div>
                            <label className="text-gray-700 text-sm" htmlFor="username">
                                Full name
                            </label>
                            <input
                                id="username"
                                type="text"
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="startDate"
                                className="block text-sm text-gray-500"
                            >
                                Date of Birth
                            </label>
                            <input
                                type="date"
                                name='start_date'
                                placeholder="John Doe"
                                className="block  mt-2 w-full placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                            />
                        </div>
                        <div>
                            <label className="text-gray-700 text-sm" htmlFor="username">
                                Email Address
                            </label>
                            <input
                                id="username"
                                type="text"
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                            />
                        </div>

                        <div>
                            <label className="text-gray-700 text-sm" htmlFor="username">
                                Phone Number
                            </label>
                            <input
                                id="phon"
                                type="text"
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                            />
                        </div>
                        <div>
                            <label className="text-gray-700 text-sm" htmlFor="username">
                                Gender
                            </label>
                            <div className="flex mt-2">
                                <div className="flex items-center mr-4">
                                    <input
                                        id="inline-radio"
                                        type="radio"
                                        defaultValue=""
                                        name="current_status"
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                                        onClick={() => setCurrentStatus(true)}
                                    />
                                    <label
                                        htmlFor="inline-radio"
                                        className="ml-2 text-sm font-medium text-gray-900"
                                    >
                                        Male
                                    </label>
                                </div>
                                <div className="flex items-center mr-4">
                                    <input
                                        id="inline-2-radio"
                                        type="radio"
                                        defaultValue=""
                                        name="current_status"
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500  focus:ring-2"

                                    />
                                    <label
                                        htmlFor="inline-2-radio"
                                        className="ml-2 text-sm font-medium text-gray-900 "
                                    >
                                        Female
                                    </label>
                                </div>
                                <div className="flex items-center mr-4">
                                    <input
                                        id="inline-2-radio"
                                        type="radio"
                                        defaultValue=""
                                        name="current_status"
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500  focus:ring-2"

                                    />
                                    <label
                                        htmlFor="inline-2-radio"
                                        className="ml-2 text-sm font-medium text-gray-900 "
                                    >
                                        Other
                                    </label>
                                </div>

                            </div>

                        </div>
                        <div>
                            <label
                                className="text-gray-700 text-sm"
                                htmlFor="emailAddress"
                            >
                                Location
                            </label>
                            <input
                                id="emailAddress"
                                type="email"
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                            />
                        </div>

                        <div className=' md:col-span-2 ' >

                            <label
                                className="text-gray-700 text-sm"
                                htmlFor="CV"
                            >
                                Address
                            </label>
                            <div className='grid gap-y-1 gap-x-5 grid-cols-1 md:grid-cols-2'>

                                <input
                                    id="skills"
                                    type="text"
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                                />
                                 <input
                                    id="skills"
                                    type="text"
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                                />
                                 <input
                                    id="skills"
                                    type="text"
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                                />
                                 <input
                                    id="skills"
                                    type="text"
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                                />
                                 <input
                                    id="skills"
                                    type="text"
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                                />
                                 <input
                                    id="skills"
                                    type="text"
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                                />


                            </div>





                        </div>




                    </div>

                </form>
            </div>
        </div>
    )
}

export default Personal