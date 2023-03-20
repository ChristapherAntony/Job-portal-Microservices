import React from 'react'

function About() {
  return (
    <div className="w-full max-w-sm px-4 py-3 bg-white rounded-md shadow-md ">

      <div>
        <h1 className="mt-2 text-lg font-semibold text-gray-800 ">
          About
        </h1>
        <p className="mt-2 text-sm pro-text ">
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
        <div className='grid grid-cols-4  container'>
          <span className=" bg-lightBlue col-span-1 font-medium rounded-full text-sm my-1 text-center ">
            Default
          </span>
          <span className=" bg-lightBlue col-span-1 font-medium rounded-full text-sm my-1 text-center ">
            Default
          </span>
          <span className=" bg-lightBlue col-span-1 font-medium rounded-full text-sm my-1 text-center ">
            Default
          </span>
          <span className=" bg-lightBlue col-span-1 font-medium rounded-full text-sm my-1 text-center ">
            Default
          </span>
          <span className=" bg-lightBlue col-span-1 font-medium rounded-full text-sm my-1 text-center ">
            Default
          </span>
          <span className=" bg-lightBlue col-span-1 font-medium rounded-full text-sm my-1 text-center ">
            Default
          </span>
        </div>





      </div>


    </div>


  )
}

export default About