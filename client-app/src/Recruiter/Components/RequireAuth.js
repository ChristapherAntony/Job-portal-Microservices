import axios from "axios";
import { useState } from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";


const RequireAuth = ({ allowedRoles }) => {
    const [user,setUser]=useState({})
    
    const location = useLocation();
    useEffect(() => {
        axios
            .get('/api/v1/auth/current')
            .then((res) => {
                setUser(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    console.log(user);

    return (


        <Outlet />
        
        // auth?.roles?.find(role => allowedRoles?.includes(role))
        //     ? <Outlet />
        //     : auth?.user
        //         ? <Navigate to="/unauthorized" state={{ from: location }} replace />
        //         : <Navigate to="/login" state={{ from: location }} replace />
    );
}

export default RequireAuth;