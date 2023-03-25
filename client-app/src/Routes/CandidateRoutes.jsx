
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import RequireAuth from '../Candidate/Components/RequireAuth';
import { HomePage, SignInPage, AddWorkExp, EmailVerfication, OtpVerify, SignUpPage, ProfileQuickUpdate, Profile } from '../Candidate/Pages/index';
import { NotFoundPage } from '../Recruiter/Pages';




function CandidateRoutes() {
  return (
    <Routes>

      <Route path='signup' element={<SignUpPage />} />
      <Route path='signin' element={<SignInPage />} />

      <Route element={<RequireAuth allowedRole={'candidate'} />} >
        <Route path='/' element={<HomePage />} />
        <Route path='quick-profile/:id' element={<ProfileQuickUpdate />} />
        <Route path='quick-experience/:id' element={<AddWorkExp />} />
        <Route path='email-verification' element={<EmailVerfication />} />
        <Route path='otp/:email' element={<OtpVerify />} />
        <Route path='profile/:id' element={<Profile />} />
      </Route>
      <Route path='*' element={<NotFoundPage />} />

    </Routes>
  );
}

export default CandidateRoutes