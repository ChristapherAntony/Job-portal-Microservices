
import React from 'react';
import Footer from '../Components/Footer';

import NavBar from '../Components/NavBar';
import {SignUpPic} from '../assets/images'

import SignUp from '../Components/SignUp/SignUp';

function SiginUpPageRecruiter() {
  return (
    <div className='bg-lightBlue' >
      <NavBar />
      <div className='md:w-3/5 py-8 m-20 mx-auto bg-white rounded-xl'>
        <div className='flex flex-col-reverse md:flex-row justify-between'>

          <div className="hidden md:block md:w-1/2 m-auto">
            <img  src={SignUpPic} alt="" />
          </div>

          <div className="md:w-1/2">
            <SignUp />
          </div>

        </div>


      </div>


      <Footer />

    </div>
  )
}

export default SiginUpPageRecruiter