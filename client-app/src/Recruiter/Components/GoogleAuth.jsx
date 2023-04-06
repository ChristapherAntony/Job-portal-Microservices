import React, { useState } from 'react'
import axios from 'axios'
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import { googleSignIn } from '../../utils/Constants';
import Typography from '@mui/material/Typography';
import { useLocation, useNavigate } from 'react-router-dom';



function GoogleAuth() {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/recruiter";
    const [error, setError] = useState(null)


    const handleLoginSuccess = (credentialResponse) => {
        console.log('Login successful:');
        const token = credentialResponse.credential
        const body = {
            token: token,
            role: 'recruiter'
        }
        axios.post(googleSignIn, body).then((response) => {
            console.log(response);
            if (response.data.role == 'recruiter' && response.data.phone_number) {
                navigate(from, { replace: true }); // Navigate to home page or prv
            } else if (response.data.role == 'recruiter' && !response.data.phone_number) {
                navigate(`/recruiter/quick-profile/${response.data._id}?user_name=${response.data.user_name}&email=${response.data.email}&phone=${''}`);
            } else if (response.data.role == 'candidate' && response.data.phone_number){
                navigate('/candidate')
            }
                setError('Try again'); // Set the error state
            setTimeout(() => {
                setError(null);
            }, 8000);
        }).catch((err) => {
            console.log(err);
            setError('Something went wrong..'); // Set the error state
            setTimeout(() => {
                setError(null);
            }, 8000);
        })


    };

    const handleLoginFailure = (err) => {
        console.log('Login failed:', err);

    };
    return (
        <div>
            <GoogleOAuthProvider clientId="100181781575-1s4h77ken84jliac3ejc87a292amokfh.apps.googleusercontent.com">
                <GoogleLogin
                    onSuccess={handleLoginSuccess}
                    onError={handleLoginFailure}
                />
            </GoogleOAuthProvider>
            {error && (
                <Typography component="p" variant="subtitle1" color="error">
                    {error}
                </Typography>
            )}
        </div>
    )
}

export default GoogleAuth