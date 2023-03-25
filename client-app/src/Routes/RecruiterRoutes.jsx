

import { BrowserRouter, Routes, Route, } from 'react-router-dom';

import { HomePageRecruiter, JobPostPage, JobsAndResponsePage, NotFoundPage, QuickProfileRecruiter, SiginUpPageRecruiter, SignInPageRecruiter } from '../Recruiter/Pages/index';


function RecruiterRoutes() {
    return (
        <Routes>
            <Route path='/' element={<HomePageRecruiter />} />
            <Route path='signup' element={<SiginUpPageRecruiter />} />
            <Route path='signin' element={<SignInPageRecruiter />} />
            <Route path='quick-profile/:id' element={<QuickProfileRecruiter />} />
            <Route path='job-post' element={<JobPostPage />} />
            <Route path='jobs-and-response' element={<JobsAndResponsePage />} />
            <Route path='*' element={<NotFoundPage />} />
        </Routes>
    );
}

export default RecruiterRoutes


<Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>

</Route>