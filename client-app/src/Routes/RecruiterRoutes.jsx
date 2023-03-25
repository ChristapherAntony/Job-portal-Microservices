

import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import RequireAuth from '../Recruiter/Components/RequireAuth';

import { HomePageRecruiter, JobPostPage, JobsAndResponsePage, NotFoundPage, QuickProfileRecruiter, SiginUpPageRecruiter, SignInPageRecruiter } from '../Recruiter/Pages/index';


function RecruiterRoutes() {
    return (
        <Routes>
            <Route path='signin' element={<SignInPageRecruiter />} />
            <Route path='signup' element={<SiginUpPageRecruiter />} />

            <Route element={<RequireAuth allowedRoles={['recruiter']} />}>
                <Route path='/' element={<HomePageRecruiter />} />
                <Route path='quick-profile/:id' element={<QuickProfileRecruiter />} />
                <Route path='job-post' element={<JobPostPage />} />
                <Route path='jobs-and-response' element={<JobsAndResponsePage />} />
            </Route>

            <Route path='*' element={<NotFoundPage />} />
        </Routes>
    );
}

export default RecruiterRoutes


