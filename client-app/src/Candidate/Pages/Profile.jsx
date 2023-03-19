import React from 'react'
import { Footer, NavBar } from '../Components/index'

function Profile() {
  return (
    <div className='bg-lightBlue'>
        <NavBar/>
        <div className='container w-4/5 m-5 mx-auto bg-red-200  grid grid-cols-1 md:grid-cols-12 gap-5'>
            <div className='bg-slate-400 h-96 md:col-span-4 '>


            </div>
            <div className='bg-green-400 h-96 md:col-span-8 '>

            </div>

        </div>
        <Footer/>
    </div>
  )
}

export default Profile