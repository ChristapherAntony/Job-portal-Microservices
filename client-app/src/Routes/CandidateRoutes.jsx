
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import RequireAuth from '../Candidate/Components/RequireAuth';
import { HomePage, SignInPage, AddWorkExp, EmailVerfication, OtpVerify, SignUpPage, ProfileQuickUpdate, Profile, JobDetailsPage, JobFeedPage } from '../Candidate/Pages/index';
import { NotFoundPage } from '../Recruiter/Pages';
import MyJobsPage from '../Candidate/Pages/MyJobsPage';
import SkillTestPages from '../Candidate/Pages/SkillTestPages';
import TestInstructions from '../Candidate/Components/SkillTest/TestInstructions';
import SkillTestExamPage from '../Candidate/Pages/SkillTestExamPage';
import Completed from '../Candidate/Components/SkillTest/Completed';



function CandidateRoutes() {
  return (
    <Routes>

      <Route path='signup' element={<SignUpPage />} />
      <Route path='signin' element={<SignInPage />} />
      <Route path='email-verification' element={<EmailVerfication />} />
      <Route path='otp/:email' element={<OtpVerify />} />
      <Route path='quick-profile/:id' element={<ProfileQuickUpdate />} />
      <Route path='quick-experience/:id' element={<AddWorkExp />} />

      <Route path='jobfeed' element={<JobFeedPage />} />
      <Route path='job-details/:id' element={<JobDetailsPage />} />

      <Route element={<RequireAuth allowedRole={'candidate'} />} >
        <Route path='/' element={<HomePage />} />
      
        <Route path='profile' element={<Profile />} />
        <Route path='my-jobs' element={<MyJobsPage />} />

        <Route path='start-test/:applicationId' element={<SkillTestExamPage />} />
        <Route path='take-test/:applicationId' element={< SkillTestPages />} />
        <Route path='skill-test/completed/:applicationId' element={< Completed />} />

      </Route>


      <Route path='*' element={<NotFoundPage />} />

    </Routes>
  );
}

export default CandidateRoutes