import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route,  } from 'react-router-dom';
import Unauthorized from './Admin/Components/Unauthorized';
import { LandingPage } from './Candidate/Pages/index';
import JobDetailsPage from './Candidate/Pages/JobDetailsPage';
import JobFeedPage from './Candidate/Pages/JobFeed';
import JobFeed from './Candidate/Pages/JobFeed';
import { NotFoundPage } from './Recruiter/Pages';
import AdminRoutes from './Routes/AdminRoutes';
import CandidateRoutes from './Routes/CandidateRoutes';
import RecruiterRoutes from './Routes/RecruiterRoutes';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/jobfeed' element={<JobFeedPage />} />
            <Route path='/job-details' element={<JobDetailsPage />} />
            <Route path="/unauthorized" element={<Unauthorized />} />
            <Route path='/candidate/*' element={<CandidateRoutes />} />
            <Route path='/admin/*' element={<AdminRoutes />} />
            <Route path='/recruiter/*' element={<RecruiterRoutes />} />
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}
export default App