import React from 'react'

function About() {
  return (
    <div className="w-full max-w-sm px-4 py-3 bg-white rounded-md shadow-md ">

      <div>
        <h1 className="mt-2 text-lg font-semibold text-gray-800 ">
          About
        </h1>
        <p className="mt-2 text-sm text-gray-600 ">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio eligendi
          similique exercitationem optio libero vitae accusamus cupiditate laborum
          eos.
        </p>
      </div>
      <hr />



      <div >
        <h1 className="mt-2 col-span-4 text-lg font-semibold text-gray-800 ">
          Skills
        </h1>

        <span className=" bg-lightBlue hover:bg-blue-800 focus:outline-none focus:ring-4 border-col focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-1 text-center ">
          Default
        </span>




      </div>


    </div>


  )
}

export default About