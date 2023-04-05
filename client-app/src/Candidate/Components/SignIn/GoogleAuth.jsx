import React from 'react'

import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';


const handleLoginSuccess = (credentialResponse) => {
    console.log('Login successful:', credentialResponse.credential);
    

};

const handleLoginFailure = (err) => {
    console.log('Login failed:', err);
  
};

function GoogleAuth() {
    return (
        <div>
            <GoogleOAuthProvider clientId="100181781575-1s4h77ken84jliac3ejc87a292amokfh.apps.googleusercontent.com">
                <GoogleLogin
                    onSuccess={handleLoginSuccess}
                    onError={handleLoginFailure}
                />
            </GoogleOAuthProvider>
        </div>
    )
}

export default GoogleAuth