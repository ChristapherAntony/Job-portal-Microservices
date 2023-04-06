import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { currentUser } from "../../utils/Constants";

const RequireAuth = ({ allowedRole }) => {
    const [auth, setAuth] = useState(false);
    const [error, setError] = useState(null);
    const location = useLocation();
    
    useEffect(() => {
        axios
            .get(currentUser)
            .then((res) => {
                if (res.data.role === allowedRole) {
                    setAuth(true);
                } else {
                    setError("Unauthorized");
                }
            })
            .catch((err) => {
                setError(err.message);
            });
    }, [allowedRole]);
    

    if (auth) {
        return <Outlet />;
    } else if (error === "Unauthorized") {
        return <Navigate to="/unauthorized" state={{ from: location }} replace  />;
    } else if (error) {
        return <Navigate to="/candidate/signin" state={{ from: location }} replace  />;
    } else {
        return null; // or some kind of loading indicator
    }
};

export default RequireAuth;
