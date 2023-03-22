import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'
import { ApplicationDetails, Home, Candidates, Login, RecruiterApplication, Recruiters } from './Admin/Pages/index'
import AddWorkExp from './Candidate/Pages/AddWorkExp';
import EmailVerfication from './Candidate/Pages/EmailVerfication/EmailVerfication';
import { LandingPage, HomePage, SignInPage, SignUpPage, ProfileQuickUpdate, Profile } from './Candidate/Pages/index';
import OtpVerify from './Candidate/Pages/OtpVerify/OtpVerify';
import NotFoundPage from './Recruiter/Pages/404Page';

import HomePageRecruiter from './Recruiter/Pages/HomePageRecruiter';
import JobPostPage from './Recruiter/Pages/JobPostPage';
import QuickProfileRecruiter from './Recruiter/Pages/QuickProfileRecruiter';
import SiginUpPageRecruiter from './Recruiter/Pages/SiginUpPageRecruiter';
import SignInPageRecruiter from './Recruiter/Pages/SignInPageRecruiter';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element={<LandingPage />} />

            {/* candidate routes  */}
            <Route path='candidate'>
              <Route index element={<HomePage />} />
              <Route path='signup' element={<SignUpPage />} />
              <Route path='signin' element={<SignInPage />} />
              <Route path='quick-profile/:id' element={<ProfileQuickUpdate />} />
              <Route path='quick-experience/:id' element={<AddWorkExp />} />
              <Route path='email-verification' element={<EmailVerfication />} />
              <Route path='otp/:email' element={<OtpVerify />} />
              <Route path='profile/:id' element={<Profile />} />
            </Route>

            {/* admin routes  */}
            <Route path='admin'>
              <Route index element={<Login />} />
              <Route path='home' element={<Home />} />
              <Route path='candidates' element={<Candidates />} />
              <Route path='recruiters' element={< Recruiters />} />
              <Route path='applications' element={<RecruiterApplication />} />
              <Route path='application/:id' element={<ApplicationDetails />} />


            </Route >

            {/* recruiter routes  */}
            <Route path='recruiter'>
              <Route index element={<HomePageRecruiter />} />
              <Route path='signup' element={<SiginUpPageRecruiter />} />
              <Route path='signin' element={<SignInPageRecruiter />} />
              <Route path='quick-profile/:id' element={<QuickProfileRecruiter />} />
              <Route path='post-job' element={<JobPostPage />} />


            </Route >

            <Route path='*' element={<NotFoundPage />}></Route>
          </Route>

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
