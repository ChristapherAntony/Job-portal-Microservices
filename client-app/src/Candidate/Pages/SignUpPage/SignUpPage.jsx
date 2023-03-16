
import React from 'react';
import Footer from '../../Components/Footer/Footer';

import NavBar from '../../Components/NavBar/NavBar';
import signUpImg from '../../assets/images/signup.jpg';
import './SignUpPage.scss'
import SignUp from '../../Components/SignUp/SignUp';

function SignUpPage() {
  return (
    <div className='signup' >
      <NavBar />
      <div className='outerbox'>
        <div className='top'>

          <div className="left">
            <img  className='image' src={signUpImg} alt="" />
          </div>
          <div className="right">
            <SignUp />
          </div>

        </div>

        {/* <div className='bottom'>

        </div> */}

      </div>


      <Footer />

    </div>
  )
}

export default SignUpPage