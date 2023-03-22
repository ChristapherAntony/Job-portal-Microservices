import React from 'react';
import Footer from '../Components/Footer';
import NavBar from '../Components/NavBar';
import SignIn from '../Components/SignIn'
import { SignInPic } from '../assets/images';

function SignInPageRecruiter() {
  return (
    <div className='bg-lightBlue'>
      <NavBar />
      <div className="md:w-3/5 py-8 m-20 mx-auto bg-white rounded-xl">
        <div className="flex flex-col-reverse md:flex-row justify-between">
          
          <div className="md:w-1/2">
            <SignIn />
          </div>
          <div className="hidden md:block md:w-1/2">
            <img src={SignInPic} alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default SignInPageRecruiter;
