import React from 'react'

function SearchBox() {
    return (
        <>
            {/* component */}
            <div className="">
                <div className="container h-auto my-5 mx-auto flex justify-center items-center p-2 md:p-0">
                    <div className="border border-gray-300 p-2 grid grid-cols-1 gap-6 bg-white shadow-lg md:rounded-full">

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="grid grid-cols-2 gap-2  border-gray-200 pl-10  rounded">
                                <div className="flex    items-center p-2 ">
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
                                    <input
                                        type="text"
                                        placeholder="Job Title or keyword"
                                        className="bg-white max-w-full focus:outline-none text-gray-700"
                                    />
                                </div>
                                <div className="flex    items-center p-2 ">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                    </svg>

                                    <input
                                        type="text"
                                        placeholder="Location"
                                        className=" max-w-full focus:outline-none text-gray-700"
                                    />
                                </div>

                            </div>
                            <div className="flex justify-center">
                                <button className="p-2 border w-2/4 md:rounded-3xl bg-gray-800 text-white">
                                    Search
                                </button>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </>

    )
}

export default SearchBox