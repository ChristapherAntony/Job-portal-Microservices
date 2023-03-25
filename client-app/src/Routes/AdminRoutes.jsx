import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import { ApplicationDetails, Home, Candidates, Login, RecruiterApplication, Recruiters } from '../Admin/Pages/index';
import { NotFoundPage } from '../Recruiter/Pages';


function AdminRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='sigin' element={<Login />} />
            <Route path='candidates' element={<Candidates />} />
            <Route path='recruiters' element={<Recruiters />} />
            <Route path='recruiter-application' element={<RecruiterApplication />} />
            <Route path='application-details/:id' element={<ApplicationDetails />} />
            <Route path='*' element={<NotFoundPage />} />
        </Routes>
    );
}

export default AdminRoutes