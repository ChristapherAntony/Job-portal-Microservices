import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Unauthorized from './Admin/Components/Unauthorized';
import { NotFoundPage } from './Recruiter/Pages';
import BoltLoader from './Admin/Components/BoltLoader/Boltloader';

const CandidateRoutes = lazy(() => import('./Routes/CandidateRoutes'));
const AdminRoutes = lazy(() => import('./Routes/AdminRoutes'));
const RecruiterRoutes = lazy(() => import('./Routes/RecruiterRoutes'));
const LandingPage = lazy(() => import('./Candidate/Pages/index').then(module => ({ default: module.LandingPage })));

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Suspense fallback={<BoltLoader />}><LandingPage /></Suspense>} />

          <Route path="/unauthorized" element={<Unauthorized />} />

          <Route path='/candidate/*' element={<Suspense fallback={<BoltLoader />}><CandidateRoutes /></Suspense>} />

          <Route path='/admin/*' element={<Suspense fallback={<BoltLoader />}><AdminRoutes /></Suspense>} />

          <Route path='/recruiter/*' element={<Suspense fallback={<BoltLoader />}><RecruiterRoutes /></Suspense>} />

          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
