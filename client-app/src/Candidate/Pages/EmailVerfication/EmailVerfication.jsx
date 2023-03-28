
import React, { useState } from 'react';
import NavBar from '../../Components/NavBar/NavBar';
import './EmailVerfication.scss'
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { emailVerify } from '../../../utils/Constants';

import axios from 'axios';

const theme = createTheme();

function EmailVerfication() {
    const navigate = useNavigate();
    const [error, setError] = useState(null)
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const email = data.get('email')
        setError(null); // clear any previous errors

        axios.post(emailVerify, { email }).then(res => {
            navigate(`/candidate/otp/${email}`); // Navigate to home page
        }).catch(err => {
            console.log(err.response.data.errors[0].msg);
            setError(err.response.data.errors[0].msg); // Set the error state
            setTimeout(() => {
                setError(null);
            }, 8000);
        })
        
    };
    return (
        <div className='signup' >
            <NavBar />
            <div className='outerbox m-auto'>
                <div className=''>
                    <ThemeProvider theme={theme}>
                        <Container component="main" maxWidth="xs">
                            <CssBaseline />
                            <Box
                                sx={{
                                    marginTop: 8,
                                    marginBottom: 8,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                }}
                            >

                                <Typography component="h1" variant="h5">
                                    Enter Your Registered email address
                                </Typography>
                                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email Address"
                                        name="email"
                                        autoComplete="email"
                                        autoFocus
                                    />


                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        sx={{ mt: 3, mb: 2 }}
                                    >
                                        Send Otp
                                    </Button>
                                    <Grid container>

                                        <Grid item style={{ cursor: 'pointer' }} onClick={() => navigate('/candidate/signup')}>
                                            <Link variant="body2">
                                                {"Don't have an account? Sign Up"}
                                            </Link>
                                        </Grid>
                                    </Grid>
                                    {error && (
                                        <Typography component="p" variant="subtitle1" color="error">
                                            {error}
                                        </Typography>
                                    )}
                                </Box>
                            </Box>

                        </Container>
                    </ThemeProvider>


                </div>



            </div>


            {/* <Footer /> */}

        </div>
    )
}

export default EmailVerfication




