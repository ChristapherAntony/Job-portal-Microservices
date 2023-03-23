// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useLocation, Navigate, Outlet } from "react-router-dom";

// const RequireAuth = (allowedRole) => {
//     const [user, setUser] = useState({});

//     const location = useLocation();

//     useEffect(() => {
//         axios
//             .get('/api/v1/auth/current')
//             .then((res) => {
//                 setUser(res.data);
//             })
//             .catch((err) => {
//                 console.log(err);
//             });
//     }, []);

//     const isAuthorized = user?.role && user?.role==allowedRole;

//     if (isAuthorized) {
//         return <Outlet /> ;
//     } else if (user?.role == 'candidate') {
//         return (
//             <Navigate to="/candidate/signin" state={{ from: location }} replace />
//         );
//     } else if (user.role == 'recruiter') {
//         return (
//             <Navigate to="/recruiter/signin" state={{ from: location }} replace />
//         );
//     } else if (user.role == 'admin') {
//         return (
//             <Navigate to="/admin" state={{ from: location }} replace />
//         );
//     } else {
//         return (
//             <Navigate to="/" />
//         );
//     }
// };

// export default RequireAuth;
