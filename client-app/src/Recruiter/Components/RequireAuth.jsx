import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";


const RequireAuth = ({ allowedRoles }) => {
    const [user, setUser] = useState({})
    const [auth, setAuth] = useState({})
    const location = useLocation();
    useEffect(() => {
        axios
            .get('/api/v1/auth/current')
            .then((res) => {
                console.log(res.data);
                setAuth({
                    auth:res.user_name,
                    role:
                })
                setUser(res.data);

            })
            
    }, []);
    console.log(user,"koklk");

    return (




        user ?
        <Outlet />
        : <Navigate to="/recruiter/signin" state={{ from: location }} replace />

        // auth?.roles?.find(role => allowedRoles?.includes(role))
        //     ? <Outlet />
        //     : auth?.user
        //         ? <Navigate to="/unauthorized" state={{ from: location }} replace />
        //         : <Navigate to="/login" state={{ from: location }} replace />
    );
}

export default RequireAuth;