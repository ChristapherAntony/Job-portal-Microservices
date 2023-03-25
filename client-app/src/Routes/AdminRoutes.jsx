import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import RequireAuth from '../Admin/Components/RequireAuth';
import { ApplicationDetails, Home, Candidates, Login, RecruiterApplication, Recruiters } from '../Admin/Pages/index';
import { NotFoundPage } from '../Recruiter/Pages';


function AdminRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Login />} />
            <Route element={<RequireAuth allowedRole={'admin'} />}>
                <Route path='home' element={<Home />} />
                <Route path='candidates' element={<Candidates />} />
                <Route path='recruiters' element={<Recruiters />} />
                <Route path='applications' element={<RecruiterApplication />} />
                <Route path='application/:id' element={<ApplicationDetails />} />
                <Route path='*' element={<NotFoundPage />} />
            </Route>
        </Routes>
    );
}

export default AdminRoutes