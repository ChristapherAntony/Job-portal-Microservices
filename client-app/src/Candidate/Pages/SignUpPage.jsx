
import React from 'react';
import Footer from '../Components/Footer/Footer';

import NavBar from '../Components/NavBar/NavBar';
import signUpImg from '../assets/images/signup.jpg';

import SignUp from '../Components/SignUp/SignUp';

function SignUpPage() {
  return (
    <div className='bg-lightBlue' >
      <NavBar />
      <div className='md:w-3/5 py-8 m-20 mx-auto bg-white rounded-xl'>
        <div className='flex flex-col-reverse md:flex-row justify-between'>

          <div className="hidden md:block md:w-1/2 m-auto">
            <img  src={signUpImg} alt="" />
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

export default SignUpPage