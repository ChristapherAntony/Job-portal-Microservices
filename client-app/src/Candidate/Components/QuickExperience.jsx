import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function QuickExperience() {
  const [currentStatus, setCurrentStatus] = useState(false)
  const navigate = useNavigate()

  // const addWorkExperience = (formData) => {
  //   axios.post('/api/work-experience', formData)
  //     .then(response => {
  //       console.log(response);
  //       navigate('/dashboard');
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    const body = {

      designation: formData.get('designation'),
      company_name: formData.get('company_name'),
      current_status: currentStatus,
      location: formData.get('location'),
      start_date: formData.get('start_date'),
      notice_period: formData.get('notice_period'),
      end_date: formData.get('end_date'),
      job_description: formData.get('job_description'),

    }



    console.log(body);
    // addWorkExperience(formData);

  };


  return (
    <section className="max-w-4xl p-6 mx-auto bg-white rounded-xl shadow-md m-10">
      <h2 className="text-lg font-semibold text-gray-700 capitalize">
        Add work experience
      </h2>
      <form onSubmit={handleSubmit}>


        <div className="grid grid-cols-1 gap-y-1 gap-x-5 mt-4 sm:grid-cols-2 p-5">
          <div>
            <label className="text-gray-700 text-sm" htmlFor="username">
              Designation
            </label>
            <input
              id="designation"
              type="text"
              name="designation"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
            />
          </div>
          <div>
            <label className="text-gray-700 text-sm" htmlFor="username">
              Company Name
            </label>
            <input
              id="company_name"
              name="company_name"
              type="text"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
            />
          </div>

          <div>
            <label className="text-gray-700 text-sm" htmlFor="username">
              Is this your current company?
            </label>
            <div className="flex">
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
                  Yes
                </label>
              </div>
              <div className="flex items-center mr-4">
                <input
                  id="inline-2-radio"
                  type="radio"
                  defaultValue=""
                  name="current_status"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500  focus:ring-2"
                  onClick={() => setCurrentStatus(false)}
                />
                <label
                  htmlFor="inline-2-radio"
                  className="ml-2 text-sm font-medium text-gray-900 "
                >
                  No
                </label>
              </div>

            </div>

          </div>

          <div>
            <label
              className="text-gray-700 text-sm"
              htmlFor="Location"
            >
              Location
            </label>
            <input
              id="location"
              name='location'
              type="location"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
            />
          </div>

          <div>
            <label
              htmlFor="startDate"
              className="block text-sm text-gray-500"
            >
              Start Date
            </label>
            <input
              type="date"
              name='start_date'
              placeholder="John Doe"
              className="block  mt-2 w-full placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
            />
          </div>
          {currentStatus ? (
            <div>
              <label
                htmlFor="countries"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Notice Period
              </label>
              <select
                id="countries"
                name='notice_period'
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              >
                <option selected="">Choose </option>
                <option value="Serving Notice Period">Serving Notice Period</option>
                <option value="Immediately available">Immediately available</option>
                <option value="15 Days">15 Days</option>
                <option value="30 days">30 days</option>
                <option value="45 days">45 days</option>
                <option value="Above 60 days">Above 60 days</option>
              </select>


            </div>
          ) : (
            <div>
              <label
                htmlFor="startDate"
                className="block text-sm text-gray-500"
              >
                End Date
              </label>
              <input
                type="date"
                name='end_date'
                placeholder="John Doe"
                className="block  mt-2 w-full placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
              />
            </div>
          )}



        </div>
        <div className=' col-span-2 p-5'>
          <label for="Description" className="block text-sm text-gray-500">Job Description</label>

          <textarea name='job_description' placeholder="Add you job and responsibilities" className="block  mt-2 w-full placeholder-gray-400/70rounded-lg border border-gray-200 bg-white px-4 h-32 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 "></textarea>

          <p className="mt-3 text-xs text-gray-400"> </p>
        </div>
        <div className="flex justify-end mt-6">
          <button type="submit" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
            Add
          </button>
        </div>
      </form>
      <button onClick={() => navigate('/candidate')} type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Next</button>

    </section>
  )
}

export default QuickExperience