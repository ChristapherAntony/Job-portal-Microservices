import React, { useState } from 'react'
import axios from 'axios'
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import { googleSignIn } from '../../../utils/Constants';
import Typography from '@mui/material/Typography';



function GoogleAuth() {
    const [error, setError] = useState(null)


    const handleLoginSuccess = (credentialResponse) => {
        console.log('Login successful:');
        const token = credentialResponse.credential
       
        axios.post(googleSignIn, {token}).then((response) => {
            console.log(response);
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