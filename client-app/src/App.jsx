import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'
import {ApplicationDetails,Home,Candidates,Login,RecruiterApplication,Recruiters} from './Admin/Pages/index'
import AddWorkExp from './Candidate/Pages/AddWorkExp';
import EmailVerfication from './Candidate/Pages/EmailVerfication/EmailVerfication';
import {LandingPage ,HomePage,SignInPage,SignUpPage, ProfileQuickUpdate} from './Candidate/Pages/index';
import OtpVerify from './Candidate/Pages/OtpVerify/OtpVerify';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element={<LandingPage />} />

             {/* candidate routes  */}
            <Route path='candidate'>
              <Route index element={<HomePage/>}/>
              <Route path='signup' element={<SignUpPage/>}/>
              <Route path='signin' element={<SignInPage/>}/>
              <Route path='quick-profile' element={<ProfileQuickUpdate/>}/>
              <Route path='quick-experience' element={<AddWorkExp/>}/>
              <Route path='email-verification' element={<EmailVerfication/>}/>
              <Route path='otp/:email' element={<OtpVerify/>}/>
            </Route>

            {/* admin routes  */}
            <Route path='admin'>
              <Route index element={<Login/>}/>
              <Route path='home' element={<Home />} />
              <Route path='candidates' element={<Candidates />} />
              <Route path='recruiters' element={< Recruiters/>} />
              <Route path='applications' element={<RecruiterApplication />} />
              <Route path='application/:id' element={<ApplicationDetails />} />
            </Route >

            {/* recruiter routes  */}
            <Route path='recruiter'>
              
            </Route >


          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
