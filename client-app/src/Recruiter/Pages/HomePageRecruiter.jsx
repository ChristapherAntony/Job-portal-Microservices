import React, { useEffect } from 'react';
import Footer from '../Components/Footer';
import Home from '../Components/Home/Home';
import NavBar from '../Components/NavBar';
import NotVerified from '../Components/NotVerified';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function HomePageRecruiter() {
  const navigate = useNavigate();
  const profile = useSelector((state) => state.recruiterprofile);

  useEffect(() => {
    // if (!profile.user_name) {
    //   navigate('/recruiter/signin');
    // }
  }, [profile, navigate]);

  return (
    <div className='bg-lightBlue'>
      <NavBar />
      {profile?.is_verified ? <Home /> : <NotVerified />}
      <Footer />
    </div>
  );
}

export default HomePageRecruiter;
