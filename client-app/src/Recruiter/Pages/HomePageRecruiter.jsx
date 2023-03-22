import React, { useEffect, useState } from 'react';
import Footer from '../Components/Footer';
import Home from '../Components/Home/Home';
import NavBar from '../Components/NavBar';
import NotVerified from '../Components/NotVerified';
import { useNavigate } from 'react-router-dom';
import { getRecruiterProfile } from '../../utils/Constants';
import axios from 'axios';

function HomePageRecruiter() {
  const navigate = useNavigate();
  const [is_verified, setIs_verified] = useState(false)
  useEffect(() => {
     axios.get(getRecruiterProfile).then(res => {
      setIs_verified(res.data.is_verified)
    }).catch(err => {
      console.log(err.response.data.errors[0].msg);

    })
  }, [setIs_verified]);

  return (
    <div className='bg-lightBlue'>
      <NavBar />
      {is_verified ? <Home /> : <NotVerified />}
      <Footer />
    </div>
  );
}

export default HomePageRecruiter;
