import React from 'react'

function QuickProfile() {
    return (
        <section className="max-w-4xl p-6 mx-auto bg-white rounded-xl shadow-md m-10">
            <h2 className="text-lg font-semibold text-gray-700 capitalize">
                Quickly Review and update your profile
            </h2>
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
                    <div className="flex items-center gap-x-2">
                        <img
                            className="object-cover w-16 h-16 rounded-lg"
                            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=faceare&facepad=3&w=688&h=688&q=100"
                            alt=""
                        />
                        <div>
                            <label for="image" className="block text-sm  text-gray-700">Profile Image</label>

                            <input type="file" className="block w-full px-3 py-2 mt-2 text-sm text-gray-600 bg-white border border-gray-200 rounded-lg file:bg-gray-200 file:text-gray-700 file:text-sm file:px-4 file:py-1 file:border-none file:rounded-full  placeholder-gray-400/70  focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 " />
                        </div>

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
                        <label
                            className="text-gray-700 text-sm"
                            htmlFor="emailAddress"
                        >
                            Email Address
                        </label>
                        <input
                            id="emailAddress"
                            type="email"
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                        />
                    </div>
                    <div>
                        <label for="image" className="block text-sm  text-gray-700">Upload CV</label>

                        <input type="file" className="block w-full px-3 py-2 mt-2 text-sm text-gray-600 bg-white border border-gray-200 rounded-lg file:bg-gray-200 file:text-gray-700 file:text-sm file:px-4 file:py-1 file:border-none file:rounded-full  placeholder-gray-400/70  focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 " />
                    </div>
                    <div className='' >
                        <label
                            className="text-gray-700 text-sm"
                            htmlFor="CV"
                        >
                            Add Skills
                        </label>
                        <input
                            id="skills"
                            type="text"
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                        />
                    </div>


                </div>
                <div className=' col-span-2 p-5'>
                    <label for="Description" className="block text-sm text-gray-500">Description</label>

                    <textarea placeholder="lorem..." className="block  mt-2 w-full placeholder-gray-400/70rounded-lg border border-gray-200 bg-white px-4 h-32 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 "></textarea>

                    <p className="mt-3 text-xs text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="flex justify-end mt-6">
                    <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                        Next
                    </button>
                </div>
            </form>
        </section>

    )
}

export default QuickProfile