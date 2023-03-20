import React from 'react'

function CourseAndCertification() {
  return (
    <div className='bg-white rounded-md'>
      <h1>Courses & Certifications</h1>
      <hr className="h-px my-8 bg-gray-200 border-0" />


      <div className='grid grid-cols-12'>
        <div className=" col-span-1 flex justify-center ">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
          </svg>



        </div>
        <div className="details col-span-11 ">
          <h1>Web Development Certification</h1>
          <span>OpenAI Academy</span>


        </div>
      </div>



    </div>
  )
}

export default CourseAndCertification