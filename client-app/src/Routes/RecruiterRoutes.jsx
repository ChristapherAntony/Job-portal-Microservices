

import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import Footer from '../Recruiter/Components/Footer';
import NavBar from '../Recruiter/Components/NavBar';
import RequireAuth from '../Recruiter/Components/RequireAuth';
import AddSkillTest from '../Recruiter/Pages/AddSkillTest';
import CandidateDetailsPage from '../Recruiter/Pages/CandidateDetailsPage';

import { HomePageRecruiter, JobPostPage, JobsAndResponsePage, NotFoundPage, QuickProfileRecruiter, SiginUpPageRecruiter, SignInPageRecruiter } from '../Recruiter/Pages/index';
import ViewJobApplication from '../Recruiter/Pages/ViewJobApplication';
import SkillTestsListPage from '../Recruiter/Pages/SkillTestsListPage';


function RecruiterRoutes() {
    return (
        <Routes>

            <Route path='signin' element={<SignInPageRecruiter />} />
            <Route path='signup' element={<SiginUpPageRecruiter />} />
            <Route path='quick-profile/:id' element={<QuickProfileRecruiter />} />

            <Route element={<RequireAuth allowedRole={'recruiter'} />}>
                <Route path='/' element={<HomePageRecruiter />} />
                <Route path='post-job' element={<JobPostPage />} />
                <Route path='jobs' element={<JobsAndResponsePage />} />
                <Route path='jobs/applications/:id' element={<ViewJobApplication />} />
                <Route path='jobs/applications/candidate/:id' element={<CandidateDetailsPage />} />


            </Route>
            <Route path='add-skill-test' element={<AddSkillTest />} />
            <Route path='skill-test' element={<SkillTestsListPage />} />

            <Route path='*' element={<NotFoundPage />} />
        </Routes>
    );
}

export default RecruiterRoutes


