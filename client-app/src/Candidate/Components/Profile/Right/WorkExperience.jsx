import React from 'react'

function WorkExperience() {
  return (
    <div className='bg-white rounded-md'>
      <h1>Work Experience</h1>
      <hr className="h-px my-8 bg-gray-200 border-0" />


      <div className='grid grid-cols-12'>
        <div className=" col-span-1 flex justify-center ">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
          </svg>

        </div>
        <div className="details col-span-11 ">
          <h1>Software developer</h1>
          <span>Google</span> <span>Bangalore</span>
          <p>01 Jan, 2022 to present</p>
          <p>Notice Period : Immediately available</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur ullam earum maiores similique, commodi quia quam, maxime amet minus facere numquam ratione modi quasi! Facilis ut aut illo et quas.</p>


        </div>
      </div>
      


    </div>
  )
}

export default WorkExperience