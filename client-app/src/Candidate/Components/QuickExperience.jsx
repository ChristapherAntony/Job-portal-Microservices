import React from 'react'

function QuickExperience() {
  return (
    <section className="max-w-4xl p-6 mx-auto bg-white rounded-xl shadow-md m-10">
      <h2 className="text-lg font-semibold text-gray-700 capitalize">
        Add work experience
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
          <button style={{ cursor: 'pointer' }} onClick={() => navigate('/candidate/quick-experience')} className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
            Add
          </button>
        </div>
      </form>
    </section>
  )
}

export default QuickExperience