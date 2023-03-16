
import React from 'react';
import Footer from '../../Components/Footer/Footer';

import NavBar from '../../Components/NavBar/NavBar';
import SignInImage from '../../assets/images/SignInPage.jpg';
import './SignInPage.scss'
import SignUp from '../../Components/SignUp/SignUp';
import SignIn from '../../Components/SignIn/SignIn';

function SignInPage() {
  return (
    <div className='signup' >
      <NavBar />
      <div className='outerbox'>
        <div className='top'>

          <div className="left">
            <SignIn />
          </div>
          <div className="right">
            <img className='image' src={SignInImage} alt="" />

          </div>

        </div>

        {/* <div className='bottom'>

        </div> */}

      </div>


      <Footer />

    </div>
  )
}

export default SignInPage